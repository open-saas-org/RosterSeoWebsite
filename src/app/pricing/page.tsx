import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CheckIcon, ArrowRightIcon, GitHubIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing — RosterSEO",
  description:
    "Hosted RosterSEO on a Starter, Pro, or Agency plan with a 14-day trial — or self-host it free, forever, on your own infrastructure.",
};

const SELF_HOSTED_INCLUDES = [
  "Every feature — SEO, Publish, and Social, no gated tiers",
  "Unlimited projects, keywords, and team members",
  "Bring your own DataForSEO and AI provider keys",
  "Your data stays on your own infrastructure",
  "MIT licensed — fork it, modify it, ship it",
  "Docker Compose or Railway in a few minutes",
];

// Mirrors apps/web/lib/plans.ts exactly — update both together if a tier
// or limit ever changes. Hosted plans use RosterSEO's own DataForSEO/AI
// provider keys, so there's no "bring your own API key" setup step.
const CLOUD_PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 29,
    description: "For a solo site or your first client.",
    limits: [
      "3 projects, up to 150 tracked keywords",
      "15 Page Analyzer reports / month",
      "1 full site audit / month",
      "10 AI Visibility prompts tracked",
      "15 rank checks, 5 local SEO scans / month",
      "2 connected Publish/Social accounts",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: 79,
    description: "For an active freelancer or small agency.",
    highlighted: true,
    limits: [
      "10 projects, up to 1,000 tracked keywords",
      "60 Page Analyzer reports / month",
      "4 full site audits / month",
      "40 AI Visibility prompts tracked",
      "60 rank checks, 20 local SEO scans / month",
      "10 connected Publish/Social accounts",
    ],
  },
  {
    id: "agency",
    name: "Agency",
    price: 199,
    description: "For a multi-client agency at scale.",
    limits: [
      "Unlimited projects and tracked keywords",
      "200 Page Analyzer reports / month",
      "15 full site audits / month",
      "150 AI Visibility prompts tracked",
      "200 rank checks, 100 local SEO scans / month",
      "Unlimited connected Publish/Social accounts",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple hosted pricing"
        description="Pick a plan, connect your site, and start seeing real data in minutes — no server to run, no API keys to find. Every plan starts with a 14-day free trial, no credit card required. Rather run it yourself? It's open source — see below."
      />

      <div className="mx-auto max-w-[960px] px-8 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CLOUD_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col gap-5 rounded-2xl border p-7 ${
                plan.highlighted ? "border-2 border-primary bg-primary-tint/20" : "border-line bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">{plan.name}</h3>
                {plan.highlighted && (
                  <span className="rounded-full bg-primary px-2.5 py-1 text-[11px] font-bold text-white">POPULAR</span>
                )}
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-bold">${plan.price}</span>
                <span className="text-sm text-ink-soft">/month</span>
              </div>
              <p className="text-sm text-ink-soft">{plan.description}</p>
              <div className="flex flex-col gap-2">
                {plan.limits.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-[13px] leading-snug text-ink-soft">
                    <CheckIcon className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
              <a
                href={`https://app.rosterseo.com/signup?plan=${plan.id}`}
                className={`mt-auto flex items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-sm font-semibold ${
                  plan.highlighted ? "bg-primary text-white hover:bg-primary-dark" : "border border-line bg-white text-ink hover:bg-muted"
                }`}
              >
                Start free trial
                <ArrowRightIcon className="size-4" />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-ink-soft">
          Self-hosting a third-party API key? Those costs (DataForSEO, AI providers) are billed to you directly by those
          providers — RosterSEO never marks them up, because it never sees them. On the hosted plan, usage is simply
          capped per the limits above instead.
        </p>

        <div className="mt-16 rounded-2xl border border-line bg-muted p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wide text-ink-faint">Rather run it yourself?</span>
              <h2 className="text-xl font-bold">Self-host for free, forever</h2>
              <p className="max-w-[480px] text-sm leading-relaxed text-ink-soft">
                RosterSEO is MIT licensed, end to end. Bring your own DataForSEO and AI provider keys and run every
                feature on your own infrastructure — no seat limits, no feature gates.
              </p>
            </div>
            <a
              href="https://github.com/open-saas-org/RosterSeo"
              className="flex shrink-0 items-center justify-center gap-2 rounded-[10px] border border-line bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-muted"
            >
              <GitHubIcon className="size-4" />
              Self-hosting guide
            </a>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-2.5 border-t border-line pt-6 sm:grid-cols-2">
            {SELF_HOSTED_INCLUDES.map((item) => (
              <div key={item} className="flex items-start gap-2 text-[13px] leading-snug text-ink-soft">
                <CheckIcon className="mt-0.5 size-3.5 shrink-0 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
