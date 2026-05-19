import ProgramCard from "@/components/ProgramCard";
import SectionTitle from "@/components/SectionTitle";
import { programs } from "@/data/programs";

export default function ProgramsPage() {
  return (
    <section className="container-shell py-16">
      <SectionTitle eyebrow="Programe" title="Invatare de weekend pentru copii si familii">
        Cursuri de limba romana, ateliere STREAM, biblioteca, grupe de varsta si optiuni de participare online.
      </SectionTitle>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {programs.map((program) => <ProgramCard program={program} key={program.slug} />)}
      </div>
    </section>
  );
}
