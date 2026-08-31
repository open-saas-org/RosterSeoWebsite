import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = { title: "Privacy Policy — RosterSEO" };

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" description={`Last updated ${LAST_UPDATED}`} />
      <div className="prose-blog mx-auto max-w-[720px] px-8 py-16 text-[15px] leading-relaxed text-ink-soft">
        <h2>Self-hosted instances</h2>
        <p>
          RosterSEO is open-source software you run on your own infrastructure. When you self-host RosterSEO, we
          (the RosterSEO project) have no access to your data, your users, or anything your instance stores — it
          never leaves your own servers unless you configure it to call a third-party API (DataForSEO, an AI
          provider, Google, etc.), in which case that provider&apos;s own privacy policy governs what they receive.
        </p>
        <p>
          This site (rosterseo.com) collects only what&apos;s needed to operate a marketing website: standard web server
          logs, and — if you sign up for cloud waitlist updates in the future — the email address you provide for
          that purpose alone.
        </p>

        <h2>Cloud version (when available)</h2>
        <p>
          RosterSEO&apos;s hosted cloud offering does not exist yet. When it launches, this policy will be updated with
          specifics on what account, billing, and usage data the hosted service collects and how it&apos;s used — before
          the service accepts real customer data, not after.
        </p>

        <h2>Cookies &amp; analytics</h2>
        <p>
          This marketing site may use privacy-respecting, aggregate analytics to understand traffic (which pages get
          visited, roughly how many people) — never anything that identifies you individually, and never sold to
          anyone.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy: open an issue on{" "}
          <a href="https://github.com/open-saas-org/RosterSeo">GitHub</a>, or reach the maintainers through the contact
          methods listed there.
        </p>
      </div>
    </>
  );
}

const LAST_UPDATED = "August 2026";
