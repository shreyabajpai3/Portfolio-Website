import { education } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function Education() {
  return (
    <section
      id="education"
      className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
    >
      <SectionHeading
        index="//04"
        tag="Education"
        title="Foundation"
      />

      <div className="mt-12 flex flex-col gap-4">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="grid gap-4 rounded-xl border border-border bg-card p-6 md:grid-cols-[auto_1fr] md:p-8"
          >
            <div className="flex items-start">
              <span className="rounded-md border border-primary/40 px-3 py-1.5 font-mono text-xs text-primary">
                {edu.period}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium tracking-tight md:text-xl">
                {edu.degree}
              </h3>
              <p className="font-mono text-sm text-primary/80">
                {edu.institution}
              </p>
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {edu.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
