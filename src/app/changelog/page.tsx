import type { Metadata } from "next";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PageHeader } from "@/components/page-header";
import { GitHubIcon } from "@/components/icons";
import { getReleases, GITHUB_REPO_URL } from "@/lib/github";

export const metadata: Metadata = {
  title: "Changelog — RosterSEO",
  description: "Every RosterSEO release, pulled live from GitHub Releases.",
};

// Revalidates on the same interval as the fetches in lib/github.ts.
export const revalidate = 3600;

function formatDate(iso: string | null) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function ChangelogPage() {
  const releases = await getReleases();

  return (
    <>
      <PageHeader
        eyebrow="Changelog"
        title="What shipped, when"
        description="Pulled live from GitHub Releases — this page updates itself the moment a new release goes out."
      />

      <div className="mx-auto max-w-[720px] px-8 py-16">
        {releases.length === 0 ? (
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-line py-20 text-center">
            <GitHubIcon className="size-8 text-ink-faint" />
            <p className="text-[15px] text-ink-soft">
              No releases published yet — RosterSEO is still pre-1.0. Check back soon, or watch the repo to get
              notified the moment the first one ships.
            </p>
            <a
              href={`${GITHUB_REPO_URL}/releases`}
              className="text-sm font-semibold text-primary hover:text-primary-dark"
            >
              View releases on GitHub →
            </a>
          </div>
        ) : (
          <div className="flex flex-col">
            {releases.map((release, i) => (
              <div key={release.id} className="relative flex gap-6 pb-14">
                {i < releases.length - 1 && (
                  <div className="absolute left-[7px] top-6 bottom-0 w-px bg-line" aria-hidden />
                )}
                <div className="relative z-10 mt-1.5 size-4 shrink-0 rounded-full border-2 border-primary bg-white" />
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h2 className="text-lg font-bold">{release.name || release.tagName}</h2>
                    <span className="rounded-full bg-muted px-2.5 py-0.5 font-mono text-[12px] text-ink-soft">
                      {release.tagName}
                    </span>
                    {release.prerelease && (
                      <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-bold text-amber-800">
                        PRE-RELEASE
                      </span>
                    )}
                  </div>
                  {formatDate(release.publishedAt) && (
                    <p className="mb-3 text-[13px] text-ink-faint">{formatDate(release.publishedAt)}</p>
                  )}
                  <div className="prose-changelog text-[14.5px] leading-relaxed text-ink-soft">
                    <Markdown remarkPlugins={[remarkGfm]}>{release.bodyMarkdown || "_No description provided._"}</Markdown>
                  </div>
                  <a
                    href={release.htmlUrl}
                    className="mt-3 inline-block text-[13px] font-semibold text-primary hover:text-primary-dark"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
