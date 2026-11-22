import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CheckIcon, ArrowRightIcon, GitHubIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing — RosterSEO",
  description:
    "Self-host RosterSEO free, forever, on your own infrastructure — or let us host it for you on a Starter, Pro, or Agency plan with a 14-day trial.",
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
        title="Self-host for free, or let us run it for you"
        description="RosterSEO is open source — self-hosting stays free, forever. Prefer not to manage a server or API keys? The hosted version runs the same codebase on a simple monthly plan, with a 14-day trial."
      />

      <div className="mx-auto max-w-[960px] px-8 py-16">
        <div className="flex flex-col gap-6 rounded-2xl border-2 border-ink p-8 md:flex-row md:items-center">
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold">Self-Hosted</h2>
              <span className="rounded-full bg-primary-tint px-3 py-1 text-[12px] font-bold text-primary-dark">OPEN SOURCE</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">Free</span>
              <span className="text-sm text-ink-soft">forever</span>
            </div>
            <p className="text-sm leading-relaxed text-ink-soft">
              Run RosterSEO on your own server, VPS, or Railway account. MIT licensed, no feature gates, no seat limits.
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {SELF_HOSTED_INCLUDES.map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <a
            href="https://app.rosterseo.com/docs/deploy/self-hosting"
            className="flex shrink-0 items-center justify-center gap-2 rounded-[10px] bg-ink px-6 py-3.5 text-[15px] font-semibold whitespace-nowrap text-white hover:bg-neutral-800"
          >
            Self-hosting guide
            <ArrowRightIcon className="size-4" />
          </a>
        </div>

        <div className="mt-14">
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold">Hosted Cloud</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Same codebase, no server to run — we supply the DataForSEO and AI provider keys. Every plan starts with a
              14-day free trial at Pro-level limits.
            </p>
          </div>
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
        </div>

        <p className="mt-12 text-center text-sm text-ink-soft">
          Self-hosting a third-party API key? Those costs (DataForSEO, AI providers) are billed to you directly by those
          providers — RosterSEO never marks them up, because it never sees them. On the hosted plan, usage is simply
          capped per the limits above instead.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="https://github.com/open-saas-org/RosterSeo"
            className="flex items-center justify-center gap-2 rounded-[10px] border border-line bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-muted"
          >
            <GitHubIcon className="size-4" />
            Star the repo
          </a>
        </div>
      </div>
    </>
  );
}
