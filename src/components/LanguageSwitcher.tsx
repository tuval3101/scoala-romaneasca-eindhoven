import Link from "next/link";

export default function LanguageSwitcher() {
  return (
    <div aria-label="Language switcher" className="flex rounded-full border border-blue-950/10 bg-white p-1 text-sm font-semibold">
      <Link className="rounded-full px-3 py-1 text-blue-950 hover:bg-cream-100" href="/">
        RO
      </Link>
      <Link className="rounded-full px-3 py-1 text-blue-950 hover:bg-cream-100" href="/nl">
        NL
      </Link>
    </div>
  );
}
