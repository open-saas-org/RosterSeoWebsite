import { CheckIcon } from "./icons";

export function Steps() {
  return (
    <div className="px-8 py-24">
      <div className="mx-auto max-w-[1160px]">
        <div className="mx-auto mb-14 flex max-w-[560px] flex-col items-center gap-3.5 text-center">
          <h2 className="text-[28px] font-bold sm:text-[38px]">Get started in 3 steps</h2>
          <p className="text-[16.5px] text-ink-soft">
            From zero to a fully migrated, self-hosted instance in a few minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-2.5">
              <div className="flex size-[30px] items-center justify-center rounded-full bg-ink text-[13px] font-bold text-white">
                1
              </div>
              <h3 className="text-[17px] font-bold">Install the CLI</h3>
            </div>
            <div className="flex flex-col gap-1.5 rounded-[10px] bg-[#0a0a0a] p-4.5 font-mono text-[13px] text-neutral-200">
              <div>
                <span className="text-neutral-500">$</span> npm install -g @rosterseo/cli
              </div>
              <div>
                <span className="text-neutral-500">$</span> rosterseo init
              </div>
            </div>
            <p className="text-sm leading-relaxed text-ink-soft">
              One command scaffolds your config and Docker Compose file — no manual YAML editing.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-2.5">
              <div className="flex size-[30px] items-center justify-center rounded-full bg-ink text-[13px] font-bold text-white">
                2
              </div>
              <h3 className="text-[17px] font-bold">Add your API keys</h3>
            </div>
            <div className="flex flex-col gap-2.5 rounded-[10px] border border-line bg-muted p-4.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12.5px] text-ink-soft">DATAFORSEO_LOGIN</span>
                <span className="size-4 rounded bg-seo" />
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[12.5px] text-ink-soft">OPENROUTER_API_KEY</span>
                <span className="size-4 rounded bg-seo" />
              </div>
            </div>
            <p className="text-sm leading-relaxed text-ink-soft">
              Bring your own DataForSEO and AI provider keys — nothing is shared with anyone else.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-2.5">
              <div className="flex size-[30px] items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white">
                3
              </div>
              <h3 className="text-[17px] font-bold">Track, audit, and grow</h3>
            </div>
            <div className="flex items-center gap-2.5 rounded-[10px] border border-teal-200 bg-primary-tint p-4.5">
              <CheckIcon className="size-5 shrink-0 text-primary" />
              <span className="text-[13.5px] font-semibold text-primary-dark">Migrations run automatically on boot</span>
            </div>
            <p className="text-sm leading-relaxed text-ink-soft">
              Run your first site audit and watch real data — not a demo — roll in immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
