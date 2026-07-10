import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Our Church Covenant",
  description:
    "The church covenant of Zion Baptist Church, Taylor, MI — the promises by which our members walk together in Christ, in brotherly love, to the glory of God.",
};

export default function CovenantPage() {
  return (
    <PageShell
      eyebrow="Church Covenant"
      title="Zion's Church Covenant"
      lede="The promises by which we walk together in Christ, to the glory of God."
    >
      <div className="prose-zion">
        <p>
          Having been, as we trust, brought by divine grace to embrace the Lord
          Jesus Christ, and to give up ourselves wholly to Him; we do now
          solemnly and joyfully covenant with each other, to walk together in Him
          with brotherly love, to His glory as our common Lord. We do, therefore,
          in His strength engage,
        </p>
        <p>
          That we will exercise a mutual care as members one of another to
          promote the growth of the whole body in Christian knowledge, holiness,
          and comfort; to the end that we may stand perfect and complete in all
          the will of God.
        </p>
        <p>
          That to promote and secure this object, we will uphold the public
          worship of God and the ordinances of His house; and hold constant
          communion with each other therein; that we will cheerfully contribute
          of our property for the support of the poor, and for the maintenance of
          a faithful ministry of the gospel among us.
        </p>
        <p>
          That we will not omit closet and family religion at home; nor allow
          ourselves in the too common neglect of the great duty of religiously
          training up our children, and those under our care, with a view to the
          service of Christ, and the enjoyment of heaven.
        </p>
        <p>
          That we walk circumspectly in the world, that we may win their souls;
          remembering that God hath not given us the spirit of fear, but of power
          and of love and of a sound mind; that we are the light of the world and
          the salt of the earth, and that a city set on a hill cannot be hid.
        </p>
        <p>
          That we will frequently exhort, and if occasion shall require, admonish
          one another, according to Matthew 18, in the spirit of meekness;
          considering ourselves lest we also be tempted, and that as in baptism we
          have been buried with Christ and raised again; so there is on us a
          special obligation henceforth to walk in newness of life.
        </p>
        <p>
          And may the God of peace, who brought again from the dead our Lord
          Jesus, that great Shepherd of the sheep, through the blood of the
          everlasting covenant, make us perfect in every good work to do His will;
          working in us that which is well-pleasing in His sight through Jesus
          Christ: to whom be glory forever and ever. Amen.
        </p>
      </div>

      <div className="mt-10 p-6 md:p-7 bg-bg-soft rounded-2xl border-l-4 border-brass">
        <p className="text-text-body leading-relaxed">
          Pastor Jones has written a detailed commentary explaining the meaning
          of each part of this covenant.
        </p>
        <Link
          href="/covenant/teaching"
          className="mt-3 inline-flex items-center gap-2 font-semibold text-sm tracking-wide uppercase text-brass-dark hover:text-ink transition-colors"
        >
          Read the Teaching on the Covenant{" "}
          <span aria-hidden>&rarr;</span>
        </Link>
      </div>
    </PageShell>
  );
}
