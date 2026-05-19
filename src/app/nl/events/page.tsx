import EventCard from "@/components/EventCard";
import SectionTitle from "@/components/SectionTitle";
import { events } from "@/data/events";

export default function DutchEventsPage() {
  return (
    <section className="container-shell py-16">
      <SectionTitle eyebrow="Evenementen" title="Aankomende en eerdere activiteiten" />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {events.map((event) => <EventCard event={event} key={event.slug} />)}
      </div>
    </section>
  );
}
