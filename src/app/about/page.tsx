import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About Zion Baptist Church",
  description:
    "Zion Baptist Church is an independent, Reformed Baptist church in Taylor, MI. Meet our pastor and leadership, read what we believe, and learn how to become a member.",
};

const explore = [
  { href: "/about/pastor", label: "Meet Pastor Michael R. Jones" },
  { href: "/about/leadership", label: "Meet Our Elders & Deacons" },
  { href: "/beliefs", label: "Our Statement of Faith" },
  { href: "/covenant", label: "Our Church Covenant" },
  { href: "/covenant/teaching", label: "Teaching on the Church Covenant" },
  { href: "/faq", label: "Frequently Asked Questions" },
  { href: "/membership", label: "How Do I Become a Member?" },
];

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About Zion"
      title="About Zion Baptist Church"
      lede="A Bible-believing church family in Taylor, Michigan — Christ-centered, Word-driven, and living life together like family."
    >
      <div className="prose-zion">
        <p>
          The New Testament teaches that every Christian should be united to a
          Bible-believing church — to be taught, strengthened, and to share in
          the life of the body through worship, service, and caring for one
          another. If you think Zion is where the Lord would have you, we want to
          make it easy for you to unite with us.
        </p>
        <p>
          To find out more about who we are and what we believe, use the links
          below. You can also watch recent and past services on our{" "}
          <a
            href="https://www.youtube.com/@zionbaptistchurchtaylormi"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube channel
          </a>
          .
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 gap-3">
        {explore.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center justify-between gap-3 bg-white rounded-xl px-5 py-4 border border-ink/[.08] shadow-sm hover:border-brass/50 hover:shadow-md transition-all"
          >
            <span className="font-serif text-lg text-text-dark group-hover:text-brass-dark transition-colors">
              {item.label}
            </span>
            <span
              aria-hidden
              className="text-brass group-hover:translate-x-0.5 transition-transform"
            >
              &rarr;
            </span>
          </Link>
        ))}
      </div>

      <div className="prose-zion mt-10">
        <p>
          For further questions, please approach our Pastor before or after any
          service, call the church during the week at{" "}
          <a href="tel:+13132913128">(313) 291-3128</a>, or email{" "}
          <a href="mailto:pastor@ziontaylor.org">pastor@ziontaylor.org</a>.
        </p>
        <p>
          Our address is 8500 Pardee Road, Taylor, MI 48180.{" "}
          <strong>Please join us this coming Lord&rsquo;s Day!</strong>
        </p>
      </div>
    </PageShell>
  );
}
