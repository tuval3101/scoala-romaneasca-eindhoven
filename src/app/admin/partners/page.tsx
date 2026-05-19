import AdminShell from "@/app/admin/AdminShell";
import AdminTable from "@/components/AdminTable";
import { partners } from "@/data/partners";

export default function AdminPartnersPage() {
  return (
    <AdminShell title="Partners">
      {/* TODO: Store partner logos, links, and ordering in the CMS. */}
      <AdminTable columns={["Name", "URL", "Logo"]} rows={partners.map((partner) => [partner.name, partner.url, partner.logo])} />
    </AdminShell>
  );
}
