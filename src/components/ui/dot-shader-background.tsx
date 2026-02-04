'use client'
/* eslint-disable react-hooks/immutability */

import { useMemo, useEffect } from 'react'
import { Canvas, type ThreeEvent, useFrame, useThree } from '@react-three/fiber'
import { shaderMaterial, useTrailTexture } from '@react-three/drei'
import { useTheme } from 'next-themes'
import * as THREE from 'three'

const DotMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new THREE.Vector2(),
    dotColor: new THREE.Color('#22C55E'),
    hoverColor: new THREE.Color('#3B82F6'),
    bgColor: new THREE.Color('#ffffff'),
    mouseTrail: null,
    render: 0,
    rotation: 0,
    gridSize: 50,
    dotOpacity: 0.05,
  },
  /* glsl */ `
    void main() {
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  /* glsl */ `
    uniform float time;
    uniform int render;
    uniform vec2 resolution;
    uniform vec3 dotColor;
    uniform vec3 bgColor;
    uniform vec3 hoverColor;
    uniform sampler2D mouseTrail;
    uniform float rotation;
    uniform float gridSize;
    uniform float dotOpacity;

    vec2 rotate(vec2 uv, float angle) {
        float s = sin(angle);
        float c = cos(angle);
        mat2 rotationMatrix = mat2(c, -s, s, c);
        return rotationMatrix * (uv - 0.5) + 0.5;
    }

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    float sdfCircle(vec2 p, float r) {
        return length(p - 0.5) - r;
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);

      vec2 rotatedUv = rotate(uv, rotation);

      vec2 gridUv = fract(rotatedUv * gridSize);
      vec2 gridUvCenterInScreenCoords = rotate((floor(rotatedUv * gridSize) + 0.5) / gridSize, -rotation);

      float baseDot = sdfCircle(gridUv, 0.25);

      float screenMask = smoothstep(0.0, 1.0, 1.0 - uv.y);
      vec2 centerDisplace = vec2(0.7, 1.1);
      float circleMaskCenter = length(uv - centerDisplace);
      float circleMaskFromCenter = smoothstep(0.5, 1.0, circleMaskCenter);
      
      float combinedMask = screenMask * circleMaskFromCenter;
      float circleAnimatedMask = sin(time * 2.0 + circleMaskCenter * 10.0);

      float mouseInfluence = texture2D(mouseTrail, gridUvCenterInScreenCoords).r;
      
      float scaleInfluence = max(mouseInfluence * 0.5, circleAnimatedMask * 0.3);

      float dotSize = min(pow(circleMaskCenter, 2.0) * 0.3, 0.3);

      float sdfDot = sdfCircle(gridUv, dotSize * (1.0 + scaleInfluence * 0.5));

      float smoothDot = smoothstep(0.05, 0.0, sdfDot);

      float opacityInfluence = max(mouseInfluence * 50.0, circleAnimatedMask * 0.5);

      float hoverMix = clamp(mouseInfluence * 8.0, 0.0, 1.0);
      vec3 activeColor = mix(dotColor, hoverColor, hoverMix);
      float alphaMask = smoothDot * combinedMask * dotOpacity * (1.0 + opacityInfluence);

      gl_FragColor = vec4(activeColor, alphaMask);

      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }
  `,
)

function Scene() {
  const size = useThree((s) => s.size)
  const viewport = useThree((s) => s.viewport)
  const { theme } = useTheme()
  const isMobile = useMemo(() => size.width < 768, [size.width])

  const rotation = 0
  const gridSize = 100

  const getThemeColors = () => {
    switch (theme) {
      case 'dark':
        return {
          dotColor: '#6FE3B8',
          hoverColor: '#7CB7FF',
          bgColor: '#ffffff',
          dotOpacity: 0.04,
        }
      case 'light':
        return {
          dotColor: '#6FE3B8',
          hoverColor: '#7CB7FF',
          bgColor: '#ffffff',
          dotOpacity: 0.04,
        }
      default:
        return {
          dotColor: '#6FE3B8',
          hoverColor: '#7CB7FF',
          bgColor: '#ffffff',
          dotOpacity: 0.04,
        }
    }
  }

  const themeColors = getThemeColors()

  const [trailTexture, onMove] = useTrailTexture({
    size: 512,
    radius: 0.18,
    maxAge: 600,
    interpolate: 0.8,
    ease: function easeInOutCirc(x) {
      return x < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2
    },
  })

  const dotMaterial = useMemo(() => {
    return new DotMaterial()
  }, [])

  useEffect(() => {
    dotMaterial.uniforms.dotColor.value.setHex(themeColors.dotColor.replace('#', '0x'))
    dotMaterial.uniforms.hoverColor.value.setHex(themeColors.hoverColor.replace('#', '0x'))
    dotMaterial.uniforms.bgColor.value.setHex(themeColors.bgColor.replace('#', '0x'))
    dotMaterial.uniforms.dotOpacity.value = themeColors.dotOpacity
  }, [theme, dotMaterial, themeColors])

  useFrame((state) => {
    dotMaterial.uniforms.time.value = state.clock.elapsedTime
    if (isMobile && size.width > 0 && size.height > 0) {
      const t = state.clock.elapsedTime
      const x = (Math.sin(t * 0.6) * 0.25 + 0.5) * size.width
      const y = (Math.cos(t * 0.5) * 0.25 + 0.5) * size.height
      onMove?.({
        uv: {
          x: x / size.width,
          y: 1 - y / size.height,
        },
      } as unknown as ThreeEvent<PointerEvent>)
    }
  })

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    onMove?.(e)
  }

  const scale = Math.max(viewport.width, viewport.height) / 2

  return (
    <mesh scale={[scale, scale, 1]} onPointerMove={handlePointerMove}>
      <planeGeometry args={[2, 2]} />
      <primitive
        object={dotMaterial}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        rotation={rotation}
        gridSize={gridSize}
        mouseTrail={trailTexture}
        render={0}
      />
    </mesh>
  )
}

export const DotScreenShader = () => {
  return (
    <Canvas
      className="h-full w-full"
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
        outputColorSpace: THREE.SRGBColorSpace,
        toneMapping: THREE.NoToneMapping,
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0)
      }}
    >
      <Scene />
    </Canvas>
  )
}
