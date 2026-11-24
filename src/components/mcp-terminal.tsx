import { ArrowRightIcon } from "./icons";

// Real tool names from apps/mcp-server/src/index.ts - this is illustrative
// terminal output (the exact shape an MCP client renders a tool call as),
// not a captured real session, so it doesn't carry the "never fabricate a
// number" rule the product itself follows - no specific metric values are
// shown, just the real tool names and real response shape.
const LINES = [
  { kind: "prompt", text: "What keywords should I write about for rosterseo.com?" },
  { kind: "tool", text: "research_keywords({ seedKeyword: \"open source seo tool\" })" },
  { kind: "result", text: "→ 20 real DataForSEO keyword ideas, with volume, difficulty, CPC" },
  { kind: "tool", text: "get_site_audits({ projectId })" },
  { kind: "result", text: "→ latest audit: health score, pages crawled, open issues" },
  { kind: "tool", text: "get_brand_visibility({ projectId })" },
  { kind: "result", text: "→ real AI-answer-engine mentions, by tracked prompt" },
];

export function McpTerminal() {
  return (
    <div className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-center gap-12 px-8 py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-semibold text-primary">MCP server</span>
          <h2 className="text-[28px] font-bold leading-tight sm:text-[36px]">Point your own AI tools at your real data</h2>
          <p className="text-[16.5px] leading-relaxed text-ink-soft">
            RosterSEO ships a real MCP server — Claude, Cursor, ChatGPT, or any MCP-compatible agent can query your
            rankings, site audits, competitors, and AI-visibility results directly, scoped to an API key you control.
          </p>
          <ul className="mt-1 flex flex-col gap-2.5 text-[14.5px] text-ink-soft">
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" />
              15+ real tools — keywords, rankings, audits, competitors, AI visibility
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" />
              Scoped, revocable API keys — never your whole account
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" />
              Self-hosted means the server is yours too, not a third party's
            </li>
          </ul>
          <a href="/features/mcp-server" className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark">
            Explore the MCP server
            <ArrowRightIcon className="size-4" />
          </a>
          <p className="text-xs text-ink-faint">See apps/mcp-server in the open-source repo for every tool.</p>
        </div>

        <div className="overflow-hidden rounded-[18px] border border-line bg-[#0b0f0e] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)]">
          <div className="flex h-[38px] items-center gap-1.5 border-b border-white/10 px-3.5">
            <div className="size-2.5 rounded-full bg-white/20" />
            <div className="size-2.5 rounded-full bg-white/20" />
            <div className="size-2.5 rounded-full bg-white/20" />
            <div className="ml-2.5 font-mono text-[11.5px] text-white/40">claude · rosterseo mcp</div>
          </div>
          <div className="flex flex-col gap-2 p-5 font-mono text-[13px] leading-relaxed">
            {LINES.map((line, i) => (
              <div
                key={i}
                className={
                  line.kind === "prompt"
                    ? "text-white/90"
                    : line.kind === "tool"
                      ? "text-emerald-400"
                      : "pl-2 text-white/50"
                }
              >
                {line.kind === "prompt" ? "> " : line.kind === "tool" ? "● " : ""}
                {line.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
