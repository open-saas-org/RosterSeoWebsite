import Image from "next/image";
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
            href="https://github.com/open-saas-org/RosterSeo"
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

// A real screenshot of a live RosterSEO instance (public/screenshots/
// dashboard.jpg) — linear.app's actual Domain Authority, Backlinks, and
// dashboard layout, captured straight from the running app, not a mockup.
function DashboardPreview() {
  return (
    <div className="mt-9 w-full max-w-[1040px] overflow-hidden rounded-[18px] border border-line bg-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)]">
      <div className="flex h-[38px] items-center gap-1.5 border-b border-line bg-muted px-3.5">
        <div className="size-2.5 rounded-full bg-line" />
        <div className="size-2.5 rounded-full bg-line" />
        <div className="size-2.5 rounded-full bg-line" />
        <div className="ml-2.5 font-mono text-[11.5px] text-ink-faint">app.rosterseo.com/dashboard</div>
      </div>
      <Image
        src="/screenshots/dashboard.jpg"
        alt="RosterSEO dashboard showing real Domain Authority, organic traffic, and backlink data for a connected project"
        width={800}
        height={597}
        className="h-auto w-full"
        priority
      />
    </div>
  );
}
