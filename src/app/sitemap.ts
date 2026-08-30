import type { MetadataRoute } from "next";
import { FEATURES } from "@/lib/features";
import { INTEGRATIONS } from "@/lib/integrations";
import { COMPARISONS } from "@/lib/compare";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://rosterseo.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/features",
    "/pricing",
    "/how-it-works",
    "/integrations",
    "/changelog",
    "/roadmap",
    "/open-source",
    "/vision",
    "/blog",
    "/support",
    "/security",
    "/brand",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const featureRoutes = FEATURES.map((f) => ({ url: `${BASE_URL}/features/${f.slug}`, lastModified: new Date() }));
  const integrationRoutes = INTEGRATIONS.map((i) => ({ url: `${BASE_URL}/integrations/${i.slug}`, lastModified: new Date() }));
  const compareRoutes = COMPARISONS.map((c) => ({ url: `${BASE_URL}/compare/${c.slug}`, lastModified: new Date() }));
  const blogRoutes = getAllPosts().map((p) => ({ url: `${BASE_URL}/blog/${p.slug}`, lastModified: new Date(p.date) }));

  return [...staticRoutes, ...featureRoutes, ...integrationRoutes, ...compareRoutes, ...blogRoutes];
}
