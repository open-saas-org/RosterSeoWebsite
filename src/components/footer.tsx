import Link from "next/link";
import { Logo } from "./logo";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/changelog", label: "Changelog" },
      { href: "/roadmap", label: "Roadmap" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "https://docs.rosterseo.com", label: "Docs" },
      { href: "/blog", label: "Blog" },
      { href: "/open-source", label: "Open Source" },
    ],
  },
  {
    title: "Community",
    links: [
      { href: "https://github.com/open-saas-org/seo", label: "GitHub" },
      { href: "https://github.com/open-saas-org/seo/issues", label: "Issues" },
      { href: "https://github.com/open-saas-org/seo/blob/main/CONTRIBUTING.md", label: "Contributing" },
    ],
  },
];

export function Footer() {
  return (
    <div className="mt-auto border-t border-line">
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-8 px-8 pb-10 pt-14 sm:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center gap-2">
            <Logo size={22} />
            <span className="text-base font-extrabold">RosterSEO</span>
          </div>
          <p className="max-w-[220px] text-[13.5px] leading-relaxed text-ink-soft">
            Open-source SEO, AI-visibility, and publishing — self-hosted or coming soon to the cloud.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <span className="text-[12.5px] font-bold uppercase tracking-wide text-ink-faint">{col.title}</span>
            {col.links.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm text-ink-soft hover:text-ink">
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1160px] items-center justify-between border-t border-line px-8 py-5">
        <span className="text-[13px] text-ink-faint">© {new Date().getFullYear()} RosterSEO. MIT Licensed.</span>
        <div className="flex gap-4">
          <Link href="/privacy" className="text-[13px] text-ink-faint hover:text-ink-soft">
            Privacy
          </Link>
          <Link href="/terms" className="text-[13px] text-ink-faint hover:text-ink-soft">
            Terms
          </Link>
        </div>
      </div>
    </div>
  );
}
