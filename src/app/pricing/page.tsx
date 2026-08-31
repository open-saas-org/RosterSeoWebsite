import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CheckIcon, ArrowRightIcon, GitHubIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing — RosterSEO",
  description: "RosterSEO is free and open source, self-hosted on your own infrastructure. A hosted cloud version is coming.",
};

const SELF_HOSTED_INCLUDES = [
  "Every feature — SEO, Publish, and Social, no gated tiers",
  "Unlimited projects, keywords, and team members",
  "Bring your own DataForSEO and AI provider keys",
  "Your data stays on your own infrastructure",
  "MIT licensed — fork it, modify it, ship it",
  "Docker Compose or Railway in a few minutes",
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="No pricing tiers to pick from"
        description="RosterSEO is open source. Self-hosting is free, forever — you only pay for the third-party APIs you choose to connect."
      />

      <div className="mx-auto max-w-[880px] px-8 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-2xl border-2 border-ink p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Self-Hosted</h2>
              <span className="rounded-full bg-primary-tint px-3 py-1 text-[12px] font-bold text-primary-dark">RECOMMENDED</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">Free</span>
              <span className="text-sm text-ink-soft">forever</span>
            </div>
            <p className="text-sm leading-relaxed text-ink-soft">
              Run RosterSEO on your own server, VPS, or Railway account. MIT licensed, no feature gates, no seat limits.
            </p>
            <div className="flex flex-col gap-2.5">
              {SELF_HOSTED_INCLUDES.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </div>
            <a
              href="https://docs.rosterseo.com/docs/self-hosting"
              className="mt-2 flex items-center justify-center gap-2 rounded-[10px] bg-ink px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-neutral-800"
            >
              Self-hosting guide
              <ArrowRightIcon className="size-4" />
            </a>
          </div>

          <div className="flex flex-col gap-6 rounded-2xl border border-line bg-muted p-8">
            <h2 className="text-xl font-bold">Cloud</h2>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-ink-faint">Coming soon</span>
            </div>
            <p className="text-sm leading-relaxed text-ink-soft">
              A hosted version of RosterSEO — no server to run, billing handled for you. Same codebase, same features,
              nothing decided on pricing yet.
            </p>
            <div className="flex flex-1 items-center justify-center rounded-xl border border-dashed border-line py-10">
              <span className="text-sm text-ink-faint">Pricing not announced</span>
            </div>
            <a
              href="https://github.com/open-saas-org/RosterSeo"
              className="flex items-center justify-center gap-2 rounded-[10px] border border-line bg-white px-6 py-3.5 text-[15px] font-semibold text-ink hover:bg-muted"
            >
              <GitHubIcon className="size-4" />
              Watch the repo for updates
            </a>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-ink-soft">
          Third-party costs (DataForSEO, AI providers) are billed to you directly by those providers — RosterSEO never
          marks them up, because it never sees them.
        </p>
      </div>
    </>
  );
}
