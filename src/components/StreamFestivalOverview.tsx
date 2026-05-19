import Image, { type StaticImageData } from "next/image";
import mcsLogo from "@/resource/images/mcs_logo_1.png";
import streamPoster from "@/resource/images/Poster STREAM 3.png";
import schoolLogo from "@/resource/assets/logo_scoala_romaneasca2.png";

type LogoItem = {
  alt: string;
  href?: string;
  src: StaticImageData | string;
};

type InfoCard = {
  label: string;
  title: string;
  logos: LogoItem[];
};

const infoCards: InfoCard[] = [
  {
    label: "Organizator",
    title: "Scoala Romaneasca din Eindhoven",
    logos: [
      {
        alt: "Scoala Romaneasca din Eindhoven",
        href: "/",
        src: schoolLogo,
      },
    ],
  },
  {
    label: "Sponsor",
    title: "MCS Formulas",
    logos: [
      {
        alt: "MCS Formulas",
        href: "https://www.mcsformulas.com/",
        src: mcsLogo,
      },
    ],
  },
  {
    label: "Parteneri",
    title: "Educatie si comunitate internationala",
    logos: [
      {
        alt: "Heritage Language Education Network",
        href: "https://www.hlenet.org/",
        src: "/images/stream/partners/hlen-stream.png",
      },
      {
        alt: "Holland Expat Center South",
        href: "https://www.hollandexpatcenter.com/",
        src: "/images/stream/partners/holland-expat-center.jpg",
      },
    ],
  },
  {
    label: "Sprijin",
    title: "Departamentul pentru Romanii de Pretutindeni",
    logos: [
      {
        alt: "Departamentul pentru Romanii de Pretutindeni",
        href: "https://dprp.gov.ro/web/",
        src: "/images/partners/dprp.jpg",
      },
    ],
  },
];

function LogoLink({ logo }: { logo: LogoItem }) {
  const content = (
    <span className="stream-festival-logo">
      <Image alt={logo.alt} className="object-contain" fill sizes="180px" src={logo.src} />
    </span>
  );

  if (!logo.href) {
    return content;
  }

  return (
    <a className="logo-shake focus-ring rounded-md" href={logo.href} rel={logo.href.startsWith("http") ? "noreferrer" : undefined} target={logo.href.startsWith("http") ? "_blank" : undefined}>
      {content}
    </a>
  );
}

export default function StreamFestivalOverview() {
  return (
    <section className="stream-festival-overview" aria-label="STREAM Festival overview">
      <div className="stream-festival-poster">
        <Image
          alt="Poster STREAM Festival Eindhoven"
          className="object-contain"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 620px"
          src={streamPoster}
        />
      </div>
      <div className="stream-festival-info-grid">
        {infoCards.map((card) => (
          <article className="stream-festival-info-card" key={card.label}>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-red-700">{card.label}</p>
              <h2 className="mt-1 text-base font-semibold leading-snug text-blue-950">{card.title}</h2>
            </div>
            <div className="stream-festival-logo-row">
              {card.logos.map((logo) => (
                <LogoLink key={logo.alt} logo={logo} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
