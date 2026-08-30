import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { FEATURES, getFeature } from "@/lib/features";

export function generateStaticParams() {
  return FEATURES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) return {};
  return { title: `${feature.title} — RosterSEO`, description: feature.description };
}

const PILLAR_COLOR: Record<string, string> = { SEO: "text-seo", Publish: "text-publish", Social: "text-sky" };

export default async function FeatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) notFound();

  const others = FEATURES.filter((f) => f.slug !== feature.slug).slice(0, 3);

  return (
    <>
      <div className="border-b border-line px-8 pb-16 pt-20">
        <div className="mx-auto flex max-w-[720px] flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2.5">
            <span className={`text-[13px] font-bold uppercase tracking-wide ${PILLAR_COLOR[feature.pillar]}`}>{feature.pillar}</span>
            {feature.flagship && <span className="rounded-full bg-ink px-2.5 py-0.5 text-[11px] font-bold text-white">FLAGSHIP</span>}
          </div>
          <h1 className="text-[34px] font-bold leading-tight sm:text-[44px]">{feature.title}</h1>
          <p className="text-[17px] text-ink-soft">{feature.tagline}</p>
        </div>
      </div>

      <div className="mx-auto max-w-[820px] px-8 py-16">
        <div className="mb-10 overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-muted-2 to-muted">
          <div className="h-[300px]">
            <feature.visual />
          </div>
        </div>

        <p className="text-[16.5px] leading-relaxed text-ink-soft">{feature.description}</p>

        <div className="mt-8 flex flex-col gap-3">
          {feature.points.map((point) => (
            <div key={point} className="flex items-start gap-2.5 rounded-xl border border-line p-4 text-[14.5px] text-ink-soft">
              <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
              {point}
            </div>
          ))}
        </div>

        <a
          href="https://docs.rosterseo.com"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
        >
          Full documentation
          <ArrowRightIcon className="size-3.5" />
        </a>

        <div className="mt-16 border-t border-line pt-10">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-ink-faint">More features</h2>
          <div className="flex flex-wrap gap-2">
            {others.map((f) => (
              <Link key={f.slug} href={`/features/${f.slug}`} className="rounded-full border border-line px-3.5 py-1.5 text-[13px] font-medium text-ink-soft hover:border-ink hover:text-ink">
                {f.title}
              </Link>
            ))}
            <Link href="/features" className="rounded-full bg-muted px-3.5 py-1.5 text-[13px] font-medium text-ink-soft hover:text-ink">
              View all →
            </Link>
          </div>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
