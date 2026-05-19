import Link from "next/link";
import { cn } from "@/lib/utils";

type CardProps = {
  title: string;
  children: React.ReactNode;
  href?: string;
  className?: string;
};

export default function Card({ title, children, href, className }: CardProps) {
  const content = (
    <article className={cn("h-full rounded-lg border border-blue-950/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md", className)}>
      <h3 className="text-xl font-semibold text-blue-950">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-slate-700">{children}</div>
    </article>
  );

  if (!href) {
    return content;
  }

  return (
    <Link className="focus-ring block rounded-lg" href={href}>
      {content}
    </Link>
  );
}
