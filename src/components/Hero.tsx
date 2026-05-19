import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle: string;
  image?: string;
};

export default function Hero({ title, subtitle, image = "/images/hero-community.jpg" }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-blue-950 text-white">
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/90 to-blue-950/50" aria-hidden="true" />
      <div className="container-shell relative grid min-h-[520px] content-center py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-200">Limba, cultura, comunitate</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="focus-ring rounded-full bg-red-700 px-5 py-3 text-sm font-bold text-white hover:bg-red-800" href="/parents/registration">
              Register
            </Link>
            <Link className="focus-ring rounded-full bg-white px-5 py-3 text-sm font-bold hover:bg-[#fffaf0]" href="/events" style={{ color: "#17295a" }}>
              See events
            </Link>
            <Link className="focus-ring rounded-full border border-white/40 px-5 py-3 text-sm font-bold text-white hover:bg-white/10" href="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
