import ProgramFamilyInfo from "@/components/ProgramFamilyInfo";
import SectionTitle from "@/components/SectionTitle";
import { programs } from "@/data/programs";

export default function LibraryPage() {
  const program = programs.find((item) => item.slug === "library");

  return (
    <section className="container-shell py-16">
      <SectionTitle eyebrow="Biblioteca" title={program?.title ?? "Biblioteca romaneasca"}>
        {program?.description}
      </SectionTitle>
      <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
        <p className="leading-7 text-slate-700">Placeholder pentru catalog, recomandari de lectura si reguli de imprumut.</p>
      </div>
      <ProgramFamilyInfo programName={program?.title ?? "Biblioteca romaneasca"} />
    </section>
  );
}
