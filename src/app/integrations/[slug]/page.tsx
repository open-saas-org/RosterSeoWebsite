import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { INTEGRATIONS, getIntegration } from "@/lib/integrations";

export function generateStaticParams() {
  return INTEGRATIONS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const integration = getIntegration(slug);
  if (!integration) return {};
  return {
    title: `Publish to ${integration.name} — RosterSEO`,
    description: integration.description,
  };
}

export default async function IntegrationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const integration = getIntegration(slug);
  if (!integration) notFound();

  const label = integration.category === "publish" ? "Publish" : "Social";
  const others = INTEGRATIONS.filter((i) => i.category === integration.category && i.slug !== integration.slug).slice(0, 4);

  return (
    <>
      <PageHeader eyebrow={label} title={`Connect ${integration.name}`} description={integration.description} />

      <div className="mx-auto max-w-[720px] px-8 py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-line p-5">
            <span className="text-[12px] font-bold uppercase tracking-wide text-ink-faint">Authentication</span>
            <p className="mt-1.5 text-[15px] font-semibold">{integration.connect}</p>
          </div>
          <div className="rounded-xl border border-line p-5">
            <span className="text-[12px] font-bold uppercase tracking-wide text-ink-faint">Best for</span>
            <p className="mt-1.5 text-[15px] font-semibold">{integration.useCase}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          {[
            "Connect once from Integrations, using your own account credentials",
            `RosterSEO never stores your ${integration.name} password — only the token it needs`,
            "Publish or schedule from the same composer as every other connected platform",
            "Independent send status per target — one platform failing never blocks the rest",
          ].map((point) => (
            <div key={point} className="flex items-start gap-2.5 text-[14.5px] text-ink-soft">
              <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
              {point}
            </div>
          ))}
        </div>

        <a
          href="https://docs.rosterseo.com"
          className="mt-8 flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
        >
          Full setup guide in the docs
          <ArrowRightIcon className="size-3.5" />
        </a>

        {others.length > 0 && (
          <div className="mt-16 border-t border-line pt-10">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-ink-faint">
              More {integration.category === "publish" ? "publish" : "social"} integrations
            </h2>
            <div className="flex flex-wrap gap-2">
              {others.map((i) => (
                <Link
                  key={i.slug}
                  href={`/integrations/${i.slug}`}
                  className="rounded-full border border-line px-3.5 py-1.5 text-[13px] font-medium text-ink-soft hover:border-ink hover:text-ink"
                >
                  {i.name}
                </Link>
              ))}
              <Link href="/integrations" className="rounded-full bg-muted px-3.5 py-1.5 text-[13px] font-medium text-ink-soft hover:text-ink">
                View all →
              </Link>
            </div>
          </div>
        )}
      </div>

      <CtaBand />
    </>
  );
}
