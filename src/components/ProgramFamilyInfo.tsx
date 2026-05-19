import Card from "@/components/Card";

type ProgramFamilyInfoProps = {
  programName: string;
};

export default function ProgramFamilyInfo({ programName }: ProgramFamilyInfoProps) {
  return (
    <section className="mt-12" aria-labelledby="family-info-title">
      <div className="rounded-lg border border-blue-950/10 bg-[#fffdf8] p-6 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-red-700">Pentru familii</p>
        <h2 id="family-info-title" className="mt-2 text-2xl font-semibold text-blue-950">
          Informatii pentru {programName}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-700">
          Structura practica pentru participare: program, inscriere, materiale si intrebari frecvente.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Card title="Schedule">Intalniri de weekend, evenimente speciale si activitati conectate cu programul.</Card>
          <Card title="Registration steps" href="/parents/registration">
            Trimite formularul, primeste confirmarea si participa la prima intalnire.
          </Card>
          <Card title="Practical info">Locatie, materiale, comunicare cu echipa si optiuni de participare online.</Card>
          <Card title="FAQ">Intrebari frecvente despre varsta, nivel, prezenta, materiale si implicarea parintilor.</Card>
        </div>
      </div>
    </section>
  );
}
