import Image from "next/image";
import { partners } from "@/data/partners";

export default function PartnerLogoGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {partners.map((partner) => (
        <a className="focus-ring grid min-h-32 place-items-center rounded-lg border border-blue-950/10 bg-white p-5 text-center text-sm font-semibold text-slate-700 shadow-sm hover:shadow-md" href={partner.url} key={partner.name}>
          <span className="relative block h-20 w-full">
            <Image
              alt={partner.name}
              className="object-contain"
              fill
              sizes="(max-width: 640px) 100vw, 220px"
              src={partner.logo}
            />
          </span>
          <span className="sr-only">{partner.name}</span>
        </a>
      ))}
    </div>
  );
}
