import { Phone, MapPin, Clock, ShieldCheck } from "lucide-react"

const PHONE = "07 46 24 47 44"
const PHONE_HREF = "tel:+33746244744"
const MAPS_HREF =
  "https://www.google.com/maps/search/?api=1&query=124+Avenue+de+la+C%C3%B4te+d%27Argent+33280+Biganos"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-boucherie.png"
          alt="Étal de viande halal fraîche de la Boucherie Primeur Gharbi à Biganos"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 py-20 text-black md:px-6">
        <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
          <Clock className="h-3.5 w-3.5" /> Ouvert 7j/7 — 8h à 21h
        </span>

        <h1 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-black text-balance md:text-6xl">
          Boucherie Halal &amp; Primeur à Biganos
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-relaxed text-black/85">
          Des produits frais et de qualité chaque jour : viande halal,
          fruits &amp; légumes de saison et tout pour le quotidien, au cœur de
          Biganos.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition-opacity hover:opacity-90"
          >
            <Phone className="h-5 w-5" /> Appeler le {PHONE}
          </a>
          <a
            href={MAPS_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-black/40 bg-black/10 px-6 py-3.5 text-base font-semibold text-black backdrop-blur transition-colors hover:bg-black/20"
          >
            <MapPin className="h-5 w-5" /> Itinéraire
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-black/80">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-accent" /> Viande 100% Halal
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" /> 124 Av. de la Côte
            d&apos;Argent, 33280 Biganos
          </span>
        </div>
      </div>
    </section>
  )
}
