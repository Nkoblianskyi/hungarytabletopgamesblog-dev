import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import IntroSection from "@/components/sections/IntroSection"
import BenefitsSection from "@/components/sections/BenefitsSection"
import GamesSection from "@/components/sections/GamesSection"
import TraditionalSection from "@/components/sections/TraditionalSection"
import CookieBanner from "@/components/CookieBanner"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <BenefitsSection />
        <GamesSection />
        <TraditionalSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
