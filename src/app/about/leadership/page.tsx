import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  alternates: { canonical: "/about/leadership" },
  title: "Meet Our Elders & Deacons",
  description:
    "Meet the elders and deacons who serve Zion Baptist Church in Taylor, MI — the men who help lead, teach, and care for our congregation.",
};

const leaders = [
  {
    name: "Rich Warlick",
    role: "Treasurer · Song Leader · Youth Teacher",
    bio: "Rich Warlick grew up here at Zion, where he serves as a treasurer, song leader, and youth teacher. Rich is licensed to preach and has done weddings, funerals, and pulpit supply in SE Michigan for a number of years. He was educated at Wayne State University and Northern Michigan University and served in the U.S. Army. Recently retired, Rich and his wife Nita live in his hometown of Riverview. They have three grown sons.",
  },
  {
    name: "Michael Beckner",
    role: "Treasurer · Youth Teacher · Sound",
    bio: "Michael Beckner is a treasurer and youth teacher at Zion, and operates the sound board during Morning Worship. Mike was born and raised in Taylor and has been at Zion since 2000. A graduate of Wayne State University, he manages a stockbroker's office. Mike and his wife Amy were married at Zion. They live in Livonia and have two children, Abram and Claire.",
  },
  {
    name: "Carl Hill",
    role: "Deacon · Treasurer · Head Usher",
    bio: "Carl Hill is a deacon here at Zion and also serves as treasurer, head usher, and in many other capacities. Carl is retired from Ford Motor Company, where he worked as a mainframe programmer. He lives in Taylor. He and his late wife, Sarah, have two grown daughters.",
  },
  {
    name: "Glen Adams",
    role: "Deacon",
    bio: "Glen Adams serves as the newest deacon at Zion. While attending Bible college online at Luther Rice College and Seminary, he works as an electronics tech in Detroit Diesel Corporation's engineering department. He and his wife Kelly and their two daughters, Brianna and Emily, make their home in Inkster, just a block away from Kelly's mother, also a Zion member.",
  },
];

export default function LeadershipPage() {
  return (
    <PageShell
      eyebrow="Our Leadership"
      title="Meet Our Elders & Deacons"
      lede="The men who help lead, teach, and care for the Zion family."
    >
      <div className="space-y-6">
        {leaders.map((leader) => (
          <div
            key={leader.name}
            className="bg-white rounded-2xl p-7 md:p-8 border border-ink/[.07] shadow-sm"
          >
            <h2 className="font-serif text-2xl font-semibold text-text-dark leading-tight">
              {leader.name}
            </h2>
            <p className="mt-1 text-xs font-bold tracking-[0.14em] uppercase text-brass-dark">
              {leader.role}
            </p>
            <p className="mt-4 text-text-body leading-relaxed">{leader.bio}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
