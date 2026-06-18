import { Star } from "lucide-react"

const reviews = [
  {
    name: "Karim B.",
    text: "Viande halal de très bonne qualité et toujours fraîche. L'accueil est chaleureux, je recommande vivement cette boucherie à Biganos !",
  },
  {
    name: "Sophie M.",
    text: "Enfin un primeur de proximité avec des fruits et légumes frais. Pratique d'être ouvert 7j/7 jusqu'à 21h.",
  },
  {
    name: "Mehdi L.",
    text: "Excellent rapport qualité-prix sur la viande. Le boucher prend le temps de conseiller. Une adresse de confiance.",
  },
]

export function Reviews() {
  return (
    <section id="avis" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Avis clients
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance md:text-4xl">
            Ils nous font confiance
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-accent text-accent"
              />
            ))}
            <span className="ml-2 text-sm font-medium text-muted-foreground">
              5/5 — clients satisfaits
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="flex-1 leading-relaxed text-foreground">
                {"\u201C"}
                {r.text}
                {"\u201D"}
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-foreground">
                {r.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
