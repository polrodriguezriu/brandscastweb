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
    "Turn onboarding and training into short, reusable audio lessons. Give your team a clear path through each topic, at their own pace.",
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
            <strong>Tracks</strong> turn your recurring training and onboarding
            programs into structured private audio series. Employees learn in
            short episodes they can revisit at their own pace, from a welcome
            message on day one to a refresher before a customer conversation.
          </p>
          <p className="hero-meta">
            Organise your expertise into focused lessons and deliver the right
            Tracks through each Member&apos;s private feed.
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
                audio episodes employees can revisit when they need a refresher.
              </p>
              <p>
                For internal communication, HR and learning teams, this format
                makes expertise reusable. Record an explanation once, share it
                with each new group and keep live sessions for discussion and
                practice.
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
              A Track groups audio episodes around a topic or audience. For
              training, you can arrange it as a series of lessons with a clear
              starting point and a natural order.
            </p>
            <p>
              Give your training Track a structure that makes it easy to follow:
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
              Each Member subscribes once to their private feed, which includes
              all their assigned Tracks. They follow the lessons at their own
              pace.
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
                When you add audio to your{" "}
                <a href="/training-and-compliance/">training</a>, you give
                people another way to learn. A Track keeps useful explanations
                available long after a live session ends.
              </p>

              <h3>Short episodes fit into real life</h3>
              <p>
                A short lesson can fit into a break or a walk. People can listen
                without a screen and return to the written guide when they need
                detailed instructions.
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
                own voice brings their examples, experience and personality into
                the lesson.
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
                <li>Practical examples in your experts&apos; own voices.</li>
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
                  <strong>Private RSS distribution</strong> to deliver lessons
                  through compatible podcast apps.
                </li>
              </ul>
              <p>
                Give your team lessons they can replay, with written guides and
                live practice to help them put the ideas to work.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Put your team&apos;s knowledge into a Track</h2>
              <p>
                Start with the explanations you give again and again. These are
                useful places to build your first audio lessons.
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
                A Track puts those recurring explanations within easy reach,
                leaving more room in live conversations for individual
                questions.
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
              You do not need a large production to create a Track. A simple,
              clear process is enough to get started and improve over time.
            </p>
            <div className="step-list">
              <div className="step">
                <h3>Pick one training topic you repeat often</h3>
                <p>
                  Choose something you already explain frequently, such as
                  <a href="/employee-onboarding/"> onboarding</a>, product
                  basics or a key process. Start with a topic your team already
                  asks about.
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
                  group. Assign the Track so it appears in each Member&apos;s
                  private <a href="/rss-distribution/">RSS feed</a> and let them
                  know which lesson to start with.
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
                  a: "A Track is how you group audio in Brandscast. It can hold an ongoing podcast or a set of training lessons. For training, give it a clear topic, a starting point and a sequence people can follow.",
                },
                {
                  q: "How long should a track be",
                  a: "Use as many lessons as the topic needs, with one clear idea per episode. Five to fifteen minutes is a useful starting point for a lesson; ask your team whether they would prefer shorter episodes or more detail.",
                },
                {
                  q: "Do we need professional narration",
                  a: "No. Ask the colleague who knows the topic to explain it in a quiet room, as they would to a new hire. Clear speech and useful examples matter more than a studio production.",
                },
                {
                  q: "Can we track who completes the track",
                  a: "You can see episode starts and completion for each Member's feed. If someone shares their link or device, another person's activity may appear under their name.",
                },
                {
                  q: "How can we tell whether the lessons are useful?",
                  a: "Compare episode completion and ask your team which lessons need clearer examples or more detail. Listening data alone does not show understanding, so use an assessment when you need to check what people have learned.",
                },
              ]}
            />
          </div>
        </section>
        <CtaSection
          title="Turn your team's expertise into audio lessons"
          lead="Create a Track for onboarding or training, with short lessons your team can return to whenever they need a refresher."
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
