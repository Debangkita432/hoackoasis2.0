"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Instagram } from "lucide-react"
import Image from "next/image"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

type PersonBase = {
  name: string
  image: string
  linkedin?: string
  instagram?: string
  company?: string
  title?: string
  role?: string
  objectPosition?: "top" | "center"
  fit?: "cover" | "contain"
}

export default function JudgesSection() {
  const judges: PersonBase[] = [
    { name: "ABC", title: "ABC", company: "ABC", image: "/comingsoon.png", linkedin: "#" },
    { name: "ABC", title: "ABC", company: "ABC", image: "/comingsoon.png", linkedin: "#" },
    { name: "ABC", title: "ABC", company: "ABC", image: "/comingsoon.png", linkedin: "#" },
    { name: "ABC", title: "ABC", company: "ABC", image: "/comingsoon.png", linkedin: "#" },
  ]

  const mentors: PersonBase[] = [
    {
      name: "Sombit Biswas",
      title: "Mentor",
      image: "/sombit.png",
      linkedin:
        "https://www.linkedin.com/in/sombit-biswas-7b8a90184/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Sayan Bardhan",
      title: "Mentor",
      image: "/sayan.png",
      linkedin:
        "https://www.linkedin.com/in/sayan-bardhan-00405a199/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ]

  const facultyCoordinators: PersonBase[] = [
    {
      name: "Prof.Subhabrata Sengupta",
      title: "Faculty Coordinator",
      image: "/Subhabrata.jpg",
      linkedin:
        "https://www.linkedin.com/in/subhabrata-sengupta-738b0b63?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Prof.Avijit Bose",
      title: "Faculty Coordinator",
      image: "/Avijit.jpg",
      linkedin:
        "https://www.linkedin.com/in/avijit-bose-29328977?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ]

  const coordinators: PersonBase[] = [
    {
      name: "Debangshu Chatterjee",
      role: "Website and overall management",
      image: "/Debangshu.jpg",
      linkedin:
        "https://www.linkedin.com/in/debangshu-chatterjee-858859282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/little.dreams.s?igsh=emE0c3YwczBtdTlk",
    },
    {
      name: "Debangkita Saha",
      role: "Website and overall management",
      image: "/debangkita.jpeg",
      linkedin: "https://www.linkedin.com/in/debangkita-saha-304a3b290/",
      instagram: "https://www.instagram.com/_urochithii___?utm_source=qr&igsh=MTZ2OWt1Y2pzN2xycQ==",
    },
    {
      name: "Sreyasi Mondal",
      role: "Database and overall management",
      image: "/sreyasi.jpg",
      linkedin:
        "https://www.linkedin.com/in/sreyasi-mondal-7337782b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/sreyasi796?igsh=a3V2MW9mOTRkOWkx",
    },
    { name: "Debayan De", role: "Research and Development", image: "/Debayan_De.jpg", linkedin: "https://www.linkedin.com/in/debayan-de-a4322728b", instagram: "#" },
    {
      name: "Kartik Tulsian",
      role: "Research and Development",
      image: "/Kartik Tulsian.jpg",
      linkedin: "https://www.linkedin.com/in/kartik-tulsian-682a6128a",
      instagram: "#",
      objectPosition: "top",
    },
    {
      name: "Pankaj Gop",
      role: "Research and Development",
      image: "/Pankaj Gop.png",
      linkedin:
        "https://www.linkedin.com/in/pankaj-gop-9b606228b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.instagram.com/little.dreams.s?igsh=emE0c3YwczBtdTlk",
    },
    { name: "Abhijeet Kumar", role: "Logistics", image: "/Abhijeet_Kumar (1).jpg", linkedin: "https://www.linkedin.com/in/abhijeet-kumar-4033b1291", instagram: "#" },
    {
      name: "Aritra Chowdhury",
      role: "Logistics",
      image: "/Aritra Chowdhury.jpg",
      linkedin: "https://www.linkedin.com/in/aritra-chowdhury-82201228b/",
      instagram: "https://www.instagram.com/aritra_rick.c?igsh=MWlyaWN4NjQ3bm5tcA==",
    },
    {
      name: "Kaustav Saha",
      role: "Logistics",
      image: "/Kaustav Saha.jpg",
      linkedin: "https://www.linkedin.com/in/kaustav-saha-4b194b28a",
      instagram: "https://www.instagram.com/__k_a_u_s_t_a_v_?igsh=eHV2ZTQ2MmFzM3dt",
    },
    {
      name: "Alokita Dutta",
      role: "Public Relation and video editing",
      image: "/AlokitaDutta (1).JPG",
      linkedin: "https://www.linkedin.com/in/alokita-dutta-9b80a628b/",
      instagram: "https://www.instagram.com/alokitadutta22/",
    },
    {
      name: "Praroop Anand",
      role: "Content and video editing",
      image: "/Praroop Anand.jpg",
      linkedin: "https://www.linkedin.com/in/praroop-anand-483a13301/",
      instagram:
        "https://www.instagram.com/_.praroop._?igsh=MXJkdDV2ZjAxNnIxZA%3D%3D&utm_source=qr",
    },
    { name: "Ariktam De", role: "Calling and Mailing", image: "/ariktam.png", linkedin: "#", instagram: "#" },
    {
      name: "Ananya Mukhopadhyay",
      role: "Public Relation",
      image: "/Ananya Mukhopadhyay (1).jpg",
      linkedin: "https://www.linkedin.com/in/ananya-mukhopadhyay-4b4b0528a/",
      instagram: "https://www.instagram.com/a_soulful_voice_20/",
    },
    { name: "Eshita Talukdar", role: "Graphics", image: "/Eshita Talukdar.jpg", linkedin: "https://www.linkedin.com/in/eshita-talukdar-2a201a28b/", instagram: "https://www.instagram.com/eshitatalukdar/" },
    { name: "Anubrata Guin", role: "Graphics", image: "/Anubrata Guin (1).png", linkedin: "https://www.linkedin.com/in/anubrata-guin/", instagram: "#" },
  ]

  // Phone detection
  const [isPhone, setIsPhone] = useState(false)
  useEffect(() => {
    const onResize = () => setIsPhone(window.innerWidth < 640)
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const facultyToRender = isPhone ? facultyCoordinators.slice(0, 2) : facultyCoordinators
  const mentorsToRender = isPhone ? mentors.slice(0, 2) : mentors
  const coreToRender = isPhone ? coordinators.slice(0, 15) : coordinators

  type PersonCardProps = {
    person: PersonBase
    index: number
    showCompany?: boolean
    avatarClass?: string
  }

  const PersonCard = ({
    person,
    index,
    showCompany = true,
    // smaller on phones, larger from sm+
    avatarClass = "w-28 h-28 sm:w-36 sm:h-36",
  }: PersonCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null)
    const imgWrapRef = useRef<HTMLDivElement>(null)
    const rafRef = useRef<number | null>(null)

    const handleMove = (e: React.MouseEvent) => {
      const el = cardRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const ry = (px - 0.5) * 10
        const rx = (0.5 - py) * 10
        const tx = (px - 0.5) * 6
        const ty = (py - 0.5) * 6
        el.style.setProperty("--rx", `${rx}deg`)
        el.style.setProperty("--ry", `${ry}deg`)
        el.style.setProperty("--tx", `${tx}px`)
        el.style.setProperty("--ty", `${ty}px`)
        imgWrapRef.current?.style.setProperty("--imgx", `${-tx * 0.6}px`)
        imgWrapRef.current?.style.setProperty("--imgy", `${-ty * 0.6}px`)
      })
    }

    const handleLeave = () => {
      const el = cardRef.current
      if (!el) return
      el.style.setProperty("--rx", `0deg`)
      el.style.setProperty("--ry", `0deg`)
      el.style.setProperty("--tx", `0px`)
      el.style.setProperty("--ty", `0px`)
      imgWrapRef.current?.style.setProperty("--imgx", `0px`)
      imgWrapRef.current?.style.setProperty("--imgy", `0px`)
    }

    const isComingSoon = person.image?.toLowerCase().includes("comingsoon")
    const fit = person.fit ?? (isComingSoon ? "contain" : "cover")
    const positionClass = person.objectPosition === "top" ? "object-top" : "object-center"

    return (
      <Card
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="card-anim h-full w-full bg-card/50 backdrop-blur-sm border-border transition-all duration-300 group"
        style={{ animationDelay: `${index * 70}ms` }}
      >
        <CardContent className="h-full p-4 sm:p-6 flex flex-col items-center text-center">
          {/* avatar */}
          <div
            ref={imgWrapRef}
            className={`img-wrap relative ${avatarClass} rounded-xl overflow-hidden ring-1 ring-white/10 shadow-inner mb-4 bg-neutral-900`}
          >
            <Image
              src={person.image || "/placeholder.svg"}
              alt={person.name}
              fill
              className={`w-full h-full ${fit === "contain" ? "object-contain" : "object-cover"} ${positionClass}`}
              sizes="(min-width:1024px) 10rem, (min-width:640px) 9rem, 7rem"
              priority={false}
            />
            {isComingSoon && (
              <span className="absolute inset-0 flex items-center justify-center text-white text-base sm:text-lg font-bold bg-black/50">
                Coming Soon
              </span>
            )}
          </div>

          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">{person.name}</h3>

          {/* designation */}
          <p className="text-sm sm:text-base font-medium mb-1 text-[#9c27b0] group-hover:text-[#6a0dad] transition-colors duration-300">
            {person.title || person.role}
          </p>

          {showCompany && person.company && (
            <p className="text-xs sm:text-sm text-muted-foreground mb-3">{person.company}</p>
          )}

          {/* socials */}
          <div className="mt-auto flex justify-center gap-3 pt-2 sm:pt-3 relative z-10">
            {person.linkedin && person.linkedin !== "#" && (
              <a
                href={person.linkedin}
                aria-label={`${person.name} on LinkedIn`}
                className="text-muted-foreground hover:text-[#9c27b0] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9c27b0] rounded-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={22} />
              </a>
            )}
            {person.instagram && person.instagram !== "#" && (
              <a
                href={person.instagram}
                aria-label={`${person.name} on Instagram`}
                className="text-muted-foreground hover:text-[#9c27b0] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9c27b0] rounded-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={22} />
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <section id="judges" className="py-20">
      <div className={`container mx-auto px-3 sm:px-6 lg:px-8 ${orbitron.className}`}>
        {/* Judges */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white glow-text">
              Our Judges
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Industry experts who will evaluate your innovative projects
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6 sm:gap-10 items-stretch justify-items-stretch">
            {judges.map((judge, i) => (
              <PersonCard key={i} index={i} person={judge} />
            ))}
          </div>
        </div>

        {/* Faculty */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white glow-text-purple">
              Faculty Coordinators
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Academic leaders supporting and guiding the hackathon
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-6 sm:gap-12 max-w-3xl mx-auto items-stretch justify-items-stretch">
            {facultyToRender.map((f, i) => (
              <PersonCard key={i} index={i} person={f} showCompany={false} />
            ))}
          </div>
        </div>

        {/* Mentors */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white glow-text-pink">
              Mentors
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Experienced professionals ready to guide you through your hackathon journey
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-x-3 gap-y-6 sm:gap-10 max-w-[780px] mx-auto items-stretch justify-items-stretch">
            {mentorsToRender.map((m, i) => (
              <PersonCard key={i} index={i} person={m} />
            ))}
          </div>
        </div>

        {/* Core Team */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white glow-text">
              Core Team
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              The dedicated 15-member student team making HACKOASIS 2.0 possible
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-6 sm:gap-8 items-stretch justify-items-stretch">
            {coreToRender.map((c, i) => (
              <PersonCard key={i} index={i} person={c} showCompany={false} />
            ))}
          </div>
        </div>
      </div>

      {/* Animations & glow tweaks */}
      <style jsx global>{`
        @keyframes floatY {
          0%, 100% {
            transform: perspective(900px) translate3d(var(--tx,0), calc(var(--ty,0) - 2px), 0) rotateX(var(--rx,0)) rotateY(var(--ry,0));
          }
          50% {
            transform: perspective(900px) translate3d(var(--tx,0), calc(var(--ty,0) + 2px), 0) rotateX(var(--rx,0)) rotateY(var(--ry,0));
          }
        }
        .card-anim {
          transform-style: preserve-3d;
          border: 1px solid rgba(255,255,255,.12);
          animation: floatY 4.2s ease-in-out infinite;
          transition: box-shadow .35s ease, border-color .35s ease, transform .25s ease;
          will-change: transform;
          background:
            radial-gradient(60% 80% at 50% 10%, rgba(255,255,255,0.02), rgba(255,255,255,0) 60%),
            rgba(16,16,20,0.45);
          position: relative;
        }
        .card-anim::before {
          content:"";
          position:absolute; inset:0;
          border-radius:0.75rem; pointer-events:none;
          background:
            linear-gradient(120deg, rgba(157,78,221,.14), transparent 30%, transparent 70%, rgba(0,255,255,.14)),
            radial-gradient(70% 120% at 50% 0%, rgba(114,9,183,.14), transparent);
          opacity:0; transition:opacity .35s ease;
        }
        .card-anim::after {
          content:"";
          position:absolute; inset:-1px; border-radius:0.8rem; padding:1px;
          background: conic-gradient(from 0deg, rgba(157,78,221,.0), rgba(157,78,221,.25), rgba(0,255,255,.20), rgba(114,9,183,.25), rgba(157,78,221,.0));
          mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000);
          -webkit-mask: linear-gradient(#000,#000) content-box, linear-gradient(#000,#000);
          mask-composite: exclude;
          -webkit-mask-composite: xor;
          opacity:0; transition:opacity .35s ease;
          pointer-events:none;
        }
        .card-anim:hover { box-shadow: 0 24px 60px -22px rgba(157,78,221,.35), 0 0 0 1px rgba(114,9,183,.22) inset; border-color: rgba(157,78,221,.45); }
        .card-anim:hover::before, .card-anim:hover::after { opacity:1; }
        .card-anim .img-wrap { transform: translate3d(var(--imgx,0), var(--imgy,0), 0); }

        /* Softer section title glow */
        .glow-text,
        .glow-text-purple,
        .glow-text-pink {
          text-shadow:
            0 0 10px rgba(156, 39, 176, 0.18),
            0 0 22px rgba(106, 13, 173, 0.14);
        }

        /* keep rows even + add breathing space on small screens */
        @media (max-width: 639px) {
          #judges .grid { grid-auto-rows: 1fr; }
        }

        @media (prefers-reduced-motion: reduce) {
          .card-anim { animation: none; transform: none !important; }
          .card-anim .img-wrap { transform: none !important; }
        }
      `}</style>
    </section>
  )
}
