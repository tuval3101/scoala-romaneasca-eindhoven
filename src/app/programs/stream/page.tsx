import ProgramFamilyInfo from "@/components/ProgramFamilyInfo";
import SectionTitle from "@/components/SectionTitle";
import { programs } from "@/data/programs";

export default function StreamPage() {
  const program = programs.find((item) => item.slug === "stream");

  return (
    <section className="container-shell py-16">
      <SectionTitle eyebrow="STREAM" title={program?.title ?? "STREAM / Science"}>
        {program?.description}
      </SectionTitle>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {["Science", "Technology", "Reading", "Engineering", "Arts", "Math"].map((label) => (
          <article className="rounded-lg bg-white p-6 text-center font-semibold text-blue-950 shadow-sm" key={label}>{label}</article>
        ))}
      </div>
      <ProgramFamilyInfo programName={program?.title ?? "STREAM / Science"} />
    </section>
  );
}
