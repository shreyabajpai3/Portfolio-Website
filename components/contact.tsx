import { profile } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { TrendLine } from '@/components/trend-line'
import { GithubIcon, LinkedinIcon,EmailIcon } from '@/components/brand-icons'

const links = [
  { label: 'Email', value: 'https://mail.google.com/mail/?view=cm&fs=1&to=' + profile.email, tag: 'Gmail' },
  { label: 'LinkedIn', value: profile.linkedin, tag: 'LinkedIn' },
  { label: 'GitHub', value: profile.github, tag: 'GitHub' },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
    >
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
          <div className="flex flex-col gap-6 p-8 md:p-10">
            <SectionHeading
              index="//05"
              tag="Contact"
              title="Let's connect"
              subtitle={profile.availability + '. Based in ' + profile.location + '.'}
            />

            <div className="flex flex-wrap gap-3 pt-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.value}
                  target={link.value.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md border border-border px-4 py-2.5 font-mono text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {link.label === 'GitHub' && (
                    <GithubIcon className="h-4 w-4" />
                  )}
                  {link.label === 'LinkedIn' && (
                    <LinkedinIcon className="h-4 w-4" />
                  )}
                  {link.label === 'Email' && (
                    <EmailIcon className="h-4 w-4" />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col justify-between gap-6 border-t border-border bg-background/40 p-8 md:p-10 lg:border-l lg:border-t-0">
            <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
              <span className="text-primary/70">availability.status</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary pulse-dot" />
                open
              </span>
            </div>
            <div>
              <p className="font-mono text-xs text-muted-foreground">
                response.rate
              </p>
              <p className="text-4xl font-semibold text-foreground">24h</p>
            </div>
            <TrendLine
              data={[10, 14, 12, 18, 22, 20, 28, 34, 40]}
              width={320}
              height={80}
              className="h-20 w-full"
              ariaLabel="Engagement trend"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
