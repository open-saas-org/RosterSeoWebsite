import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";
import { ArrowRightIcon } from "@/components/icons";
import { INTEGRATIONS } from "@/lib/integrations";

export const metadata: Metadata = {
  title: "Integrations — RosterSEO",
  description: "Every blog and social platform RosterSEO publishes to, plus the data sources it connects for real SEO insight.",
};

function IntegrationCard({ slug, name, connect, description }: (typeof INTEGRATIONS)[number]) {
  return (
    <Link href={`/integrations/${slug}`} className="group flex flex-col gap-2 rounded-xl border border-line p-5 hover:border-ink">
      <div className="flex items-center justify-between">
        <h3 className="text-[15px] font-bold group-hover:text-primary">{name}</h3>
        <ArrowRightIcon className="size-4 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:text-ink" />
      </div>
      <p className="text-[13.5px] leading-relaxed text-ink-soft">{description}</p>
      <span className="mt-1 text-[12px] font-medium text-ink-faint">{connect}</span>
    </Link>
  );
}

export default function IntegrationsPage() {
  const publish = INTEGRATIONS.filter((i) => i.category === "publish");
  const social = INTEGRATIONS.filter((i) => i.category === "social");

  return (
    <>
      <PageHeader
        eyebrow="Integrations"
        title={`${INTEGRATIONS.length} real connections`}
        description="Every platform below is a real, working adapter in the codebase — not a roadmap promise."
      />

      <div className="mx-auto max-w-[1160px] px-8 py-16">
        <div className="mb-16">
          <h2 className="mb-2 text-2xl font-bold">Publish</h2>
          <p className="mb-6 text-[15px] text-ink-soft">Write once, send to every blog platform your content lives on.</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {publish.map((i) => (
              <IntegrationCard key={i.slug} {...i} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-2xl font-bold">Social</h2>
          <p className="mb-6 text-[15px] text-ink-soft">Queue short-form posts across every platform that matters.</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {social.map((i) => (
              <IntegrationCard key={i.slug} {...i} />
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-line bg-muted p-8">
          <h2 className="mb-2 text-xl font-bold">Data sources</h2>
          <p className="mb-4 text-[15px] text-ink-soft">
            Beyond publishing, RosterSEO connects real data sources to ground every recommendation in your site&apos;s
            actual performance:
          </p>
          <div className="flex flex-wrap gap-2">
            {["Google Search Console", "Google Analytics 4", "Google Merchant Center", "Google Business Profile", "Bing Webmaster Tools", "DataForSEO", "OpenRouter / Anthropic / OpenAI"].map(
              (name) => (
                <span key={name} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] font-medium text-ink-soft">
                  {name}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
