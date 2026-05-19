import Card from "@/components/Card";
import EventCard from "@/components/EventCard";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import { events } from "@/data/events";

export default function DutchHomePage() {
  return (
    <>
      <Hero title="Roemeense School Eindhoven" subtitle="Een warme weekendgemeenschap voor Roemeense taal, cultuur, lezen en educatieve activiteiten in Eindhoven." />
      <section className="container-shell py-16">
        <SectionTitle eyebrow="Programma" title="Voor kinderen en families" />
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          <Card title="Roemeense les" href="/nl/programs">Taal en cultuur voor verschillende leeftijden.</Card>
          <Card title="STREAM" href="/nl/programs">Workshops rond wetenschap, lezen en creativiteit.</Card>
          <Card title="Bibliotheek" href="/nl/programs">Roemeense boeken voor thuis en op school.</Card>
          <Card title="Evenementen" href="/nl/events">Activiteiten voor de hele gemeenschap.</Card>
        </div>
      </section>
      <section className="container-shell pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {events.filter((event) => event.status === "Upcoming").map((event) => <EventCard event={event} key={event.slug} />)}
        </div>
      </section>
    </>
  );
}
