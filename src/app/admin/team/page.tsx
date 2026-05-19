import AdminShell from "@/app/admin/AdminShell";
import AdminTable from "@/components/AdminTable";
import { team } from "@/data/team";

export default function AdminTeamPage() {
  return (
    <AdminShell title="Team">
      {/* TODO: Replace mock team members with authenticated CMS records. */}
      <AdminTable columns={["Name", "Role", "Bio"]} rows={team.map((member) => [member.name, member.role, member.bio])} />
    </AdminShell>
  );
}
