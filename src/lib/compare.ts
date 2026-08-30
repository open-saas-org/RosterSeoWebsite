export type Comparison = {
  slug: string;
  name: string;
  tagline: string;
  rows: { feature: string; rosterseo: string; them: string }[];
};

export const COMPARISONS: Comparison[] = [
  {
    slug: "semrush",
    name: "Semrush",
    tagline: "A closed-source, subscription SEO suite vs. an open-source one you run yourself.",
    rows: [
      { feature: "Source code", rosterseo: "Fully open, MIT licensed", them: "Closed source" },
      { feature: "Where your data lives", rosterseo: "Your own infrastructure", them: "Semrush's servers" },
      { feature: "Pricing model", rosterseo: "Free to self-host, pay only your own API costs", them: "$139.95–$499.95+/mo subscription" },
      { feature: "AI-answer-engine visibility", rosterseo: "Built in — ChatGPT, Gemini, Perplexity", them: "Limited / add-on" },
      { feature: "Multi-platform publishing", rosterseo: "Built in — 10 blog + 8 social platforms", them: "Not included" },
      { feature: "Self-hostable", rosterseo: "Yes", them: "No" },
      { feature: "Can you audit how a number is calculated?", rosterseo: "Yes — it's real code you can read", them: "No — closed algorithms" },
    ],
  },
  {
    slug: "ahrefs",
    name: "Ahrefs",
    tagline: "A best-in-class closed backlink index vs. an open platform built around DataForSEO and real page-level analysis.",
    rows: [
      { feature: "Source code", rosterseo: "Fully open, MIT licensed", them: "Closed source" },
      { feature: "Where your data lives", rosterseo: "Your own infrastructure", them: "Ahrefs' servers" },
      { feature: "Pricing model", rosterseo: "Free to self-host, pay only your own API costs", them: "$29–$1,499+/mo subscription" },
      { feature: "AI-answer-engine visibility", rosterseo: "Built in — ChatGPT, Gemini, Perplexity", them: "Not included" },
      { feature: "Multi-platform publishing", rosterseo: "Built in — 10 blog + 8 social platforms", them: "Not included" },
      { feature: "Self-hostable", rosterseo: "Yes", them: "No" },
      { feature: "In-app AI agent", rosterseo: "Cappy — reads and writes across the product", them: "Not included" },
    ],
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return COMPARISONS.find((c) => c.slug === slug);
}
