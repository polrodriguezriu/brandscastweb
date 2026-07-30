/**
 * Figure slot for the report.
 *
 * The six images are not in the repo yet. Until they are, this renders a
 * labelled placeholder carrying the art-direction brief, so the page is
 * reviewable at full length and nothing silently ships as a broken <img>.
 *
 * To fill a slot: drop the file in /public/report/ and pass `src`.
 *
 * ⚠️ SAFETY CONSTRAINT ON EVERY BRIEF — non-negotiable.
 * Nobody may be depicted with both ears occluded while doing anything where
 * hearing is a safety input: operating machinery, driving, working at height,
 * moving around a plant or warehouse, crossing traffic, handling livestock.
 * Where the setting is a working environment, the brief must specify ONE of:
 *   - a single true-wireless earbud, with the open charging case in frame and
 *     the second earbud visibly still in it. The case is not set dressing: it
 *     is the only thing that proves the far ear is free when the far ear is
 *     not in shot. Without it the frame is ambiguous, and ambiguous is the
 *     same as unsafe here.
 *   - bone-conduction or open-ear headphones
 *   - audio on a speaker (phone, vehicle, bench radio)
 * Both ears covered is only acceptable at genuine rest, away from moving
 * plant: a break room, a locker room, a bus seat, a kitchen at home.
 * This is not a stylistic preference. Depicting unsafe hearing protection
 * practice in a document aimed at internal communicators would be read,
 * correctly, as us not understanding the people we claim to serve.
 */

interface ReportFigureProps {
  /** Path under /public once the image exists, e.g. "/report/warehouse.webp" */
  src?: string;
  /** Alt text. Required whether or not src is set — it is also the brief's subject line. */
  alt: string;
  /** Art-direction brief. Shown in the placeholder; ignored once src is set. */
  brief: string;
  /** Hearing-safety approach chosen for this scene. */
  safety: string;
  caption?: string;
}

export default function ReportFigure({
  src,
  alt,
  brief,
  safety,
  caption,
}: ReportFigureProps) {
  return (
    <figure className="report-figure">
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <div className="report-figure__placeholder" role="img" aria-label={alt}>
          <span className="report-figure__tag">Image to generate</span>
          <p className="report-figure__subject">{alt}</p>
          <p className="report-figure__brief">{brief}</p>
          <p className="report-figure__safety">
            <strong>Hearing safety:</strong> {safety}
          </p>
        </div>
      )}
      {caption && (
        <figcaption className="report-figure__caption">{caption}</figcaption>
      )}
    </figure>
  );
}
