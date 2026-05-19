import Link from "next/link";
import type { StaticImageData } from "next/image";
import AssetIcon from "@/components/AssetIcon";

type FeatureCardProps = {
  title: string;
  href: string;
  icon: StaticImageData;
  children: React.ReactNode;
};

export default function FeatureCard({ title, href, icon, children }: FeatureCardProps) {
  return (
    <Link className="feature-card focus-ring" href={href}>
      <article className="h-full rounded-lg border border-blue-950/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <AssetIcon alt="" src={icon} />
        <h3 className="mt-5 text-xl font-semibold text-blue-950">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-700">{children}</p>
      </article>
    </Link>
  );
}
