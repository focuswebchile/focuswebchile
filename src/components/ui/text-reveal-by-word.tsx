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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileMedia = window.matchMedia("(max-width: 1023px)");

    const update = () => {
      setReducedMotion(motionMedia.matches);
      setIsMobile(mobileMedia.matches);
    };

    update();

    if (motionMedia.addEventListener) {
      motionMedia.addEventListener("change", update);
      mobileMedia.addEventListener("change", update);
    } else {
      motionMedia.addListener(update);
      mobileMedia.addListener(update);
    }

    return () => {
      if (motionMedia.removeEventListener) {
        motionMedia.removeEventListener("change", update);
        mobileMedia.removeEventListener("change", update);
      } else {
        motionMedia.removeListener(update);
        mobileMedia.removeListener(update);
      }
    };
  }, []);

  const useStaticMode = reducedMotion || isMobile;

  useEffect(() => {
    if (useStaticMode) return;
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
  }, [useStaticMode]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const normalizedText = text.replace(/\\n/g, "\n");
  const paragraphs = normalizedText.split(/\n{2,}/);
  const countWords = (value: string) => value.split(/\s+/).filter(Boolean).length;
  const totalWords = paragraphs.reduce((count, paragraph) => count + countWords(paragraph), 0);

  return (
    <div ref={sectionRef} className={cn("relative z-0 w-full min-h-[140vh]", className)}>
      <div
        ref={pinRef}
        className="mx-auto flex min-h-[80vh] w-full items-center justify-center px-0 py-10"
      >
        <div className="flex w-full flex-col items-center justify-center text-center">
          {paragraphs.map((paragraph, paragraphIndex) => {
            const lines = paragraph.split("\n");
            const paragraphStart = paragraphs
              .slice(0, paragraphIndex)
              .reduce((count, item) => count + countWords(item), 0);
            return useStaticMode ? (
              <p
                key={paragraphIndex}
                className={cn(
                  "mx-auto w-full text-center break-normal hyphens-none text-balance",
                  paragraphIndex > 0 && "mt-2 md:mt-3",
                  textClassName,
                )}
              >
                {lines.map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line}
                    {lineIndex < lines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            ) : (
              <p
                key={paragraphIndex}
                className={cn(
                  "mx-auto w-full text-center break-normal hyphens-none text-balance",
                  paragraphIndex > 0 && "mt-2 md:mt-3",
                  textClassName,
                )}
              >
                {lines.map((line, lineIndex) => (
                  <span key={lineIndex} className="inline-flex w-full flex-wrap justify-center gap-x-2">
                    {line.split(/\s+/).filter(Boolean).map((word, i) => {
                      const lineStart = lines
                        .slice(0, lineIndex)
                        .reduce((count, item) => count + countWords(item), 0);
                      const wordIndex = paragraphStart + lineStart + i;
                      const start = wordIndex / totalWords;
                      const end = (wordIndex + 1) / totalWords;
                      return (
                        <Word key={`${paragraphIndex}-${lineIndex}-${i}`} progress={scrollYProgress} range={[start, end]}>
                          {word}
                        </Word>
                      );
                    })}
                    {lineIndex < lines.length - 1 ? <span className="w-full" /> : null}
                  </span>
                ))}
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
