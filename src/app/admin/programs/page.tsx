import AdminShell from "@/app/admin/AdminShell";
import AdminTable from "@/components/AdminTable";
import { programs } from "@/data/programs";

export default function AdminProgramsPage() {
  return (
    <AdminShell title="Programs">
      {/* TODO: Persist program cards and details in the future CMS. */}
      <AdminTable columns={["Title", "Slug", "Mode"]} rows={programs.map((program) => [program.title, program.slug, program.mode])} />
    </AdminShell>
  );
}
