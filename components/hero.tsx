import { profile } from '@/lib/site-data'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Download } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20"
    >
      <div className="flex items-center">
        <div className="flex flex-col gap-6">
          <p className="tag rise" style={{ animationDelay: '0ms' }}>
            {'<p>this.is</p>'}
          </p>

          <h1
            className="rise text-5xl font-semibold leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl"
            style={{ animationDelay: '80ms' }}
          >
            Shreya
            <br />
            Bajpai
          </h1>

          <div
            className="rise flex flex-col gap-1"
            style={{ animationDelay: '160ms' }}
          >
            <span className="tag">{'<h2>'}</span>
            <p className="font-mono text-base text-muted-foreground md:text-lg">
              {profile.role}
            </p>
            <span className="tag">{'</h2>'}</span>
          </div>

          <p
            className="rise max-w-md text-pretty leading-relaxed text-muted-foreground"
            style={{ animationDelay: '220ms' }}
          >
            I transform messy, disconnected data into clear insights, dashboards, and decisions — using SQL, Python, Power BI.
          </p>

          <div
            className="rise flex flex-wrap items-center gap-3 pt-2"
            style={{ animationDelay: '300ms' }}
          >
            <a
  href={profile.resume}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-sm text-primary-foreground transition-opacity hover:opacity-90"
>
  <Download className="h-4 w-4" />
  Resume
</a>
            <a
              href="#contact"
              className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              {'<GetInTouch/>'}
            </a>
            <div className="flex items-center gap-2 pl-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <p className="tag" style={{ animationDelay: '360ms' }}>
            {'</p>'}
          </p>
        </div>

          <div
            className="absolute -right-3 -top-3 hidden font-mono text-xs text-primary/50 lg:block"
            aria-hidden="true"
          >
            {'{ }'}
          </div>
        </div>
    </section>
  )
}
