import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";

export default function CommunityPage() {
  return (
    <section className="container-shell py-16">
      <SectionTitle eyebrow="Comunitate" title="Echipa, voluntari, parteneri si sponsori">
        Comunitatea este construita prin implicarea familiilor, profesorilor, voluntarilor si organizatiilor partenere.
      </SectionTitle>
      <div className="mt-10 grid gap-6 md:grid-cols-4">
        <Card title="Team" href="/community/team">Echipa educationala si coordonatorii programelor.</Card>
        <Card title="Volunteers">Parinti si prieteni care sustin activitatile.</Card>
        <Card title="Partners" href="/community/partners">Organizatii si institutii partenere.</Card>
        <Card title="Sponsors">Sprijin pentru proiecte si evenimente.</Card>
      </div>
    </section>
  );
}
