export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="border-b border-line px-8 pb-14 pt-20 text-center">
      <div className="mx-auto flex max-w-[680px] flex-col items-center gap-4">
        {eyebrow && <span className="text-sm font-semibold text-primary">{eyebrow}</span>}
        <h1 className="text-[34px] font-bold leading-tight sm:text-[44px]">{title}</h1>
        {description && <p className="text-[16.5px] leading-relaxed text-ink-soft">{description}</p>}
      </div>
    </div>
  );
}
