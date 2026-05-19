import SectionTitle from "@/components/SectionTitle";
import TeamMemberCard from "@/components/TeamMemberCard";
import { team } from "@/data/team";

export default function TeamPage() {
  return (
    <section className="container-shell py-16">
      <SectionTitle eyebrow="Echipa" title="Oameni care tin scoala vie" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {team.map((member) => <TeamMemberCard {...member} key={member.name} />)}
      </div>
    </section>
  );
}
