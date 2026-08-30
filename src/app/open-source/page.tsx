import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { GitHubIcon, ShieldIcon, StarIcon } from "@/components/icons";
import { getRepoStats, getContributors, GITHUB_REPO_URL } from "@/lib/github";

export const metadata: Metadata = {
  title: "Open Source — RosterSEO",
  description: "RosterSEO is MIT licensed and open source. Real GitHub stats, real contributors, and how to get involved.",
};

export const revalidate = 3600;

export default async function OpenSourcePage() {
  const [stats, contributors] = await Promise.all([getRepoStats(), getContributors()]);

  return (
    <>
      <PageHeader
        eyebrow="Open Source"
        title="Built in the open"
        description="Every line of RosterSEO is on GitHub. MIT licensed — fork it, self-host it, change anything you want."
      />

      <div className="mx-auto max-w-[880px] px-8 py-16">
        <div className="grid grid-cols-3 gap-4">
          <StatCard value={stats.stars.toLocaleString()} label="GitHub stars" />
          <StatCard value={stats.forks.toLocaleString()} label="Forks" />
          <StatCard value={contributors.length.toString()} label="Contributors" />
        </div>

        <div className="mt-6 flex flex-col items-center gap-4 rounded-2xl border border-line bg-muted p-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white">
              <ShieldIcon className="size-6 text-primary" />
            </div>
            <div>
              <h2 className="text-base font-bold">{stats.license ?? "MIT"} License</h2>
              <p className="text-sm text-ink-soft">Use it, modify it, ship it — commercially or not.</p>
            </div>
          </div>
          <a
            href={`${GITHUB_REPO_URL}/blob/main/LICENSE`}
            className="whitespace-nowrap rounded-[10px] border border-line bg-white px-4 py-2.5 text-sm font-semibold text-ink hover:bg-muted-2"
          >
            Read the license
          </a>
        </div>

        {contributors.length > 0 && (
          <div className="mt-14">
            <h2 className="mb-5 text-xl font-bold">Contributors</h2>
            <div className="flex flex-wrap gap-3">
              {contributors.map((c) => (
                <a
                  key={c.login}
                  href={c.htmlUrl}
                  title={`${c.login} — ${c.contributions} contributions`}
                  className="flex items-center gap-2 rounded-full border border-line bg-white py-1.5 pl-1.5 pr-3.5 hover:border-ink"
                >
                  <Image src={c.avatarUrl} alt={c.login} width={26} height={26} className="rounded-full" unoptimized />
                  <span className="text-[13px] font-medium">{c.login}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <a
            href={`${GITHUB_REPO_URL}/blob/main/CONTRIBUTING.md`}
            className="flex flex-col gap-2 rounded-2xl border border-line p-6 hover:border-ink"
          >
            <GitHubIcon className="size-6" />
            <h3 className="text-base font-bold">Contributing guide</h3>
            <p className="text-sm text-ink-soft">Dev setup, code conventions, and the PR checklist.</p>
          </a>
          <a
            href={GITHUB_REPO_URL}
            className="flex flex-col gap-2 rounded-2xl border border-line p-6 hover:border-ink"
          >
            <StarIcon className="size-6" />
            <h3 className="text-base font-bold">Star the repo</h3>
            <p className="text-sm text-ink-soft">The single easiest way to help RosterSEO get found.</p>
          </a>
        </div>
      </div>
    </>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-2xl border border-line py-8 text-center">
      <span className="text-3xl font-bold">{value}</span>
      <span className="text-[13px] text-ink-soft">{label}</span>
    </div>
  );
}
