import { skillGroups } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28"
    >
      <SectionHeading
        index="//03"
        tag="Skills"
        title="Toolbox"
        subtitle="The stack I reach for to model, query, visualize and explain data."
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, i) => (
          <div key={group.title} className="flex flex-col gap-4 bg-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-sm text-primary">{group.title}</h3>
              <span className="font-mono text-xs text-muted-foreground">
                {`0${i + 1}`}
              </span>
            </div>
            <ul className="flex flex-col gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span
                    className="h-1 w-1 rounded-full bg-primary/60"
                    aria-hidden="true"
                  />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
