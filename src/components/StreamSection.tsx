import Image from "next/image";
import streamLogo from "@/resource/assets/logo_stream.png";
import streamPoster from "@/resource/images/stream_meaning_poster1.png";

export default function StreamSection() {
  return (
    <section className="container-shell pb-16">
      <div className="stream-section">
        <div className="stream-copy">
          <Image
            alt="Festival STREAM Eindhoven"
            className="stream-logo"
            src={streamLogo}
            sizes="96px"
          />
          <p className="text-sm font-semibold uppercase tracking-wide text-red-700">Program special</p>
          <h2 className="mt-3 text-3xl font-bold text-blue-950 sm:text-4xl">Festival STREAM Eindhoven</h2>
          <p className="mt-3 text-base font-semibold text-green-800">Science, Technology, Reading, Engineering, Arts & Mathematics</p>
          <p className="mt-5 text-base leading-7 text-slate-700">
            STREAM aduce invatarea aproape de copii prin curiozitate, experimente, lectura, creativitate si proiecte practice. Este un cadru in care copiii descopera idei noi, colaboreaza si invata prin joaca serioasa.
          </p>
        </div>
        <div className="stream-image-wrap">
          <Image
            alt="Poster Festival STREAM Eindhoven"
            className="stream-image"
            priority
            src={streamPoster}
            sizes="(max-width: 768px) 100vw, 520px"
          />
        </div>
      </div>
    </section>
  );
}
