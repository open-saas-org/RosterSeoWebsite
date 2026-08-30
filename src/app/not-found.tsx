import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 py-32 text-center">
      <span className="font-mono text-sm font-semibold text-primary">404</span>
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="max-w-[420px] text-[15px] text-ink-soft">
        This page doesn&apos;t exist, or it moved. Try the homepage, or the docs if you were looking for something
        product-related.
      </p>
      <div className="mt-2 flex items-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-[10px] bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Back home
          <ArrowRightIcon className="size-3.5" />
        </Link>
        <a
          href="https://docs.rosterseo.com"
          className="rounded-[10px] border border-line px-5 py-2.5 text-sm font-semibold text-ink hover:bg-muted"
        >
          Go to docs
        </a>
      </div>
    </div>
  );
}
