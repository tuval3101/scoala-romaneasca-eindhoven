import ProgramCard from "@/components/ProgramCard";
import SectionTitle from "@/components/SectionTitle";
import { programs } from "@/data/programs";

export default function DutchProgramsPage() {
  return (
    <section className="container-shell py-16">
      <SectionTitle eyebrow="Programma's" title="Taal, STREAM en bibliotheek" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {programs.map((program) => <ProgramCard program={program} key={program.slug} />)}
      </div>
    </section>
  );
}
