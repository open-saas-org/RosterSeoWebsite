import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Vision — RosterSEO",
  description: "Why RosterSEO exists: SEO and AI-answer-engine visibility, treated as one problem, on infrastructure you control.",
};

export default function VisionPage() {
  return (
    <>
      <PageHeader eyebrow="Vision" title="Why RosterSEO exists" />

      <div className="prose-blog mx-auto max-w-[720px] px-8 py-16 text-[16px] leading-relaxed text-ink-soft">
        <p>
          Search stopped being one thing. A growing share of the research that used to happen on a Google results
          page now happens inside ChatGPT, Gemini, and Perplexity — and most SEO tools were built for a world
          before that shift, with AI visibility bolted on as an afterthought if it&apos;s there at all.
        </p>
        <p>
          We think classic SEO and AI-answer-engine visibility are the same underlying problem: <em>does the
          internet&apos;s understanding of your brand match reality, and can people actually find you when they&apos;re
          looking.</em> RosterSEO treats them as one product because they are one problem — the same crawl data,
          the same competitor research, and increasingly the same content strategy feed both.
        </p>

        <h2>Why this has to be open source</h2>
        <p>
          A tool that watches how AI models talk about your brand is exactly the kind of infrastructure you
          shouldn&apos;t have to trust a black box with. You can&apos;t audit a closed SaaS product&apos;s claims about your own
          data. You can audit RosterSEO&apos;s — every line is on GitHub, MIT licensed, and every number it shows comes
          from a real, inspectable API call.
        </p>
        <p>
          Self-hosting isn&apos;t a compliance checkbox here — it&apos;s the actual point. Your rankings, your competitor
          research, and your AI-visibility history live on your own infrastructure, under your own control, for as
          long as you want them to.
        </p>

        <h2>What &ldquo;real&rdquo; means in practice</h2>
        <p>
          Every feature in RosterSEO follows one rule: a real API call succeeds, or the product honestly says it
          isn&apos;t connected — never a fabricated, plausible-looking number standing in for one. It&apos;s a small
          engineering discipline that turns out to matter more than almost anything else once you&apos;re trusting a
          tool&apos;s numbers to make real decisions.
        </p>

        <h2>Where we&apos;re headed</h2>
        <p>
          RosterSEO is early, and built in the open on purpose — you can watch exactly what&apos;s shipping on the{" "}
          <a href="/roadmap">roadmap</a> and the <a href="/changelog">changelog</a>, both pulled from the same
          place the code actually lives.
        </p>
      </div>

      <CtaBand />
    </>
  );
}
