import Image from "next/image";

export default function ProblemSection() {
  return (
    <section className="bg-[#101317] text-[#F4F5F2] border border-black relative">
      <div className="px-8 md:px-13">
        <div className="relative flex flex-col lg:flex-row justify-between pt-18 pb-20 md:pt-25 md:pb-27 gap-20">
          
          {/* Left Side: Texts (Column, Justify Between) */}
          <div className="flex flex-col justify-between lg:gap-100 lg:w-2/3 z-10">
            <h2 className="font-ubuntu-mono text-4xl md:text-5xl lg:text-[54px] leading-[1.15] font-bold uppercase tracking-wide max-w-3xl">
              THE PROBLEM ISN'T ALWAYS<br />THE TECHNOLOGY.
            </h2>
            <div className="mt-16 lg:mt-auto">
              <p className="font-avenir text-sm md:text-[15px] leading-relaxed max-w-md text-[#F4F5F2]/90">
                We believe better outcomes start with better questions. Before we design an interface or write a line of code, we work to understand the organisation, the people it serves and the change the product needs to create.
              </p>
            </div>
          </div>
          
          {/* Right Side: Image (Items End) */}
          <div className="flex items-end justify-center lg:justify-end lg:w-1/3 z-10">
            <div className="relative w-full max-w-[400px] aspect-[4/3] lg:aspect-square">
              <Image 
                src="/images/about us/problem/1.png" 
                alt="Problem Diagram"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
