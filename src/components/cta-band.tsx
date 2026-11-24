import { ArrowRightIcon, GitHubIcon } from "./icons";

export function CtaBand() {
  return (
    <div className="mx-4 mb-24 flex flex-col items-center gap-5 rounded-3xl bg-ink px-6 py-14 text-center sm:mx-8 sm:px-10 sm:py-18">
      <h2 className="text-[28px] font-bold text-white sm:text-4xl">Start your free trial</h2>
      <p className="max-w-[480px] text-[16.5px] text-white/60">
        14 days free, no credit card required. Prefer to self-host? It's MIT licensed, free forever.
      </p>
      <div className="mt-2 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
        <a
          href="https://app.rosterseo.com"
          className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-[10px] bg-white px-6 py-3.5 text-[15.5px] font-semibold text-ink hover:bg-white/90 sm:w-auto"
        >
          Get Started
          <ArrowRightIcon className="size-4" />
        </a>
        <a
          href="https://github.com/open-saas-org/RosterSeo"
          className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-[10px] border border-white/15 px-[22px] py-3.5 text-[15.5px] font-semibold text-white hover:bg-white/5 sm:w-auto"
        >
          <GitHubIcon className="size-[17px]" />
          View on GitHub
        </a>
      </div>
    </div>
  );
}
