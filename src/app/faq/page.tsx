import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Zion Baptist Church in Taylor, MI — our purpose, beliefs, worship, Bible version, communion, and what makes us distinctive.",
};

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is Zion's purpose?",
    a: (
      <p>
        Zion&rsquo;s goal is to see believers mature into the image of Christ by
        developing Christ-like character that guides us in our moment-by-moment
        walk with the Lord.
      </p>
    ),
  },
  {
    q: "Why are you called “Zion”?",
    a: (
      <>
        <p>
          &ldquo;Zion&rdquo; is a name from the Bible. It eventually came to refer
          to the mountain where the Temple stood in Jerusalem. The name was chosen
          by the group of people who started the church back in 1961, most of whom
          have long since passed on.
        </p>
        <p>
          The name was not chosen to send any particular theological message; the
          people who chose it simply liked the name.
        </p>
      </>
    ),
  },
  {
    q: "What does Zion emphasize in its ministry?",
    a: (
      <p>
        Zion Baptist Church emphasizes biblical expository preaching and teaching
        in a caring and supportive church atmosphere. We believe that the ministry
        of the Word is of utmost importance to the Christian life and that sound
        doctrine is necessary for spiritual maturity.
      </p>
    ),
  },
  {
    q: "What are Zion's distinctive beliefs?",
    a: (
      <>
        <p>
          We are Reformed in soteriology while valuing and upholding the historic
          Baptist distinctives including, but not limited to, believer&rsquo;s
          baptism only, congregational church government, and individual soul
          competency.
        </p>
        <p>
          We do not, however, hold to our beliefs in a contentious manner and
          instead practice charity toward Bible-believing Christians who differ
          from us.
        </p>
        <p>
          A summary of our beliefs is available in{" "}
          <Link href="/beliefs">our Statement of Faith</Link> (a more complete
          Statement of Faith is available on request). Our Pastor has also written
          on the meaning of{" "}
          <Link href="/covenant/teaching">our Church Covenant</Link>, which serves
          as our guide for what members can expect from the church and what the
          church can expect from her members.
        </p>
      </>
    ),
  },
  {
    q: "Is Zion family-focused?",
    a: (
      <>
        <p>
          Zion values the family unit, and we define &ldquo;family&rdquo; not only
          in the traditional sense, but also to include those who are unmarried
          (never married, previously married, widow or widower).
        </p>
        <p>
          We believe that the family is foundational, not only for society, but for
          the furtherance of Christianity. Parents are responsible for raising their
          children &ldquo;in the nurture and admonition of the Lord,&rdquo; which
          means that discipline and instruction in the ways of the Christian faith
          are of the utmost importance. We do not believe that such instruction is
          the sole responsibility of the church, but the responsibility of the
          parent(s) working with the church. The church&rsquo;s goal is to bring all
          members to maturity, adults and children alike. To this end, Zion desires
          to work with parents in instructing their children in the teachings of
          Scripture and the Christian life.
        </p>
      </>
    ),
  },
  {
    q: "Is Zion an independent church?",
    a: (
      <>
        <p>
          Zion Baptist Church is not affiliated with any denomination. We are an
          independent church, but we are non-legalistic and non-charismatic.
        </p>
        <p>
          We do not believe in blind obedience to man-made ordinances that have no
          grounding in biblical truth. We believe that Christians should obey the
          teachings of Christ&rsquo;s law by making informed decisions regarding
          things like lifestyle and worship. However, such liberty and freedom is
          never to be used to excuse wrongdoing or to excuse someone acting in a
          manner that is worldly, sensual, or immoral.
        </p>
      </>
    ),
  },
  {
    q: "What version of the Bible is used at Zion?",
    a: (
      <p>
        Our pastor reads from the New King James Version during our services, but
        several different conservative translations are in use by our members. Many
        of our members still use the King James Version.
      </p>
    ),
  },
  {
    q: "What is a typical worship service like?",
    a: (
      <>
        <p>On a given Sunday morning, the following elements are present in our worship service:</p>
        <ul>
          <li>Classic hymns</li>
          <li>Scripture readings</li>
          <li>Public prayer</li>
          <li>Special music</li>
          <li>A message (sermon) from the Bible lasting about 30&ndash;35 minutes</li>
        </ul>
      </>
    ),
  },
  {
    q: "When do you celebrate communion?",
    a: (
      <p>
        We observe Communion on the first Sunday of every month immediately
        following Lord&rsquo;s Day Worship. If you plan to worship with us for the
        Lord&rsquo;s Supper and would like to participate, please speak with the
        Pastor or one of the elders beforehand.
      </p>
    ),
  },
];

export default function FaqPage() {
  return (
    <PageShell
      eyebrow="Questions & Answers"
      title="Frequently Asked Questions"
      lede="A few of the questions we hear most often. Have another? We'd love to talk."
    >
      <div className="space-y-4">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group bg-white rounded-2xl border border-ink/[.07] shadow-sm overflow-hidden"
          >
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 font-serif text-xl text-text-dark hover:text-brass-dark transition-colors">
              {item.q}
              <span
                aria-hidden
                className="shrink-0 text-brass text-2xl leading-none transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="px-6 pb-6 -mt-1 prose-zion">{item.a}</div>
          </details>
        ))}
      </div>

      <div className="prose-zion mt-10">
        <p>
          Still have questions? Please approach our Pastor before or after any
          service, call the church at{" "}
          <a href="tel:+13132913128">(313) 291-3128</a>, or email{" "}
          <a href="mailto:pastor@ziontaylor.org">pastor@ziontaylor.org</a>.
        </p>
      </div>
    </PageShell>
  );
}
