export default function AdminTopbar({ title }: { title: string }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4">
      <div>
        <p className="text-sm font-semibold uppercase text-red-700">Admin skeleton</p>
        <h1 className="text-2xl font-bold text-blue-950">{title}</h1>
      </div>
      <button className="focus-ring rounded-full bg-blue-950 px-4 py-2 text-sm font-semibold text-white">Preview site</button>
    </div>
  );
}
