import EventCard from "@/components/EventCard";
import SectionTitle from "@/components/SectionTitle";
import { events } from "@/data/events";

export default function EventsPage() {
  return (
    <section className="container-shell py-16">
      <SectionTitle eyebrow="Evenimente" title="Upcoming and past events">
        Carduri cu titlu, data, locatie, limba, categorie si imagine placeholder.
      </SectionTitle>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {events.map((event) => <EventCard event={event} key={event.slug} />)}
      </div>
    </section>
  );
}
