type TeamMemberCardProps = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export default function TeamMemberCard({ name, role, bio, image }: TeamMemberCardProps) {
  return (
    <article className="rounded-lg border border-blue-950/10 bg-white p-6 shadow-sm">
      <div className="h-40 rounded-md bg-slate-200 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <h3 className="mt-5 text-xl font-semibold text-blue-950">{name}</h3>
      <p className="mt-1 text-sm font-semibold text-red-700">{role}</p>
      <p className="mt-3 text-sm leading-6 text-slate-700">{bio}</p>
    </article>
  );
}
