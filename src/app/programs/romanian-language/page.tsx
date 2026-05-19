import ProgramFamilyInfo from "@/components/ProgramFamilyInfo";
import SectionTitle from "@/components/SectionTitle";
import { programs } from "@/data/programs";

export default function RomanianLanguagePage() {
  const program = programs.find((item) => item.slug === "romanian-language");

  return (
    <section className="container-shell py-16">
      <SectionTitle eyebrow="Program" title={program?.title ?? "Limba romana"}>
        {program?.description}
      </SectionTitle>
      <div className="mt-8 rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-blue-950">Grupe de varsta</h2>
        <p className="mt-3 text-slate-700">{program?.ageGroups.join(", ")}</p>
        <p className="mt-3 font-semibold text-green-800">{program?.mode}</p>
      </div>
      <ProgramFamilyInfo programName={program?.title ?? "Limba romana"} />
    </section>
  );
}
