import AdminShell from "@/app/admin/AdminShell";
import AdminStatCard from "@/components/AdminStatCard";
import AdminTable from "@/components/AdminTable";
import { events } from "@/data/events";
import { mediaItems } from "@/data/media";
import { pages } from "@/data/pages";
import { programs } from "@/data/programs";

export default function AdminDashboardPage() {
  return (
    <AdminShell title="Dashboard">
      {/* TODO: Replace dashboard counts and updates with live CMS/database metrics. */}
      <div className="grid gap-5 md:grid-cols-5">
        <AdminStatCard label="Total pages" value={pages.length} />
        <AdminStatCard label="Events" value={events.length} />
        <AdminStatCard label="Programs" value={programs.length} />
        <AdminStatCard label="Media files" value={mediaItems.length} />
        <AdminStatCard label="Messages" value={4} />
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <AdminTable columns={["Title", "Type", "Updated"]} rows={[["Homepage", "Page", "2026-05-12"], ["STREAM Festival", "Event", "2026-05-15"], ["Library", "Program", "2026-05-08"]]} actions={false} />
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-blue-950">Quick actions</h2>
          <div className="mt-4 grid gap-3">
            {["Add event", "Upload media", "Edit homepage", "Add team member"].map((action) => (
              <button className="rounded-md border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-blue-950 hover:bg-slate-50" key={action} type="button">{action}</button>
            ))}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
