import AdminShell from "@/app/admin/AdminShell";

export default function AdminSettingsPage() {
  return (
    <AdminShell title="Settings">
      {/* TODO: Persist site settings, language settings, and contact details in CMS/database. */}
      <form className="grid max-w-3xl gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <label className="grid gap-2 text-sm font-semibold text-blue-950">Site name<input className="rounded-md border border-slate-300 px-3 py-2" defaultValue="Scoala Romaneasca din Eindhoven" /></label>
        <label className="grid gap-2 text-sm font-semibold text-blue-950">Default language<select className="rounded-md border border-slate-300 px-3 py-2" defaultValue="ro"><option value="ro">Romanian</option><option value="nl">Dutch</option></select></label>
        <label className="grid gap-2 text-sm font-semibold text-blue-950">Contact email<input className="rounded-md border border-slate-300 px-3 py-2" defaultValue="info@scoalaromaneasca.eu" /></label>
        <label className="grid gap-2 text-sm font-semibold text-blue-950">Address<input className="rounded-md border border-slate-300 px-3 py-2" defaultValue="Oldengaarde 1b, 5655 CP Eindhoven" /></label>
        <button className="w-fit rounded-full bg-blue-950 px-5 py-3 font-semibold text-white" type="button">Save placeholder</button>
      </form>
    </AdminShell>
  );
}
