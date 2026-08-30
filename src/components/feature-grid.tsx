import type { ReactNode } from "react";

function FeatureCard({
  span,
  visual,
  title,
  description,
  flagship,
}: {
  span?: boolean;
  visual: ReactNode;
  title: string;
  description: string;
  flagship?: boolean;
}) {
  return (
    <div className={`flex flex-col overflow-hidden rounded-[14px] border border-line bg-white ${span ? "md:col-span-2" : ""}`}>
      <div className="relative h-[200px] border-b border-line bg-gradient-to-b from-muted-2 to-muted p-5">
        {flagship && (
          <div className="absolute right-4 top-4 rounded-full bg-ink px-2.5 py-1 text-[11px] font-bold text-white">
            FLAGSHIP
          </div>
        )}
        {visual}
      </div>
      <div className="flex flex-col gap-2 p-6">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm leading-relaxed text-ink-soft">{description}</p>
      </div>
    </div>
  );
}

function StatBlock({ w, color }: { w: string; color: string }) {
  return (
    <div className="flex-1 rounded-lg border border-line bg-white p-2.5">
      <div className="mb-2 h-1.5 w-1/2 rounded bg-muted-2" />
      <div className={`h-2.5 rounded ${color}`} style={{ width: w }} />
    </div>
  );
}

export function FeatureGrid() {
  return (
    <div id="features" className="border-y border-line bg-muted">
      <div className="mx-auto max-w-[1160px] px-8 pb-24 pt-[88px]">
        <div className="mx-auto mb-13 flex max-w-[580px] flex-col items-center gap-3.5 text-center">
          <h2 className="text-[28px] font-bold sm:text-[38px]">Built for real work, not demos</h2>
          <p className="text-[16.5px] text-ink-soft">
            Every number on every screen comes from a real API call — DataForSEO, Google, or an LLM provider. No
            fabricated data, anywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <FeatureCard
            span
            flagship
            title="Page Analyzer"
            description="Crawl any page, compare it against the real top-10 for your keyword, and get an AI-written fix-it plan — including which competitors are actually beatable."
            visual={
              <div className="flex h-full flex-col gap-2.5">
                <div className="flex gap-2.5">
                  <StatBlock w="35%" color="bg-ink/80" />
                  <StatBlock w="45%" color="bg-seo/80" />
                  <StatBlock w="30%" color="bg-ink/80" />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-1.5 rounded-lg border border-line bg-white p-2.5">
                  <div className="h-1.5 w-[90%] rounded bg-muted-2" />
                  <div className="h-1.5 w-3/4 rounded bg-muted-2" />
                  <div className="h-1.5 w-[82%] rounded bg-muted-2" />
                </div>
              </div>
            }
          />

          <FeatureCard
            title="Site Audit"
            description="A full crawl that finds broken links, missing metadata, and orphaned pages across your whole site."
            visual={
              <div className="flex h-full flex-col justify-center gap-2">
                {[
                  { c: "bg-green-500", w: "60%" },
                  { c: "bg-amber-500", w: "75%" },
                  { c: "bg-red-500", w: "50%" },
                  { c: "bg-green-500", w: "65%" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`size-4 rounded ${row.c}`} />
                    <div className="h-1.5 rounded bg-muted-2" style={{ width: row.w }} />
                  </div>
                ))}
              </div>
            }
          />

          <FeatureCard
            title="Rank Tracking"
            description="Real daily position checks for every keyword that matters, with full history — not a weekly estimate."
            visual={
              <svg viewBox="0 0 300 140" width="100%" height="100%" preserveAspectRatio="none">
                <polyline
                  points="0,110 30,100 60,105 90,75 120,80 150,50 180,58 210,35 240,42 270,20 300,28"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth={2.5}
                />
              </svg>
            }
          />

          <FeatureCard
            title="Keyword Research"
            description="Real search volume, CPC, and difficulty for every idea — tiered by relevance, not padded with guesses."
            visual={
              <div className="flex h-full flex-col justify-center gap-2">
                {["45%", "60%", "38%"].map((w, i) => (
                  <div key={i} className="flex items-center justify-between rounded-md border border-line bg-white px-2.5 py-2">
                    <div className="h-1.5 rounded bg-muted-2" style={{ width: w }} />
                    <div className="h-1.5 w-[15%] rounded bg-ink/60" />
                  </div>
                ))}
              </div>
            }
          />

          <FeatureCard
            title="AI Visibility"
            description="Track how ChatGPT, Gemini, and Perplexity mention, cite, and describe your brand — and who they mention instead."
            visual={
              <div className="flex h-full flex-col justify-center gap-2.5">
                {["70%", "60%"].map((w, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="size-[30px] shrink-0 rounded-lg border border-line bg-white" />
                    <div className="flex-1 rounded-lg border border-line bg-white p-2">
                      <div className="mb-1.5 h-1.5 rounded bg-muted-2" style={{ width: w }} />
                      <div className="h-1.5 w-2/5 rounded bg-muted-2" />
                    </div>
                  </div>
                ))}
              </div>
            }
          />

          <FeatureCard
            span
            title="Meet Cappy, your in-app agent"
            description="Ask Cappy to research keywords, size up competitors, or check your latest rankings — it reads and writes across the whole product on your behalf."
            visual={
              <div className="flex h-full flex-col justify-center gap-2.5">
                <div className="max-w-[85%] self-start rounded-2xl rounded-bl-sm border border-line bg-white p-2.5">
                  <div className="mb-1.5 h-1.5 w-[120px] rounded bg-muted-2" />
                  <div className="h-1.5 w-20 rounded bg-muted-2" />
                </div>
                <div className="max-w-[70%] self-end rounded-2xl rounded-br-sm bg-primary p-2.5">
                  <div className="h-1.5 w-[90px] rounded bg-white/50" />
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
