import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Metrics } from '@/components/metrics'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-dvh">
      <SiteNav />
      <Hero />
      <Metrics />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <SiteFooter />
    </main>
  )
}
