import type { ComponentType } from "react";
import {
  StatsVisual,
  ChecklistVisual,
  ChartVisual,
  TableVisual,
  AvatarRowsVisual,
  ChatVisual,
  CardGridVisual,
} from "@/components/feature-visuals";

export type Feature = {
  slug: string;
  pillar: "SEO" | "Publish" | "Social";
  flagship?: boolean;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  visual: ComponentType;
};

export const FEATURES: Feature[] = [
  {
    slug: "page-analyzer",
    pillar: "SEO",
    flagship: true,
    title: "Page Analyzer",
    tagline: "Crawl, compare, and get a real fix-it plan",
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
    slug: "site-audit",
    pillar: "SEO",
    title: "Site Audit",
    tagline: "A full crawl that finds what's actually broken",
    description:
      "A full breadth-first crawl of your site that surfaces the technical issues that actually move rankings — broken links, missing metadata, orphaned pages, thin content, and more — with a real link graph, not a sample.",
    points: ["Site-wide BFS crawl with a real internal link graph", "Broken links, orphaned pages, cannibalization checks", "Per-page triage: mark issues in progress or resolved"],
    visual: ChecklistVisual,
  },
  {
    slug: "rank-tracking",
    pillar: "SEO",
    title: "Rank Tracking",
    tagline: "Real daily positions, not weekly estimates",
    description:
      "Real daily position checks for every keyword you track, with full history — not a weekly snapshot or a modeled estimate. See exactly when a change in your content or a competitor's moved you up or down.",
    points: ["Real daily position checks, not weekly estimates", "Full ranking history per keyword", "Grouped tracking runs so you know what changed and when"],
    visual: ChartVisual,
  },
  {
    slug: "keyword-research",
    pillar: "SEO",
    title: "Keyword Research",
    tagline: "Real volume, CPC, and difficulty for every idea",
    description:
      "Real search volume, CPC, competition, and difficulty for every keyword idea — tiered by relevance (related matches first, then substring variations, then broader ideas) so the first results are the most useful ones.",
    points: ["Real DataForSEO volume, CPC, and difficulty", "Tiered results: related → substring → broader ideas", "Location-aware — not hardcoded to one country"],
    visual: TableVisual,
  },
  {
    slug: "ai-visibility",
    pillar: "SEO",
    title: "AI Visibility",
    tagline: "See how ChatGPT, Gemini, and Perplexity see you",
    description:
      "Track how ChatGPT, Gemini, and Perplexity actually mention, cite, and describe your brand when someone asks a question your prospects would ask — and see which competitors get mentioned in your place.",
    points: ["Real sampling across ChatGPT, Gemini, and Perplexity", "Mention, citation, and sentiment tracking over time", "Query Fan-Out: see the follow-up questions AI models generate"],
    visual: AvatarRowsVisual,
  },
  {
    slug: "local-seo",
    pillar: "SEO",
    title: "Local SEO",
    tagline: "Real Google Business Profile data, not a mock listing",
    description:
      "Connect your Google Business Profile and track how your listing performs — real rank-grid scans across a map grid, review monitoring, and an optimization checklist grounded in what's actually incomplete.",
    points: ["Real Google Business Profile data, not a mock listing", "Grid-based local rank scanning", "An optimization checklist that reflects your real profile"],
    visual: CardGridVisual,
  },
  {
    slug: "cappy",
    pillar: "SEO",
    title: "Cappy",
    tagline: "Your in-app AI agent",
    description:
      "Ask Cappy to research keywords, size up a competitor, check your latest rankings, or draft outreach — it reads and writes across the whole product on your behalf, with every tool call visible before it runs.",
    points: ["Reads and writes across the real product data", "Every tool call shown and confirmable, nothing silent", "Remembers project context between conversations"],
    visual: ChatVisual,
  },
  {
    slug: "publish",
    pillar: "Publish",
    title: "Publish",
    tagline: "Write once, send everywhere",
    description:
      "Write a post once, then send it to WordPress, Ghost, Webflow, HubSpot, and more — each with an AI-respun variant tuned to that platform, and independent send status so one failed target never blocks the rest.",
    points: ["9+ blog platform connections, one Markdown source", "Per-target AI-respun copy, not a blind copy-paste", "Independent status per platform — schedule or send now"],
    visual: CardGridVisual,
  },
  {
    slug: "social",
    pillar: "Social",
    title: "Social",
    tagline: "One queue, every platform",
    description:
      "Queue short-form posts across LinkedIn, X, Threads, Meta, Pinterest, Mastodon, and Bluesky from one composer, with platform-native copy and independent status per target — same shape as Publish, built for social's format.",
    points: ["LinkedIn, X, Threads, Meta, Pinterest, Mastodon, Bluesky", "Platform-native, short-form copy per target", "Schedule ahead or post immediately"],
    visual: ChatVisual,
  },
];

export function getFeature(slug: string): Feature | undefined {
  return FEATURES.find((f) => f.slug === slug);
}
