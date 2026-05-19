export default function ContactBlock() {
  return (
    <section className="rounded-lg bg-blue-950 p-8 text-white">
      <h2 className="text-2xl font-bold">Contact</h2>
      <div className="mt-5 grid gap-4 text-sm text-blue-50 sm:grid-cols-3">
        <p><strong className="block text-white">Email</strong>info[at]scoalaromaneasca[punct]eu</p>
        <p><strong className="block text-white">Adresa</strong>Oldengaarde 1b, 5655 CP Eindhoven</p>
        <p><strong className="block text-white">Comunitate</strong>Weekend school, events, volunteers</p>
      </div>
    </section>
  );
}
