export function Logo({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="1" y="1" width="22" height="22" rx="6" className="fill-primary" />
      <path d="M7 12.5l3 3 7-7.5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
