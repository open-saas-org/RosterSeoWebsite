import { ArrowRightIcon, GitHubIcon } from "./icons";

export function OpenSourceBand() {
  return (
    <div className="border-b border-line bg-muted">
      <div className="mx-auto flex max-w-[1160px] flex-col items-center gap-5 px-8 py-24 text-center">
        <span className="text-sm font-semibold text-primary">Would rather run it yourself?</span>
        <h2 className="text-[30px] font-bold sm:text-[42px]">It&apos;s open source, too</h2>
        <p className="max-w-[560px] text-[16.5px] leading-relaxed text-ink-soft">
          Hosting is the easy path, but it was never the only one. RosterSEO is MIT licensed, end to end — fork it,
          read every line, point it at your own DataForSEO and AI provider keys, and run it on your own
          infrastructure for free, forever. No feature gates, no seat limits, no asking permission.
        </p>
        <div className="mt-1 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="/open-source"
            className="flex items-center justify-center gap-2 rounded-[10px] bg-ink px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-ink-hover"
          >
            Why open source
            <ArrowRightIcon className="size-4" />
          </a>
          <a
            href="https://github.com/open-saas-org/RosterSeo"
            className="flex items-center justify-center gap-2 rounded-[10px] border border-line bg-white px-6 py-3.5 text-[15px] font-semibold text-ink hover:bg-muted"
          >
            <GitHubIcon className="size-4" />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
