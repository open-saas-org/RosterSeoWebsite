import { CheckIcon, MegaphoneIcon, PenIcon, SearchIcon } from "./icons";

const PILLARS = [
  {
    icon: SearchIcon,
    name: "SEO",
    color: "seo" as const,
    description:
      "Research keywords, audit every page, track rankings daily, size up competitors, and monitor how AI answer engines mention your brand.",
    items: ["Page Analyzer & Site Audit", "Rank Tracking & Keyword Research", "AI Visibility & Local SEO"],
  },
  {
    icon: PenIcon,
    name: "Publish",
    color: "publish" as const,
    description:
      "Write once, then publish everywhere — WordPress, Ghost, Webflow, HubSpot, and more — with AI-respun variants per platform.",
    items: ["9+ blog platform connections", "Per-target AI-respun copy", "Scheduled & one-click sends"],
  },
  {
    icon: MegaphoneIcon,
    name: "Social",
    color: "sky" as const,
    description: "Schedule and post across every major platform from one queue, with independent status per target.",
    items: ["LinkedIn, X, Threads, Meta", "Pinterest & Mastodon", "Short-form, platform-native copy"],
  },
];

const TINT: Record<string, string> = { seo: "bg-seo-tint", publish: "bg-publish-tint", sky: "bg-sky-tint" };
const SOLID: Record<string, string> = { seo: "bg-seo", publish: "bg-publish", sky: "bg-sky" };
const TEXT: Record<string, string> = { seo: "text-seo", publish: "text-publish", sky: "text-sky" };

export function Pillars() {
  return (
    <div className="px-8 py-24">
      <div className="mx-auto max-w-[1160px]">
        <div className="mx-auto mb-14 flex max-w-[560px] flex-col items-center gap-3.5 text-center">
          <h2 className="text-[28px] font-bold sm:text-[38px]">Three pillars, one workspace</h2>
          <p className="text-[16.5px] text-ink-soft">
            Everything a growing site needs to get found — by search engines and by AI.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div key={pillar.name} className={`flex flex-col gap-4 rounded-[14px] border border-line p-7 ${TINT[pillar.color]}`}>
              <div className={`flex size-[42px] items-center justify-center rounded-[10px] ${SOLID[pillar.color]}`}>
                <pillar.icon className="size-[22px] text-white" />
              </div>
              <h3 className="text-xl font-bold">{pillar.name}</h3>
              <p className="text-[14.5px] leading-relaxed text-ink-soft">{pillar.description}</p>
              <div className="mt-1.5 flex flex-col gap-2">
                {pillar.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[13.5px] text-ink-soft">
                    <CheckIcon className={`size-3.5 shrink-0 ${TEXT[pillar.color]}`} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
