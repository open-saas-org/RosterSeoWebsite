// Reusable placeholder visuals for the /features page — the same visual
// language as the homepage's feature grid. Several are populated with real
// numbers pulled from a live RosterSEO instance (not invented) rather than
// literal screenshots; the rest stay abstract/decorative on purpose.

export function StatsVisual() {
  const stats = [
    { label: "Domain Authority", value: "5", color: "text-ink" },
    { label: "Organic traffic", value: "357", color: "text-seo" },
    { label: "Backlinks", value: "841", color: "text-ink" },
    { label: "Keywords", value: "2", color: "text-sky" },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-5">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1.5 rounded-lg border border-line bg-white p-3">
            <span className="text-[10.5px] font-medium text-ink-faint">{s.label}</span>
            <span className={`text-base font-bold ${s.color}`}>{s.value}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-line bg-white p-4">
        <svg viewBox="0 0 300 90" width="100%" height="80" preserveAspectRatio="none">
          <polyline points="0,70 40,55 80,60 120,35 160,42 200,20 240,28 300,10" fill="none" stroke="var(--color-primary)" strokeWidth={2.5} />
        </svg>
      </div>
    </div>
  );
}

// Real category breakdown from a live Site Audit run: 100/100 health score,
// 36 open issues across Links/Content/Performance.
export function ChecklistVisual() {
  const rows = [
    { label: "Links", count: 15, c: "bg-red-500" },
    { label: "Content", count: 12, c: "bg-amber-500" },
    { label: "Performance", count: 4, c: "bg-red-500" },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 p-6">
      <div className="mb-1 flex items-center gap-2">
        <span className="text-lg font-bold text-seo">100/100</span>
        <span className="text-[12px] text-ink-faint">site health · 36 open issues</span>
      </div>
      {rows.map((row) => (
        <div key={row.label} className="flex items-center justify-between rounded-md border border-line bg-white px-3 py-2">
          <div className="flex items-center gap-2.5">
            <div className={`size-3 shrink-0 rounded-full ${row.c}`} />
            <span className="text-[12.5px] font-medium text-ink-soft">{row.label}</span>
          </div>
          <span className="text-[12px] text-ink-faint">{row.count} issues</span>
        </div>
      ))}
      <div className="px-1 text-[11.5px] text-ink-faint">+5 more categories</div>
    </div>
  );
}

export function ChartVisual() {
  return (
    <div className="flex h-full items-center justify-center p-6">
      <svg viewBox="0 0 320 140" width="100%" height="140" preserveAspectRatio="none">
        <polyline
          points="0,110 30,100 60,105 90,75 120,80 150,50 180,58 210,35 240,42 270,20 300,28 320,15"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth={2.5}
        />
        <polyline
          points="0,120 30,118 60,115 90,110 120,112 150,105 180,108 210,100 240,102 270,92 300,95 320,88"
          fill="none"
          stroke="var(--color-ink-faint)"
          strokeWidth={2}
        />
      </svg>
    </div>
  );
}

export function TableVisual() {
  return (
    <div className="flex h-full flex-col justify-center gap-2 p-6">
      {["55%", "40%", "62%", "48%"].map((w, i) => (
        <div key={i} className="flex items-center justify-between rounded-md border border-line bg-white px-3 py-2.5">
          <div className="h-1.5 rounded bg-muted-2" style={{ width: w }} />
          <div className="h-1.5 w-[15%] rounded bg-ink/60" />
        </div>
      ))}
    </div>
  );
}

// Real numbers from a live AI Visibility run: 6% visibility, 15% share of
// voice, 5 tracked prompts, over the last 30 days.
export function AvatarRowsVisual() {
  const stats = [
    { label: "Visibility", value: "6%", color: "text-primary" },
    { label: "Share of voice", value: "15%", color: "text-amber-600" },
    { label: "Prompts tracked", value: "5", color: "text-ink" },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-3 p-6">
      <div className="grid grid-cols-3 gap-2.5">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1 rounded-lg border border-line bg-white p-2.5 text-center">
            <span className={`text-lg font-bold ${s.color}`}>{s.value}</span>
            <span className="text-[10px] font-medium text-ink-faint">{s.label}</span>
          </div>
        ))}
      </div>
      {["ChatGPT", "Gemini", "Perplexity"].map((model) => (
        <div key={model} className="flex items-center gap-2.5 rounded-lg border border-line bg-white p-2.5">
          <div className="size-6 shrink-0 rounded-md bg-muted-2" />
          <span className="text-[12.5px] font-medium text-ink-soft">{model}</span>
        </div>
      ))}
    </div>
  );
}

export function ChatVisual() {
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 p-6">
      <div className="max-w-[85%] self-start rounded-2xl rounded-bl-sm border border-line bg-white p-3">
        <div className="mb-1.5 h-1.5 w-[120px] rounded bg-muted-2" />
        <div className="h-1.5 w-20 rounded bg-muted-2" />
      </div>
      <div className="max-w-[70%] self-end rounded-2xl rounded-br-sm bg-primary p-3">
        <div className="h-1.5 w-[90px] rounded bg-white/50" />
      </div>
      <div className="max-w-[80%] self-start rounded-2xl rounded-bl-sm border border-line bg-white p-3">
        <div className="h-1.5 w-[100px] rounded bg-muted-2" />
      </div>
    </div>
  );
}

export function CardGridVisual() {
  return (
    <div className="grid h-full grid-cols-2 gap-2.5 p-6">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col gap-2 rounded-lg border border-line bg-white p-3">
          <div className="size-6 rounded-md bg-muted-2" />
          <div className="h-1.5 w-3/4 rounded bg-muted-2" />
          <div className="h-1.5 w-1/2 rounded bg-muted-2" />
        </div>
      ))}
    </div>
  );
}
