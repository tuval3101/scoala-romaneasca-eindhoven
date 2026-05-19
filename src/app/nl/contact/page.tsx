import ContactBlock from "@/components/ContactBlock";
import SectionTitle from "@/components/SectionTitle";

export default function DutchContactPage() {
  return (
    <section className="container-shell py-16">
      <SectionTitle eyebrow="Contact" title="Neem contact op met de school" />
      <div className="mt-10">
        <ContactBlock />
      </div>
    </section>
  );
}
