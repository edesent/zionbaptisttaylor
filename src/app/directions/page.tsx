import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Directions",
  description:
    "Directions to Zion Baptist Church, 8500 Pardee Road, Taylor, MI 48180 — in the Downriver community of metro Detroit, between Wick and Ecorse.",
};

const MAP_QUERY = "8500 Pardee Road, Taylor, MI 48180";

const routes = [
  {
    from: "From I-94 Eastbound",
    text: "Take the Ecorse Road exit and proceed east across Telegraph. Turn right on Pardee, which will be just across the Telegraph Road viaduct. Zion will be on the right-hand side just after Massab Acres.",
  },
  {
    from: "From I-94 Westbound",
    text: "Take the Telegraph Road North exit and proceed north to Ecorse Road. Take Ecorse east (left) and turn right on Pardee, which will be just across the Telegraph Road viaduct. Zion will be on the right-hand side just after Massab Acres.",
  },
  {
    from: "From I-275",
    text: "Proceed south to I-94 and take 94 East. Take the Ecorse Road exit and proceed east across Telegraph. Turn right on Pardee, which will be just across the Telegraph Road viaduct. Zion will be on the right-hand side just after Massab Acres.",
  },
  {
    from: "From the Southfield Expressway",
    text: "Take the exit for 94 West and then look carefully for the Pelham Road exit, which is in the same interchange. Turn left at the red light and proceed to Ecorse Road. Turn right on Ecorse, proceed to Pardee Road (just before the viaduct) and turn left onto Pardee. Zion will be on the right-hand side just after Massab Acres.",
  },
  {
    from: "From I-75 (northbound)",
    text: "Coming from Gibraltar, Monroe, Toledo, or surrounding communities, take the Telegraph Road exit (note: this exit is on the left) and proceed north on Telegraph Road until you reach Wick Road. Turn right and proceed to Pardee. Turn left on Pardee and Zion will be on the left-hand side just after Taylor Prep.",
  },
  {
    from: "From I-75 (southbound)",
    text: "Coming from Detroit or a northern community, exit on Southfield and proceed to Allen Road. After taking the turn-around, turn onto Allen Road westbound and proceed to Pardee. Turn left onto Pardee and Zion will be on the right-hand side just after Massab Acres.",
  },
];

export default function DirectionsPage() {
  return (
    <PageShell
      eyebrow="Come Visit Us"
      title="Directions"
      lede="We're in the Downriver community of Taylor, Michigan — we'd love to see you this Lord's Day."
    >
      {/* Address card */}
      <div className="bg-white rounded-2xl p-7 border-l-4 border-brass shadow-sm">
        <p className="text-xs font-bold tracking-[0.16em] uppercase text-brass-dark mb-2">
          For your map app or GPS
        </p>
        <p className="font-serif text-2xl text-text-dark leading-tight">
          8500 Pardee Road
          <br />
          Taylor, MI 48180
        </p>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(MAP_QUERY)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 bg-ink text-white font-semibold text-sm tracking-wide uppercase px-7 py-3 rounded-full hover:bg-ink-soft hover:-translate-y-0.5 transition-all"
        >
          Open in Google Maps
        </a>
      </div>

      <div className="prose-zion mt-8">
        <p>
          Zion Baptist Church is located in the Downriver community of Taylor,
          Michigan, in the southern metro Detroit area. We are an hour north of
          Toledo and half an hour east of Ann Arbor. People regularly attend our
          church from communities such as Riverview, Flat Rock, Garden City,
          Westland, Belleville, and all points in between.
        </p>
        <p>
          Zion is located at 8500 Pardee Road, between Wick and Ecorse. Pardee Road
          runs north&ndash;south, parallel to Telegraph Road.
        </p>
      </div>

      {/* Map */}
      <div className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-ink/[.08]">
        <iframe
          title="Map to Zion Baptist Church"
          src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`}
          className="w-full h-[380px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Turn-by-turn */}
      <h2 className="mt-14 font-serif text-3xl font-semibold text-text-dark">
        Driving Directions
      </h2>
      <div className="mt-6 space-y-5">
        {routes.map((route) => (
          <div
            key={route.from}
            className="bg-white rounded-2xl p-6 border border-ink/[.07] shadow-sm"
          >
            <h3 className="font-serif text-xl font-semibold text-brass-dark">
              {route.from}
            </h3>
            <p className="mt-2 text-text-body leading-relaxed">{route.text}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-text-light italic">
        If these directions are not helpful, or if you would rather speak to
        someone, please call the church at{" "}
        <a
          href="tel:+13132913128"
          className="not-italic font-semibold text-brass-dark hover:text-ink transition-colors"
        >
          (313) 291-3128
        </a>
        .
      </p>
    </PageShell>
  );
}
