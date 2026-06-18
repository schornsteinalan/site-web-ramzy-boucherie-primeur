const images = [
  { src: "/gallery-1.png", alt: "Boucher découpant de la viande fraîche", span: "md:col-span-2 md:row-span-2" },
  { src: "/gallery-2.png", alt: "Étal de légumes frais et colorés" },
  { src: "/gallery-3.png", alt: "Volaille fraîche en boucherie" },
  { src: "/gallery-4.png", alt: "Cagette de fruits frais au primeur" },
  { src: "/gallery-5.png", alt: "Côtelettes d'agneau halal" },
  { src: "/gallery-6.png", alt: "Devanture de la boucherie et primeur à Biganos" },
]

export function Gallery() {
  return (
    <section id="galerie" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Galerie
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground text-balance md:text-4xl">
            Le frais sous toutes ses formes
          </h2>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[200px]">
          {images.map((img) => (
            <div
              key={img.src}
              className={`group overflow-hidden rounded-xl ${img.span ?? ""}`}
            >
              <img
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
