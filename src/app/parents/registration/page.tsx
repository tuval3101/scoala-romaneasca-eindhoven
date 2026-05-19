import SectionTitle from "@/components/SectionTitle";

export default function RegistrationPage() {
  return (
    <section className="container-shell py-16">
      <SectionTitle eyebrow="Inscriere" title="Register for activities">
        Placeholder pentru formularul de inscriere. Conectarea la backend/CMS va fi adaugata ulterior.
      </SectionTitle>
      <form className="mt-10 grid max-w-2xl gap-5 rounded-lg bg-white p-6 shadow-sm">
        {/* TODO: Replace this static form with validated submission to the future CMS/database. */}
        <label className="grid gap-2 text-sm font-semibold text-blue-950">Parent name<input className="rounded-md border border-slate-300 px-3 py-2" type="text" /></label>
        <label className="grid gap-2 text-sm font-semibold text-blue-950">Email<input className="rounded-md border border-slate-300 px-3 py-2" type="email" /></label>
        <label className="grid gap-2 text-sm font-semibold text-blue-950">Message<textarea className="min-h-32 rounded-md border border-slate-300 px-3 py-2" /></label>
        <button className="rounded-full bg-red-700 px-5 py-3 font-semibold text-white" type="button">Submit placeholder</button>
      </form>
    </section>
  );
}
