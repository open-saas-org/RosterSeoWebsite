import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { GitHubIcon, SearchIcon, ShieldIcon } from "@/components/icons";
import { GITHUB_REPO_URL } from "@/lib/github";

export const metadata: Metadata = {
  title: "Support — RosterSEO",
  description: "Get help with RosterSEO — issues, questions, self-hosting problems, and security reports.",
};

const CHANNELS = [
  {
    icon: GitHubIcon,
    title: "Found a bug?",
    description: "Open a GitHub issue with what you expected, what happened, and your setup (Docker, Railway, etc.).",
    cta: "Open an issue",
    href: `${GITHUB_REPO_URL}/issues/new`,
  },
  {
    icon: SearchIcon,
    title: "Have a question?",
    description: "Check the docs first — most self-hosting and configuration questions are answered there in detail.",
    cta: "Browse the docs",
    href: "https://app.rosterseo.com/docs",
  },
  {
    icon: ShieldIcon,
    title: "Found a security issue?",
    description: "Please don't open a public issue for security reports — see our security policy for how to report it privately.",
    cta: "Security policy",
    href: "/security",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHeader eyebrow="Support" title="Get help" description="RosterSEO is community-supported — here's the fastest way to get an answer." />

      <div className="mx-auto max-w-[880px] px-8 py-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {CHANNELS.map((channel) => (
            <a key={channel.title} href={channel.href} className="flex flex-col gap-3 rounded-2xl border border-line p-6 hover:border-ink">
              <channel.icon className="size-6 text-primary" />
              <h2 className="text-base font-bold">{channel.title}</h2>
              <p className="flex-1 text-[13.5px] leading-relaxed text-ink-soft">{channel.description}</p>
              <span className="text-[13px] font-semibold text-primary">{channel.cta} →</span>
            </a>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-line bg-muted p-8">
          <h2 className="mb-2 text-lg font-bold">Before you open an issue</h2>
          <ul className="flex flex-col gap-2 text-[14.5px] leading-relaxed text-ink-soft">
            <li>• Check the <a href="https://app.rosterseo.com/docs" className="font-medium text-primary">self-hosting guide</a> — most first-run issues are the two-role Postgres setup.</li>
            <li>• Search <a href={`${GITHUB_REPO_URL}/issues`} className="font-medium text-primary">existing issues</a> — someone may have already hit and solved it.</li>
            <li>• Include your deploy method (Docker Compose, plain Dockerfile, Railway) — it changes where to look.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
