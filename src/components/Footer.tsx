import Image from "next/image";
import RollingTextButton from "./RollingTextButton";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#12161C] pt-24 md:pt-20 flex flex-col min-h-screen">
      {/* Top Content */}
      <div className="px-8 md:px-13 flex flex-col lg:flex-row justify-between items-start gap-16 mb-16 md:mb-24">

        {/* Left Side */}
        <div className="flex flex-col max-w-2xl">
          <h2 className="font-ubuntu-mono text-4xl md:text-5xl lg:text-[54px] leading-tight font-bold uppercase tracking-wide mb-6">
            WE LIKE BUILDING THINGS<br />THAT PEOPLE ACTUALLY USE.
          </h2>
          <p className="font-avenir text-white text-base md:text-lg mb-10 max-w-md">
            We are a software company focused on building useful digital products and systems for businesses.
          </p>
          <RollingTextButton className="bg-[#2D6AFF] hover:bg-blue-600 text-white font-avenir px-6 py-2 rounded-[4px] text-base md:text-lg flex items-center gap-2 w-fit transition-colors group" />
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-10 font-avenir text-[#F4F5F2]/80 text-sm md:text-[15px] lg:mr-20">
          {/* Links */}
          <div className="flex flex-col gap-4">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/works" className="hover:text-white transition-colors">Work</Link>
            <a href="#" className="hover:text-white transition-colors">Services</a>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Socials & Email */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-5 items-center text-white">
              <a href="#" className="hover:text-[#2D6AFF] transition-colors" aria-label="Instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="hover:text-[#2D6AFF] transition-colors" aria-label="X (Twitter)">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
            </div>
            <a href="mailto:info@kayentechnologies.com" className="hover:text-white transition-colors">info@kayentechnologies.com</a>
          </div>

          <div className="text-white opacity-0.8 text-xs mt-4">
            © 2026 KAYEN TECHNOLOGIES
          </div>
        </div>
      </div>

      {/* Massive Logo at the bottom */}
      <div className="w-full mt-auto pt-8">
        <Image
          src="/logo.svg"
          alt="Kayen Technologies"
          width={2400}
          height={800}
          className="w-full h-auto"
        />
      </div>
    </footer>
  );
}
