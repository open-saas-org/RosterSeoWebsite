import { CheckIcon, GitBranchIcon, SearchIcon, ServerIcon } from "./icons";

const BADGES = [
  { icon: SearchIcon, label: "Real DataForSEO + Google data, not estimates", color: "text-seo" },
  { icon: ServerIcon, label: "Live in minutes — no setup, no servers to run", color: "text-sky" },
  { icon: CheckIcon, label: "14-day free trial, no credit card", color: "text-primary" },
  { icon: GitBranchIcon, label: "Open source — self-host it anytime", color: "text-publish" },
];

export function TrustBadges() {
  return (
    <div className="border-y border-line bg-muted">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-center gap-x-12 gap-y-3 px-8 py-5.5">
        {BADGES.flatMap((badge, i) => {
          const item = (
            <div key={badge.label} className="flex items-center gap-2.5">
              <badge.icon className={`size-[18px] ${badge.color}`} />
              <span className="text-sm font-semibold text-ink-soft">{badge.label}</span>
            </div>
          );
          if (i === 0) return [item];
          return [<div key={`div-${badge.label}`} className="hidden h-[18px] w-px bg-line sm:block" />, item];
        })}
      </div>
    </div>
  );
}
