import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  alternates: { canonical: "/missions" },
  title: "Missions",
  description:
    "Zion Baptist Church supports missionaries and missions works here in the United States and around the world — partnering not only in giving, but in relationship and prayer.",
};

export default function MissionsPage() {
  return (
    <PageShell
      eyebrow="Reaching the World"
      title="Missions"
      lede="Taking the Great Commission seriously — at home and to the ends of the earth."
    >
      <div className="prose-zion">
        <p>In His final words before ascending to Heaven, Jesus said:</p>
        <blockquote>
          Go therefore and make disciples of all the nations, baptizing them in the
          name of the Father, and of the Son, and of the Holy Spirit, teaching them
          to observe all things that I have taught you; and I am with you always,
          even to the end of the age.
          <cite>Matthew 28:19–20</cite>
        </blockquote>
        <p>
          We at Zion Baptist Church take these words of our Lord seriously, and so
          we are pleased to support missionaries and missions works both here in
          the United States and around the world. We are not content simply to
          support missionaries financially, but seek also to build relationships
          with them and to lift them up in prayer each week.
        </p>
        <p>
          Many of the missionaries we partner with serve in countries closed to the
          Gospel, so for their safety we do not list them here on our website. When
          you visit Zion, you may see the countries in which our missionaries serve
          and read recent correspondence from many of them.
        </p>
      </div>
    </PageShell>
  );
}
