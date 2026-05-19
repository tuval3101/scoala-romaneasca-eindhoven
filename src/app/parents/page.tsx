import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";

export default function ParentsPage() {
  return (
    <section className="container-shell py-16">
      <SectionTitle eyebrow="Parinti" title="Program, inscriere, informatii practice si FAQ" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card title="Schedule">Intalniri de weekend, evenimente speciale si activitati de biblioteca.</Card>
        <Card title="Registration steps" href="/parents/registration">Trimite formularul, primeste confirmarea si participa la prima intalnire.</Card>
        <Card title="Practical info">Locatie, materiale, comunicare si optiuni online.</Card>
        <Card title="FAQ">Placeholder pentru intrebari frecvente ale parintilor.</Card>
      </div>
    </section>
  );
}
