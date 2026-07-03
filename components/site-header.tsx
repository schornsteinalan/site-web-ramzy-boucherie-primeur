"use client"

import { useState } from "react"
import { Phone, MapPin, Clock, Menu, X } from "lucide-react"

const PHONE = "07 46 24 47 44"
const PHONE_HREF = "tel:+33746244744"
const MAPS_HREF =
  "https://www.google.com/maps/search/?api=1&query=124+Avenue+de+la+C%C3%B4te+d%27Argent+33280+Biganos"

const links = [
  { label: "Produits", href: "#produits" },
  { label: "Pourquoi nous", href: "#pourquoi" },
  { label: "Galerie", href: "#galerie" },
  { label: "Avis", href: "#avis" },
  { label: "Horaires", href: "#horaires" },
  { label: "Contact", href: "#contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary font-heading text-lg font-bold text-primary-foreground">
            G
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-base font-bold text-foreground md:text-lg">
              Boucherie Primeur Gharbi
            </span>
            <span className="text-xs text-muted-foreground">
              Halal &amp; Primeur • Biganos
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={PHONE_HREF}
          className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
        >
          <Phone className="h-4 w-4" />
          {PHONE}
        </a>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium text-foreground/80"
              >
                {l.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 py-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
              <a
                href={MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-semibold text-foreground"
              >
                <MapPin className="h-4 w-4" /> Itinéraire
              </a>
            </div>
          </nav>
        </div>
      )}

      <div className="flex items-center justify-center gap-1.5 bg-accent py-1.5 text-xs font-medium text-accent-foreground">
        <Clock className="h-3.5 w-3.5" />
        Ouvert 7j/7 — de 8h à 21h
      </div>
    </header>
  )
}
