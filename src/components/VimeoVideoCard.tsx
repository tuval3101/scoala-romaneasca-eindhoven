import type { HistoryVideo } from "@/data/historyVideos";

type VimeoVideoCardProps = {
  video: HistoryVideo;
};

export default function VimeoVideoCard({ video }: VimeoVideoCardProps) {
  const params = new URLSearchParams({
    h: video.hash,
    title: "1",
    byline: "0",
    portrait: "0",
  });

  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <div className="aspect-video bg-slate-950">
        <iframe
          title={video.title}
          src={`https://player.vimeo.com/video/${video.vimeoId}?${params.toString()}`}
          className="h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <div className="space-y-3 p-5">
        <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-[var(--red)]">Arhiva video</p>
        <h3 className="text-lg font-extrabold text-[var(--blue)]">{video.title}</h3>
        <p className="leading-7 text-slate-700">{video.description}</p>
      </div>
    </article>
  );
}
