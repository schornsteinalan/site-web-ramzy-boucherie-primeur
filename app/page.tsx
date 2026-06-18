import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { WhyUs } from "@/components/why-us"
import { Gallery } from "@/components/gallery"
import { Reviews } from "@/components/reviews"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Butcher",
  name: "Boucherie Primeur Gharbi",
  description:
    "Boucherie halal et primeur à Biganos : viande halal (bœuf, agneau, veau, volaille), fruits et légumes frais et produits du quotidien.",
  image: "https://boucherie-gharbi-biganos.fr/hero-boucherie.png",
  telephone: "+33746244744",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "124 Avenue de la Côte d'Argent",
    addressLocality: "Biganos",
    postalCode: "33280",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.6447,
    longitude: -0.9747,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "21:00",
    },
  ],
  servesCuisine: "Halal",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Products />
        <WhyUs />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
