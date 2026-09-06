import Image from "next/image";
import TextType from "../TextType";
import RollingTextButton from "../RollingTextButton";

export default function BringUsSection() {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[60vh]">
      {/* Left Column */}
      <div className="w-full md:w-2/6 bg-[#F4F5F2] px-8 md:px-13 py-10 md:py-10 flex flex-col border-r border-[#FFFFFF33]">
        <p className="font-avenir text-[#12161C] text-base md:text-lg leading-relaxed max-w-sm">
          Whether you are starting something new or improving an existing product, the first step is a conversation.
        </p>
      </div>

      {/* Right Column */}
      <div className="w-full md:w-4/5 bg-[#2A60E3] px-8 md:px-6 pt-10 pb-8 md:pt-8 md:pb-8 flex flex-col justify-between">
        <div>
          {/* Note: The screenshot shows a unique rounded font here, falling back to Ubuntu Mono as the project's primary heading font */}
          <TextType
            as="h2"
            className="font-ubuntu-mono text-[#F4F5F2] text-5xl md:text-6xl lg:text-[72px] leading-[1.1] font-bold uppercase tracking-wide"
            text={"BRING US THE PROBLEM.\nWE'LL SHAPE WHAT COMES NEXT."}
            typingSpeed={50}
            loop={true}
            startOnVisible={true}
          />
        </div>
        
        <div className="mt-24 md:mt-70 w-full">
          <RollingTextButton className="w-full bg-[#12161C] hover:bg-black text-white px-6 py-4 cursor-pointer rounded-[4px] flex justify-between items-center transition-colors group" />
        </div>
      </div>
    </section>
  );
}
