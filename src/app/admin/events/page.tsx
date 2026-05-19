import AdminShell from "@/app/admin/AdminShell";
import AdminTable from "@/components/AdminTable";
import { events } from "@/data/events";

export default function AdminEventsPage() {
  return (
    <AdminShell title="Events">
      {/* TODO: Add CRUD operations backed by CMS/database events. */}
      <AdminTable columns={["Title", "Date", "Location", "Status"]} rows={events.map((event) => [event.title, event.date, event.location, event.status])} />
    </AdminShell>
  );
}
