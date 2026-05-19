import ContactBlock from "@/components/ContactBlock";
import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
  return (
    <section className="container-shell py-16">
      <SectionTitle eyebrow="Contact" title="Scrie-ne sau viziteaza-ne la Eindhoven" />
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <ContactBlock />
        <form className="grid gap-5 rounded-lg bg-white p-6 shadow-sm">
          {/* TODO: Send contact messages to the future CMS/database and admin inbox. */}
          <label className="grid gap-2 text-sm font-semibold text-blue-950">Name<input className="rounded-md border border-slate-300 px-3 py-2" type="text" /></label>
          <label className="grid gap-2 text-sm font-semibold text-blue-950">Email<input className="rounded-md border border-slate-300 px-3 py-2" type="email" /></label>
          <label className="grid gap-2 text-sm font-semibold text-blue-950">Message<textarea className="min-h-36 rounded-md border border-slate-300 px-3 py-2" /></label>
          <button className="rounded-full bg-blue-950 px-5 py-3 font-semibold text-white" type="button">Contact us</button>
        </form>
      </div>
    </section>
  );
}
