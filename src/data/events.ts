export type Event = {
  slug: string;
  title: string;
  date: string;
  location: string;
  language: string;
  category: string;
  status: "Upcoming" | "Past";
  image: string;
  excerpt: string;
  body: string;
};

export const events: Event[] = [
  {
    slug: "stream-festival-2026",
    title: "Festival STREAM Eindhoven 2026",
    date: "2026-06-13",
    location: "Eindhoven",
    language: "RO / NL",
    category: "Festival",
    status: "Upcoming",
    image: "/images/events/stream-2026.jpg",
    excerpt: "O zi dedicata curiozitatii, stiintei, lecturii si comunitatii.",
    body: "Festivalul STREAM reuneste copii, parinti, voluntari si parteneri in jurul atelierelor educative si activitatilor practice.",
  },
  {
    slug: "ioana-macoveiciuc-book-event",
    title: "Lansare de carte si lectura de poveste",
    date: "2026-05-24",
    location: "Oldengaarde 1b, Eindhoven",
    language: "RO",
    category: "Lectura",
    status: "Upcoming",
    image: "/images/events/ioana-book-event.jpg",
    excerpt: "Intalnire literara pentru copii si familii.",
    body: "Evenimentul aduce lectura in centrul comunitatii, cu discutii si activitati pentru copii.",
  },
  {
    slug: "autumn-community-day",
    title: "Ziua comunitatii de toamna",
    date: "2025-10-12",
    location: "Eindhoven",
    language: "RO / NL",
    category: "Comunitate",
    status: "Past",
    image: "/images/events/community-day.jpg",
    excerpt: "Ateliere, discutii si activitati pentru familii.",
    body: "O intalnire pentru conectare, voluntariat si planificarea activitatilor scolare.",
  },
];

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}
