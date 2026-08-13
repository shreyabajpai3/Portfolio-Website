'use client'

import { useState } from 'react'
import { projects, type Project } from '@/lib/site-data'
import { SectionHeading } from '@/components/section-heading'
import { CountUp } from '@/components/count-up'
import { GithubIcon } from '@/components/brand-icons'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading
        index="//02"
        tag="Portfolio"
        title="Projects & case studies"
        subtitle="End-to-end analytics builds — from raw tables in SQL Server to interactive Power BI dashboards and the decisions they unlock."
      />

      <div className="mt-12 flex flex-col gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40">
      <div className="flex flex-col">
        
        {/* Project number */}
        <div className="p-6 pb-0 md:p-8 md:pb-0">
          <span className="inline-block rounded-md bg-background px-2 py-1 font-mono text-xs text-primary">
            {`0${index + 1}`}
          </span>
        </div>

        {/* Project content */}
        <div className="flex flex-col gap-5 p-6 md:p-8">
          <div className="flex flex-col gap-2">
            <p className="tag">{project.category}</p>

            <h3 className="text-xl font-medium tracking-tight text-balance md:text-2xl">
              {project.title}
            </h3>

            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 border-y border-border py-4">
            {project.metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-0.5">
                <CountUp
                  value={m.value}
                  className="text-lg font-semibold text-foreground"
                />
                <span className="font-mono text-xs text-muted-foreground">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded border border-border px-2 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-auto flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="rounded-md bg-primary px-4 py-2 font-mono text-xs text-primary-foreground transition-opacity hover:opacity-90"
            >
              {open ? '</case_study>' : '<case_study/>'}
            </button>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-border px-4 py-2 font-mono text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Case study */}
      {open && (
        <div className="grid gap-x-8 gap-y-6 border-t border-border bg-background/40 p-6 md:grid-cols-2 md:p-8">
          {project.caseStudy.map((block) => (
            <div key={block.heading} className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                <h4 className="font-mono text-sm text-foreground">
                  {block.heading}
                </h4>
              </div>

              {block.body && (
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {block.body}
                </p>
              )}

              {block.points && (
                <ul className="flex flex-col gap-1.5">
                  {block.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        className="mt-1 text-primary/60"
                        aria-hidden="true"
                      >
                        ›
                      </span>

                      <span className="text-pretty">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </article>
  )
}