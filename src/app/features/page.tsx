import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";
import { ArrowRightIcon } from "@/components/icons";
import { FEATURES } from "@/lib/features";

export const metadata: Metadata = {
  title: "Features — RosterSEO",
  description: "Every real feature in RosterSEO: SEO research and audits, AI-answer-engine visibility tracking, and multi-platform publishing.",
};

const PILLAR_COLOR: Record<string, string> = { SEO: "text-seo", Publish: "text-publish", Social: "text-sky" };

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="Everything, backed by real data"
        description="No feature in RosterSEO fabricates a plausible-looking number. A real API call succeeds, or the page honestly says it isn't connected yet."
      />

      <div className="mx-auto max-w-[1160px] px-8 py-16">
        <div className="flex flex-col gap-20">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.slug}
              className={`flex flex-col items-center gap-10 lg:flex-row ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="flex-1">
                <Link
                  href={`/features/${feature.slug}`}
                  className="block overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-muted-2 to-muted"
                >
                  <div className="h-[260px]">
                    <feature.visual />
                  </div>
                </Link>
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <span className={`text-[13px] font-bold uppercase tracking-wide ${PILLAR_COLOR[feature.pillar]}`}>
                    {feature.pillar}
                  </span>
                  {feature.flagship && (
                    <span className="rounded-full bg-ink px-2.5 py-0.5 text-[11px] font-bold text-white">FLAGSHIP</span>
                  )}
                </div>
                <h2 className="text-[28px] font-bold">
                  <Link href={`/features/${feature.slug}`} className="hover:text-primary">
                    {feature.title}
                  </Link>
                </h2>
                <p className="text-[15.5px] leading-relaxed text-ink-soft">{feature.description}</p>
                <div className="flex flex-col gap-2.5">
                  {feature.points.map((point) => (
                    <div key={point} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <ArrowRightIcon className="mt-0.5 size-3.5 shrink-0 text-primary" />
                      {point}
                    </div>
                  ))}
                </div>
                <Link href={`/features/${feature.slug}`} className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark">
                  Learn more about {feature.title}
                  <ArrowRightIcon className="size-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CtaBand />
    </>
  );
}
