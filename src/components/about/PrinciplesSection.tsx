import TextType from "../TextType";

export default function PrinciplesSection() {
  const principles = [
    {
      num: "01",
      title: "START WITH WHY",
      desc: "We take time to understand the problem before building. Knowing what matters and who we're building for makes every decision clearer."
    },
    {
      num: "02",
      title: "MAKE IT USEFUL",
      desc: "Every feature should have a reason to exist. We focus on solving real problems and making the experience better for the people using it."
    },
    {
      num: "03",
      title: "BUILD TOGETHER",
      desc: "Good work comes from working closely together. We listen, share ideas, and challenge each other to find better answers."
    },
    {
      num: "04",
      title: "MIND THE DETAILS",
      desc: "Small details can make a big difference. We care about how things look, feel, and work, right down to the parts people don't see."
    },
    {
      num: "05",
      title: "KEEP MOVING",
      desc: "There's always room to improve. We stay curious, learn from what we build, and change course when we find a better way."
    }
  ];

  return (
    <section className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side */}
      <div className="bg-[#2A60E3] lg:w-1/2 px-8 md:px-13 py-16 md:py-24 lg:py-32 flex items-start">
        <TextType
          as="h2"
          className="font-ubuntu-mono text-4xl md:text-5xl lg:text-[60px] font-bold text-white uppercase tracking-wide"
          text="PRINCIPLES THAT SHAPE THE WAY WE WORK."
          typingSpeed={50}
          loop={true}
          startOnVisible={true}
        />
      </div>

      {/* Right Side */}
      <div className="bg-[#F4F5F2] lg:w-1/2 px-8 md:px-16 lg:pl-12 lg:pr-24 py-16 lg:py-24 flex flex-col justify-center gap-10 md:gap-14">
        {principles.map((p, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <h3 className="font-ubuntu-mono text-[17px] md:text-[20px] font-bold tracking-wider flex items-center">
              <span className="text-[#7B7B7B] mr-4">{p.num}</span>
              <span className="text-[#101317]">{p.title}</span>
            </h3>
            <p className="font-avenir text-sm md:text-[15px] text-[#12161C] leading-relaxed max-w-lg pl-9 md:pl-10">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
