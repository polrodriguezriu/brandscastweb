import type { Metadata } from 'next';
import Header from '@/components/Header';
import FooterMinimal from '@/components/FooterMinimal';

export const metadata: Metadata = {
  title: 'Audiocourses for internal training and onboarding | Brandscast',
  description: 'Create audiocourses for internal training and onboarding so employees can learn on the go. Turn recurring trainings into structured private audio series for your team.',
  alternates: { canonical: 'https://brandscast.com/audiocourses/' },
  robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  openGraph: {
    url: 'https://brandscast.com/audiocourses',
    title: 'Audiocourses for internal training and onboarding | Brandscast',
    description: 'Use audiocourses to deliver internal training and onboarding through private audio. Help employees learn in short, structured episodes they can listen to anywhere.',
    images: '/Podcasters.webp',
  },
};

export default function AudiocoursesPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Audiocourses</div>
      <h1>Audiocourses for internal training and onboarding</h1>
      <p className="lead">
        <strong>Audiocourses</strong> turn your recurring trainings and onboarding programs into structured private audio series. Employees learn in short episodes they can listen to anywhere, without adding more meetings to the calendar.
      </p>
      <p className="hero-meta">
        On this page you will see what audiocourses are, how they work inside Brandscast and how you can use them to deliver internal training in a way that fits the rhythm of your team.
      </p>
        </div>
      </div>

      <main>
        
    <section className="content-section">
      <div className="section-inner two-cols">
        <div>
          <h2>Why audiocourses make sense for internal training</h2>
          <p>
            Traditional training is often heavy. Long slide decks, dense documents and calendar blocks that are hard to coordinate. People join a session, try to absorb everything at once and then quickly forget most of it.
          </p>
          <p>
            <strong>Audiocourses</strong> offer a lighter way to learn. Instead of a single big session, you break content into short, focused audio episodes. Employees listen when they have time, at their own pace and in the context of their daily work.
          </p>
          <p>
            For internal communication, HR and learning teams, this format brings together the clarity of voice with the flexibility of asynchronous consumption. You reduce friction without losing depth.
          </p>
        </div>
        <aside className="highlight-box">
          <h3>Problems audiocourses help you solve</h3>
          <ul>
            <li>Onboarding sessions that do not scale.</li>
            <li>Training that only exists in slides no one reopens.</li>
            <li>Distributed teams struggling to attend live sessions.</li>
            <li>Employees who want to review key concepts later.</li>
          </ul>
          <div className="tag-list">
            <span className="tag">audiocourses</span>
            <span className="tag">internal training</span>
            <span className="tag">onboarding</span>
          </div>
        </aside>
      </div>
    </section>

    
    <section className="content-section">
      <div className="section-inner">
        <h2>What an internal audiocourse looks like in practice</h2>
        <p>
          An audiocourse is a structured series of audio episodes that cover a topic from start to finish. It has a clear beginning and a clear end, unlike an ongoing podcast that never stops.
        </p>
        <p>
          Inside Brandscast, you create an internal podcast and define it as an audiocourse by how you structure and present it:
        </p>
        <ul>
          <li>A clear title and description that explain the topic and who it is for.</li>
          <li>A limited number of episodes, each focused on one concept or step.</li>
          <li>A logical order, so people know where to start and what comes next.</li>
          <li>Optional extra resources, like links, transcripts or documents.</li>
        </ul>
        <p>
          Employees subscribe once to the audiocourse and follow the episodes at their own pace through their private feed or the web player.
        </p>

        <h3>Examples of internal audiocourses</h3>
        <ul>
          <li>Onboarding audiocourse for new hires in their first 30 days.</li>
          <li>Product fundamentals for sales and support teams.</li>
          <li>Leadership basics for new managers.</li>
          <li>Security and compliance awareness in short lessons.</li>
          <li>Culture and values explained by founders and leaders.</li>
        </ul>
        <p>
          Each audiocourse turns a recurring internal topic into a reusable asset, instead of a training you have to repeat from scratch every time.
        </p>
      </div>
    </section>

    
    <section className="content-section">
      <div className="section-inner two-cols">
        <div>
          <h2>Why audiocourses work better than one-off training sessions</h2>
          <p>
            When you move from one-off training to audiocourses, you change how learning fits into the workday. Instead of asking people to stop everything to attend a session, you bring learning to where they already are.
          </p>

          <h3>Short episodes fit into real life</h3>
          <p>
            A ten minute episode is easy to consume between tasks, during a walk or at the start of the day. Learning becomes a habit, not a disruption.
          </p>

          <h3>Repetition is built in</h3>
          <p>
            Employees can replay episodes when they need a refresher. You do not depend on “you should remember everything from that one training last year”.
          </p>

          <h3>Voice makes training more human</h3>
          <p>
            Hearing a manager, founder or expert explain something in their own voice makes content more engaging than reading a long PDF.
          </p>

          <h3>Content stays up to date</h3>
          <p>
            When a process or policy changes, you can add or replace specific episodes without rebuilding the whole training from scratch.
          </p>
        </div>
        <aside className="highlight-box">
          <h3>Key advantages of audiocourses</h3>
          <ul>
            <li>Flexible and asynchronous.</li>
            <li>Easy to update over time.</li>
            <li>Reusable for every new cohort.</li>
            <li>More engaging than static documents.</li>
          </ul>
        </aside>
      </div>
    </section>

    
    <section className="content-section">
      <div className="section-inner two-cols">
        <div>
          <h2>How Brandscast supports audiocourses for your team</h2>
          <p>
            Brandscast is designed for private internal audio, so audiocourses fit naturally into the product. You create them using the same building blocks as internal podcasts, with a different structure and intent.
          </p>
          <p>With Brandscast, you can:</p>
          <ul>
            <li><strong>Create dedicated audiocourse channels</strong> for specific topics or roles.</li>
            <li><strong>Upload or record episodes</strong> in a clear, ordered sequence.</li>
            <li><strong>Deliver content through private feeds</strong> so only authorised employees can access it.</li>
            <li><strong>Use AI podcast transcripts</strong> so people can read or search the content when needed.</li>
            <li><strong>Track listening patterns</strong> to see how far people progress in the audiocourse.</li>
          </ul>
          <p>
            From the employee’s point of view, an audiocourse is just a well structured internal podcast with a clear path from episode one to the last lesson.
          </p>
        </div>
        <aside className="highlight-box">
          <h3>Audiocourses plus other Brandscast features</h3>
          <p>
            You can combine audiocourses with:
          </p>
          <ul>
            <li><strong>Secure access control</strong> to restrict courses by team or role.</li>
            <li><strong>Employee listening analytics</strong> to see completion patterns.</li>
            <li><strong>AI podcast transcripts</strong> to support different learning styles.</li>
          </ul>
          <p>
            Together, these features turn audiocourses into a complete internal learning experience.
          </p>
        </aside>
      </div>
    </section>

    
    <section className="content-section">
      <div className="section-inner two-cols">
        <div>
          <h2>Where audiocourses add the most value in your company</h2>
          <p>
            You can use audiocourses in many areas, but some situations benefit especially from this format.
          </p>

          <h3>Onboarding new employees</h3>
          <p>
            Instead of repeating the same explanations for every new hire, you create an onboarding audiocourse that covers company story, culture, tools and basic processes. Managers then add their own local episodes if they want.
          </p>

          <h3>Training for specific roles</h3>
          <p>
            Sales, support, operations and other functions often need similar knowledge repeated for each new person. An audiocourse gives them a base layer of training they can revisit whenever necessary.
          </p>

          <h3>Change management</h3>
          <p>
            When you introduce a new system or way of working, a short audiocourse can explain the why, the how and the expected behaviours in a digestible way.
          </p>

          <h3>Leadership and management skills</h3>
          <p>
            New managers can receive a series of episodes on feedback, 1:1s, delegation and communication. They listen on their own schedule and move forward as they apply what they learn.
          </p>
        </div>
        <aside className="highlight-box">
          <h3>Signals that you need audiocourses</h3>
          <ul>
            <li>You repeat the same training topics several times per month.</li>
            <li>New hires often ask the same basic questions.</li>
            <li>Teams struggle to attend live training across time zones.</li>
            <li>Existing material lives in documents nobody opens.</li>
          </ul>
          <p>
            In these cases, audiocourses can reduce friction and free up time for deeper, live conversations.
          </p>
        </aside>
      </div>
    </section>

    
    <section className="content-section">
      <div className="section-inner">
        <h2 className="centered-heading">How to create your first internal audiocourse in four steps</h2>
        <p>
          You do not need a big production to launch an effective audiocourse. A simple, clear process is enough to get started and improve over time.
        </p>
        <div className="step-list">
          <div className="step">
            <h3>1. Pick one training topic you repeat often</h3>
            <p>
              Choose something you already explain frequently, such as onboarding, product basics or a key process. This ensures your audiocourse has immediate impact.
            </p>
          </div>
          <div className="step">
            <h3>2. Break it into small lessons</h3>
            <p>
              Turn your topic into a sequence of short episodes, each focused on one idea. Aim for five to fifteen minutes per episode, with a clear title and expected outcome.
            </p>
          </div>
          <div className="step">
            <h3>3. Record and publish in Brandscast</h3>
            <p>
              Record episodes in a simple, conversational tone. Upload them to a dedicated audiocourse channel in Brandscast and arrange them in the right order.
            </p>
          </div>
          <div className="step">
            <h3>4. Assign the audiocourse to the right audience</h3>
            <p>
              Decide who should listen: new hires, a specific team or a role group. Share the private feed or web access and encourage them to follow the course within a set timeframe.
            </p>
          </div>
        </div>
      </div>
    </section>

    
    <section className="content-section">
      <div className="section-inner">
        <h2>Frequently asked questions about audiocourses</h2>
        <div className="faq">
          <details>
            <summary>What is the difference between an audiocourse and a regular internal podcast</summary>
            <p>
              A regular internal podcast is ongoing and open ended. You keep publishing episodes over time. An audiocourse has a defined scope and a limited number of episodes that cover a topic from start to finish.
            </p>
          </details>
          <details>
            <summary>How long should an audiocourse be</summary>
            <p>
              It depends on the topic, but many effective audiocourses fall in the range of five to fifteen episodes, with each episode taking between five and fifteen minutes. Shorter, focused lessons are easier to complete.
            </p>
          </details>
          <details>
            <summary>Do we need professional narration</summary>
            <p>
              No. Clear, honest audio recorded by the people who know the topic is often more valuable than fully produced content. Good sound quality helps, but authenticity matters more than perfection.
            </p>
          </details>
          <details>
            <summary>Can employees access transcripts of audiocourses</summary>
            <p>
              Yes. When you use AI podcast transcripts in Brandscast, employees can read or search the text version of each episode. This supports different learning styles and makes it easier to revisit details.
            </p>
          </details>
          <details>
            <summary>How do we know if people complete the audiocourse</summary>
            <p>
              You can use employee listening analytics in Brandscast to see how episodes are consumed over time. This helps you understand where people drop off and which lessons might need to be shorter or clearer.
            </p>
          </details>
        </div>
      </div>
    </section>

    
    <section className="content-section cta-section">
      <div className="section-inner cta-inner">
        <h2>Turn your trainings into audiocourses with Brandscast</h2>
        <p className="lead">
          Create structured audiocourses for onboarding and internal training so employees can learn in short, focused episodes they can listen to anywhere.
        </p>
        <div className="cta-actions">
          <a className="btn" href="https://app.brandscast.com/signup" target="_blank" rel="noopener">Start trial</a>
        </div>
        <p style={{ margin: '0', color: 'var(--muted)' }}>Launch your first internal audiocourse in Brandscast and see how your team responds.</p>
      </div>
    </section>
      </main>

      <FooterMinimal />
    </>
  );
}
