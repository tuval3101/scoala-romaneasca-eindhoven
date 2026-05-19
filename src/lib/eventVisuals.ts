import type { StaticImageData } from "next/image";
import streamMeaningLarge from "@/resource/images/stream_meaning_l.png";

export type EventVisual = {
  src: StaticImageData | string;
  fit: "cover" | "contain";
  tone: "photo" | "icon";
};

export const eventVisuals: Record<string, EventVisual> = {
  "stream-festival-2026": {
    src: streamMeaningLarge,
    fit: "cover",
    tone: "photo",
  },
  "ioana-macoveiciuc-book-event": {
    src: "/images/events/ioana-book-event.jpg",
    fit: "contain",
    tone: "photo",
  },
  "autumn-community-day": {
    src: "/images/events/autumn-community-day.png",
    fit: "contain",
    tone: "photo",
  },
};
