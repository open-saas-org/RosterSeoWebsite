import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";
import { StatsVisual, ChecklistVisual, ChatVisual, CardGridVisual } from "@/components/feature-visuals";
import type { ComponentType } from "react";

export const metadata: Metadata = {
  title: "How It Works — RosterSEO",
  description: "From self-hosting to your first published post: how RosterSEO actually works, step by step.",
};

const STEPS: { n: string; title: string; description: string; visual: ComponentType }[] = [
  {
    n: "01",
    title: "Self-host in a few minutes",
    description:
      "Run `docker compose up` or deploy to Railway in one click. Migrations run automatically on boot — there's no separate setup step to forget.",
    visual: CardGridVisual,
  },
  {
    n: "02",
    title: "Connect your real data sources",
    description:
      "Bring your own DataForSEO login and at least one AI provider key (OpenRouter, Anthropic, or OpenAI). Optionally connect Google Search Console, GA4, Merchant Center, and Bing Webmaster Tools to ground every recommendation in your site's real performance.",
    visual: StatsVisual,
  },
  {
    n: "03",
    title: "Run your first Site Audit and Page Analyzer",
    description:
      "A full crawl surfaces real technical issues site-wide. Point Page Analyzer at your most important page and a target keyword to get a real competitor comparison and an AI-written fix-it plan.",
    visual: ChecklistVisual,
  },
  {
    n: "04",
    title: "Track how AI answer engines see you",
    description:
      "Set up AI Visibility prompts — questions your prospects would actually ask ChatGPT, Gemini, or Perplexity — and see how often, where, and how positively your brand gets mentioned.",
    visual: ChatVisual,
  },
  {
    n: "05",
    title: "Publish everywhere from one place",
    description:
      "Write a post once. Send it to every connected blog platform with an AI-respun variant per target, and queue the same idea across your social accounts — independent status per platform, so one failure never blocks the rest.",
    visual: CardGridVisual,
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="How it works"
        title="From clone to published, step by step"
        description="No black box — every step below is real, working software you can read the source of."
      />

      <div className="mx-auto max-w-[880px] px-8 py-16">
        <div className="flex flex-col gap-16">
          {STEPS.map((step) => (
            <div key={step.n} className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex shrink-0 flex-col items-center gap-4 sm:w-[120px]">
                <span className="font-mono text-3xl font-bold text-ink-faint">{step.n}</span>
              </div>
              <div className="flex-1">
                <h2 className="mb-2 text-xl font-bold">{step.title}</h2>
                <p className="mb-4 text-[15px] leading-relaxed text-ink-soft">{step.description}</p>
                <div className="h-[160px] overflow-hidden rounded-xl border border-line bg-gradient-to-b from-muted-2 to-muted">
                  <step.visual />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CtaBand />
    </>
  );
}
