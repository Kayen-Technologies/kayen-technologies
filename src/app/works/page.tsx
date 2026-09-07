import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AnimatedWorksGraphic from "@/components/works/AnimatedWorksGraphic";
import WorksScrollSection from "@/components/works/WorksScrollSection";

export default function WorksPage() {
  return (
    <div className="flex flex-col bg-[#101317] text-white min-h-screen relative">
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

      {/* Blue Dashed Line and Dot */}
      <div className="absolute left-0 top-1/2 w-8 md:w-13 border-t-2 border-dashed border-[#2D6AFF] z-0 hidden lg:block pointer-events-none"></div>
      <div className="absolute left-8 md:left-13 top-1/2 w-2.5 h-2.5 bg-[#2D6AFF] rounded-sm -translate-x-1/2 -translate-y-1/2 z-0 hidden lg:block pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <NavBar />

        <main className="flex-1 flex items-center pt-16 pb-16 md:pt-24 md:pb-32">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 h-full items-center px-8 md:px-13 gap-16 lg:gap-24">

            {/* Left Side: Animated Images & Shapes */}
            <div className="lg:col-span-1 w-full flex items-center justify-center">
              <AnimatedWorksGraphic />
            </div>

            {/* Right Side: Text */}
            <div className="flex flex-col justify-center">
              <h1 className="font-ubuntu-mono text-5xl md:text-6xl lg:text-[72px] leading-[1.1] font-bold text-white uppercase mb-8">
                WORK SHAPED BY CLEAR THINKING.
              </h1>
              <p className="font-avenir text-white text-base md:text-[18px] leading-[1.6]">
                Kayen Technologies started with a simple goal: making technology more useful. We're a team of designers, developers, and problem-solvers who enjoy finding better ways to build.
              </p>
            </div>

          </div>
        </main>
      </div>

      {/* Sticky Scroll Works Section */}
      <div className="relative z-20">
        <WorksScrollSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
