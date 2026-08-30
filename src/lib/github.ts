// Real GitHub REST API reads for the marketing site — repo stats, releases,
// and contributors. Unauthenticated (60 req/hr is plenty at a 1hr revalidate
// interval for a handful of endpoints); every call degrades to an honest
// empty/zero result on failure instead of throwing, so a GitHub outage or
// rate limit never takes the page down — it just shows real-looking zeros
// or an empty state, never fabricated numbers.

export const GITHUB_OWNER = "open-saas-org";
export const GITHUB_REPO = "seo";
export const GITHUB_REPO_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`;

const API_BASE = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}`;
const REVALIDATE_SECONDS = 3600; // 1 hour

async function githubFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export type RepoStats = {
  stars: number;
  forks: number;
  openIssues: number;
  license: string | null;
};

export async function getRepoStats(): Promise<RepoStats> {
  const data = await githubFetch<{
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    license: { spdx_id: string } | null;
  }>("");
  return {
    stars: data?.stargazers_count ?? 0,
    forks: data?.forks_count ?? 0,
    openIssues: data?.open_issues_count ?? 0,
    license: data?.license?.spdx_id ?? null,
  };
}

export type Contributor = {
  login: string;
  avatarUrl: string;
  htmlUrl: string;
  contributions: number;
};

export async function getContributors(): Promise<Contributor[]> {
  const data = await githubFetch<
    Array<{ login: string; avatar_url: string; html_url: string; contributions: number; type: string }>
  >("/contributors?per_page=24");
  if (!data) return [];
  // Excludes bot accounts (e.g. dependabot) - real human contributors only.
  return data
    .filter((c) => c.type === "User")
    .map((c) => ({ login: c.login, avatarUrl: c.avatar_url, htmlUrl: c.html_url, contributions: c.contributions }));
}

export type Release = {
  id: number;
  tagName: string;
  name: string | null;
  publishedAt: string | null;
  htmlUrl: string;
  bodyMarkdown: string;
  prerelease: boolean;
};

export async function getReleases(): Promise<Release[]> {
  const data = await githubFetch<
    Array<{
      id: number;
      tag_name: string;
      name: string | null;
      published_at: string | null;
      html_url: string;
      body: string | null;
      prerelease: boolean;
      draft: boolean;
    }>
  >("/releases?per_page=30");
  if (!data) return [];
  return data
    .filter((r) => !r.draft)
    .map((r) => ({
      id: r.id,
      tagName: r.tag_name,
      name: r.name,
      publishedAt: r.published_at,
      htmlUrl: r.html_url,
      bodyMarkdown: r.body ?? "",
      prerelease: r.prerelease,
    }));
}
