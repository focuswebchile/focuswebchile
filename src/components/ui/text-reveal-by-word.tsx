"use client";

import { type FC, type ReactNode, useEffect, useRef, useState } from "react";
import { motion, type MotionValue, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
  textClassName?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({ text, className, textClassName }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();

    if (media.addEventListener) {
      media.addEventListener("change", update);
    } else {
      media.addListener(update);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", update);
      } else {
        media.removeListener(update);
      }
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    if (!sectionRef.current || !pinRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top+=120",
        end: "bottom center",
        pin: pinRef.current,
        pinSpacing: true,
        anticipatePin: 0,
        pinReparent: false,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const paragraphs = text.split(/\n{2,}/);
  const totalWords = paragraphs.reduce((count, paragraph) => count + paragraph.split(" ").length, 0);
  let globalWordIndex = 0;

  return (
    <div ref={sectionRef} className={cn("relative z-0 w-full min-h-[140vh]", className)}>
      <div
        ref={pinRef}
        className="mx-auto flex min-h-[80vh] w-full items-center justify-center px-0 py-10"
      >
        <div className="flex w-full flex-col items-center justify-center text-center">
          {paragraphs.map((paragraph, paragraphIndex) => {
            const words = paragraph.split(" ");
            return reducedMotion ? (
              <p
                key={paragraphIndex}
                className={cn(
                  "mx-auto w-full max-w-[48ch] text-center text-balance text-4xl font-semibold leading-[1.1] text-foreground sm:text-5xl md:text-6xl lg:text-[64px]",
                  textClassName,
                )}
              >
                {paragraph}
              </p>
            ) : (
              <p
                key={paragraphIndex}
                className={cn(
                  "mx-auto w-full max-w-[48ch] text-center text-balance text-4xl font-semibold leading-[1.1] text-foreground/30 sm:text-5xl md:text-6xl lg:text-[64px]",
                  textClassName,
                )}
              >
                {words.map((word, i) => {
                  const start = globalWordIndex / totalWords;
                  const end = (globalWordIndex + 1) / totalWords;
                  globalWordIndex += 1;
                  return (
                    <Word key={`${paragraphIndex}-${i}`} progress={scrollYProgress} range={[start, end]}>
                      {word}
                    </Word>
                  );
                })}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-2.5">
      <span className="absolute text-muted-foreground/30">{children}</span>
      <motion.span style={{ opacity }} className="text-foreground">
        {children}
      </motion.span>
    </span>
  );
};

export { TextRevealByWord };
