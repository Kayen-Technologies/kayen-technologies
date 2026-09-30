"use client";

import { useState } from "react";
import Image from "next/image";

const IDEAS = [
  {
    title: "Product Strategy",
    image: "/images/landing/idea/product.svg",
    usefulWhen: [
      "You have an idea but are unsure where to begin",
      "Your team has several competing priorities",
      "A product or website has outgrown its structure.",
      "You need to define a focused first version"
    ],
    helpWith: [
      "Product discovery",
      "User & market research",
      "Product definition",
      "User journeys & flows",
      "Product roadmaps"
    ],
    outcome: "A focused product direction that gives your team a shared understanding of what should be built, who it should serve and what should happen next."
  },
  {
    title: "UI/UX & Product Design",
    image: "/images/landing/idea/ui.svg",
    usefulWhen: [
      "You are designing a new website or application",
      "Your current product feels confusing or inconsistent",
      "Users struggle to complete important tasks",
      "Your development team needs clear designs",
      "You need a reusable visual system across your product"
    ],
    helpWith: [
      "UX & interaction design",
      "Web & mobile UI",
      "Wireframes & prototypes",
      "Design systems",
      "Usability testing"
    ],
    outcome: "A clear, visually distinctive and carefully considered product experience that responds to both user needs and business objectives."
  },
  {
    title: "Websites",
    expandedTitle: "Website Design + Dev",
    image: "/images/landing/idea/website.svg",
    usefulWhen: [
      "You are launching a new business, service or initiative",
      "Visitors struggle to understand what you offer",
      "Your website looks outdated",
      "Your team needs greater control over website content"
    ],
    helpWith: [
      "Website design",
      "Responsive design",
      "Front-end development",
      "CMS integration",
      "Website optimisation"
    ],
    outcome: "A responsive and purposeful website that communicates clearly, reflects your organisation properly and gives visitors a reason to take the next step."
  },
  {
    title: "Web apps & MVPs",
    expandedTitle: "Web Apps & MVPs",
    image: "/images/landing/idea/webapp.svg",
    usefulWhen: [
      "You are developing a new digital product",
      "You need a focused MVP to test an idea",
      "Manual business processes need a digital solution",
      "Your existing application needs to be redesigned",
      "Your team needs a clearer product experience"
    ],
    helpWith: [
      "MVP development",
      "Web applications",
      "Dashboard & portals",
      "API & system integration",
      "Product iteration"
    ],
    outcome: "A focused digital product that addresses the most important user need, supports the organisation's immediate goals and creates a foundation for future growth."
  },
];

export default function IdeasSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className="bg-[#101317] relative">
      
      {/* Background Grid Lines (constrained by padding, spans full height) */}
      <div className="absolute inset-0 px-8 md:px-13 pointer-events-none z-0">
        <div className="w-full h-full border-l border-r border-[#FFFFFF33] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          <div className="border-r border-[#FFFFFF33]"></div>
          <div className="border-[#FFFFFF33] md:border-r"></div>
          <div className="hidden md:block border-r border-[#FFFFFF33]"></div>
          <div className="hidden md:block border-[#FFFFFF33] lg:border-r"></div>
          <div className="hidden lg:block border-r border-[#FFFFFF33]"></div>
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Header Area */}
      <div className="relative z-10 px-8 md:px-13 pt-24 pb-16 md:pt-32 md:pb-24 pointer-events-none">
        <div className="w-full md:w-9/12 lg:w-8/12 mb-6 pointer-events-auto">
          <h2 className="font-ubuntu-mono text-[#F4F5F2] text-4xl md:text-5xl lg:text-[54px] leading-tight font-bold uppercase tracking-wide">
            FROM THE FIRST IDEA TO THE<br />FINAL BUILD.
          </h2>
        </div>
        <div className="w-full md:w-8/12 lg:w-6/12 pointer-events-auto">
          <p className="font-avenir text-white text-sm md:text-base leading-relaxed">
            We combine strategy, technology, and product thinking to turn complex ideas into software people can actually use.
          </p>
        </div>
      </div>

      {/* List Items (Full Width) */}
      <div className="relative z-10 flex flex-col pb-20">
        {IDEAS.map((idea, idx) => {
          const isActive = expandedIndex === idx;
          const displayTitle = isActive && idea.expandedTitle ? idea.expandedTitle : idea.title;

          return (
            <div 
              key={idx}
              className={`group flex flex-col border-t border-[#FFFFFF33] transition-colors duration-300 ${
                isActive ? "bg-white text-[#12161C]" : "hover:bg-white text-[#F4F5F2] hover:text-[#12161C]"
              }`}
            >
              {/* Header Row */}
              <div 
                className="flex justify-between items-center px-8 md:px-13 py-5 md:py-10 cursor-pointer"
                onClick={() => setExpandedIndex(isActive ? null : idx)}
              >
                <div className="font-ubuntu-mono text-xl md:text-3xl tracking-wide flex items-center gap-4 md:gap-6 font-bold">
                  <span className="font-light w-4 text-center">{isActive ? "—" : "+"}</span> {displayTitle}
                </div>
                <div className={`hidden md:block relative w-12 h-12 md:w-16 md:h-16 transition-all duration-300 ${isActive ? "invert" : "group-hover:invert"}`}>
                  <Image 
                    src={idea.image} 
                    alt={idea.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Expanded Content */}
              {isActive && (
                <div className="flex flex-col animate-in fade-in slide-in-from-top-4 duration-500">
                  {/* Separator Line */}
                  <div className="hidden md:block mx-8 md:mx-13 h-[1px] bg-[#46556C] mt-2 mb-12"></div>
                  
                  <div className="px-8 md:px-13 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-12 lg:gap-24">
                    
                    {/* Left Column */}
                    <div className="flex flex-col gap-5 md:gap-12 pb-0 md:pb-20">
                      <div className="flex flex-col gap-2 md:gap-5">
                        <h4 className="font-ubuntu-mono font-bold tracking-widest text-[#12161C] uppercase text-[15px]">THIS SERVICE IS USEFUL WHEN:</h4>
                        <ul className="flex flex-col gap-2 md:gap-3.5">
                          {idea.usefulWhen.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 font-avenir text-[15px] md:text-base">
                              <span className="w-1.5 h-1.5 bg-[#2D6AFF] mt-2 shrink-0"></span>
                              <span className="text-[#12161C91]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-col gap-2 md:gap-5">
                        <h4 className="font-ubuntu-mono font-bold tracking-widest uppercase text-[#12161C] text-[15px]">WHAT WE CAN HELP WITH</h4>
                        <ul className="flex flex-col gap-2 md:gap-3.5">
                          {idea.helpWith.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 font-avenir text-[15px] md:text-base">
                              <span className="w-1.5 h-1.5 bg-[#2D6AFF] mt-2 shrink-0"></span>
                              <span className="text-[#12161C91]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-0 md:gap-10 relative">
                      <div className="flex flex-col gap-2 md:gap-5">
                        <h4 className="font-ubuntu-mono font-bold tracking-widest uppercase text-[#12161C] text-[15px]">THE OUTCOME</h4>
                        <p className="text-[#12161C91] font-avenir text-[15px] md:text-base leading-relaxed">
                          {idea.outcome}
                        </p>
                      </div>
                      
                      {/* Large Image Area - fills remaining space and cuts off at bottom */}
                      <div className="relative w-[calc(100%+4rem)] -mx-8 md:w-full md:mx-0 flex-1 overflow-hidden min-h-[250px] md:min-h-[200px] mt-0">
                        <Image 
                          src={idea.image} 
                          alt={idea.title}
                          fill
                          className="object-cover object-top invert opacity-90"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>
          );
        })}
        {/* Bottom border */}
        <div className="border-t border-[#FFFFFF33]"></div>
      </div>

    </section>
  );
}
