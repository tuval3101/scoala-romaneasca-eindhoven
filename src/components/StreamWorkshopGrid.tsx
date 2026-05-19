import SectionTitle from "@/components/SectionTitle";
import StreamWorkshopCard from "@/components/StreamWorkshopCard";
import { streamWorkshops } from "@/data/streamWorkshops";

export default function StreamWorkshopGrid() {
  return (
    <section className="mt-14">
      <style>
        {`
          .logo-shake:hover {
            animation: logo-shake 420ms ease-in-out;
          }

          @keyframes logo-shake {
            0%, 100% { transform: translateX(0) rotate(0deg); }
            20% { transform: translateX(-2px) rotate(-2deg); }
            40% { transform: translateX(2px) rotate(2deg); }
            60% { transform: translateX(-1px) rotate(-1deg); }
            80% { transform: translateX(1px) rotate(1deg); }
          }
        `}
      </style>
      <SectionTitle eyebrow="STREAM teams" title="Workshopuri si echipe invitate">
        Fiecare atelier are un spatiu dedicat cu echipa, logo-ul si imaginea workshopului, adaptate la structura vizuala a site-ului.
      </SectionTitle>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {streamWorkshops.map((workshop) => (
          <StreamWorkshopCard key={`${workshop.team}-${workshop.title}`} workshop={workshop} />
        ))}
      </div>
    </section>
  );
}
