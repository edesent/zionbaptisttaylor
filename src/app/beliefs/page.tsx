import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "What We Believe — Statement of Faith",
  description:
    "Zion Baptist Church stands in the Particular Baptist tradition. Read our summary Statement of Faith — the Trinity, the Scriptures, the person and work of Christ, salvation by grace, and the local church.",
};

// Each article of the summary statement is kept verbatim, with its Scripture references.
const articles = [
  "We worship a Personal God who has revealed himself as Three-in-One: Father, Son, and Holy Spirit. These Three are One God, the same in substance, equal in power and glory (Deut. 6:4; Matt. 28:19; 1 Cor. 8:6).",
  "The Bible, the 66 books of the Old and New Testaments, is God's divine revelation of Himself and was verbally inspired in the original autographs (2 Tim. 3:16; 2 Pet. 1:21).",
  "Jesus Christ is the divine Son of God, God in human flesh, conceived by the Holy Spirit and born of Mary while she was still a virgin (Col. 2:9; Phil. 2:5–8; Matt. 1:18–25).",
  "Jesus died upon the cross as a sacrifice for sin (Heb. 9:26; 10:12) and he died bearing the sin of humanity (1 Peter 2:24–25).",
  "Jesus died and was buried and after three days came back to life in the same body, now glorified (Matt. 28:1–8; Mk. 16:1–8; Luke 24:1–12; John 20:1–13), and later ascended into heaven where he is seated at the right hand of the throne of God (Acts 1:9–11).",
  "Jesus will return bodily (1 Thess. 4:16–17; Zech. 14:4) at a time appointed by the Father (Mark 13:32), to judge the living and the dead (2 Tim. 4:1). The righteous he will receive into eternal bliss (Matt. 25:21, 23) in the New Heavens and the New Earth while the unbelieving will endure eternal conscious judgment for sin (2 Thess. 1:8–10).",
  "Man was created in the image of God (Gen. 1:26–27) but that image is now tainted and distorted by sin. Through repentance and faith in Christ alone (Acts 4:12), trusting in the work of Jesus, one may be saved from the penalty and power of sin (Acts 13:38–39) and have assurance of eternal life (1 John 5:12–13).",
  "The local church is a community of believers (1 Thess. 1:1–4), baptized in the Holy Spirit (Acts 2:38), who covenant together to worship God (Phil. 3:3), to care for, to love, to pray for, and to serve one another (1 Cor. 12:25; Gal. 6:2; Eph. 4:2; Col. 3:13; James 4:11; 5:9, 16), and to evangelize the unbelieving (Matt. 28:19–20) to the ends of the earth (Acts 1:8).",
];

export default function BeliefsPage() {
  return (
    <PageShell
      eyebrow="What We Believe"
      title="Our Statement of Faith"
      lede="Christ-centered and Word-driven — the faith once delivered to the saints."
    >
      <div className="prose-zion">
        <p>
          Zion Baptist Church stands in the Particular Baptist tradition and
          holds to a form of the theology taught in the London Baptist Confession
          (LBC 1689) and the Philadelphia Baptist Confession of 1742. We seek,
          however, to live with grace toward Christians who are of different
          traditions.
        </p>
        <p>
          In addition to these confessions, we have a statement that represents
          our teaching position on various issues not covered in these
          confessions. This teaching position is available upon request.
        </p>

        <h2>A Summary of Our Faith</h2>
      </div>

      <ol className="mt-8 space-y-5">
        {articles.map((text, i) => (
          <li
            key={i}
            className="flex gap-5 bg-white rounded-2xl p-6 md:p-7 border border-ink/[.07] shadow-sm"
          >
            <span className="font-serif text-3xl text-brass leading-none shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-text-body leading-relaxed">{text}</p>
          </li>
        ))}
      </ol>

      <p className="mt-8 italic text-text-light">
        Please note that this is not an exhaustive statement of our beliefs.
      </p>

      <div className="prose-zion mt-8">
        <p>
          You may also read <Link href="/covenant">our Church Covenant</Link> and{" "}
          <Link href="/covenant/teaching">
            Pastor Jones&rsquo; teaching on the covenant
          </Link>
          , which guide what members can expect from the church and what the
          church expects from her members.
        </p>
      </div>
    </PageShell>
  );
}
