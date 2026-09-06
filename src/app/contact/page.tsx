import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import DiscoveryFormSection from "@/components/contact/DiscoveryFormSection";
import TestimonialsSection from "@/components/contact/TestimonialsSection";

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-[#12161C] text-white min-h-screen relative overflow-x-hidden">
      
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
        <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 border-l border-r border-[#FFFFFF1A]">
          <div className="border-r border-[#FFFFFF1A]"></div>
          <div className="border-[#FFFFFF1A] md:border-r"></div>
          <div className="hidden md:block border-r border-[#FFFFFF1A]"></div>
          <div className="hidden md:block border-[#FFFFFF1A] lg:border-r"></div>
          <div className="hidden lg:block border-r border-[#FFFFFF1A]"></div>
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <NavBar />
        
        <main className="flex-1 flex items-center pt-16 pb-16 md:pt-24 md:pb-32">
          <div className="w-full grid grid-cols-1 lg:grid-cols-6 h-full items-center px-8 md:px-13 gap-10 md:gap-12">
            
            {/* Left Side: Texts */}
            <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">
              <h1 className="font-ubuntu-mono text-4xl md:text-5xl lg:text-[72px] leading-[1.1] font-bold uppercase text-white tracking-wide max-w-4xl">
                LET'S TALK ABOUT WHAT<br />YOU'RE BUILDING.
              </h1>
              <p className="font-avenir text-sm md:text-base lg:text-[15px] text-[#F4F5F2]/80 leading-relaxed max-w-xl">
                Have an idea, an existing product or a digital challenge? Tell us where you are and what you want to move forward. Choose the option that best fits your enquiry.
              </p>
            </div>
            
            {/* Right Side: Image */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end h-full mt-8 md:mt-16 lg:mt-0">
              <div className="relative w-full h-[30vh] lg:h-[20vh] flex items-center justify-center lg:justify-end">
                <Image 
                  src="/images/contact us/path arrow.png" 
                  alt="Path Arrow"
                  fill
                  className="object-contain object-center lg:object-right"
                  priority
                />
              </div>
            </div>

          </div>
        </main>
      </div>

      <div className="relative z-10 flex flex-col">
        <DiscoveryFormSection />
        <TestimonialsSection />
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
