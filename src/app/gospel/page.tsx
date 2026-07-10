import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "How Can I Know I Am a Christian?",
  description:
    "The good news of Jesus Christ, explained simply from Scripture. Our eternal destiny is not based on the good we do, but on faith in Christ alone.",
};

const steps = [
  {
    lead: "Acknowledge to God that you are a sinner separated from God by your sin.",
    verse: "For all have sinned, and come short of the glory of God.",
    ref: "Romans 3:23",
  },
  {
    lead: "Recognize that there is a penalty for your sin.",
    verse: "For the wages of sin is death.",
    ref: "Romans 6:23",
  },
  {
    lead: "Understand that your own self-effort cannot bridge the gap between you and God.",
    verse:
      "Not by works of righteousness which we have done but according to his mercy he saved us.",
    ref: "Titus 3:5",
  },
  {
    lead: "Believe that Jesus Christ has already paid the penalty for your sin.",
    verse:
      "For God demonstrates his own love toward us, in that, while we were still sinners, Christ died for us.",
    ref: "Romans 5:8",
  },
  {
    lead: "Trust Christ and Christ alone for your salvation.",
    verse:
      "That if you confess with your mouth the Lord Jesus and believe in your heart that God has raised Him from the dead, you will be saved. For with the heart one believes unto righteousness, and with the mouth confession is made unto salvation.",
    ref: "Romans 10:9–10",
  },
];

export default function GospelPage() {
  return (
    <PageShell
      eyebrow="The Good News"
      title="How Can I Know I Am a Christian?"
      lede="Our eternal destiny is not based on the good that we do, but on faith in Christ alone."
    >
      <ol className="space-y-5">
        {steps.map((step, i) => (
          <li
            key={i}
            className="bg-white rounded-2xl p-6 md:p-7 border border-ink/[.07] shadow-sm"
          >
            <div className="flex gap-5">
              <span className="font-serif text-3xl text-brass leading-none shrink-0">
                {i + 1}
              </span>
              <div>
                <p className="text-lg font-semibold text-text-dark leading-snug">
                  {step.lead}
                </p>
                <blockquote className="mt-4 border-l-[3px] border-brass pl-5 font-serif italic text-lg text-text-body leading-relaxed">
                  &ldquo;{step.verse}&rdquo;
                  <cite className="block mt-2 text-xs not-italic font-sans font-bold tracking-[0.14em] uppercase text-brass-dark">
                    {step.ref}
                  </cite>
                </blockquote>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="prose-zion mt-10">
        <p>
          Our eternal destiny is not based on the good that we do, but on the basis
          of our faith in Christ. You must trust in Christ alone &mdash; not in a
          prayer, a church, or your baptism or other good works. Only faith in
          Christ will save you from God&rsquo;s wrath in the Day of Judgment.
        </p>
        <p>
          We welcome the chance to talk with you about your faith in Christ. Please
          feel free to contact our Pastor by calling him at{" "}
          <a href="tel:+13132913128">(313) 291-3128</a> or by emailing{" "}
          <a href="mailto:pastor@ziontaylor.org">pastor@ziontaylor.org</a>.
        </p>
      </div>
    </PageShell>
  );
}
