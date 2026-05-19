import Link from "next/link";
import { adminRoutes } from "@/lib/routes";

export default function AdminSidebar() {
  return (
    <aside className="border-r border-slate-200 bg-blue-950 p-5 text-white lg:min-h-screen">
      <Link className="text-lg font-bold" href="/admin">Admin</Link>
      <nav aria-label="Admin navigation" className="mt-8 grid gap-1 text-sm">
        {adminRoutes.map((route) => (
          <Link className="rounded-md px-3 py-2 text-blue-50 hover:bg-white/10" href={route.href} key={route.href}>
            {route.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
