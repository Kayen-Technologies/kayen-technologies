import Image from "next/image";

export default function DiffOrgSection() {
  return (
    <section className="flex flex-col lg:flex-row min-h-[80vh]">
      {/* Left Side */}
      <div className="bg-[#F4F5F2] lg:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center gap-16 md:gap-24 pt-16 pb-16 lg:pt-24 lg:pb-24">
        <h2 className="font-ubuntu-mono text-4xl md:text-5xl lg:text-[54px] leading-[1.2] font-bold text-[#101317] uppercase tracking-wide">
          DIFFERENT<br />
          ORGANISATIONS. THE<br />
          SAME DESIRE TO MAKE<br />
          PROGRESS.
        </h2>
        <p className="font-avenir text-sm md:text-[15px] text-[#101317] leading-relaxed max-w-lg">
          We work with founders bringing new ideas to life, businesses improving how they serve customers, and organisations using technology to create stronger experiences and better systems.
        </p>
      </div>

      {/* Right Side */}
      <div className="bg-[#2A60E3] lg:w-1/2 p-4 md:p-16 lg:p-24 flex items-center justify-center overflow-hidden min-h-[400px]">
        <div className="flex justify-center items-center w-full max-w-4xl md:gap-8 lg:gap-12 px-4 lg:px-0">
          {[0, 1, 2].map((i) => (
            <div key={i} className="relative flex-1 aspect-[2/3] max-w-[300px]">
              <Image 
                src="/images/about us/diff org/3 arrows.png" 
                alt="Arrow right" 
                fill 
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
