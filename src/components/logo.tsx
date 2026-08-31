import Image from "next/image";

export function Logo({ size = 22 }: { size?: number }) {
  return (
    <Image
      src="/brand/RosterSeoLogo.webp"
      alt="RosterSEO"
      width={size}
      height={size}
      className="shrink-0"
    />
  );
}
