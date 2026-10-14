import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import styles from "./resources.module.css";

const PAGE_URL = "https://brandscast.com/resources/";
const TITLE = "Internal communication resources and guides | Brandscast";
const DESCRIPTION =
  "Practical internal communication resources for planning updates, choosing channels, measuring workforce coverage and adding private audio.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://brandscast.com/resources/",
  },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    type: "website",
    url: "https://brandscast.com/resources/",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brandscast internal communication resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
};

type Resource = {
  href: string;
  label: string;
  description: string;
  tag: string;
};

type ResourcePath = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  featured: Resource;
  resources: Resource[];
};

const paths: ResourcePath[] = [
  {
    id: "plan",
    number: "01",
    eyebrow: "Plan",
    title: "Plan internal communication around the audience",
    description:
      "Turn strategy into a workable plan: define the outcome, map each audience, choose an owner and decide what evidence you will review.",
    featured: {
      href: "/resources/internal-communication-plan/",
      label: "Internal communication plan template",
      description:
        "Build one update or a repeatable programme with a free editable CSV template.",
      tag: "Template + guide",
    },
    resources: [
      {
        href: "/resources/internal-comms-best-practices/",
        label: "Internal communication best practices",
        description:
          "Practical principles, examples and routines for clearer company updates.",
        tag: "Playbook",
      },
      {
        href: "/resources/templates-for-company-updates/",
        label: "Templates for company updates",
        description:
          "Reusable structures for weekly updates, decisions, incidents and launches.",
        tag: "Templates",
      },
    ],
  },
  {
    id: "channels",
    number: "02",
    eyebrow: "Channels",
    title: "Choose channels by purpose and practical access",
    description:
      "Email, chat, meetings and audio solve different parts of the job. Start with the message and the people, then build a mix they can realistically use.",
    featured: {
      href: "/internal-communication/",
      label: "A practical approach to internal communication",
      description:
        "Connect the message, audience, channel mix and follow-up without forcing every update through one route.",
      tag: "Overview",
    },
    resources: [
      {
        href: "/resources/async-communication-guide/",
        label: "Asynchronous communication guide",
        description:
          "Decide what should be live, what should be async and how to keep context available.",
        tag: "Channel guide",
      },
      {
        href: "/resources/remote-team-communication-tips/",
        label: "Remote team communication tips",
        description:
          "Create a dependable rhythm across locations, working hours and time zones.",
        tag: "Remote teams",
      },
    ],
  },
  {
    id: "coverage",
    number: "03",
    eyebrow: "Measure",
    title: "Measure workforce communication coverage",
    description:
      "Separate the people you intended to reach from channel activity. Delivery, opens, attendance and listens each answer a different question.",
    featured: {
      href: "/state-of-internal-communication-2026/",
      label: "The State of Internal Communication 2026",
      description:
        "Explore the research behind workforce communication coverage and download the sourced report.",
      tag: "Research report",
    },
    resources: [
      {
        href: "/resources/internal-communication-metrics/",
        label: "Internal communication metrics",
        description:
          "Build a measurement stack for access, delivery, attention, understanding and action.",
        tag: "Measurement guide",
      },
      {
        href: "/resources/employee-engagement-with-audio/",
        label: "Employee engagement with audio",
        description:
          "Use audio signals carefully and connect channel activity to useful feedback and outcomes.",
        tag: "Audio metrics",
      },
    ],
  },
  {
    id: "frontline",
    number: "04",
    eyebrow: "Frontline",
    title: "Reach deskless and frontline teams on their terms",
    description:
      "Channel availability changes across stores, shifts, field work and production floors. Plan around devices, accounts, languages and safe moments to catch up.",
    featured: {
      href: "/resources/deskless-internal-communication/",
      label: "Deskless internal communication guide",
      description:
        "Assess real access and build a four-week starting plan for one frontline group.",
      tag: "Frontline guide",
    },
    resources: [
      {
        href: "/industries/retail-and-franchises/",
        label: "Communication across stores and franchises",
        description:
          "Share relevant updates with distributed teams while keeping access private.",
        tag: "Retail",
      },
      {
        href: "/industries/manufacturing/",
        label: "Communication for manufacturing teams",
        description:
          "Add a flexible update format for shift-based teams without replacing written detail.",
        tag: "Manufacturing",
      },
    ],
  },
  {
    id: "audio",
    number: "05",
    eyebrow: "Private audio",
    title: "Add a private audio option to the channel mix",
    description:
      "Use audio when voice, explanation or a screen-free format adds value. Keep written sources for detail and give each audience controlled access.",
    featured: {
      href: "/resources/guide-to-internal-podcasts/",
      label: "Guide to internal company podcasts",
      description:
        "Set the goal, audience, format, editorial rhythm, privacy model and measures for an internal podcast.",
      tag: "Complete guide",
    },
    resources: [
      {
        href: "/resources/how-to-launch-a-private-podcast/",
        label: "How to launch a private podcast",
        description:
          "Move from pilot to rollout with a practical launch sequence and clear ownership.",
        tag: "Launch guide",
      },
      {
        href: "/private-podcasts-for-teams/",
        label: "Private podcast platform for teams",
        description:
          "Upload your own recording or generate audio from text with optional AI, then publish through personal private RSS feeds.",
        tag: "Brandscast product",
      },
    ],
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Internal communication resources",
  description: DESCRIPTION,
  url: PAGE_URL,
  publisher: { "@id": "https://brandscast.com/#organization" },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: paths.flatMap((path) => [
      path.featured,
      ...path.resources,
    ]).map((resource, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: resource.label,
      url: new URL(resource.href, PAGE_URL).toString(),
    })),
  },
};

function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <a className={styles.resourceCard} href={resource.href}>
      <span className={styles.cardTag}>{resource.tag}</span>
      <h3>{resource.label}</h3>
      <p>{resource.description}</p>
      <span className={styles.cardLink} aria-hidden="true">
        Read resource <span>→</span>
      </span>
    </a>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://brandscast.com/" },
          { name: "Resources", url: PAGE_URL },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div>
              <div className="eyebrow">Internal communication field guide</div>
              <h1>Resources for clearer internal communication</h1>
              <p className={styles.heroLead}>
                Plan important updates, choose a realistic channel mix and
                measure who had a practical route to the message. Add private
                audio when voice or a screen-free option helps.
              </p>
            </div>
            <aside className={styles.heroNote}>
              <span className={styles.noteLabel}>Start with the job</span>
              <p>
                You do not need another generic content library. Choose the
                communication task in front of you and follow the shortest path
                to a useful answer.
              </p>
            </aside>
          </div>

          <nav className={styles.pathNav} aria-label="Browse resources by task">
            {paths.map((path) => (
              <a href={`#${path.id}`} key={path.id}>
                <span>{path.number}</span>
                {path.eyebrow}
              </a>
            ))}
          </nav>
        </section>

        <div className={styles.paths}>
          {paths.map((path) => (
            <section className={styles.path} id={path.id} key={path.id}>
              <div className={styles.pathIntro}>
                <span className={styles.pathNumber}>{path.number}</span>
                <div>
                  <div className={styles.pathEyebrow}>{path.eyebrow}</div>
                  <h2>{path.title}</h2>
                  <p>{path.description}</p>
                </div>
              </div>

              <div className={styles.resourceGrid}>
                <a className={styles.featuredCard} href={path.featured.href}>
                  <span className={styles.cardTag}>{path.featured.tag}</span>
                  <h3>{path.featured.label}</h3>
                  <p>{path.featured.description}</p>
                  <span className={styles.cardLink} aria-hidden="true">
                    Start here <span>→</span>
                  </span>
                </a>
                <div className={styles.secondaryGrid}>
                  {path.resources.map((resource) => (
                    <ResourceCard resource={resource} key={resource.href} />
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <section className={styles.principle}>
          <div>
            <span className={styles.principleLabel}>Brandscast principle</span>
            <h2>More choice, not another channel mandate</h2>
          </div>
          <p>
            Audio complements email, chat, meetings and the written source of
            truth. Brandscast lets you upload a recording or generate audio from
            text with optional AI, segment it by audience and publish it through
            personal, authenticated RSS feeds.
          </p>
          <a className="btn" href="/private-podcasts-for-teams/">
            Explore private audio for teams
          </a>
        </section>
      </main>

      <FooterMinimal />
    </>
  );
}
