import { Award, ShieldCheck, Leaf, MapPin } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Qualité",
    text: "Des produits soigneusement sélectionnés et une découpe maîtrisée par des professionnels.",
  },
  {
    icon: ShieldCheck,
    title: "Halal",
    text: "Viande 100% halal en toute confiance : bœuf, agneau, veau et volaille.",
  },
  {
    icon: Leaf,
    title: "Fraîcheur quotidienne",
    text: "Des arrivages chaque jour pour des fruits, légumes et viandes toujours frais.",
  },
  {
    icon: MapPin,
    title: "Proximité",
    text: "Un commerce de quartier au service des habitants de Biganos et du Bassin.",
  },
]

export function WhyUs() {
  return (
    <section id="pourquoi" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Pourquoi nous choisir
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance md:text-4xl">
            La confiance d&apos;un commerce de quartier
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
            >
              <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <r.icon className="h-6 w-6" />
              </span>
              <h3 className="font-heading text-lg font-bold text-foreground">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {r.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
