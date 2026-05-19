import Link from "next/link";
import { navigation } from "@/data/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import schoolLogo from "@/resource/assets/logo_scoala_romaneasca.png";

export default function Header() {
  return (
    <header className="site-header sticky top-0 z-40 border-b border-blue-950/10 bg-[#fffaf0]/95 backdrop-blur">
      <div className="site-header-inner container-shell">
        <Link className="site-brand focus-ring rounded-lg" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element -- The design brief asks for a plain img logo in the header. */}
          <img
            alt="Școala Românească din Eindhoven"
            className="site-logo-img"
            src={schoolLogo.src}
          />
          <span className="site-brand-text">Școala Românească din Eindhoven</span>
        </Link>
        <nav aria-label="Main navigation" className="site-nav text-sm font-semibold text-slate-700">
          {navigation.map((item) => (
            <Link className="focus-ring shrink-0 rounded-md hover:text-red-700" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="site-header-actions">
          <LanguageSwitcher />
          <Link className="focus-ring hidden rounded-full bg-blue-950 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900 sm:inline-flex" href="/parents/registration">
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
