import ContactBlock from "@/components/ContactBlock";
import EventCard from "@/components/EventCard";
import FeatureCard from "@/components/FeatureCard";
import Hero from "@/components/Hero";
import HomeBanner from "@/components/HomeBanner";
import PartnerLogoGrid from "@/components/PartnerLogoGrid";
import SectionTitle from "@/components/SectionTitle";
import StreamSection from "@/components/StreamSection";
import { events } from "@/data/events";
import Image from "next/image";
import bookAsset from "@/resource/assets/book_asset_w.png";
import eventsAsset from "@/resource/assets/events_asset_w.png";
import schoolAsset from "@/resource/assets/school_asset_w.png";
import scienceAsset from "@/resource/assets/science_asset_w.png";

export default function HomePage() {
  const upcomingEvents = events.filter((event) => event.status === "Upcoming").slice(0, 2);

  return (
    <>
      <HomeBanner />
      <Hero title="Scoala Romaneasca din Eindhoven" subtitle="Un loc de intalnire pentru copiii si familiile care pastreaza vie limba romana, cultura si bucuria de a invata impreuna." />
      <section className="container-shell py-16">
        <div className="feature-grid">
          <FeatureCard title="Romanian classes" href="/programs/romanian-language" icon={schoolAsset}>Cursuri de limba si cultura romana pentru mai multe grupe de varsta.</FeatureCard>
          <FeatureCard title="STREAM Festival" href="/programs/stream" icon={scienceAsset}>Ateliere de stiinta, tehnologie, lectura, arta si comunitate.</FeatureCard>
          <FeatureCard title="Library" href="/programs/library" icon={bookAsset}>Carti romanesti pentru copii si recomandari de lectura.</FeatureCard>
          <FeatureCard title="Events" href="/events" icon={eventsAsset}>Evenimente, intalniri si activitati pentru familie.</FeatureCard>
        </div>
      </section>
      <StreamSection />
      <section className="bg-white py-16">
        <div className="container-shell">
          <SectionTitle eyebrow="Calendar" title="Upcoming events">Participa la activitatile comunitatii si descopera proiectele urmatoare.</SectionTitle>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {upcomingEvents.map((event) => <EventCard event={event} key={event.slug} />)}
          </div>
        </div>
      </section>
      <section className="container-shell grid gap-10 py-16 lg:grid-cols-2">
        <div className="rounded-[20px] border border-blue-950/10 bg-white p-8 shadow-sm">
          <Image
            alt=""
            className="school-asset"
            src={schoolAsset}
            sizes="90px"
          />
          <SectionTitle eyebrow="Despre noi" title="Weekend school, since 2008">Scoala sustine copiii bilingvi si familiile romanesti prin cursuri, biblioteca, evenimente si voluntariat.</SectionTitle>
        </div>
        <PartnerLogoGrid />
      </section>
      <section className="container-shell pb-16">
        <ContactBlock />
      </section>
    </>
  );
}
