"use client"

import { useState } from "react"
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

const ADDRESS =
  "IEM Gurukul Building, Y2, EP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091"
const GMAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`
const GMAPS_VIEW = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`
const GMAPS_DIRS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`

export default function Footer() {
  const contacts = [
    { name: "Sreyasi Mondal", phone: "9883177160" },
    { name: "Debangkita Saha", phone: "8777494652" },
    { name: "Debangshu Chatterjee", phone: "6290277345" },
  ]

  const [mapLoaded, setMapLoaded] = useState(false)

  return (
    <footer
      id="footer"
      role="contentinfo"
      className={`bg-card/50 backdrop-blur-sm border-t border-border scroll-mt-24 ${orbitron.className}`}
    >
      {/* tighter vertical padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        {/* single centered heading, smaller margin */}
        <h2 className="text-center text-xl sm:text-2xl font-semibold tracking-wide mb-3 text-[#fffffe]">
          Contact Us
        </h2>

        {/* tighter grid + no extra vertical padding */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-start">
          {/* LEFT — contacts */}
          <div className="flex flex-col justify-center">
            <ul className="max-w-md text-left space-y-2">
              {contacts.map((c) => (
                <li key={c.phone} className="text-sm sm:text-base">
                  <a
                    href={`tel:${c.phone}`}
                    aria-label={`Call ${c.name}`}
                    className="contactRow"
                  >
                    <span className="name">{c.name}</span>
                    <span className="dash">—</span>
                    <span className="phoneChip">{c.phone}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — compact map */}
          <div>
            <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-[#7c3aed40] via-[#4f46e540] to-[#06b6d440] shadow-[0_0_18px_-8px_rgba(124,58,237,0.30)]">
              <div className="relative rounded-xl overflow-hidden bg-[#0b0b18]/70 backdrop-blur-sm border border-white/10">
                {!mapLoaded && (
                  <div className="absolute inset-0 animate-pulse bg-[linear-gradient(110deg,rgba(255,255,255,0.06)25%,rgba(255,255,255,0.02)30%,rgba(255,255,255,0.06)35%)] bg-[length:200%_100%]" />
                )}

                {/* smaller height + no extra margins */}
                <div className="h-36 sm:h-40">
                  <iframe
                    title="IEM Gurukul Building Map"
                    src={GMAPS_EMBED}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                    onLoad={() => setMapLoaded(true)}
                  />
                </div>

                {/* compact actions */}
                <div className="flex gap-2 p-2 border-t border-white/10 bg-black/30 text-xs">
                  <a
                    href={GMAPS_VIEW}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="actionBtn"
                  >
                    Open in Google Maps
                  </a>
                  <a
                    href={GMAPS_DIRS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="actionBtn"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom bar — trimmed spacing */}
        <div
          className="mt-3 pt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderTop: "1px solid #24005f66" }}
        >
          <p className="text-xs sm:text-sm text-[#fffffecc] text-center sm:text-left">
            © 2025 IEM HACKOASIS 2.0
          </p>

          <div className="flex items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/iemhackoasisofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="iconLink"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/108378037/admin/inbox/"
              target="_blank"
              rel="noopener noreferrer"
              className="iconLink"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61579238080552&sk=about"
              target="_blank"
              rel="noopener noreferrer"
              className="iconLink"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a href="mailto:futurebuilders247@gmail.com" className="iconLink">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contactRow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 8px;
          border-radius: 10px;
          color: #fffffe;
          text-decoration: none;
          background: rgba(38, 0, 97, 0.12);
          border: 1px solid rgba(157, 134, 255, 0.25);
          transition: all 120ms ease;
        }
        .contactRow:hover {
          background: rgba(38, 0, 97, 0.2);
          border-color: rgba(157, 134, 255, 0.5);
        }
        .name { font-weight: 600; }
        .dash { color: #aaa; }
        .phoneChip {
          font-weight: 700;
          font-size: 0.85rem;
          background: rgba(38, 0, 97, 0.25);
          padding: 2px 6px;
          border-radius: 6px;
        }
        .iconLink {
          color: #fffffecc;
          transition: color 150ms ease;
        }
        .iconLink:hover { color: #fff; }
        .actionBtn {
          padding: 3px 6px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
          font-weight: 600;
          transition: all 120ms ease;
        }
        .actionBtn:hover { background: rgba(255, 255, 255, 0.12); }
      `}</style>
    </footer>
  )
}
