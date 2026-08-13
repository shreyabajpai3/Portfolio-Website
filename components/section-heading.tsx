type SectionHeadingProps = {
  index: string
  tag: string
  title: string
  subtitle?: string
}

export function SectionHeading({
  index,
  tag,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="tag">{index}</span>
        <span className="h-px w-8 bg-border" aria-hidden="true" />
        <span className="tag">{`<${tag}/>`}</span>
      </div>
      <h2 className="text-3xl font-medium tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  )
}
