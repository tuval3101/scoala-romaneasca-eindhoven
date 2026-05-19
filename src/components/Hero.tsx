import Image from "next/image";
import Link from "next/link";
import schoolLogo from "@/resource/assets/logo_scoala_romaneasca2.png";
import welcomeHero from "@/resource/images/welcome_ro_3.png";

type HeroProps = {
  title?: string;
  subtitle?: string;
  image?: string;
};

export default function Hero({ image }: HeroProps) {
  return (
    <section className="hero-section" aria-label="Welcome banner">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element -- Optional fallback for externally supplied hero images.
        <img
          alt=""
          className="hero-image"
          src={image}
          style={{
            height: "clamp(140px, 23vw, 300px)",
            minHeight: 0,
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
          }}
        />
      ) : (
        <Image
          alt="Bine ati venit la Scoala Romaneasca din Eindhoven"
          className="hero-image"
          priority
          src={welcomeHero}
          sizes="100vw"
          style={{
            height: "clamp(140px, 23vw, 300px)",
            minHeight: 0,
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
          }}
        />
      )}
      <div
        className="hero-welcome container-shell"
        style={{
          alignItems: "center",
          bottom: 0,
          display: "flex",
          gap: "clamp(14px, 5vw, 72px)",
          justifyContent: "space-between",
          left: 0,
          position: "absolute",
          right: 0,
          textAlign: "left",
          top: 0,
        }}
      >
        <div
          className="hero-left"
          style={{
            flex: "0 0 clamp(78px, 18vw, 220px)",
            maxWidth: "220px",
          }}
        >
          <Image
            alt="Scoala Romaneasca din Eindhoven"
            className="hero-welcome-logo"
            priority
            src={schoolLogo}
          sizes="(max-width: 768px) 64px, 128px"
          style={{
            height: "auto",
            width: "clamp(76px, 11vw, 170px)",
          }}
        />
          <div
            className="hero-cta-row"
            style={{
              display: "flex",
              flexWrap: "nowrap",
              gap: "clamp(4px, 0.7vw, 10px)",
              justifyItems: "start",
              maxWidth: "none",
            }}
          >
            <Link className="hero-btn hero-btn-register focus-ring" href="/parents/registration" style={{ backgroundColor: "#9fd3ff", color: "#07142e", minHeight: 20 }}>
              Register
            </Link>
            <Link className="hero-btn hero-btn-events focus-ring" href="/events" style={{ backgroundColor: "#ffe58a", color: "#07142e", minHeight: 20 }}>
              See events
            </Link>
            <Link className="hero-btn hero-btn-contact focus-ring" href="/contact" style={{ backgroundColor: "#ff9a9a", color: "#07142e", minHeight: 20 }}>
              Contact us
            </Link>
          </div>
        </div>
        <div
          className="hero-welcome-copy"
          style={{
            flex: "1 1 auto",
            maxWidth: "calc(100% - clamp(92px, 22vw, 260px))",
          }}
        >
          <p className="hero-welcome-top">BINE ATI VENIT!</p>
          <p className="hero-welcome-mid">WELKOM! WELCOME!</p>
          <p className="hero-welcome-to">TO</p>
          <p className="hero-welcome-school">THE ROMANIAN SCHOOL</p>
          <p className="hero-welcome-city">EINDHOVEN</p>
        </div>
      </div>
    </section>
  );
}
