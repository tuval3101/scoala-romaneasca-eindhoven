import Link from "next/link";
import type { Program } from "@/data/programs";

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="rounded-lg border border-blue-950/10 bg-white p-6 shadow-sm">
      <div className="h-36 rounded-md bg-slate-200 bg-cover bg-center" style={{ backgroundImage: `url(${program.image})` }} />
      <h3 className="mt-5 text-xl font-semibold text-blue-950">{program.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-700">{program.summary}</p>
      <p className="mt-3 text-sm font-semibold text-green-800">{program.mode}</p>
      <Link className="focus-ring mt-5 inline-flex rounded-full border border-blue-950/20 px-4 py-2 text-sm font-semibold text-blue-950 hover:bg-blue-950 hover:text-white" href={`/programs/${program.slug}`}>
        Learn more
      </Link>
    </article>
  );
}
