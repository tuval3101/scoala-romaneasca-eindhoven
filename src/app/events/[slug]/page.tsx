import { notFound } from "next/navigation";
import Image from "next/image";
import { events, getEventBySlug } from "@/data/events";
import { eventVisuals } from "@/lib/eventVisuals";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const visual = eventVisuals[event.slug];

  return (
    <article className="container-shell py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase text-red-700">{event.category} · {event.language}</p>
        <h1 className="mt-3 text-4xl font-bold text-blue-950">{event.title}</h1>
        <p className="mt-4 text-slate-600">{formatDate(event.date)} · {event.location}</p>
        <div className={`event-detail-media mt-8 ${visual?.tone === "icon" ? "event-media-icon" : "event-media-photo"}`}>
          {visual ? (
            <Image
              alt=""
              className={visual.fit === "contain" ? "event-media-img-contain" : "event-media-img-cover"}
              src={visual.src}
              sizes="(max-width: 768px) 100vw, 720px"
            />
          ) : null}
        </div>
        <p className="mt-8 text-lg leading-8 text-slate-700">{event.body}</p>
      </div>
    </article>
  );
}
