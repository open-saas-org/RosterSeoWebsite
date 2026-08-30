import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { GITHUB_REPO_URL } from "@/lib/github";

export const metadata: Metadata = {
  title: "Roadmap — RosterSEO",
  description: "What's shipped, what's in progress, and what's next for RosterSEO.",
};

type Item = { title: string; description: string };

const COLUMNS: { id: string; label: string; accent: string; items: Item[] }[] = [
  {
    id: "shipped",
    label: "Shipped",
    accent: "bg-seo",
    items: [
      { title: "Page Analyzer", description: "Crawl-and-compare against real top-10 competitors, with an AI fix-it plan." },
      { title: "Site Audit", description: "Full-site crawl with a real internal link graph and broken-link detection." },
      { title: "Rank Tracking & Keyword Research", description: "Real daily position checks and DataForSEO-backed keyword data." },
      { title: "AI Visibility", description: "Tracks mentions and citations across ChatGPT, Gemini, and Perplexity." },
      { title: "Publish & Social", description: "Multi-platform blog and social publishing from one composer." },
      { title: "Cappy", description: "The in-app AI agent that can research, analyze, and act across the product." },
    ],
  },
  {
    id: "in-progress",
    label: "In progress",
    accent: "bg-amber-500",
    items: [
      { title: "Self-host CLI", description: "A one-command installer (`rosterseo init`) — same idea as similar open-source tools' CLIs." },
      { title: "Versioned releases", description: "Tagged GitHub Releases with real changelogs, cut deliberately rather than on every push." },
      { title: "Comparison pages", description: "Honest, specific vs.-competitor pages once there's real usage to point to." },
    ],
  },
  {
    id: "later",
    label: "Later",
    accent: "bg-ink-faint",
    items: [
      { title: "Hosted cloud", description: "A managed version of RosterSEO for teams that don't want to self-host." },
      { title: "Team roles & permissions", description: "Finer-grained access control beyond the current org-member model." },
      { title: "More publish targets", description: "Expanding platform coverage based on what the community actually asks for." },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <>
      <PageHeader
        eyebrow="Roadmap"
        title="What's next"
        description="A snapshot, not a promise — dates aren't fixed. Have something you want to see? Open an issue."
      />

      <div className="mx-auto max-w-[1160px] px-8 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.id} className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <span className={`size-2.5 rounded-full ${col.accent}`} />
                <h2 className="text-[15px] font-bold uppercase tracking-wide text-ink-soft">{col.label}</h2>
              </div>
              <div className="flex flex-col gap-3">
                {col.items.map((item) => (
                  <div key={item.title} className="flex flex-col gap-1.5 rounded-xl border border-line bg-white p-4">
                    <h3 className="text-[14.5px] font-bold">{item.title}</h3>
                    <p className="text-[13.5px] leading-relaxed text-ink-soft">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-3 rounded-2xl border border-line bg-muted p-10 text-center">
          <h2 className="text-lg font-bold">Missing something?</h2>
          <p className="max-w-[420px] text-sm text-ink-soft">
            RosterSEO&apos;s roadmap is shaped by real issues from real users, not a closed-door planning process.
          </p>
          <a
            href={`${GITHUB_REPO_URL}/issues/new`}
            className="mt-1 rounded-[10px] bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            Open an issue
          </a>
        </div>
      </div>
    </>
  );
}
