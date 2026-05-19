import AdminSidebar from "@/components/AdminSidebar";
import AdminTopbar from "@/components/AdminTopbar";

export default function AdminShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid bg-slate-50 lg:grid-cols-[260px_1fr]">
      <AdminSidebar />
      <section>
        <AdminTopbar title={title} />
        <div className="p-6">{children}</div>
      </section>
    </div>
  );
}
