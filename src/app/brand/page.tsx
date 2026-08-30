import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Brand — RosterSEO",
  description: "RosterSEO logo assets and color palette for press and integrations.",
};

const COLORS = [
  { name: "Primary", hex: "#0D9488", css: "--primary" },
  { name: "SEO", hex: "#059669", css: "--seo" },
  { name: "Publish", hex: "#9333EA", css: "--publish" },
  { name: "Social", hex: "#0EA5E9", css: "--sky" },
  { name: "Ink", hex: "#0A0A0A", css: "--ink" },
];

const ASSETS = [
  { name: "Logo mark (SVG)", href: "/brand/logo-mark.svg", preview: "/brand/logo-mark.svg", bg: "bg-white" },
  { name: "Logo mark, white (SVG)", href: "/brand/logo-mark-white.svg", preview: "/brand/logo-mark-white.svg", bg: "bg-ink" },
  { name: "Wordmark (SVG)", href: "/brand/wordmark.svg", preview: "/brand/wordmark.svg", bg: "bg-white", wide: true },
];

export default function BrandPage() {
  return (
    <>
      <PageHeader eyebrow="Brand" title="Logo &amp; assets" description="For press, integrations, and anyone linking back to RosterSEO." />

      <div className="mx-auto max-w-[880px] px-8 py-16">
        <h2 className="mb-5 text-xl font-bold">Logo</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {ASSETS.map((asset) => (
            <a
              key={asset.name}
              href={asset.href}
              download
              className={`flex flex-col gap-3 rounded-xl border border-line p-5 hover:border-ink ${asset.wide ? "sm:col-span-3" : ""}`}
            >
              <div className={`flex h-24 items-center justify-center rounded-lg ${asset.bg}`}>
                <Image src={asset.preview} alt={asset.name} width={asset.wide ? 220 : 56} height={asset.wide ? 42 : 56} />
              </div>
              <span className="text-[13.5px] font-semibold">{asset.name}</span>
            </a>
          ))}
        </div>

        <h2 className="mb-5 mt-14 text-xl font-bold">Colors</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
          {COLORS.map((color) => (
            <div key={color.name} className="flex flex-col gap-2">
              <div className="h-16 rounded-xl border border-line" style={{ backgroundColor: color.hex }} />
              <div>
                <p className="text-[13px] font-semibold">{color.name}</p>
                <p className="font-mono text-[12px] text-ink-faint">{color.hex}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="mb-3 mt-14 text-xl font-bold">Usage</h2>
        <p className="text-[15px] leading-relaxed text-ink-soft">
          Please don&apos;t modify the logo mark&apos;s proportions, colors, or add effects (shadows, gradients, outlines).
          Keep clear space around it equal to roughly half its height. The name is &ldquo;RosterSEO&rdquo; — one
          word, capital R and SEO.
        </p>
      </div>
    </>
  );
}
