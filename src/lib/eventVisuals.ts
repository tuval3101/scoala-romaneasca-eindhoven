import type { StaticImageData } from "next/image";
import bookAsset from "@/resource/assets/book_asset_w.png";
import eventsAsset from "@/resource/assets/events_asset_w.png";
import streamMeaningLarge from "@/resource/images/stream_meaning_l.png";

export type EventVisual = {
  src: StaticImageData;
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
    src: bookAsset,
    fit: "contain",
    tone: "icon",
  },
  "autumn-community-day": {
    src: eventsAsset,
    fit: "contain",
    tone: "icon",
  },
};
