import { Phone, MapPin, Clock } from "lucide-react"

const PHONE = "07 46 24 47 44"
const PHONE_HREF = "tel:+33746244744"

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/logo-gharbi.jpg"
              alt="Logo Boucherie Primeur Gharbi"
              className="h-12 w-auto rounded-md object-contain"
            />
            <span className="font-heading text-lg font-bold">
              Boucherie Primeur Gharbi
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
            Spécialiste halal &amp; produits frais à Biganos. Viande halal,
            fruits &amp; légumes et produits du quotidien, 7j/7.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-base font-bold">Coordonnées</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-background/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              124 Avenue de la Côte d&apos;Argent, 33280 Biganos
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <a href={PHONE_HREF} className="hover:text-background">
                {PHONE}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" />
              Ouvert 7j/7 — 8h à 21h
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-base font-bold">Navigation</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-background/80">
            <li><a href="#produits" className="hover:text-background">Produits</a></li>
            <li><a href="#pourquoi" className="hover:text-background">Pourquoi nous choisir</a></li>
            <li><a href="#galerie" className="hover:text-background">Galerie</a></li>
            <li><a href="#avis" className="hover:text-background">Avis clients</a></li>
            <li><a href="#contact" className="hover:text-background">Contact &amp; horaires</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-background/60 sm:flex-row md:px-6">
          <p>
            © {new Date().getFullYear()} Boucherie Primeur Gharbi — Spécialiste
            halal &amp; produits frais à Biganos.
          </p>
          <p>Boucherie halal • Primeur • Biganos (33280)</p>
        </div>
      </div>
    </footer>
  )
}
