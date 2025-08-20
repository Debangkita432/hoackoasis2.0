"use client"
import { useEffect, useState } from "react"

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)

    const timer = setTimeout(() => setIsLoading(false), 8000)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <video
        src={isMobile ? "/hackoasis_phn.mp4" : "/hackoasis.mp4"}
        autoPlay
        muted
        playsInline
        onEnded={() => setIsLoading(false)}
        onLoadedMetadata={(e) => {
          e.currentTarget.playbackRate = 0.8
        }}
        className="w-full h-full object-contain bg-black transform scale-90"
      />
    </div>
  )
}
