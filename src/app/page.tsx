import HeroSection from '@/components/home/Hero'
import TopClassicSection from '@/components/home/TopClassic'
import ExperienceSection from '@/components/home/Experience'
import TakeawaySection from '@/components/home/TakeAway'
import FeelTheChange from '@/components/FeelItCta'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <TopClassicSection />
      <ExperienceSection />
      <TakeawaySection />
      <FeelTheChange />
      <Footer />
    </PageTransition>
  )
}
