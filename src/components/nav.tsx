import Link from "next/link";
import { Logo } from "./logo";
import { GitHubIcon } from "./icons";

const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/changelog", label: "Changelog" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/open-source", label: "Open Source" },
  { href: "/blog", label: "Blog" },
  { href: "https://docs.rosterseo.com", label: "Docs" },
];

const GITHUB_URL = "https://github.com/open-saas-org/seo";
const APP_URL = "https://app.rosterseo.com";

export function Nav() {
  return (
    <div className="sticky top-0 z-20 border-b border-line bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-[1160px] items-center justify-between px-8">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <Logo size={26} />
            <span className="text-lg font-extrabold tracking-tight">RosterSEO</span>
          </Link>
          <div className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-[14.5px] font-medium text-ink-soft hover:text-ink">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <a
            href={GITHUB_URL}
            className="hidden items-center gap-2 rounded-[10px] border border-line px-4 py-[9px] text-sm font-semibold text-ink hover:bg-muted sm:flex"
          >
            <GitHubIcon className="size-4" />
            Star on GitHub
          </a>
          <a
            href={APP_URL}
            className="flex items-center gap-2 rounded-[10px] bg-ink px-[18px] py-[9px] text-sm font-semibold text-white hover:bg-neutral-800"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
