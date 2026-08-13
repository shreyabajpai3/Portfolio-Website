import { profile } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 font-mono text-xs text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <span>
          {'</'}
          <span className="text-primary/70">{profile.name.replace(' ', '_')}</span>
          {'>'}
        </span>
        <span>{`© ${new Date().getFullYear()} — Bengaluru,India`}</span>
      </div>
    </footer>
  )
}
