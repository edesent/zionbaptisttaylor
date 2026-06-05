import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Services from "@/components/Services";
import Beliefs from "@/components/Beliefs";
import ScriptureBanner from "@/components/ScriptureBanner";
import Sermons from "@/components/Sermons";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "Zion Baptist Church",
  alternateName: "Zion Baptist Church Taylor",
  url: "https://www.zionbaptistchurchtaylor.com",
  image: "https://www.zionbaptistchurchtaylor.com/og-image.jpg",
  description:
    "A Christ-centered, Word-driven Reformed (Particular) Baptist church in Taylor, Michigan. Expository preaching under Pastor Michael R. Jones.",
  telephone: "+1-313-291-3128",
  email: "pastor@ziontaylor.org",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8500 Pardee Road",
    addressLocality: "Taylor",
    addressRegion: "MI",
    postalCode: "48180",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/zionbaptistchurchtaylor",
    "https://www.youtube.com/@zionbaptistchurchtaylormi",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "18:30",
      closes: "20:00",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Services />
        <Beliefs />
        <ScriptureBanner />
        <Sermons />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
