// Real integration list — matches packages/publishing/src/adapters and
// packages/social/src/adapters in the RosterSEO product repo exactly. No
// platform listed here that isn't a real, working adapter.

export type Integration = {
  slug: string;
  name: string;
  category: "publish" | "social";
  connect: string; // how auth works, in plain terms
  description: string;
  useCase: string;
};

export const INTEGRATIONS: Integration[] = [
  {
    slug: "wordpress",
    name: "WordPress (self-hosted)",
    category: "publish",
    connect: "Application Password",
    description: "Publish directly to any self-hosted WordPress site using WordPress's built-in Application Passwords — no plugin required.",
    useCase: "The most common blog platform for small-to-midsize sites and agencies managing several client blogs.",
  },
  {
    slug: "wordpress-com",
    name: "WordPress.com",
    category: "publish",
    connect: "OAuth",
    description: "Connect a WordPress.com-hosted blog via OAuth and publish posts, including featured images and categories.",
    useCase: "For sites hosted directly on WordPress.com rather than self-managed WordPress.",
  },
  {
    slug: "ghost",
    name: "Ghost",
    category: "publish",
    connect: "Admin API key",
    description: "Publish to a Ghost site using its Admin API — clean Markdown-to-Ghost content conversion, including tags and excerpts.",
    useCase: "Popular with newsletters and independent publications running on Ghost.",
  },
  {
    slug: "webflow",
    name: "Webflow",
    category: "publish",
    connect: "OAuth",
    description: "Publish blog posts into a Webflow CMS collection, mapped to your site's real field structure.",
    useCase: "For marketing sites built visually in Webflow with a CMS-driven blog.",
  },
  {
    slug: "hubspot",
    name: "HubSpot",
    category: "publish",
    connect: "OAuth",
    description: "Publish directly into HubSpot's blog, keeping your CMS Hub content and RosterSEO in sync.",
    useCase: "Teams already running marketing and CRM through HubSpot.",
  },
  {
    slug: "shopify",
    name: "Shopify",
    category: "publish",
    connect: "OAuth",
    description: "Publish to a Shopify store's blog — the same content engine, without leaving your storefront's ecosystem.",
    useCase: "Ecommerce brands running content marketing straight out of their Shopify blog.",
  },
  {
    slug: "tumblr",
    name: "Tumblr",
    category: "publish",
    connect: "OAuth",
    description: "Publish long-form posts to Tumblr with real tag and formatting support.",
    useCase: "Brands and creators maintaining an active Tumblr presence alongside a primary blog.",
  },
  {
    slug: "hashnode",
    name: "Hashnode",
    category: "publish",
    connect: "Personal Access Token",
    description: "Publish developer-focused content to Hashnode, including canonical URL support for cross-posting.",
    useCase: "Dev-tool and technical companies publishing to the developer community.",
  },
  {
    slug: "devto",
    name: "Dev.to",
    category: "publish",
    connect: "API key",
    description: "Cross-post technical articles to Dev.to's large developer audience, with canonical linking back to your own blog.",
    useCase: "Technical content teams looking for extra developer-audience reach.",
  },
  {
    slug: "blogger",
    name: "Blogger",
    category: "publish",
    connect: "OAuth (Google)",
    description: "Publish to a Google Blogger blog through the same Google OAuth flow used for Search Console and Analytics.",
    useCase: "Legacy or hobbyist blogs still running on Blogger.",
  },
  {
    slug: "linkedin",
    name: "LinkedIn",
    category: "social",
    connect: "OAuth",
    description: "Post to a LinkedIn company page with platform-native formatting, scheduled or sent immediately.",
    useCase: "B2B brand and thought-leadership distribution.",
  },
  {
    slug: "x",
    name: "X (Twitter)",
    category: "social",
    connect: "OAuth",
    description: "Post to X with short-form, character-aware copy generated specifically for the platform.",
    useCase: "Fast-moving announcements, threads, and real-time engagement.",
  },
  {
    slug: "threads",
    name: "Threads",
    category: "social",
    connect: "OAuth",
    description: "Post to Threads through Meta's official API, independent of your Instagram posting schedule.",
    useCase: "Brands building a presence on Meta's text-first platform.",
  },
  {
    slug: "facebook",
    name: "Facebook Page",
    category: "social",
    connect: "OAuth",
    description: "Post to a Facebook Page — text, links, and images — with independent status tracking per post.",
    useCase: "Community and local-business audiences still active on Facebook.",
  },
  {
    slug: "instagram",
    name: "Instagram",
    category: "social",
    connect: "OAuth",
    description: "Publish to an Instagram Business account through Meta's Graph API.",
    useCase: "Visual brand storytelling and product marketing.",
  },
  {
    slug: "pinterest",
    name: "Pinterest",
    category: "social",
    connect: "OAuth",
    description: "Publish Pins with real board selection, driving discovery traffic back to your content.",
    useCase: "Ecommerce, design, and content-heavy sites where Pinterest drives real referral traffic.",
  },
  {
    slug: "mastodon",
    name: "Mastodon",
    category: "social",
    connect: "OAuth (per-instance app registration)",
    description: "Post to any Mastodon instance — RosterSEO registers its own OAuth app with your chosen instance automatically.",
    useCase: "Brands building a presence on the open, federated social web.",
  },
  {
    slug: "bluesky",
    name: "Bluesky",
    category: "social",
    connect: "App password",
    description: "Post to Bluesky using the AT Protocol, with the same short-form composer as your other social targets.",
    useCase: "Early, engaged audiences on Bluesky's growing network.",
  },
];

export function getIntegration(slug: string): Integration | undefined {
  return INTEGRATIONS.find((i) => i.slug === slug);
}
