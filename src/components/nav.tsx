"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./logo";
import { GitHubIcon } from "./icons";
import { FEATURES } from "@/lib/features";

const GITHUB_URL = "https://github.com/open-saas-org/seo";
const APP_URL = "https://app.rosterseo.com";

const RESOURCES_LINKS = [
  { href: "/how-it-works", label: "How it works", description: "From self-hosting to your first post" },
  { href: "/integrations", label: "Integrations", description: "18 real blog & social connections" },
  { href: "/changelog", label: "Changelog", description: "Live from GitHub releases" },
  { href: "/roadmap", label: "Roadmap", description: "What's shipped, next, and later" },
  { href: "/blog", label: "Blog", description: "Updates and deep-dives" },
  { href: "/open-source", label: "Open Source", description: "License, stats, contributors" },
];

export function Nav() {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <div className="sticky top-0 z-20 border-b border-line bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-[1160px] items-center justify-between px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Logo size={26} />
            <span className="text-lg font-extrabold tracking-tight">RosterSEO</span>
          </Link>
          <div className="hidden items-center gap-1 lg:flex">
            <div className="relative" onMouseEnter={() => setFeaturesOpen(true)} onMouseLeave={() => setFeaturesOpen(false)}>
              <button className="rounded-md px-3 py-2 text-[14.5px] font-medium text-ink-soft hover:bg-muted hover:text-ink">
                Features
              </button>
              {featuresOpen && (
                <div className="absolute left-0 top-full grid w-[560px] grid-cols-2 gap-1 rounded-xl border border-line bg-white p-3 shadow-lg">
                  {FEATURES.map((f) => (
                    <Link key={f.slug} href={`/features/${f.slug}`} className="rounded-lg px-3 py-2.5 hover:bg-muted">
                      <span className="block text-[13.5px] font-semibold">{f.title}</span>
                      <span className="block text-[12px] text-ink-faint">{f.tagline}</span>
                    </Link>
                  ))}
                  <Link href="/features" className="col-span-2 mt-1 rounded-lg border-t border-line px-3 pt-3 text-[13px] font-semibold text-primary">
                    View all features →
                  </Link>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}>
              <button className="rounded-md px-3 py-2 text-[14.5px] font-medium text-ink-soft hover:bg-muted hover:text-ink">
                Resources
              </button>
              {resourcesOpen && (
                <div className="absolute left-0 top-full grid w-[480px] grid-cols-2 gap-1 rounded-xl border border-line bg-white p-3 shadow-lg">
                  {RESOURCES_LINKS.map((link) => (
                    <Link key={link.href} href={link.href} className="rounded-lg px-3 py-2.5 hover:bg-muted">
                      <span className="block text-[13.5px] font-semibold">{link.label}</span>
                      <span className="block text-[12px] text-ink-faint">{link.description}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/pricing" className="rounded-md px-3 py-2 text-[14.5px] font-medium text-ink-soft hover:bg-muted hover:text-ink">
              Pricing
            </Link>
            <a href="https://docs.rosterseo.com" className="rounded-md px-3 py-2 text-[14.5px] font-medium text-ink-soft hover:bg-muted hover:text-ink">
              Docs
            </a>
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
