import Image from "next/image";
import type { StreamWorkshop } from "@/data/streamWorkshops";

export default function StreamWorkshopCard({ workshop }: { workshop: StreamWorkshop }) {
  const logo = (
    <span
      className="relative block overflow-hidden rounded-md border border-blue-950/10 bg-[#fffaf0] p-2"
      style={{ height: 88, width: 136 }}
    >
      <Image
        alt={`${workshop.team} logo`}
        className="object-contain"
        fill
        sizes="112px"
        src={workshop.logo}
      />
    </span>
  );

  return (
    <article className="group overflow-hidden rounded-lg border border-blue-950/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#fffaf0]">
        <Image
          alt=""
          className="object-contain p-3"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
          src={workshop.photo}
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-4">
          {workshop.website ? (
            <a
              aria-label={`${workshop.team} website`}
              className="logo-shake focus-ring inline-block flex-none rounded-md"
              href={workshop.website}
              rel="noreferrer"
              target="_blank"
            >
              {logo}
            </a>
          ) : (
            <span className="block flex-none">{logo}</span>
          )}
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-red-700">{workshop.team}</p>
            <h3 className="mt-1 text-lg font-semibold leading-snug text-blue-950">{workshop.title}</h3>
          </div>
        </div>
      </div>
    </article>
  );
}
