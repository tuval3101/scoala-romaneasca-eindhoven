import Image from "next/image";
import bannerImage from "@/resource/images/Banner_1800x414_fit.jpg";

export default function HomeBanner() {
  return (
    <section className="home-banner" aria-label="Scoala Romaneasca din Eindhoven community banner">
      <Image
        alt="Comunitatea Scolii Romanesti din Eindhoven"
        className="home-banner-img"
        priority
        src={bannerImage}
        sizes="100vw"
        style={{
          display: "block",
          height: "clamp(140px, 23vw, 300px)",
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
        }}
      />
    </section>
  );
}
