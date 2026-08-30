import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ShieldIcon } from "@/components/icons";
import { GITHUB_REPO_URL } from "@/lib/github";

export const metadata: Metadata = {
  title: "Security — RosterSEO",
  description: "How to report a security vulnerability in RosterSEO, and what's in and out of scope.",
};

export default function SecurityPage() {
  return (
    <>
      <PageHeader eyebrow="Security" title="Security policy" />

      <div className="mx-auto max-w-[720px] px-8 py-16">
        <div className="mb-10 flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <ShieldIcon className="mt-0.5 size-6 shrink-0 text-amber-700" />
          <div>
            <h2 className="mb-1 text-base font-bold text-amber-900">Do not open a public issue for a vulnerability</h2>
            <p className="text-[14.5px] leading-relaxed text-amber-800">
              Report it privately via{" "}
              <a href={`${GITHUB_REPO_URL}/security/advisories/new`} className="font-semibold underline">
                GitHub Security Advisories
              </a>{" "}
              for this repository, so it can be confirmed and fixed before details go public.
            </p>
          </div>
        </div>

        <div className="prose-blog text-[15px] leading-relaxed text-ink-soft">
          <h2>What to include</h2>
          <ul>
            <li>The affected version or commit</li>
            <li>Steps to reproduce (or a proof of concept)</li>
            <li>What you think the impact is — data exposure, auth bypass, RCE, etc.</li>
          </ul>
          <p>Real reports get acknowledged as soon as possible, with updates as a fix is worked on. There&apos;s no bug bounty program at this time.</p>

          <h2>In scope</h2>
          <ul>
            <li>Authentication/authorization bugs — session handling, org/project access checks</li>
            <li>Row-Level-Security (RLS) bypass — the tenant-isolation model the whole product depends on</li>
            <li>SSRF in the crawler — the SSRF guard exists specifically to prevent this; a real bypass is a real finding</li>
            <li>Secrets handling — anything that could leak API keys, tokens, or the database connection string</li>
            <li>SQL, command, or template injection in any real code path</li>
          </ul>

          <h2>Generally out of scope</h2>
          <ul>
            <li>Issues that only reproduce on a self-hosted instance deliberately misconfigured against the documented setup (e.g. running the database connection as a superuser despite the docs explicitly warning against it)</li>
            <li>Missing rate limiting on non-authentication endpoints</li>
            <li>Third-party API keys or credentials the operator chose to configure — DataForSEO, AI providers, Stripe, and OAuth providers are the operator&apos;s own accounts</li>
          </ul>

          <h2>Supported versions</h2>
          <p>
            RosterSEO doesn&apos;t yet have tagged releases — security fixes land on <code>main</code>. Once versioned
            releases exist, this section will list which are still receiving fixes.
          </p>
        </div>
      </div>
    </>
  );
}
