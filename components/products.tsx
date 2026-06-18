import { Beef, Apple, Check } from "lucide-react"

const products = [
  {
    icon: Beef,
    title: "Boucherie Halal",
    image: "/halal-meat.png",
    alt: "Viande halal fraîche : bœuf, agneau et veau découpés",
    description:
      "Bœuf, agneau, veau et volaille certifiés halal, découpés chaque jour pour une fraîcheur et une qualité irréprochables.",
    points: ["Qualité bouchère", "Fraîcheur quotidienne", "Découpe sur demande"],
  },
  {
    icon: Apple,
    title: "Primeur",
    image: "/primeur-produce.png",
    alt: "Étal de fruits et légumes frais de saison",
    description:
      "Fruits et légumes frais de saison sélectionnés avec soin, ainsi que tous les produits du quotidien pour vos courses.",
    points: ["Fruits & légumes de saison", "Arrivages réguliers", "Produits du quotidien"],
  },
]

export function Products() {
  return (
    <section id="produits" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Nos spécialités
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance md:text-4xl">
            Un vrai commerce de proximité du quotidien
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Bien plus qu&apos;une épicerie : une boucherie halal et un primeur
            réunis pour vous offrir le meilleur du frais, tous les jours.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {products.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.image || "/placeholder.svg"}
                  alt={p.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    {p.title}
                  </h3>
                </div>
                <p className="leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mt-5 flex flex-col gap-2">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex items-center gap-2 text-sm font-medium text-foreground"
                    >
                      <Check className="h-4 w-4 text-accent" /> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
