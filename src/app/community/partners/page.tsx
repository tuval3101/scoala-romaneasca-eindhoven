import PartnerLogoGrid from "@/components/PartnerLogoGrid";
import SectionTitle from "@/components/SectionTitle";

export default function PartnersPage() {
  return (
    <section className="container-shell py-16">
      <SectionTitle eyebrow="Parteneri" title="Parteneri si sprijin institutional">
        Acest proiect este realizat cu sprijinul Departamentului pentru Romanii de Pretutindeni.
      </SectionTitle>
      <div className="mt-10">
        <PartnerLogoGrid />
      </div>
    </section>
  );
}
