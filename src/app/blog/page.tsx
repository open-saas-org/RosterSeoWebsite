import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — RosterSEO",
  description: "Updates, deep-dives, and thinking from the RosterSEO project.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHeader eyebrow="Blog" title="Updates &amp; deep-dives" />
      <div className="mx-auto max-w-[720px] px-8 py-16">
        {posts.length === 0 ? (
          <p className="text-center text-ink-soft">No posts yet — check back soon.</p>
        ) : (
          <div className="flex flex-col gap-10">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col gap-2">
                <span className="text-[13px] text-ink-faint">{formatDate(post.date)}</span>
                <h2 className="text-xl font-bold group-hover:text-primary">{post.title}</h2>
                <p className="text-[15px] leading-relaxed text-ink-soft">{post.description}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
