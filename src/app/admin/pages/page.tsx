import AdminShell from "@/app/admin/AdminShell";
import AdminTable from "@/components/AdminTable";
import { pages } from "@/data/pages";

export default function AdminPagesPage() {
  return (
    <AdminShell title="Pages">
      {/* TODO: Connect editable pages to CMS page records. */}
      <AdminTable columns={["Title", "Slug", "Status", "Updated"]} rows={pages.map((page) => [page.title, page.slug, page.status, page.updatedAt])} />
    </AdminShell>
  );
}
