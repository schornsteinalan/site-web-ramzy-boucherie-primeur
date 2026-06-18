import { Phone, MapPin, Clock } from "lucide-react"

const PHONE = "07 46 24 47 44"
const PHONE_HREF = "tel:+33746244744"
const ADDRESS = "124 Avenue de la Côte d'Argent, 33280 Biganos"
const MAPS_HREF =
  "https://www.google.com/maps/search/?api=1&query=124+Avenue+de+la+C%C3%B4te+d%27Argent+33280+Biganos"
const MAPS_EMBED =
  "https://www.google.com/maps?q=124+Avenue+de+la+C%C3%B4te+d%27Argent+33280+Biganos&output=embed"

const days = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
]

export function Contact() {
  return (
    <section id="horaires" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Hours + contact */}
          <div id="contact" className="flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Horaires &amp; Contact
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance md:text-4xl">
              Venez nous rendre visite
            </h2>

            <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-heading text-lg font-bold">
                  Ouvert 7j/7 — 8h à 21h
                </span>
              </div>
              <ul className="mt-4 divide-y divide-border">
                {days.map((d) => (
                  <li
                    key={d}
                    className="flex items-center justify-between py-2 text-sm"
                  >
                    <span className="text-muted-foreground">{d}</span>
                    <span className="font-medium text-foreground">
                      8h00 – 21h00
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs text-muted-foreground">
                    Appelez-nous
                  </span>
                  <span className="font-semibold text-foreground">{PHONE}</span>
                </span>
              </a>
              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Adresse</span>
                  <span className="font-semibold text-foreground">
                    {ADDRESS}
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="min-h-[360px] overflow-hidden rounded-2xl border border-border shadow-sm lg:min-h-full">
            <iframe
              title="Localisation de la Boucherie Primeur Gharbi à Biganos"
              src={MAPS_EMBED}
              className="h-full min-h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
