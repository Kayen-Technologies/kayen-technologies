"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "“The team was easy to work with from start to finish. They listened, understood the problem, and delivered something that genuinely works for our business.”",
      author: "Hannah Texch, CEO, Thryve&Co"
    },
    {
      quote: "“The team was easy to work with from start to finish. They listened, understood the problem, and delivered something that genuinely works for our business.”",
      author: "Hannah Texch, CEO, Thryve&Co"
    },
    {
      quote: "“The team was easy to work with from start to finish. They listened, understood the problem, and delivered something that genuinely works for our business.”",
      author: "Hannah Texch, CEO, Thryve&Co"
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      // Scroll by approximately one card width
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth : window.innerWidth / 2;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth : window.innerWidth / 2;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#12161C] text-white relative pt-15 md:pt-30 flex flex-col justify-center overflow-hidden">

      {/* Dot Pattern Background */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 z-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff33 0.3px, transparent 0.5px)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      {/* Grid Lines */}
      <div className="absolute inset-0 px-8 md:px-13 pointer-events-none z-0">
        <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-l border-r border-[#FFFFFF33]">
          <div className="border-[#FFFFFF33] md:border-r"></div>
          <div className="border-[#FFFFFF33] md:border-r"></div>
          <div className="hidden md:block border-r border-[#FFFFFF33]"></div>
          <div className="hidden md:block border-[#FFFFFF33] lg:border-r"></div>
          <div className="hidden lg:block border-r border-[#FFFFFF33]"></div>
          <div className="hidden lg:block"></div>
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col">
        {/* Title */}
        <div className="px-8 md:px-13 mb-16 md:mb-24">
          <h2 className="font-ubuntu-mono text-4xl md:text-5xl lg:text-[54px] font-bold uppercase tracking-wide">
            A FEW WORDS FROM THEM
          </h2>
        </div>

        {/* Testimonials Slider Area */}
        <div className="w-full relative">
          {/* Solid background to block the main section grid behind the slider */}
          <div className="absolute inset-0 bg-[#12161C] z-10 pointer-events-none"></div>

          {/* Local 3-line grid just for the slider area */}
          <div className="absolute inset-0 px-8 md:px-13 pointer-events-none z-10">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 border-l border-r border-[#FFFFFF33]">
              <div className="border-[#FFFFFF33] md:border-r"></div>
              <div className="hidden md:block"></div>
            </div>
          </div>

          <div className="w-full pl-8 md:pl-13 relative z-20">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full border-t border-b border-[#FFFFFF33] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className={`w-[calc(100vw-4rem)] md:w-[calc(50vw-3.25rem)] flex-none flex flex-col justify-between py-8 md:py-10 snap-start relative`}
                >
                  <div className="px-[20px] md:px-[25px] mb-12 md:mb-30">
                    <p className="font-ubuntu-mono text-lg md:text-xl lg:text-[22px] leading-[1.6] max-w-full">
                      {t.quote}
                    </p>
                  </div>
                  <div className="mt-auto w-full px-[20px] md:px-[25px]">
                    <div className="border-t border-[#FFFFFF33] pt-8 md:pt-10">
                      <p className="font-avenir text-sm md:text-base text-white">
                        {t.author}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Spacer to preserve right padding when fully scrolled */}
              <div className="w-8 md:w-[3.25rem] flex-none"></div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="px-12 md:px-20 flex gap-6 flex flex-row items-center  py-10 md:py-20">
          <button
            onClick={scrollLeft}
            className="text-white hover:text-[#2D6AFF] transition-colors cursor-pointer"
          >
            <ArrowLeft size={28} strokeWidth={1.5} />
          </button>
          <button
            onClick={scrollRight}
            className="text-white hover:text-[#2D6AFF] transition-colors cursor-pointer"
          >
            <ArrowRight size={28} strokeWidth={1.5} />
          </button>
        </div>
      </div>

    </section>
  );
}
