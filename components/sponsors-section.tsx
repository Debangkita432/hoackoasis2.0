import { Card, CardContent } from "@/components/ui/card"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export default function SponsorsSection() {
  return (
    <section className={`py-20 ${orbitron.className}`} id="sponsors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-6 text-gradient">
            Our Partners & Sponsors
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Proud to be supported by industry leaders and community partners
          </p>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-[#260061]/20 to-[#250060]/20 border border-[#260061]/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Become a Sponsor</h3>
              <p className="text-muted-foreground mb-6">
                Partner with us to support the next generation of innovators and showcase your brand to talented
                developers.
              </p>
              <a
                href="mailto:futurebuilders247@gmail.com"
                className="inline-flex items-center px-6 py-3 
                bg-gradient-to-r from-[#260061] to-[#250060] 
                hover:from-[#2e0070] hover:to-[#29006a] 
                text-white font-semibold rounded-lg 
                transition-all duration-300 shadow-lg hover:shadow-[#260061]/50
                focus:outline-none focus:ring-2 focus:ring-[#260061] focus:ring-offset-2"
              >
                Contact Us
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
