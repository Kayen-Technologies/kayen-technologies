import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MissionSection from "@/components/about/MissionSection";
import ProblemSection from "@/components/about/ProblemSection";
import PrinciplesSection from "@/components/about/PrinciplesSection";
import DiffOrgSection from "@/components/about/DiffOrgSection";

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-[#101317] text-white min-h-screen relative overflow-x-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 h-screen">
        <Image 
          src="/images/about us/about us.png" 
          alt="About Us"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle gradient to ensure text remains readable against bright streaks */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#101317]/60 to-transparent"></div>
      </div>

      {/* Dot Pattern Background */}
      <div 
        className="absolute top-0 left-0 right-0 h-screen z-0 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#ffffff33 0.3px, transparent 0.5px)', 
          backgroundSize: '24px 24px' 
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <NavBar />
        
        <main className="flex-1 flex items-center px-8 md:px-13">
          <div className="max-w-[850px] flex flex-col gap-6 md:gap-8 pb-32">
            <h1 className="font-ubuntu-mono text-4xl md:text-5xl lg:text-[72px] leading-[1.1] font-bold uppercase text-white tracking-wide">
              WE BUILD SOFTWARE THAT<br className="hidden md:block" /> MOVES IDEAS FORWARD.
            </h1>
            <p className="font-avenir text-base md:text-lg lg:text-[17px] text-[#F4F5F2] leading-relaxed max-w-2xl">
              Kayen Technologies started with a simple goal: making technology more useful. We're a team of designers, developers, and problem-solvers who enjoy finding better ways to build.
            </p>
          </div>
        </main>
      </div>

      <div className="relative z-10 flex flex-col">
        <MissionSection />
        <ProblemSection />
        <PrinciplesSection />
        <DiffOrgSection />
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
