export default function AdminStatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold text-blue-950">{value}</p>
    </article>
  );
}
