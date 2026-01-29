"use client"

import Image from "next/image"

export function SobreMiHero() {
  const marqueeText = "Hola, soy Felipe · Focus Web ·"
  const imageSrc = "/Imagen-hero.webp"

  return (
    <section className="w-full px-6 md:px-10 pt-20 md:pt-24 pb-12 md:pb-16">
      <div className="mx-auto w-full rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-50 via-[#22c55eab] to-sky-50 md:min-h-[70vh] lg:min-h-[85vh]">
        <div className="relative h-full w-full overflow-hidden">
          <div className="relative w-full min-h-[70vh] sm:min-h-[75vh] md:aspect-auto md:min-h-[70vh] lg:min-h-[85vh]">
            <Image
              src={imageSrc}
              alt="Felipe Ibar"
              fill
              priority
              className="object-cover object-top md:object-cover lg:object-contain lg:object-top"
              sizes="(min-width: 1280px) 1100px, (min-width: 1024px) 90vw, 100vw"
            />
          </div>

          <div className="absolute inset-0 flex items-end justify-center md:items-center md:justify-center">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/35 via-black/10 to-transparent md:hidden" />
            <div className="relative w-full overflow-hidden">
              <p className="sr-only">{marqueeText}</p>
              <div className="flex w-full overflow-hidden">
                <div className="flex w-max items-center gap-8 whitespace-nowrap animate-[marquee_22s_linear_infinite]" aria-hidden="true">
                  <span className="text-[clamp(2.5rem,12vw,6rem)] md:text-[clamp(3rem,12vw,8rem)] lg:text-[clamp(4.5rem,12vw,10rem)] font-extrabold lg:font-black tracking-tight lg:leading-none text-white lg:text-white lg:uppercase">
                    {marqueeText}
                  </span>
                  <span className="text-[clamp(2.5rem,12vw,6rem)] md:text-[clamp(3rem,12vw,8rem)] lg:text-[clamp(4.5rem,12vw,10rem)] font-extrabold lg:font-black tracking-tight lg:leading-none text-white lg:text-white lg:uppercase">
                    {marqueeText}
                  </span>
                </div>
                <div className="flex w-max items-center gap-8 whitespace-nowrap animate-[marquee_22s_linear_infinite]" aria-hidden="true">
                  <span className="text-[clamp(2.5rem,12vw,6rem)] md:text-[clamp(3rem,12vw,8rem)] lg:text-[clamp(4.5rem,12vw,10rem)] font-extrabold lg:font-black tracking-tight lg:leading-none text-white lg:text-white lg:uppercase">
                    {marqueeText}
                  </span>
                  <span className="text-[clamp(2.5rem,12vw,6rem)] md:text-[clamp(3rem,12vw,8rem)] lg:text-[clamp(4.5rem,12vw,10rem)] font-extrabold lg:font-black tracking-tight lg:leading-none text-white lg:text-white lg:uppercase">
                    {marqueeText}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
