import { ArrowRightIcon, StarIcon } from "./icons";

export function Hero() {
  return (
    <div className="px-8 pb-16 pt-24">
      <div className="mx-auto flex max-w-[1160px] flex-col items-center gap-7 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-line bg-muted py-1.5 pl-2 pr-3.5">
          <span className="rounded-full bg-ink px-2 py-0.5 text-[11px] font-bold tracking-wide text-white">MIT</span>
          <span className="text-[13.5px] font-medium text-ink-soft">100% open source &amp; self-hosted</span>
        </div>

        <h1 className="max-w-[820px] text-[36px] font-bold leading-[1.1] sm:text-[46px] sm:leading-[1.08] lg:text-[60px] lg:leading-[1.06]">
          SEO, AI visibility, and publishing — <span className="text-primary">one open platform</span>
        </h1>

        <p className="max-w-[640px] text-base leading-[1.55] text-ink-soft sm:text-[19px]">
          Track rankings, audit your site, and see how ChatGPT, Gemini, and Perplexity talk about your brand — then
          publish content to your blog and social accounts from the same place. Self-hosted, MIT licensed, and yours
          to run.
        </p>

        <div className="mt-1 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <a
            href="https://app.rosterseo.com"
            className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-[10px] bg-ink px-6 py-3.5 text-[15.5px] font-semibold text-white hover:bg-neutral-800 sm:w-auto"
          >
            Get Started
            <ArrowRightIcon className="size-4" />
          </a>
          <a
            href="https://github.com/open-saas-org/seo"
            className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-[10px] border border-line px-[22px] py-3.5 text-[15.5px] font-semibold text-ink hover:bg-muted sm:w-auto"
          >
            <StarIcon className="size-[17px]" />
            Star on GitHub
          </a>
        </div>

        <DashboardPreview />
      </div>
    </div>
  );
}

// Greeked, representative dashboard graphic — stands in until real product
// screenshots are captured and dropped in (tracked separately).
function DashboardPreview() {
  return (
    <div className="mt-9 w-full max-w-[1040px] overflow-hidden rounded-[18px] border border-line bg-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)]">
      <div className="flex h-[38px] items-center gap-1.5 border-b border-line bg-muted px-3.5">
        <div className="size-2.5 rounded-full bg-line" />
        <div className="size-2.5 rounded-full bg-line" />
        <div className="size-2.5 rounded-full bg-line" />
        <div className="ml-2.5 font-mono text-[11.5px] text-ink-faint">app.rosterseo.com/dashboard</div>
      </div>
      <div className="flex bg-white">
        <div className="hidden w-[190px] shrink-0 flex-col gap-4 border-r border-line p-3.5 text-left sm:flex">
          <div className="h-2 w-[70px] rounded bg-ink/85" />
          <div className="flex flex-col gap-2.5">
            <div className="h-1.5 w-full rounded bg-seo/70" />
            <div className="h-1.5 w-4/5 rounded bg-muted-2" />
            <div className="h-1.5 w-[90%] rounded bg-muted-2" />
            <div className="h-1.5 w-[70%] rounded bg-muted-2" />
            <div className="h-1.5 w-[85%] rounded bg-muted-2" />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4.5 p-5 text-left sm:p-6.5">
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4">
            {[
              { w: "40%", color: "bg-ink/85" },
              { w: "50%", color: "bg-seo/80" },
              { w: "45%", color: "bg-ink/85" },
              { w: "35%", color: "bg-sky/85" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-2 rounded-[10px] border border-line p-3">
                <div className="h-1.5 w-3/5 rounded bg-muted-2" />
                <div className={`h-3.5 rounded ${stat.color}`} style={{ width: stat.w }} />
              </div>
            ))}
          </div>
          <div className="flex min-h-[150px] flex-1 items-end rounded-[10px] border border-line p-4">
            <svg viewBox="0 0 400 110" width="100%" height="110" preserveAspectRatio="none">
              <polyline
                points="0,90 40,70 80,75 120,50 160,55 200,30 240,40 280,20 320,28 360,10 400,15"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth={2.5}
              />
              <polyline
                points="0,100 40,95 80,92 120,88 160,90 200,80 240,82 280,70 320,74 360,65 400,68"
                fill="none"
                stroke="var(--color-ink-faint)"
                strokeWidth={2}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
