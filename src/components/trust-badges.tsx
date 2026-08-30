import { GitBranchIcon, NoLockIcon, ServerIcon, ShieldIcon } from "./icons";

const BADGES = [
  { icon: ShieldIcon, label: "MIT Licensed" },
  { icon: ServerIcon, label: "Self-hostable — Docker & Railway" },
  { icon: GitBranchIcon, label: "100% Open Source" },
  { icon: NoLockIcon, label: "No vendor lock-in" },
];

export function TrustBadges() {
  return (
    <div className="border-y border-line bg-muted">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-center gap-x-12 gap-y-3 px-8 py-5.5">
        {BADGES.flatMap((badge, i) => {
          const item = (
            <div key={badge.label} className="flex items-center gap-2.5">
              <badge.icon className="size-[18px] text-ink-soft" />
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
