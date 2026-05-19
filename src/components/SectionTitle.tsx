type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
};

export default function SectionTitle({ eyebrow, title, children }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-wide text-red-700">{eyebrow}</p> : null}
      <h2 className="mt-2 text-3xl font-bold text-blue-950 sm:text-4xl">{title}</h2>
      {children ? <p className="mt-4 text-base leading-7 text-slate-700">{children}</p> : null}
    </div>
  );
}
