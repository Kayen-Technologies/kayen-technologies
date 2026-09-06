import React from 'react';

export default function MissionSection() {
  return (
    <section className="bg-[#2A60E3] text-[#F4F5F2] px-8 md:px-13 relative">
      <div className="relative flex flex-col border-l border-r border-[#FFFFFF66] pt-20 pb-20 md:pt-20 md:pb-35">
        
        {/* Inner Grid Lines */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 pointer-events-none">
          <div className="border-r border-[#FFFFFF66]"></div>
          <div className="border-[#FFFFFF66] md:border-r"></div>
          <div className="hidden md:block border-r border-[#FFFFFF66]"></div>
          <div className="hidden md:block border-[#FFFFFF66] lg:border-r"></div>
          <div className="hidden lg:block border-r border-[#FFFFFF66]"></div>
          <div className="hidden lg:block"></div>
        </div>

        <div className="relative z-10 w-full flex flex-col justify-between h-full flex-1 gap-30 lg:gap-70">
          
          {/* Top Row: Title and First Text */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
            <h2 className="font-ubuntu-mono text-7xl md:text-[120px] lg:text-[150px] leading-[0.85] font-bold uppercase tracking-tighter">
              OUR<br />MISSION
            </h2>
            <div className="lg:w-1/3">
              <p className="font-ubuntu-mono text-base md:text-[17px] leading-relaxed max-w-sm">
                To help ambitious organisations move forward through thoughtful design and reliable technology.
              </p>
            </div>
          </div>
          
          {/* Bottom Row: Second Text */}
          <div className="flex justify-start lg:justify-end">
            <div className="lg:w-1/3">
              <p className="font-avenir text-sm md:text-[15px] leading-relaxed max-w-sm text-[#F4F5F2]/90">
                We bring product strategy, UI/UX design and development into one connected process. This helps teams make clearer decisions, reduce the gaps between ideas and execution, and build products that serve both people and business goals.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
