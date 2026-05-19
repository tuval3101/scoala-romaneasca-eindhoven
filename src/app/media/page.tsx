import MediaGrid from "@/components/MediaGrid";
import SectionTitle from "@/components/SectionTitle";

export default function MediaPage() {
  return (
    <section className="container-shell py-16">
      <SectionTitle eyebrow="Media" title="Gallery, flyers, awards and press">
        Placeholder pentru galerie, flyere, premii si aparitii media.
      </SectionTitle>
      <div className="mt-10">
        <MediaGrid />
      </div>
    </section>
  );
}
