import AnimateOnScroll from "./AnimateOnScroll";

const beliefs = [
  {
    title: "The Word, Preached",
    text: "We are a Word-driven church. The Scriptures are God-breathed and sufficient, so we preach them faithfully — verse by verse, book by book — trusting the Spirit to work through the Word.",
  },
  {
    title: "Christ-Centered Worship",
    text: "Every gathering aims at the glory of God in Christ. Our worship is reverent and gospel-shaped, lifting up the Lord Jesus as the only Savior of sinners.",
  },
  {
    title: "The Doctrines of Grace",
    text: "Standing in the historic Particular (Reformed) Baptist tradition, we hold to salvation by grace alone, through faith alone, in Christ alone — to the praise of God's glory.",
  },
  {
    title: "Living & Loving Like Family",
    text: "The church is the household of God. We share life together in genuine fellowship — bearing one another's burdens, growing in grace, and caring for one another like family.",
  },
];

export default function Beliefs() {
  return (
    <section id="beliefs" className="py-28 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-brass-dark mb-3">
            What We Believe
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-text-dark mb-4">
            Christ-Centered &amp; Word-Driven
          </h2>
          <p className="text-lg text-text-light">
            Zion Baptist Church is a confessional Reformed Baptist congregation, holding to the
            faith once delivered to the saints.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {beliefs.map((b, i) => (
            <AnimateOnScroll key={b.title} delay={(i % 2) * 120}>
              <div className="h-full bg-white rounded-2xl p-8 shadow-sm border border-ink/[.05] hover:-translate-y-1 hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-serif text-3xl text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 h-px bg-ink/10" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-text-dark mb-3">
                  {b.title}
                </h3>
                <p className="text-text-light leading-relaxed">{b.text}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
