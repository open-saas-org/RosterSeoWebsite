// Reusable greeked placeholder visuals for the /features page — the same
// visual language as the homepage's feature grid, standing in until real
// product screenshots replace them.

export function StatsVisual() {
  return (
    <div className="flex h-full flex-col gap-3 p-5">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {["40%", "55%", "45%", "30%"].map((w, i) => (
          <div key={i} className="flex flex-col gap-2 rounded-lg border border-line bg-white p-3">
            <div className="h-1.5 w-3/5 rounded bg-muted-2" />
            <div className={`h-3 rounded ${i === 1 ? "bg-seo/80" : i === 3 ? "bg-sky/80" : "bg-ink/80"}`} style={{ width: w }} />
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

export function ChecklistVisual() {
  const rows = [
    { c: "bg-green-500", w: "60%" },
    { c: "bg-amber-500", w: "75%" },
    { c: "bg-red-500", w: "50%" },
    { c: "bg-green-500", w: "68%" },
    { c: "bg-green-500", w: "55%" },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-2.5 p-6">
      {rows.map((row, i) => (
        <div key={i} className="flex items-center gap-2.5 rounded-md border border-line bg-white px-3 py-2">
          <div className={`size-3.5 shrink-0 rounded ${row.c}`} />
          <div className="h-1.5 rounded bg-muted-2" style={{ width: row.w }} />
        </div>
      ))}
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

export function AvatarRowsVisual() {
  return (
    <div className="flex h-full flex-col justify-center gap-3 p-6">
      {["70%", "55%", "62%"].map((w, i) => (
        <div key={i} className="flex items-center gap-2.5">
          <div className="size-8 shrink-0 rounded-lg border border-line bg-white" />
          <div className="flex-1 rounded-lg border border-line bg-white p-2.5">
            <div className="mb-1.5 h-1.5 rounded bg-muted-2" style={{ width: w }} />
            <div className="h-1.5 w-2/5 rounded bg-muted-2" />
          </div>
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
