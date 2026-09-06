import Image from "next/image";
import NavBar from "@/components/NavBar";
import FeaturedWorks from "@/components/landing/FeaturedWorks";
import IdeasSection from "@/components/landing/IdeasSection";
import BringUsSection from "@/components/landing/BringUsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#101317] text-white">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden flex flex-col">
        {/* Right side background image */}
        <div className="absolute top-0 right-0 bottom-0 w-full md:w-[60%] bg-[url('/images/landing/backgroundright.png')] bg-cover bg-left z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#101317] via-[#101317]/80 md:via-transparent to-transparent"></div>
        </div>

        {/* Dot Pattern Background */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(#ffffff33 0.3px, transparent 0.5px)', 
            backgroundSize: '24px 24px' 
          }}
        ></div>

        <NavBar />

        <main className="flex flex-1 relative">
          <div className="flex-1 px-8 md:px-13 py-16 flex flex-col justify-center max-w-full md:max-w-[50%] z-10">
            <h1 className="font-ubuntu-mono text-4xl md:text-5xl lg:text-6xl leading-tight font-bold mb-6 uppercase">
              MAKE IT WORK. THEN<br />MAKE IT BETTER.
            </h1>
            <p className="font-avenir text-base md:text-lg text-white mb-10 max-w-[90%] leading-relaxed">
              We design and build digital products and software that help businesses
              work smarter and move faster. We build with purpose, pay attention to the
              details, and keep making what we create simpler, smarter, and more useful.
            </p>
            <button className="bg-[#2D6AFF] text-white font-avenir px-5 py-3 rounded-[4px] text-base font-medium flex items-center gap-2 w-fit hover:bg-blue-600 transition-colors">
              Book a discovery call
              <Image 
                src="/images/landing/arrow-up.png" 
                alt="Arrow Up" 
                width={20} 
                height={20} 
                className="w-6 h-6"
              />
            </button>
          </div>
        </main>
      </section>

      {/* About Section */}
      <section className="bg-[#2A60E3] text-white px-8 md:px-13">
        <div className="relative flex flex-col border-l border-r border-[#FFFFFF66] pt-15 pb-25 md:pt-25 md:pb-50">
          
          {/* Inner Grid Lines */}
          <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 pointer-events-none">
            <div className="border-r border-[#FFFFFF66]"></div>
            <div className="border-[#FFFFFF66] md:border-r"></div>
            <div className="hidden md:block border-r border-[#FFFFFF66]"></div>
            <div className="hidden md:block border-[#FFFFFF66] lg:border-r"></div>
            <div className="hidden lg:block border-r border-[#FFFFFF66]"></div>
            <div className="hidden lg:block"></div>
          </div>

          <div className="relative z-10 w-full md:w-9/12 lg:w-8/12">
            <h2 className="font-ubuntu-mono text-4xl md:text-5xl lg:text-[54px] leading-tight font-bold uppercase tracking-wide">
              GOOD SOFTWARE DOES MORE THAN<br />WORK. IT CREATES MOMENTUM.
            </h2>
          </div>
          <div className="relative z-10 w-full md:w-5/12 lg:w-4/12 self-end mt-50 md:mt-32 lg:mt-50">
            <p className="font-avenir text-sm md:text-[15px] leading-relaxed">
              We build software for the way businesses actually work. From
              simple applications to complex business systems, we bring
              together design, technology, and practical thinking to create
              products that are useful, reliable, and built to last.
            </p>
          </div>
        </div>
      </section>

      <FeaturedWorks />
      
      <IdeasSection />

      <BringUsSection />
      
      <Footer />
    </div>
  );
}

