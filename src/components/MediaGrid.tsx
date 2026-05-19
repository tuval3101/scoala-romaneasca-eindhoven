import { mediaItems } from "@/data/media";

type MediaGridProps = {
  categories?: string[];
};

export default function MediaGrid({ categories }: MediaGridProps) {
  const items = categories
    ? mediaItems.filter((item) => categories.includes(item.category))
    : mediaItems;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article className="rounded-lg border border-blue-950/10 bg-white p-4 shadow-sm" key={item.title}>
          <div className="grid aspect-[4/3] place-items-center rounded-md bg-slate-100 text-sm font-semibold text-slate-500">{item.type}</div>
          <h3 className="mt-4 font-semibold text-blue-950">{item.title}</h3>
          <p className="mt-1 text-sm text-slate-600">{item.category}</p>
        </article>
      ))}
    </div>
  );
}
