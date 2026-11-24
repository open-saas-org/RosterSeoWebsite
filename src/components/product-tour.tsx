"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Real screenshots (public/screenshots/*.jpg) captured directly from a
// live RosterSEO instance running against real DataForSEO/AI-provider
// credentials — not mockups, not staged data. See each caption for what's
// actually real in the shot. Order tells a real product-usage story: see
// your project, audit it, research keywords, track rank, size up a
// competitor, connect a platform, then (hosted-mode only) manage billing.
const SLIDES = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "app.rosterseo.com/",
    image: "/screenshots/dashboard.jpg",
    alt: "RosterSEO dashboard showing real Domain Authority, organic traffic, backlink data, and a completed Site Audit score for a connected project",
    caption: "Your project, at a glance — real Domain Authority, backlinks, and a live Site Audit score.",
  },
  {
    id: "site-audit",
    label: "Site Audit",
    path: "app.rosterseo.com/site-audit",
    image: "/screenshots/site-audit.jpg",
    alt: "Site Audit results showing 200 real pages crawled, a health score, and a prioritized issues table",
    caption: "Crawls real pages and finds real technical issues — tracked over time, not a one-off scan.",
  },
  {
    id: "keyword-research",
    label: "Keyword Research",
    path: "app.rosterseo.com/keyword-research",
    image: "/screenshots/keyword-research.jpg",
    alt: "Keyword Research results for 'project management software' showing real search volume, CPC, difficulty, a 12-month trend chart, and live SERP data",
    caption: "Real DataForSEO volume, CPC, and difficulty — down to a live 12-month trend chart and SERP preview.",
  },
  {
    id: "rank-tracking",
    label: "Rank Tracking",
    path: "app.rosterseo.com/rank-tracking",
    image: "/screenshots/rank-tracking.jpg",
    alt: "Rank Tracking table showing real search volume, keyword difficulty, CPC, and SERP features for tracked keywords",
    caption: "Real rankings, search volume, and SERP features (AI Overview, PAA) for every keyword you track.",
  },
  {
    id: "competitors",
    label: "Competitors",
    path: "app.rosterseo.com/competitors",
    image: "/screenshots/competitors.jpg",
    alt: "Competitor research showing real estimated traffic, organic keywords, referring domains, and domain rating for a tracked competitor domain",
    caption: "Track any competitor domain — real traffic, keywords, and backlink data, refreshed on demand.",
  },
  {
    id: "social",
    label: "Social Connections",
    path: "app.rosterseo.com/social/connections",
    image: "/screenshots/social-connections.jpg",
    alt: "Social Connections page showing Bluesky, Mastodon, LinkedIn, Pinterest, and Facebook Page connection cards",
    caption: "Connect Bluesky, Mastodon, LinkedIn, Pinterest, Facebook, Instagram, Threads, and X — verified live before it's saved.",
  },
  {
    id: "billing",
    label: "Usage & Billing",
    path: "app.rosterseo.com/settings/billing",
    image: "/screenshots/billing.jpg",
    alt: "Billing settings page showing the current plan, Starter/Pro/Agency upgrade options, and this month's usage per feature",
    caption: "Self-hosted installs never see this page at all — it only exists in hosted mode, gated by one clean check.",
  },
];

const SLIDE_MS = 4000;

export function ProductTour() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, SLIDE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // Restart the interval timer whenever the active slide changes (manual
    // click or auto-advance) so a manual click always gets a full SLIDE_MS
    // before advancing again, instead of cutting the next auto-advance short.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, paused]);

  const active = SLIDES[index]!;

  return (
    <div className="border-b border-line bg-white">
      <div className="mx-auto max-w-[1160px] px-8 py-24">
        <div className="mx-auto mb-10 flex max-w-[580px] flex-col items-center gap-3.5 text-center">
          <h2 className="text-[28px] font-bold sm:text-[38px]">See the real product</h2>
          <p className="text-[16.5px] text-ink-soft">
            These are screenshots of an actual RosterSEO instance, not illustrations — it plays through them on its own.
          </p>
        </div>

        <div
          className="mx-auto w-full max-w-[960px] overflow-hidden rounded-[18px] border border-line bg-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex h-[38px] items-center gap-1.5 border-b border-line bg-muted px-3.5">
            <div className="size-2.5 rounded-full bg-line" />
            <div className="size-2.5 rounded-full bg-line" />
            <div className="size-2.5 rounded-full bg-line" />
            <div className="ml-2.5 font-mono text-[11.5px] text-ink-faint">{active.path}</div>
          </div>

          <div className="relative aspect-[800/560] w-full overflow-hidden bg-muted">
            {SLIDES.map((slide, i) => (
              <Image
                key={slide.id}
                src={slide.image}
                alt={slide.alt}
                fill
                className={`tour-slide object-cover object-top transition-opacity duration-700 ease-in-out ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
                style={i === index && !paused ? { animationDuration: `${SLIDE_MS}ms` } : undefined}
                priority={i === 0}
              />
            ))}
          </div>

          <div className="flex gap-1.5 border-t border-line bg-muted/60 px-3.5 py-3">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Show ${slide.label}`}
                onClick={() => setIndex(i)}
                className="group h-1.5 flex-1 overflow-hidden rounded-full bg-line"
              >
                <span
                  key={i === index ? `active-${index}` : slide.id}
                  className={`block h-full rounded-full bg-primary ${
                    i < index ? "w-full" : i === index ? "tour-progress w-full" : "w-0"
                  } ${i === index && paused ? "[animation-play-state:paused]" : ""}`}
                  style={i === index ? { animationDuration: `${SLIDE_MS}ms` } : undefined}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-5 max-w-[640px] text-center">
          <span className="text-sm font-bold text-primary">{active.label}</span>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{active.caption}</p>
        </div>
      </div>
    </div>
  );
}
