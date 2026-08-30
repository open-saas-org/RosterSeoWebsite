import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { CheckIcon } from "@/components/icons";
import { COMPARISONS, getComparison } from "@/lib/compare";

export function generateStaticParams() {
  return COMPARISONS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getComparison(slug);
  if (!c) return {};
  return { title: `RosterSEO vs ${c.name}`, description: c.tagline };
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getComparison(slug);
  if (!c) notFound();

  return (
    <>
      <div className="border-b border-line px-8 pb-16 pt-20 text-center">
        <div className="mx-auto flex max-w-[680px] flex-col items-center gap-4">
          <span className="text-sm font-semibold text-primary">Comparison</span>
          <h1 className="text-[32px] font-bold leading-tight sm:text-[40px]">
            RosterSEO <span className="text-ink-faint">vs</span> {c.name}
          </h1>
          <p className="text-[16px] leading-relaxed text-ink-soft">{c.tagline}</p>
        </div>
      </div>

      <div className="mx-auto max-w-[820px] px-8 py-16">
        <div className="overflow-x-auto rounded-2xl border border-line">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-line bg-muted">
                <th className="p-4 font-semibold text-ink-soft">Feature</th>
                <th className="p-4 font-bold text-primary">RosterSEO</th>
                <th className="p-4 font-semibold text-ink-soft">{c.name}</th>
              </tr>
            </thead>
            <tbody>
              {c.rows.map((row, i) => (
                <tr key={row.feature} className={i < c.rows.length - 1 ? "border-b border-line" : ""}>
                  <td className="p-4 font-medium">{row.feature}</td>
                  <td className="p-4">
                    <div className="flex items-start gap-2 text-ink-soft">
                      <CheckIcon className="mt-0.5 size-3.5 shrink-0 text-primary" />
                      {row.rosterseo}
                    </div>
                  </td>
                  <td className="p-4 text-ink-faint">{row.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-center text-[12.5px] text-ink-faint">
          {c.name} pricing as published on their own site at time of writing — verify current pricing directly with them.
        </p>
      </div>

      <CtaBand />
    </>
  );
}
