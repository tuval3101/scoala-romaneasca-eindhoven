import Image from "next/image";
import Link from "next/link";
import type { Event } from "@/data/events";
import { eventVisuals } from "@/lib/eventVisuals";
import { formatDate } from "@/lib/utils";

export default function EventCard({ event }: { event: Event }) {
  const visual = eventVisuals[event.slug];

  return (
    <article className="overflow-hidden rounded-lg border border-blue-950/10 bg-white shadow-sm">
      <div className={`event-media ${visual?.tone === "icon" ? "event-media-icon" : "event-media-photo"}`}>
        {visual ? (
          <Image
            alt=""
            className={visual.fit === "contain" ? "event-media-img-contain" : "event-media-img-cover"}
            src={visual.src}
            sizes="(max-width: 768px) 100vw, 520px"
          />
        ) : null}
      </div>
      <div className="p-5">
        <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase text-red-700">
          <span>{event.category}</span>
          <span aria-hidden="true">/</span>
          <span>{event.language}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold text-blue-950">{event.title}</h3>
        <p className="mt-2 text-sm text-slate-600">{formatDate(event.date)} · {event.location}</p>
        <p className="mt-3 text-sm leading-6 text-slate-700">{event.excerpt}</p>
        <Link className="focus-ring mt-5 inline-flex rounded-full bg-blue-950 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900" href={`/events/${event.slug}`}>
          View event
        </Link>
      </div>
    </article>
  );
}
