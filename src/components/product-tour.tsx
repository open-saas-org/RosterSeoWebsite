"use client";

import { useState } from "react";
import Image from "next/image";

// Real screenshots (public/screenshots/*.jpg) captured directly from a
// live RosterSEO instance running against real DataForSEO/AI-provider
// credentials — not mockups, not staged data. See each caption for what's
// actually real in the shot.
const TABS = [
  {
    id: "keyword-research",
    label: "Keyword Research",
    path: "app.rosterseo.com/keyword-research",
    image: "/screenshots/keyword-research.jpg",
    alt: "Keyword Research results for 'project management software' showing real search volume, CPC, difficulty, a 12-month trend chart, and live SERP data",
    caption: "Real DataForSEO volume, CPC, and difficulty — down to a live 12-month trend chart and SERP preview, not a canned demo.",
  },
  {
    id: "social",
    label: "Social Connections",
    path: "app.rosterseo.com/social/connections",
    image: "/screenshots/social-connections.jpg",
    alt: "Social Connections page showing Bluesky, Mastodon, LinkedIn, Pinterest, and Facebook Page connection cards",
    caption: "Connect Bluesky, Mastodon, LinkedIn, Pinterest, Facebook, Instagram, Threads, and X — every connection is verified live before it's saved.",
  },
  {
    id: "billing",
    label: "Usage & Billing",
    path: "app.rosterseo.com/settings/billing",
    image: "/screenshots/billing.jpg",
    alt: "Billing settings page showing the current plan, Starter/Pro/Agency upgrade options, and this month's usage per feature",
    caption: "Self-hosted installs never see this page at all — it only exists in hosted mode, gated by one clean isSelfHosted() check.",
  },
];

export function ProductTour() {
  const [activeId, setActiveId] = useState(TABS[0]!.id);
  const active = TABS.find((t) => t.id === activeId)!;

  return (
    <div className="border-b border-line bg-white">
      <div className="mx-auto max-w-[1160px] px-8 py-24">
        <div className="mx-auto mb-10 flex max-w-[580px] flex-col items-center gap-3.5 text-center">
          <h2 className="text-[28px] font-bold sm:text-[38px]">See the real product</h2>
          <p className="text-[16.5px] text-ink-soft">
            These are screenshots of an actual RosterSEO instance, not illustrations — click a tab to see each one.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveId(tab.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                tab.id === activeId ? "bg-ink text-white" : "border border-line bg-white text-ink-soft hover:bg-muted"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mx-auto w-full max-w-[960px] overflow-hidden rounded-[18px] border border-line bg-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)]">
          <div className="flex h-[38px] items-center gap-1.5 border-b border-line bg-muted px-3.5">
            <div className="size-2.5 rounded-full bg-line" />
            <div className="size-2.5 rounded-full bg-line" />
            <div className="size-2.5 rounded-full bg-line" />
            <div className="ml-2.5 font-mono text-[11.5px] text-ink-faint">{active.path}</div>
          </div>
          <Image key={active.id} src={active.image} alt={active.alt} width={800} height={600} className="h-auto w-full" />
        </div>

        <p className="mx-auto mt-5 max-w-[640px] text-center text-sm leading-relaxed text-ink-soft">{active.caption}</p>
      </div>
    </div>
  );
}
