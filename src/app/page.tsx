import HeroSection from '@/components/home/Hero'
import TopClassicSection from '@/components/home/TopClassic'
import ExperienceSection from '@/components/home/Experience'
import IngredientsShowcase from '@/components/IngredientsShowcase'
import TakeawaySection from '@/components/home/TakeAway'
import FeelTheChange from '@/components/FeelItCta'
import InstagramReels from '@/components/InstagramReels'
import PageTransition from '@/components/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <TopClassicSection />
      <ExperienceSection />
      <IngredientsShowcase />
      <TakeawaySection />
      <FeelTheChange />
      <InstagramReels />
    </PageTransition>
  )
}
