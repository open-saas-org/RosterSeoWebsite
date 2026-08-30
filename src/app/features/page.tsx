import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";
import { ArrowRightIcon } from "@/components/icons";
import {
  StatsVisual,
  ChecklistVisual,
  ChartVisual,
  TableVisual,
  AvatarRowsVisual,
  ChatVisual,
  CardGridVisual,
} from "@/components/feature-visuals";
import type { ComponentType } from "react";

export const metadata: Metadata = {
  title: "Features — RosterSEO",
  description: "Every real feature in RosterSEO: SEO research and audits, AI-answer-engine visibility tracking, and multi-platform publishing.",
};

type Feature = {
  id: string;
  pillar: "SEO" | "Publish" | "Social";
  flagship?: boolean;
  title: string;
  description: string;
  points: string[];
  visual: ComponentType;
};

const FEATURES: Feature[] = [
  {
    id: "page-analyzer",
    pillar: "SEO",
    flagship: true,
    title: "Page Analyzer",
    description:
      "Point it at any URL and a target keyword. RosterSEO crawls the page and every real top-10 competitor, pulls real DataForSEO keyword and SERP data, checks Core Web Vitals, and — if you've connected Search Console and GA4 — grounds the whole analysis in your page's real performance, not just estimates.",
    points: [
      "Real crawl of your page plus every top-10 SERP competitor",
      "Competitor strength sizing — which rivals are actually beatable",
      "AI-written fix-it plan prioritized around realistic wins",
    ],
    visual: StatsVisual,
  },
  {
    id: "site-audit",
    pillar: "SEO",
    title: "Site Audit",
    description:
      "A full breadth-first crawl of your site that surfaces the technical issues that actually move rankings — broken links, missing metadata, orphaned pages, thin content, and more — with a real link graph, not a sample.",
    points: ["Site-wide BFS crawl with a real internal link graph", "Broken links, orphaned pages, cannibalization checks", "Per-page triage: mark issues in progress or resolved"],
    visual: ChecklistVisual,
  },
  {
    id: "rank-tracking",
    pillar: "SEO",
    title: "Rank Tracking",
    description:
      "Real daily position checks for every keyword you track, with full history — not a weekly snapshot or a modeled estimate. See exactly when a change in your content or a competitor's moved you up or down.",
    points: ["Real daily position checks, not weekly estimates", "Full ranking history per keyword", "Grouped tracking runs so you know what changed and when"],
    visual: ChartVisual,
  },
  {
    id: "keyword-research",
    pillar: "SEO",
    title: "Keyword Research",
    description:
      "Real search volume, CPC, competition, and difficulty for every keyword idea — tiered by relevance (related matches first, then substring variations, then broader ideas) so the first results are the most useful ones.",
    points: ["Real DataForSEO volume, CPC, and difficulty", "Tiered results: related → substring → broader ideas", "Location-aware — not hardcoded to one country"],
    visual: TableVisual,
  },
  {
    id: "ai-visibility",
    pillar: "SEO",
    title: "AI Visibility",
    description:
      "Track how ChatGPT, Gemini, and Perplexity actually mention, cite, and describe your brand when someone asks a question your prospects would ask — and see which competitors get mentioned in your place.",
    points: ["Real sampling across ChatGPT, Gemini, and Perplexity", "Mention, citation, and sentiment tracking over time", "Query Fan-Out: see the follow-up questions AI models generate"],
    visual: AvatarRowsVisual,
  },
  {
    id: "local-seo",
    pillar: "SEO",
    title: "Local SEO",
    description:
      "Connect your Google Business Profile and track how your listing performs — real rank-grid scans across a map grid, review monitoring, and an optimization checklist grounded in what's actually incomplete.",
    points: ["Real Google Business Profile data, not a mock listing", "Grid-based local rank scanning", "An optimization checklist that reflects your real profile"],
    visual: CardGridVisual,
  },
  {
    id: "cappy",
    pillar: "SEO",
    title: "Cappy, your in-app AI agent",
    description:
      "Ask Cappy to research keywords, size up a competitor, check your latest rankings, or draft outreach — it reads and writes across the whole product on your behalf, with every tool call visible before it runs.",
    points: ["Reads and writes across the real product data", "Every tool call shown and confirmable, nothing silent", "Remembers project context between conversations"],
    visual: ChatVisual,
  },
  {
    id: "publish",
    pillar: "Publish",
    title: "Publish",
    description:
      "Write a post once, then send it to WordPress, Ghost, Webflow, HubSpot, and more — each with an AI-respun variant tuned to that platform, and independent send status so one failed target never blocks the rest.",
    points: ["9+ blog platform connections, one Markdown source", "Per-target AI-respun copy, not a blind copy-paste", "Independent status per platform — schedule or send now"],
    visual: CardGridVisual,
  },
  {
    id: "social",
    pillar: "Social",
    title: "Social",
    description:
      "Queue short-form posts across LinkedIn, X, Threads, Meta, Pinterest, and Mastodon from one composer, with platform-native copy and independent status per target — same shape as Publish, built for social's format.",
    points: ["LinkedIn, X, Threads, Meta, Pinterest, Mastodon", "Platform-native, short-form copy per target", "Schedule ahead or post immediately"],
    visual: ChatVisual,
  },
];

const PILLAR_COLOR: Record<Feature["pillar"], string> = {
  SEO: "text-seo",
  Publish: "text-publish",
  Social: "text-sky",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="Everything, backed by real data"
        description="No feature in RosterSEO fabricates a plausible-looking number. A real API call succeeds, or the page honestly says it isn't connected yet."
      />

      <div className="mx-auto max-w-[1160px] px-8 py-8">
        <div className="flex flex-wrap justify-center gap-2 py-8">
          {FEATURES.map((f) => (
            <a
              key={f.id}
              href={`#${f.id}`}
              className="rounded-full border border-line px-3.5 py-1.5 text-[13px] font-medium text-ink-soft hover:border-ink hover:text-ink"
            >
              {f.title}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-20 py-8">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.id}
              id={feature.id}
              className={`flex scroll-mt-24 flex-col items-center gap-10 lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="flex-1">
                <div className="overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-muted-2 to-muted">
                  <div className="h-[260px]">
                    <feature.visual />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <span className={`text-[13px] font-bold uppercase tracking-wide ${PILLAR_COLOR[feature.pillar]}`}>
                    {feature.pillar}
                  </span>
                  {feature.flagship && (
                    <span className="rounded-full bg-ink px-2.5 py-0.5 text-[11px] font-bold text-white">FLAGSHIP</span>
                  )}
                </div>
                <h2 className="text-[28px] font-bold">{feature.title}</h2>
                <p className="text-[15.5px] leading-relaxed text-ink-soft">{feature.description}</p>
                <div className="flex flex-col gap-2.5">
                  {feature.points.map((point) => (
                    <div key={point} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <ArrowRightIcon className="mt-0.5 size-3.5 shrink-0 text-primary" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pb-24 pt-8 text-center">
        <Link href="https://docs.rosterseo.com" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          Read the full documentation
          <ArrowRightIcon className="size-3.5" />
        </Link>
      </div>

      <CtaBand />
    </>
  );
}
