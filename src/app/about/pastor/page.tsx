import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  alternates: { canonical: "/about/pastor" },
  title: "Meet Pastor Michael R. Jones",
  description:
    "Meet Michael R. Jones, pastor of Zion Baptist Church in Taylor, MI — an expository preacher, professor, and longtime servant of the Downriver Detroit community.",
};

export default function PastorPage() {
  return (
    <PageShell eyebrow="Our Pastor" title="Meet Pastor Michael R. Jones">
      <figure className="float-none sm:float-right sm:ml-8 mb-8 w-full sm:w-64 mx-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/pastor-jones-2026.jpg"
          alt="Pastor Michael R. Jones"
          className="w-full rounded-2xl shadow-lg border border-ink/[.06]"
        />
        <figcaption className="mt-2 text-center text-sm text-text-light">
          Pastor Michael R. Jones
        </figcaption>
      </figure>

      <div className="prose-zion">
        <p>
          Pastor Jones is originally from Callahan, FL, and moved to Michigan in
          November of 2000 to serve at Zion Baptist Church. Before entering
          full-time ministry, Michael was a trading analyst for Chase-Manhattan
          Mortgage.
        </p>
        <p>
          He earned an M.Div. from Michigan Theological Seminary and is
          completing his PhD in New Testament at the University of Chester (UK),
          where his research focuses on Paul&rsquo;s theology of suffering.
        </p>
        <p>
          In addition to serving as full-time pastor at Zion, Pastor Jones is an
          Adjunct Professor in Bible &amp; Theology and in Applied Theology at
          Moody Theological Seminary&ndash;Michigan, and a Professor at Anchor
          Bible College in Ypsilanti.
        </p>
        <p>
          Pastor Jones also sits on the board of the Fish &amp; Loaves Community
          Food Pantry, based here in Taylor, and is actively involved in the
          Taylor community. He served for several years as president of the
          Taylor Ministerial Fellowship.
        </p>
        <p>
          He and his wife, Tondra, originally from the Atlanta area, met in the
          late &rsquo;80s when they were students in college. The Joneses have two
          children: Spencer, who serves in the U.S. Army, and Sophia, who is in
          college.
        </p>
        <p>
          Pastor Jones loves going to the gym and reading &mdash; especially
          history and science fiction. A lifelong Sherlock Holmes fan, he is a
          member of one of the oldest Sherlock Holmes societies in the U.S.
        </p>
        <p>
          You can find out more about Pastor Jones and his convictions about the
          Bible, theology, and ministry by visiting his{" "}
          <a
            href="https://www.youtube.com/@zionbaptistchurchtaylormi"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube channel
          </a>{" "}
          or by emailing him at{" "}
          <a href="mailto:pastor@ziontaylor.org">pastor@ziontaylor.org</a>.
        </p>
      </div>
    </PageShell>
  );
}
