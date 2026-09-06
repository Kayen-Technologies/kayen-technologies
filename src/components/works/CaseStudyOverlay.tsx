"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import NavBar from "../NavBar";
import Footer from "../Footer";

interface CaseStudyOverlayProps {
  work: any;
  onClose: () => void;
}

export default function CaseStudyOverlay({ work, onClose }: CaseStudyOverlayProps) {
  if (!work) return null;

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-white overflow-y-auto"
    >
      {/* 1st Part of Overlay (Blue Hero) */}
      <div className="relative w-full bg-[#2A60E3] min-h-[70vh] flex flex-col">

        {/* Navbar */}
        <div className="relative z-20">
          <NavBar />
        </div>

        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-[210px] z-20 hidden md:flex items-center justify-center text-white font-avenir text-sm border border-[#ffffff33] px-4 py-2 rounded-[4px] hover:bg-white hover:text-[#2A60E3] transition-colors"
        >
          Close Case Study
        </button>

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

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col flex-1 justify-end px-8 md:px-13 pb-16 md:pb-24 pt-20">

          {/* Top Mini Texts */}
          <div className="flex justify-between items-center w-full font-ubuntu-mono text-white text-xs md:text-sm uppercase tracking-widest mb-16 md:mb-32">
            <span>PROJECT {work.number || "01/04"}</span>
            <span>{work.category} • {work.year}</span>
          </div>

          {/* Main Header & Footer Row */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 w-full">

            {/* Title & Description */}
            <div className="flex flex-col gap-6 md:gap-10 max-w-3xl">
              <h1 className="font-ubuntu-mono text-white text-5xl md:text-7xl lg:text-[100px] font-bold leading-[1.1] tracking-tight">
                {work.title}
              </h1>
              <p className="font-avenir text-white text-base md:text-lg leading-relaxed max-w-sm">
                {work.description || "A warm, editorial website for a creative agency helping ambitious brands build memorable digital presences."}
              </p>
            </div>

            {/* View Live */}
            <a href="#" className="flex items-center gap-2 font-avenir text-white text-sm hover:opacity-70 transition-opacity pb-2">
              <span className="underline underline-offset-4">View live website</span>
              <Image src="/images/landing/arrow-up.png" alt="Arrow" width={16} height={16} className="invert brightness-0 filter" />
            </a>
          </div>
        </div>

        {/* Main Image */}
        <div className="w-full px-8 md:px-13">
          <Image
            src="/images/landing/works/case study/thryve/head.png"
            alt={work.title}
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Overview Section */}
      <div className="w-full bg-[#FFFFFF] flex flex-col justify-between px-8 md:px-13 py-16 md:py-24">

        {/* Top Text Grid */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8 mb-16 md:mb-24">

          {/* Left: Overview Header */}
          <div className="flex flex-col gap-6 md:gap-8 max-w-3xl lg:w-3/5">
            <h3 className="font-ubuntu-mono text-[#101317] text-sm md:text-base tracking-widest uppercase">
              01 / PROJECT OVERVIEW
            </h3>
            <h2 className="font-ubuntu-mono text-[#101317] text-4xl md:text-5xl lg:text-[44px] font-bold leading-[1.2] uppercase">
              {work.overviewTitle || "A DIGITAL HOME WITH THE SAME INTENTION AS THE BRANDS THRYVE HELPS SHAPE."}
            </h2>
            <p className="font-avenir text-[#101317] text-base md:text-lg leading-relaxed max-w-xl">
              {work.overviewDescription || "The website needed to introduce the agency clearly, express its creative personality and give prospective clients an easy path from interest to a discovery call."}
            </p>
          </div>

          {/* Right: Specs Table */}
          <div className="flex flex-col w-full lg:w-1/3 pt-2">
            {[
              { label: "CLIENT", value: work.client || "Thryve & Co." },
              { label: "INDUSTRY", value: work.industry || "Creative & communications" },
              { label: "SCOPE", value: work.scope || "Website design & development" },
              { label: "LOCATION", value: work.location || "Accra, Ghana" },
            ].map((spec, idx) => (
              <div key={idx} className={`flex justify-between items-start py-3 ${idx !== 0 ? 'border-t border-[#C7C7C7]' : ''}`}>
                <span className="font-ubuntu-mono text-[#66707D] font-semibold text-xs md:text-sm uppercase tracking-widest w-1/3">
                  {spec.label}
                </span>
                <span className="font-avenir text-[#12161C] text-sm md:text-base w-2/3">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Middle Image */}
        <div className="w-full relative mb-8 md:mb-4 flex-1 flex flex-col justify-center">
          <Image
            src="/images/landing/works/case study/thryve/thryve preview.png"
            alt="Project Overview"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Bottom Footer Text */}
        <div className="flex justify-between items-center w-full font-avenir text-[#888D94] text-xs md:text-sm">
          <span>Work Archive</span>
          <span>Image-led storytelling</span>
        </div>

      </div>

      {/* 02 / THE BRIEF Section */}
      <div className="w-full bg-[#101317] flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24 px-8 md:px-13 py-32 md:py-38">

        {/* Left: Section Label */}
        <div className="w-full md:w-1/4">
          <h3 className="font-ubuntu-mono text-white text-sm md:text-base tracking-widest uppercase">
            02 / THE BRIEF
          </h3>
        </div>

        {/* Right: Brief Text */}
        <div className="w-full md:w-3/4 max-w-4xl">
          <h2 className="font-ubuntu-mono text-white text-3xl md:text-5xl lg:text-[48px] font-bold leading-[1.4] tracking-tight">
            {work.brief || "Make the agency feel polished and strategic without losing its warmth, culture or creative character."}
          </h2>
        </div>

      </div>

      {/* 03 / DESIGN DIRECTION Section */}
      <div className="w-full bg-[#FFFFFF] flex flex-col justify-between px-8 md:px-13 py-24 md:py-32">

        {/* Top Text Grid */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-20 md:mb-32">

          {/* Left: Section Label */}
          <div className="w-full lg:w-1/3">
            <h3 className="font-ubuntu-mono text-[#12161C] text-sm md:text-base tracking-widest uppercase font-bold">
              03 / DESIGN DIRECTION
            </h3>
          </div>

          {/* Right: Header & Subhead */}
          <div className="w-full lg:w-2/3 max-w-4xl flex flex-col gap-6 md:gap-8">
            <h2 className="font-ubuntu-mono text-[#12161C] text-4xl md:text-5xl lg:text-[48px] font-bold leading-[1.3] uppercase tracking-tight">
              {work.designDirectionTitle || "EDITORIAL CONFIDENCE. HUMAN ENERGY."}
            </h2>
            <p className="font-avenir text-[#12161C] text-base md:text-lg leading-relaxed max-w-3xl">
              {work.designDirectionDescription || "We used expressive typography, cinematic imagery, generous space and a deep burgundy-and-cream palette to create an experience that feels curated rather than corporate. Movement supports the storytelling while the work remains the centre of attention."}
            </p>
          </div>

        </div>

        {/* Images Grid */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 w-full">

          {/* Left Image Column */}
          <div className="w-full md:w-[55%] flex flex-col gap-4 md:gap-6">
            <div className="w-full relative">
              <Image
                src="/images/landing/works/case study/thryve/dd left.png"
                alt="Design Direction Left"
                width={1200}
                height={1600}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Left Footer Text */}
            <div className="flex justify-between items-center w-full font-avenir text-[#888D94] text-xs md:text-sm">
              <span>Positioning</span>
              <span>Clear message + action</span>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="w-full md:w-[45%] flex flex-col gap-4 md:gap-6">
            <div className="w-full relative">
              <Image
                src="/images/landing/works/case study/thryve/dd right.png"
                alt="Design Direction Right"
                width={1000}
                height={1200}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Right Footer Text */}
            <div className="flex justify-between items-center w-full font-avenir text-[#888D94] text-xs md:text-sm">
              <span>Visual Rhythm</span>
              <span>Culture + personality</span>
            </div>
          </div>

        </div>

      </div>

      {/* Just Image Section */}
      <div className="w-full bg-[#6C0F1A] flex flex-col px-8 md:px-13 py-24 md:py-25">
        <div className="w-full relative mb-4 md:mb-4">
          <Image
            src="/images/landing/works/case study/thryve/just image.png"
            alt="Brand story"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Footer Text */}
        <div className="flex justify-between items-center w-full font-avenir text-[#888D94] text-xs md:text-sm">
          <span>Brand story</span>
          <span>Large editorial moments pace the journey</span>
        </div>
      </div>

      {/* 04 / KEY DECISIONS Section */}
      <div className="w-full bg-[#FFFFFF] flex flex-col justify-between px-8 md:px-13 py-24 md:py-32">

        {/* Top Text Grid */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-16 md:mb-24">
          {/* Left: Section Label */}
          <div className="w-full lg:w-2/3">
            <h3 className="font-ubuntu-mono text-[#12161C] text-sm md:text-base tracking-widest uppercase font-bold">
              04 / KEY DECISIONS
            </h3>
          </div>

          {/* Right: Header */}
          <div className="w-full lg:w-3/4 ">
            <h2 className="font-ubuntu-mono text-[#12161C] text-4xl md:text-5xl lg:text-[48px] font-bold uppercase tracking-tight">
              {work.keyDecisionsTitle || "THREE IDEAS KEPT THE EXPERIENCE FOCUSED."}
            </h2>
          </div>
        </div>

        {/* Qualities Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 border-y border-[#A8A8A8] mb-24 md:mb-32">

          {/* Quality 1 */}
          <div className="flex flex-col gap-4 py-8 md:py-12 md:pr-8 border-b md:border-b-0 md:border-r border-[#A8A8A8]">
            <span className="font-ubuntu-mono text-[#12161C] font-bold text-sm">01</span>
            <h4 className="font-ubuntu-mono text-[#12161C] font-bold text-xl md:text-2xl">Lead with Personality</h4>
            <p className="font-avenir text-[#12161C] text-base">Establish Thryve's voice from the first screen.</p>
          </div>

          {/* Quality 2 */}
          <div className="flex flex-col gap-4 py-8 md:py-12 md:px-8 border-b md:border-b-0 md:border-r border-[#A8A8A8]">
            <span className="font-ubuntu-mono text-[#12161C] font-bold text-sm">02</span>
            <h4 className="font-ubuntu-mono text-[#12161C] font-bold text-xl md:text-2xl">Let the work prove it</h4>
            <p className="font-avenir text-[#12161C] text-base">Use project imagery as the strongest evidence.</p>
          </div>

          {/* Quality 3 */}
          <div className="flex flex-col gap-4 py-8 md:py-12 md:pl-8">
            <span className="font-ubuntu-mono text-[#12161C] font-bold text-sm">03</span>
            <h4 className="font-ubuntu-mono text-[#12161C] font-bold text-xl md:text-2xl">Keep action clear</h4>
            <p className="font-avenir text-[#12161C] text-base">Make the path to a discovery call easy to find.</p>
          </div>

        </div>

        {/* Images Grid */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 w-full">

          {/* Left Image Column */}
          <div className="w-full md:w-[55%] flex flex-col gap-4 md:gap-4">
            <div className="w-full relative">
              <Image
                src="/images/landing/works/case study/thryve/key left.png"
                alt="Key Decisions Left"
                width={1200}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Left Footer Text */}
            <div className="flex justify-between items-center w-full font-avenir text-[#888D94] text-xs md:text-sm">
              <span>Selected work</span>
              <span>Projects become visual chapters</span>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="w-full md:w-[45%] flex flex-col gap-4 md:gap-4">
            <div className="w-full relative">
              <Image
                src="/images/landing/works/case study/thryve/key right.png"
                alt="Key Decisions Right"
                width={1000}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Right Footer Text */}
            <div className="flex justify-between items-center w-full font-avenir text-[#888D94] text-xs md:text-sm">
              <span>Brand expression</span>
              <span>Distinctive, not distracting</span>
            </div>
          </div>

        </div>

      </div>

      {/* 05 / BUILDING TRUST Section */}
      <div className="w-full bg-[#101317] flex flex-col justify-between px-8 md:px-13 py-24 md:py-25">

        {/* Top Text Grid */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-16 md:mb-24">
          {/* Left: Section Label */}
          <div className="w-full lg:w-1/3">
            <h3 className="font-ubuntu-mono text-white text-sm md:text-base tracking-widest uppercase font-bold">
              05 / BUILDING TRUST
            </h3>
          </div>

          {/* Right: Header */}
          <div className="w-full lg:w-2/3 flex lg:justify-end">
            <h2 className="font-ubuntu-mono text-white text-4xl md:text-5xl lg:text-[48px] font-bold uppercase tracking-tight lg:text-right">
              {work.buildingTrustTitle || "PROOF APPEARS INSIDE THE EXPERIENCE."}
            </h2>
          </div>
        </div>

        {/* Middle Image */}
        <div className="w-full relative mb-8 md:mb-6">
          <Image
            src="/images/landing/works/case study/thryve/trust.png"
            alt="Building Trust"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Bottom Footer Text */}
        <div className="flex justify-between items-center w-full font-avenir text-[#888D94] text-xs md:text-sm">
          <span>Client stories</span>
          <span>Social proof without breaking the visual language</span>
        </div>

      </div>

      {/* 06 / OUTCOME Section */}
      <div className="w-full bg-[#2A60E3] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 px-8 md:px-13 py-24 md:py-32">

        {/* Left: Text Content */}
        <div className="w-full lg:w-[45%] flex flex-col gap-6 md:gap-8">
          <h3 className="font-ubuntu-mono text-white text-sm md:text-base tracking-widest uppercase">
            06 / OUTCOME
          </h3>
          <h2 className="font-ubuntu-mono text-white text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.2] tracking-tight">
            {work.outcomeTitle || "A confident presence built to grow with the studio."}
          </h2>
          <p className="font-avenir text-white text-base md:text-lg leading-relaxed max-w-md">
            {work.outcomeDescription || "The final website brings Thryve's positioning, personality and work into one cohesive experience."}
          </p>
        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-[55%] relative">
          <Image
            src="/images/landing/works/case study/thryve/outcome.png"
            alt="Outcome"
            width={1200}
            height={900}
            className="w-full h-auto object-cover"
          />
        </div>

      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

    </motion.div>
  );
}
