import { metrics } from '@/lib/site-data'
import { CountUp } from '@/components/count-up'
import { TrendLine } from '@/components/trend-line'

const sparks = [
  [3, 6, 5, 9, 8, 12, 16, 22],
  [2, 4, 7, 6, 10, 14, 18, 24],
  [1, 1, 2, 2, 3, 3, 3, 3],
  [5, 8, 6, 11, 14, 13, 19, 26],
  [4, 5, 8, 7, 12, 15, 20, 25],
]

export function Metrics() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 md:px-8">
      <div className="flex w-full flex-col overflow-hidden rounded-xl border border-border bg-border md:flex-row">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className="flex flex-1 flex-col gap-3 bg-card p-5 md:p-6"
          >
            <div className="flex items-baseline justify-between gap-2">
              <CountUp
                value={m.value}
                className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
              />

              <span className="font-mono text-xs text-primary/50">
                {`0${i + 1}`}
              </span>
            </div>

            <TrendLine
              data={sparks[i] ?? [2, 5, 4, 8, 11, 15, 19, 24]}
              width={160}
              height={28}
              strokeWidth={1.5}
              showArea={false}
              className="h-7 w-full"
              ariaLabel={`${m.label} trend`}
            />

            <p className="text-xs leading-snug text-muted-foreground md:text-sm">
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}