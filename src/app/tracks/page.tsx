import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterMinimal from "@/components/FooterMinimal";
import CtaSection from "@/components/CtaSection";
import RelatedLinks from "@/components/RelatedLinks";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title:
    "Audio Training for Employees — Internal Learning with Tracks | Brandscast",
  description:
    "Create private audio tracks for employee onboarding, training and knowledge sharing, with short lessons for appropriate listening moments alongside written material.",
  alternates: { canonical: "https://brandscast.com/tracks/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/tracks/",
    title:
      "Audio Training for Employees — Internal Learning with Tracks | Brandscast",
    description:
      "Turn internal training and onboarding material into reusable private audio tracks, with short lessons and controlled access for the intended audience.",
    images: "/Podcasters.webp",
  },
};

export default function TracksPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Tracks</div>
          <h1>Tracks for internal training and onboarding</h1>
          <p className="lead">
            <strong>Tracks</strong> turn your recurring trainings and onboarding
            programs into structured private audio series. Employees learn in
            short episodes during appropriate listening moments, alongside the
            written material, discussion and assessment the topic requires.
          </p>
          <p className="hero-meta">
            On this page you will see what tracks are, how they work inside
            Brandscast and how you can use them to deliver internal training in
            a way that fits the rhythm of your team.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Why tracks make sense for internal training</h2>
              <p>
                Traditional training is often heavy. Long slide decks, dense
                documents and calendar blocks that are hard to coordinate. A
                single session also gives people only one scheduled opportunity
                to encounter the material.
              </p>
              <p>
                <strong>Tracks</strong> offer a lighter way to learn. Instead of
                a single big session, you break content into short, focused
                audio episodes that invited employees can revisit in approved
                listening contexts.
              </p>
              <p>
                For internal communication, HR and learning teams, this format
                combines spoken context with asynchronous access. Whether that
                improves use or recall is something to measure for each group.
              </p>
            </div>
            <aside className="callout callout--accent">
              <h3>Problems tracks help you solve</h3>
              <ul>
                <li>Onboarding sessions that do not scale.</li>
                <li>Training material that is difficult to revisit.</li>
                <li>Distributed teams struggling to attend live sessions.</li>
                <li>Employees who want to review key concepts later.</li>
              </ul>
              <div className="tag-list">
                <span className="tag">tracks</span>
                <span className="tag">internal training</span>
                <span className="tag">onboarding</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2>What an internal track looks like in practice</h2>
            <p>
              A track is a structured series of audio episodes that cover a
              topic from start to finish. It has a clear beginning and a clear
              end, unlike an ongoing podcast that never stops.
            </p>
            <p>
              Inside Brandscast, you create an internal podcast and define it as
              a track by how you structure and present it:
            </p>
            <ul>
              <li>
                A clear title and description that explain the topic and who it
                is for.
              </li>
              <li>
                A limited number of episodes, each focused on one concept or
                step.
              </li>
              <li>
                A logical order, so people know where to start and what comes
                next.
              </li>
              <li>Optional extra resources, like links or documents.</li>
            </ul>
            <p>
              Employees subscribe once to the track and follow the episodes at
              their own pace through their private feed.
            </p>

            <h3>Examples of internal tracks</h3>
            <ul>
              <li>Onboarding track for new hires in their first 30 days.</li>
              <li>Product fundamentals for sales and support teams.</li>
              <li>Leadership basics for new managers.</li>
              <li>Security and compliance awareness in short lessons.</li>
              <li>Culture and values explained by founders and leaders.</li>
            </ul>
            <p>
              Each track turns a recurring internal topic into a reusable asset,
              instead of a training you have to repeat from scratch every time.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>How tracks differ from one-off training sessions</h2>
              <p>
                When you move from one-off{" "}
                <a href="/training-and-compliance/">training</a> to tracks, you
                change how learning fits into the workday. Instead of asking
                people to attend one time slot, you provide a supplementary
                version they can access again.
              </p>

              <h3>Short episodes fit into real life</h3>
              <p>
                A short episode may fit before a shift, between approved tasks
                or during another safe listening window. Test the actual context
                rather than assuming one exists.
              </p>

              <h3>Repetition is built in</h3>
              <p>
                Employees can replay episodes when they need a refresher. You do
                not depend on "you should remember everything from that one
                training last year".
              </p>

              <h3>Voice makes training more human</h3>
              <p>
                Hearing a manager, founder or expert explain something in their
                own voice makes content more engaging than reading a long PDF.
              </p>

              <h3>Content stays up to date</h3>
              <p>
                When a process or policy changes, you can add or replace
                specific episodes without rebuilding the whole training from
                scratch.
              </p>
            </div>
            <aside className="callout callout--accent-2">
              <h3>Key advantages of tracks</h3>
              <ul>
                <li>Flexible and asynchronous.</li>
                <li>Easy to update over time.</li>
                <li>Reusable for every new cohort.</li>
                <li>More engaging than static documents.</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="content-section section-band">
          <div className="section-inner two-cols">
            <div>
              <h2>How Brandscast supports tracks for your team</h2>
              <p>
                Brandscast is designed for private internal audio, so tracks fit
                naturally into the product. You create them using the same
                building blocks as internal podcasts, with a different structure
                and intent.
              </p>
              <p>With Brandscast, you can:</p>
              <ul>
                <li>
                  <strong>Create dedicated track channels</strong> for specific
                  topics or roles.
                </li>
                <li>
                  <strong>Upload or record episodes</strong> in a clear, ordered
                  sequence.
                </li>
                <li>
                  <strong>Assign content to members and groups</strong> so each
                  personal feed reflects the Tracks they should receive.
                </li>
                <li>
                  <strong>Track listening patterns</strong> to see how far
                  people progress in the track.
                </li>
              </ul>
              <p>
                From the employee's point of view, a track is just a well
                structured internal podcast with a clear path from episode one
                to the last lesson.
              </p>
            </div>
            <aside className="highlight-box">
              <h3>Tracks plus other Brandscast features</h3>
              <p>You can combine tracks with:</p>
              <ul>
                <li>
                  <strong>Secure access control</strong> to restrict courses by
                  team or role.
                </li>
                <li>
                  <strong>Employee listening analytics</strong> to see
                  completion patterns.
                </li>
                <li>
                  <strong>Listening analytics</strong> to track completion and
                  engagement per episode.
                </li>
              </ul>
              <p>
                Together, these features provide an audio layer alongside the
                written, live and assessed parts of internal learning.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Where an internal track may be worth testing</h2>
              <p>
                These situations offer recurring material and a defined
                audience, which makes them practical candidates for a pilot.
              </p>

              <h3>Onboarding new employees</h3>
              <p>
                Instead of repeating the same explanations for every new hire,
                you create an onboarding track that covers company story,
                culture, tools and basic processes. Managers then add their own
                local episodes if they want.
              </p>

              <h3>Training for specific roles</h3>
              <p>
                Sales, support, operations and other functions often need
                similar knowledge repeated for each new person. A track gives
                them a base layer of training they can revisit whenever
                necessary.
              </p>

              <h3>Change management</h3>
              <p>
                When you introduce a new system or way of working, a short track
                can explain the why, the how and the expected behaviours in a
                digestible way.
              </p>

              <h3>Leadership and management skills</h3>
              <p>
                New managers can receive a series of episodes on feedback, 1:1s,
                delegation and communication. They listen on their own schedule
                and move forward as they apply what they learn.
              </p>
            </div>
            <aside className="callout callout--accent">
              <h3>Signals that you need tracks</h3>
              <ul>
                <li>
                  You repeat the same training topics several times per month.
                </li>
                <li>New hires often ask the same basic questions.</li>
                <li>
                  Teams struggle to attend live training across time zones.
                </li>
                <li>Existing material is difficult to revisit when needed.</li>
              </ul>
              <p>
                In these cases, measure whether a track reduces repeated
                clarification while retaining the live conversations people
                need.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section section-tint">
          <div className="section-inner">
            <h2 className="centered-heading">
              How to create your first internal track in four steps
            </h2>
            <p>
              You do not need a large production to test a track. A simple,
              clear process is enough to get started and improve over time.
            </p>
            <div className="step-list">
              <div className="step">
                <h3>Pick one training topic you repeat often</h3>
                <p>
                  Choose something you already explain frequently, such as
                  <a href="/employee-onboarding/"> onboarding</a>, product
                  basics or a key process. This gives the pilot a concrete use
                  case and an outcome you can evaluate.
                </p>
              </div>
              <div className="step">
                <h3>Break it into small lessons</h3>
                <p>
                  Turn your topic into a sequence of short episodes, each
                  focused on one idea. Aim for five to fifteen minutes per
                  episode, with a clear title and expected outcome.
                </p>
              </div>
              <div className="step">
                <h3>Upload and publish in Brandscast</h3>
                <p>
                  Record episodes in a simple, conversational tone. Upload them
                  to a dedicated track channel in Brandscast and arrange them in
                  the right order.
                </p>
              </div>
              <div className="step">
                <h3>Assign the track to the right audience</h3>
                <p>
                  Decide who should listen: new hires, a specific team or a role
                  group. Share the private{" "}
                  <a href="/rss-distribution/">RSS feed</a> or web access and
                  encourage them to follow the course within a set timeframe.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <Faq
              heading={"Frequently asked questions about tracks"}
              items={[
                {
                  q: "What is the difference between a track and a regular internal podcast",
                  a: "A regular internal podcast is ongoing and open ended. You keep publishing episodes over time. A track has a defined scope and a limited number of episodes that cover a topic from start to finish.",
                },
                {
                  q: "How long should a track be",
                  a: "It depends on the topic and audience. Start with the minimum number of episodes needed to cover one defined outcome, then compare starts, measured completion and feedback before changing the length.",
                },
                {
                  q: "Do we need professional narration",
                  a: "No. A subject-matter owner can record the material if speech is clear and the environment is suitable. Test whether the intended group prefers that voice, narration or another accessible format.",
                },
                {
                  q: "Can we track who completes the track",
                  a: "Brandscast reports recorded starts and measured completion by episode and member feed. Treat these as listening signals rather than proof that the person understood the material; feed forwarding can also make person-level attribution unreliable.",
                },
                {
                  q: "How do we know if people complete the track",
                  a: "Use measured completion to identify episodes worth investigating, then ask for feedback or use an assessment where comprehension matters. A lower completion signal does not by itself explain whether length, relevance, timing or access caused the difference.",
                },
              ]}
            />
          </div>
        </section>
        <CtaSection
          title="Turn your trainings into tracks with Brandscast"
          lead="Create structured tracks for onboarding and internal training so invited employees can use short, focused episodes in appropriate listening moments."
          note="Launch your first internal track in Brandscast and see how your team responds."
        />
      </main>

      <RelatedLinks
        links={[
          {
            href: "/training-and-compliance/",
            label: "Training and compliance",
          },
          { href: "/employee-onboarding/", label: "Employee onboarding" },
          {
            href: "/private-podcasts-for-teams/",
            label: "Private podcasts for teams",
          },
          {
            href: "/internal-communication/",
            label: "Internal communication with private podcasts",
          },
          {
            href: "/podcasting-for-remote-teams/",
            label: "Podcasting for remote teams",
          },
        ]}
      />

      <FooterMinimal />
    </>
  );
}
