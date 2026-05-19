import AdminShell from "@/app/admin/AdminShell";
import AdminTable from "@/components/AdminTable";

export default function AdminMessagesPage() {
  return (
    <AdminShell title="Messages">
      {/* TODO: Populate from contact form submissions after backend integration. */}
      <AdminTable columns={["From", "Email", "Subject", "Status"]} rows={[["Parent Example", "parent@example.com", "Registration question", "New"], ["Volunteer Example", "volunteer@example.com", "Volunteer", "Read"]]} />
    </AdminShell>
  );
}
