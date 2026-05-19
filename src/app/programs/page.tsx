import Card from "@/components/Card";
import MediaGrid from "@/components/MediaGrid";
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
      <section className="mt-14" aria-labelledby="program-family-title">
        <SectionTitle eyebrow="Pentru familii" title="Program, inscriere si informatii practice">
          Detaliile pentru parinti sunt integrate in fiecare program, astfel incat familiile sa gaseasca rapid pasii de participare, programul si informatiile utile.
        </SectionTitle>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <Card title="Schedule">Intalniri de weekend, evenimente speciale si activitati conectate cu fiecare program.</Card>
          <Card title="Registration steps" href="/parents/registration">Formular, confirmare si prima intalnire cu echipa.</Card>
          <Card title="Practical info">Locatie, materiale, comunicare si optiuni online.</Card>
          <Card title="FAQ">Intrebari frecvente pentru inscriere si participare.</Card>
        </div>
      </section>
      <section className="mt-14" aria-labelledby="program-media-title">
        <SectionTitle eyebrow="Resurse" title="Materiale pentru programe">
          Galerie, materiale vizuale si resurse care sustin activitatile educationale.
        </SectionTitle>
        <div className="mt-8">
          <MediaGrid categories={["Programs", "Brand"]} />
        </div>
      </section>
    </section>
  );
}
