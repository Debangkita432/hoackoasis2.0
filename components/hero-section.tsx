"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"
import CountdownTimer from "./countdown-timer"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-14 sm:pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#250060]/20 via-[#260061]/10 to-[#240060]/20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#25005f]/10 to-transparent" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,0,96,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,0,96,0.1) 1px, transparent 1px)",
            backgroundSize: "38px 38px", // smaller squares on phones
            animation: "gridMove 20s linear infinite",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up">
            <Image
              src="/logo.png"
              alt="IEM HACKOASIS 2.0"
              width={220}
              height={140}
              className="mx-auto rounded-xl object-contain border border-white/20 animate-float w-40 sm:w-56 h-auto"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-bold mb-5 sm:mb-6 animate-fade-in-up">
            <span
              className="block mb-1 sm:mb-2 text-white font-extrabold text-3xl sm:text-6xl"
              style={{ textShadow: "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(37,0,96,0.8), 0 0 30px rgba(37,0,96,0.6), 2px 2px 4px rgba(0,0,0,0.8)" }}
            >
              IEM HACKOASIS
            </span>
            <span
              className="block text-white font-black text-5xl sm:text-8xl lg:text-9xl leading-none"
              style={{ textShadow: "0 0 15px rgba(37,0,96,1), 0 0 30px rgba(37,0,96,0.8), 0 0 45px rgba(37,0,96,0.6), 3px 3px 6px rgba(0,0,0,0.9)" }}
            >
              2.0
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="text-base sm:text-xl mb-6 sm:mb-8 tracking-wider text-white font-semibold animate-fade-in-up"
            style={{ textShadow: "0 0 8px rgba(255,255,255,0.6), 1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            &gt; Innovate. Collaborate. Create. &lt;
          </p>

          {/* Event Info — stacks on phones */}
          <div className="w-full mx-auto mb-8 sm:mb-12 animate-fade-in-up">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-6">
              <div className="w-full sm:min-w-[240px] px-4 sm:px-5 py-2.5 sm:py-3 flex justify-center items-center gap-2 rounded-xl border border-white/25 bg-[#250060]/40 backdrop-blur-md text-white font-extrabold tracking-wide text-sm sm:text-lg shadow-[0_0_14px_rgba(79,70,229,0.5)] hover:scale-[1.02] sm:hover:scale-105 transition-transform">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="whitespace-nowrap">20th September 2025</span>
              </div>
              <div className="w-full sm:min-w-[240px] px-4 sm:px-5 py-2.5 sm:py-3 flex justify-center items-center gap-2 rounded-xl border border-white/25 bg-[#250060]/40 backdrop-blur-md text-white font-extrabold tracking-wide text-sm sm:text-lg shadow-[0_0_14px_rgba(124,58,237,0.5)] hover:scale-[1.02] sm:hover:scale-105 transition-transform">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="whitespace-nowrap">IEM Gurukul Building</span>
              </div>
              <div className="w-full sm:min-w-[240px] px-4 sm:px-5 py-2.5 sm:py-3 flex justify-center items-center gap-2 rounded-xl border border-white/25 bg-[#250060]/40 backdrop-blur-md text-white font-extrabold tracking-wide text-sm sm:text-lg shadow-[0_0_14px_rgba(99,102,241,0.5)] hover:scale-[1.02] sm:hover:scale-105 transition-transform">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="whitespace-nowrap">10AM - 6PM</span>
              </div>
            </div>
          </div>

          {/* Countdown */}
          <div className="mb-8 sm:mb-10 animate-fade-in-up">
            <h3 className="text-sm sm:text-lg font-semibold mb-3 sm:mb-4 tracking-widest text-white">
              [ EVENT STARTS IN ]
            </h3>
            <CountdownTimer />
          </div>

          {/* CTAs — full-width on phones */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up mb-10 sm:mb-12">
            {/* Download Brochure */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="relative rounded-full w-full sm:w-[220px] max-w-xs h-[44px] sm:h-[48px] px-0 text-white text-base sm:text-lg tracking-wide border-[2px] border-[#250060] bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)]"
            >
              <a
                href="https://drive.google.com/file/d/1-DH6zjGrjB0t3rIC2Dwb57JGVp66cx2b/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download HackOasis brochure (Google Drive link)"
                className="flex items-center justify-center w-full h-full whitespace-nowrap"
              >
                Download Brochure
              </a>
            </Button>

            {/* Register */}
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden rounded-full w-full sm:w-[220px] max-w-xs h-[44px] sm:h-[48px] px-0 text-white text-base sm:text-lg tracking-wide bg-gradient-to-r from-[#250060] to-[#260061] hover:from-[#240060] hover:to-[#25005f] border-[2px] border-[#240060]/80 transition-all duration-300 hover:-translate-y-0.5 shadow-[0_16px_32px_-8px_rgba(255,255,255,0.25)]"
            >
              <a
                href="https://forms.gle/Aq7aJhhe9kvLE1e4A"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open registration form"
                className="flex items-center justify-center w-full h-full whitespace-nowrap"
              >
                Register Now
                <span className="pointer-events-none absolute inset-0 rounded-full opacity-20 bg-gradient-to-b from-white/18 to-transparent" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Local CSS */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in-up { animation: fadeInUp 700ms ease-out both; }
      `}</style>
    </section>
  )
}
