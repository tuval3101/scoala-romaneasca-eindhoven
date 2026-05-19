import { partners } from "@/data/partners";

export default function PartnerLogoGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {partners.map((partner) => (
        <a className="focus-ring grid min-h-32 place-items-center rounded-lg border border-blue-950/10 bg-white p-6 text-center text-sm font-semibold text-slate-700 shadow-sm hover:shadow-md" href={partner.url} key={partner.name}>
          <span>{partner.name}</span>
        </a>
      ))}
    </div>
  );
}
