import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "How Do I Become a Member?",
  description:
    "Learn how to become a member of Zion Baptist Church in Taylor, MI — the three paths to membership: by profession of faith and baptism, by transfer of letter, or by statement.",
};

const paths = [
  {
    title: "By profession of faith and baptism",
    body: "A profession of faith is when you publicly confess that you have trusted Christ and are presented before the church. The Pastor will not ask you to speak in front of the church. If you have trusted Christ as your Savior but have not been Scripturally baptized, you may request baptism.",
  },
  {
    title: "By transfer of letter",
    body: "If you would like to transfer your membership to Zion, please contact the Pastor and tell him that you would like to move your letter to our church. You do not have to get your letter from your previous church; a church letter is something passed from church to church, not from a church to an individual. Zion will contact your previous church to receive the letter.",
  },
  {
    title: "By statement",
    body: "If you have trusted Christ as your Savior and have been Scripturally baptized in another church but are unsure about the status of your membership there, you may join by statement. To do so, please contact our Pastor and tell him that you have been Scripturally baptized but don't know about your church letter. Please remember that the Pastor will not ask you to speak in front of the church.",
  },
];

export default function MembershipPage() {
  return (
    <PageShell
      eyebrow="Belonging at Zion"
      title="How Do I Become a Member?"
      lede="We want to make it easy for you to unite with the Zion family."
    >
      <div className="prose-zion">
        <p>
          The New Testament teaches that every Christian should be united to a
          Bible-believing church so that he or she can be under that
          church&rsquo;s care and authority. If you think Zion is where the Lord
          would have you, we want to make it easy for you to unite with us. Here is
          some helpful information for those considering formal membership at Zion.
        </p>
        <p>There are three paths to membership at Zion:</p>
      </div>

      <div className="mt-8 space-y-5">
        {paths.map((path, i) => (
          <div
            key={path.title}
            className="bg-white rounded-2xl p-6 md:p-7 border border-ink/[.07] shadow-sm flex gap-5"
          >
            <span className="font-serif text-3xl text-brass leading-none shrink-0">
              {i + 1}
            </span>
            <div>
              <h2 className="font-serif text-2xl font-semibold text-text-dark leading-tight">
                {path.title}
              </h2>
              <p className="mt-3 text-text-body leading-relaxed">{path.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="prose-zion mt-10">
        <p>
          To find out more about membership at Zion, please approach our Pastor
          before or after any service or call the church during the week at{" "}
          <a href="tel:+13132913128">(313) 291-3128</a>. You may also email him at{" "}
          <a href="mailto:pastor@ziontaylor.org">pastor@ziontaylor.org</a>.
        </p>
      </div>
    </PageShell>
  );
}
