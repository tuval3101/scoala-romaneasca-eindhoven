export default function ContactBlock() {
  return (
    <section className="rounded-lg bg-blue-950 p-6 text-white shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold">Contact</h2>
      <div className="mt-6 grid gap-4">
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <strong className="block text-sm font-semibold text-white">Email</strong>
          <p className="mt-2 break-words text-sm leading-6 text-blue-50">info[at]scoalaromaneasca[punct]eu</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <strong className="block text-sm font-semibold text-white">Adresa</strong>
          <p className="mt-2 text-sm leading-6 text-blue-50">Oldengaarde 1b, 5655 CP Eindhoven</p>
          <div className="mt-4 overflow-hidden rounded-lg border border-white/10 bg-white">
            <iframe
              aria-label="Harta locatie Scoala Romaneasca din Eindhoven"
              className="block h-56 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Oldengaarde%201b%2C%205655%20CP%20Eindhoven&output=embed"
              title="Harta locatie Scoala Romaneasca din Eindhoven"
            />
          </div>
          <a
            className="focus-ring mt-4 inline-flex rounded-full bg-[#ffe58a] px-4 py-2 text-sm font-semibold text-black hover:bg-[#d79b00] hover:text-black"
            href="https://www.google.com/maps/search/?api=1&query=Oldengaarde%201b%2C%205655%20CP%20Eindhoven"
            rel="noreferrer"
            target="_blank"
          >
            Vezi pe Google Maps
          </a>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <strong className="block text-sm font-semibold text-white">Comunitate</strong>
          <p className="mt-2 text-sm leading-6 text-blue-50">Weekend school, events, volunteers</p>
        </div>
      </div>
    </section>
  );
}
