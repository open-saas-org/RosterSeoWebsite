import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = { title: "Terms of Service — RosterSEO" };

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Service" description={`Last updated ${LAST_UPDATED}`} />
      <div className="prose-blog mx-auto max-w-[720px] px-8 py-16 text-[15px] leading-relaxed text-ink-soft">
        <h2>The software</h2>
        <p>
          RosterSEO is distributed under the <a href="https://github.com/open-saas-org/RosterSeo/blob/main/LICENSE">MIT
          License</a>. That license — not this page — governs your right to use, modify, and distribute the
          software. In short: it&apos;s provided as-is, with no warranty, and you&apos;re free to do almost anything with it,
          including running it commercially.
        </p>

        <h2>This website</h2>
        <p>
          rosterseo.com is informational — documentation, a changelog, and project updates. By using it you agree
          not to misuse it (attempting to disrupt the site, scraping it abusively, or similar). There&apos;s no account
          system on this site today, so there&apos;s nothing to register or terminate.
        </p>

        <h2>Self-hosting</h2>
        <p>
          When you self-host RosterSEO, you are operating your own instance of the software on your own
          infrastructure, under your own responsibility — including compliance with any laws that apply to the data
          you process and any third-party API terms (DataForSEO, AI providers, Google, and any social/blog platform
          you connect) you agree to separately with those providers.
        </p>

        <h2>Cloud version (when available)</h2>
        <p>
          A hosted RosterSEO offering does not exist yet. Separate terms specific to that service — covering
          billing, uptime, and account terms — will be published before it launches.
        </p>

        <h2>Changes</h2>
        <p>We&apos;ll update this page if these terms change materially, and note the date at the top when we do.</p>
      </div>
    </>
  );
}

const LAST_UPDATED = "August 2026";
