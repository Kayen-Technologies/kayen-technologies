"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

function CustomSelect({ 
  options, 
  placeholder, 
  value, 
  onChange 
}: { 
  options: { value: string; label: string }[]; 
  placeholder: string; 
  value: string; 
  onChange: (val: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div 
        className="w-full bg-transparent border border-white rounded-[4px] font-avenir p-4 flex items-center justify-between cursor-pointer transition-colors text-sm md:text-base text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <Image src="/images/contact us/arrow down.png" alt="Arrow Down" width={16} height={16} className="object-contain" />
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#12161C] border border-white rounded-[4px] z-50 overflow-hidden shadow-xl flex flex-col">
          {options.map((opt, idx) => (
            <div
              key={opt.value}
              className={`p-4 text-white font-avenir text-sm md:text-base cursor-pointer hover:bg-white/10 transition-colors ${idx !== options.length - 1 ? 'border-b border-[#FFFFFF33]' : ''}`}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DiscoveryFormSection() {
  const [helpWith, setHelpWith] = useState("");
  const [timeline, setTimeline] = useState("");

  const helpOptions = [
    { value: "design", label: "Design" },
    { value: "development", label: "Development" },
    { value: "strategy", label: "Strategy" }
  ];

  const timelineOptions = [
    { value: "1-3", label: "1-3 months" },
    { value: "3-6", label: "3-6 months" },
    { value: "6+", label: "6+ months" }
  ];

  return (
    <section className="bg-[#2A60E3] relative px-8 md:px-13 py-20 md:py-32 min-h-screen flex items-center">
      
      {/* Grid Lines */}
      <div className="absolute inset-0 px-8 md:px-13 pointer-events-none z-0">
        <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-l border-r border-[#FFFFFF33]">
          <div className="border-r border-[#FFFFFF33]"></div>
          <div className="border-[#FFFFFF33] md:border-r"></div>
          <div className="hidden md:block border-r border-[#FFFFFF33]"></div>
          <div className="hidden md:block border-[#FFFFFF33] lg:border-r"></div>
          <div className="hidden lg:block border-r border-[#FFFFFF33]"></div>
          <div className="hidden lg:block"></div>
        </div>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 h-full">
        
        {/* Left Side */}
        <div className="flex flex-col justify-between h-full ">
          <div>
            <h2 className="font-ubuntu-mono text-4xl md:text-5xl lg:text-[64px] leading-[1.1] font-bold uppercase text-white tracking-wide mb-6">
              BOOK A<br />DISCOVERY CALL.
            </h2>
            <p className="font-avenir text-sm md:text-base text-white leading-relaxed max-w-sm">
              Tell us a little about your project, then choose a convenient time for us to talk.
            </p>
          </div>
          
          <div className="hidden lg:block mt-auto pt-16">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
              <Image 
                src="/images/contact us/calender.png" 
                alt="Calendar icon" 
                fill
                className="object-contain object-left-bottom"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex lg:justify-end">
          <div className="bg-[#12161C] border border-[#101317] p-8 md:p-7 rounded-[4px] w-full max-w-[600px] flex flex-col gap-6">
            
            <input 
              type="text" 
              placeholder="Full Name *" 
              className="w-full bg-transparent border border-white rounded-[4px] text-white font-avenir p-4 focus:outline-none focus:border-white transition-colors placeholder:text-white text-sm md:text-base"
            />
            
            <input 
              type="email" 
              placeholder="Email Address *" 
              className="w-full bg-transparent border border-white rounded-[4px] text-white font-avenir p-4 focus:outline-none focus:border-white transition-colors placeholder:text-white text-sm md:text-base"
            />
            
            <input 
              type="text" 
              placeholder="Name of Organization" 
              className="w-full bg-transparent border border-white rounded-[4px] text-white font-avenir p-4 focus:outline-none focus:border-white transition-colors placeholder:text-white text-sm md:text-base"
            />
            
            <CustomSelect 
              options={helpOptions} 
              placeholder="What do you need help with?*" 
              value={helpWith} 
              onChange={setHelpWith} 
            />
            
            <textarea 
              placeholder="Tell us about your project*" 
              rows={5}
              className="w-full bg-transparent border border-white rounded-[4px] text-white font-avenir p-4 focus:outline-none focus:border-white transition-colors placeholder:text-white resize-none text-sm md:text-base"
            />
            
            <CustomSelect 
              options={timelineOptions} 
              placeholder="Expected timeline" 
              value={timeline} 
              onChange={setTimeline} 
            />
            
            <button className="w-full bg-[#2D6AFF] hover:bg-[#2A60E3] text-white font-avenir py-4 mt-2 transition-colors text-sm md:text-base rounded-sm">
              Continue to Booking
            </button>
            
          </div>
        </div>

      </div>
    </section>
  );
}
