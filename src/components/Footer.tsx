import Link from "next/link";
import { navigation } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-blue-950/10 bg-blue-950 text-white">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <h2 className="text-xl font-bold">Scoala Romaneasca din Eindhoven</h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-blue-100">
            O comunitate educationala pentru limba romana, cultura, lectura si activitati interdisciplinare in Eindhoven.
          </p>
          <p className="mt-4 text-sm text-blue-100">Acest proiect este realizat cu sprijinul Departamentului pentru Romanii de Pretutindeni.</p>
        </div>
        <div>
          <h3 className="font-semibold">Contact</h3>
          <address className="mt-4 space-y-2 text-sm not-italic text-blue-100">
            <p>info[at]scoalaromaneasca[punct]eu</p>
            <p>Oldengaarde 1b, 5655 CP Eindhoven</p>
          </address>
        </div>
        <div>
          <h3 className="font-semibold">Pagini</h3>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-blue-100">
            {navigation.slice(0, 8).map((item) => (
              <Link className="hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
