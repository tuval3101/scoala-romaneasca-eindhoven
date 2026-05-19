import MediaGrid from "@/components/MediaGrid";
import SectionTitle from "@/components/SectionTitle";
import VimeoVideoCard from "@/components/VimeoVideoCard";
import { historyVideos } from "@/data/historyVideos";

export default function AboutPage() {
  return (
    <section className="container-shell py-16">
      <SectionTitle eyebrow="Despre" title="Misiune, istorie si identitate bilingva">
        Din 2008, Scoala Romaneasca din Eindhoven sprijina copiii si familiile in pastrarea limbii romane si in construirea unei comunitati deschise in Olanda.
      </SectionTitle>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {["Misiune: cursuri si activitati care incurajeaza comunicarea in romana.", "Istorie: o scoala de weekend crescuta prin implicarea familiilor si voluntarilor.", "Comunitate: un spatiu pentru copii bilingvi, parinti si prieteni ai culturii romane.", "Identitate: punem impreuna limba romana, contextul olandez si educatia moderna."].map((item) => (
          <article className="rounded-lg bg-white p-6 shadow-sm" key={item}>
            <p className="leading-7 text-slate-700">{item}</p>
          </article>
        ))}
      </div>
      <section className="mt-14">
        <SectionTitle eyebrow="Recunoastere" title="Premii si aparitii media">
          Materialele de presa si recunoasterile publice sunt integrate aici, langa povestea scolii.
        </SectionTitle>
        <div className="mt-8">
          <MediaGrid categories={["Press", "Homepage"]} />
        </div>
      </section>
      <section className="mt-14">
        <SectionTitle eyebrow="Istorie video" title="Momente din arhiva scolii">
          Clipurile de mai jos sunt integrate din arhiva Vimeo a Scolii Romanesti din Eindhoven si pot fi redate direct din pagina.
        </SectionTitle>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {historyVideos.map((video) => (
            <VimeoVideoCard key={video.vimeoId} video={video} />
          ))}
        </div>
      </section>
    </section>
  );
}
