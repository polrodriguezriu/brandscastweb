import type { Metadata } from 'next';
import Header from '@/components/Header';
import FooterMinimal from '@/components/FooterMinimal';
import CtaSection from '@/components/CtaSection';
import RelatedLinks from '@/components/RelatedLinks';

export const metadata: Metadata = {
  title: 'Employee onboarding | Brandscast',
  description: 'Use private podcasts to improve employee onboarding. Help new hires understand your culture, product and processes faster with flexible, on-the-go audio content.',
  alternates: { canonical: 'https://brandscast.com/employee-onboarding/' },
  robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  openGraph: {
    url: 'https://brandscast.com/employee-onboarding',
    title: 'Employee onboarding | Brandscast',
    description: 'Turn employee onboarding into an engaging audio journey. Use private internal podcasts to share culture, context and training with every new hire.',
    images: '/Podcasters.webp',
  },
};

export default function EmployeeOnboardingPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Employee onboarding</div>
      <h1>Make employee onboarding clearer and more human with internal podcasts</h1>
      <p className="lead">
        With <strong>employee onboarding</strong> through private podcasts, every new hire can learn your story, culture and processes at their own pace. They listen on the go, understand faster and feel part of the team from day one.
      </p>
      <p className="hero-meta">
        On this page you will see how you can use private audio to support employee onboarding, reduce information overload and give every new colleague a consistent, high quality first experience.
      </p>
        </div>
      </div>

      <main>
        
    <section className="content-section">
      <div className="section-inner two-cols">
        <div>
          <h2>Why employee onboarding often feels overwhelming</h2>
          <p>
            When someone joins your company, they face a long list of things to learn. New tools, new names, new processes and a new market. In many organisations, this becomes a heavy mix of documents, slides and back to back calls.
          </p>
          <p>
            Managers try to help by scheduling more meetings. People from different teams join to “explain their part”. The result is a crowded calendar in the first weeks, with information that is hard to remember and hard to revisit.
          </p>
          <p>
            For distributed or hybrid teams, the problem grows. Time zones make it difficult to schedule live sessions. New hires start before a cohort is ready, so you repeat the same onboarding sessions many times.
          </p>
          <p>
            Most companies do not lack content. They lack an onboarding format that respects time, attention and different ways of learning. This is where <strong>employee onboarding</strong> with internal podcasts becomes powerful.
          </p>
        </div>
        <aside className="highlight-box">
          <h3>Signs your onboarding needs a better format</h3>
          <ul>
            <li>New hires say they feel overloaded with calls and documents.</li>
            <li>Managers repeat the same explanations every time someone joins.</li>
            <li>Important cultural messages get lost in the middle of tasks and tools.</li>
            <li>Remote colleagues do not receive the same experience as office hires.</li>
          </ul>
          <div className="tag-list">
            <span className="tag">employee onboarding</span>
            <span className="tag">new hires</span>
            <span className="tag">internal podcasts</span>
          </div>
        </aside>
      </div>
    </section>

    
    <section className="content-section">
      <div className="section-inner">
        <h2>What employee onboarding with internal podcasts looks like</h2>
        <p>
          Employee onboarding with internal podcasts means turning key parts of your onboarding into a curated audio journey. Instead of sharing everything in live calls, you record short episodes that guide new hires through what matters most.
        </p>
        <p>
          For a new colleague, it feels like following a friendly series: open their favourite app, press play and listen while walking, commuting or organising their workspace. They hear the voices of leaders, managers and peers, not just read bullet points.
        </p>
        <p>
          Your episodes do not need to be polished like a public show. They need to be clear, honest and intentional. A ten minute episode on your origin story can replace a long presentation. A short interview with a customer facing teammate can teach more than a long wiki page.
        </p>
        <p>
          When you deliver this through private feeds designed for internal use, you control who listens, in which order and at which stage of their onboarding.
        </p>
      </div>
    </section>

    
    <section className="content-section">
      <div className="section-inner two-cols">
        <div>
          <h2>How you can use podcasts in employee onboarding</h2>
          <p>
            You do not need to rebuild your entire onboarding to use audio. You can start small with a few focused use cases and expand from there.
          </p>
          <h3>Welcome and company story</h3>
          <p>
            Record a warm welcome from the founders or leadership team. Share why the company exists, what you are building and how you want people to feel when they work with you.
          </p>
          <h3>Culture, values and ways of working</h3>
          <p>
            Turn your values and operating principles into episodes with examples. Explain how decisions are made, how teams collaborate and what “good” looks like in daily work.
          </p>
          <h3>Product and customer basics</h3>
          <p>
            Create short explainers where product and customer teams talk through the problem you solve, your main features and who your customers are. New hires can revisit this content as many times as they need.
          </p>
          <h3>Role specific tracks</h3>
          <p>
            Add role based playlists for sales, support, marketing or engineering. Include episodes on tools, processes and common scenarios so each person feels better prepared in their first weeks.
          </p>
        </div>
        <aside className="highlight-box">
          <h3>Examples of onboarding episodes</h3>
          <ul>
            <li>“Our story in 10 minutes” from the founding team.</li>
            <li>A conversation on how you work async and handle time zones.</li>
            <li>A walkthrough of your main product use cases from a PM.</li>
            <li>Short stories from teammates about their first 90 days.</li>
          </ul>
          <p>
            Together, these episodes form an onboarding path that feels more human and easier to follow than a static documentation dump.
          </p>
        </aside>
      </div>
    </section>

    
    <section className="content-section">
      <div className="section-inner two-cols">
        <div>
          <h2>Benefits of using podcasts in employee onboarding</h2>
          <p>
            When you introduce internal podcasts into your onboarding, you are not just adding another channel. You are redesigning how new hires connect with your company.
          </p>
          <p><strong>Faster understanding of culture and context</strong></p>
          <p>
            Voice makes it easier to feel nuance and emotion. New hires hear how leaders speak, what teams celebrate and how you talk about customers, not just what is written on a slide.
          </p>
          <p><strong>More flexible first weeks</strong></p>
          <p>
            Instead of back to back sessions, people can spread onboarding content over their days. They stay fresher and retain more because they are not overloaded.
          </p>
          <p><strong>Consistent experience across locations</strong></p>
          <p>
            Every new hire, no matter their office or time zone, receives the same core messages. Local managers can add their own sessions on top, but the foundation stays aligned.
          </p>
          <p><strong>Less repetition for managers</strong></p>
          <p>
            Instead of repeating the same introduction many times per year, managers record it once and focus live time on questions, mentoring and real collaboration.
          </p>
        </div>
        <aside className="highlight-box">
          <h3>When audio onboarding is a good fit</h3>
          <p>
            Employee onboarding with internal podcasts works especially well when you:
          </p>
          <ul>
            <li>Hire regularly across different teams or countries.</li>
            <li>Already have good onboarding content but it is scattered.</li>
            <li>Want new hires to feel closer to leadership and customers.</li>
            <li>Care about a strong, scalable first experience for everyone.</li>
          </ul>
        </aside>
      </div>
    </section>

    
    <section className="content-section">
      <div className="section-inner two-cols">
        <div>
          <h2>How Brandscast supports employee onboarding with audio</h2>
          <p>
            Brandscast is built to make <strong>employee onboarding</strong> with internal podcasts simple and secure. You focus on the content while the platform takes care of delivery, access and analytics.
          </p>
          <p>With Brandscast, you can:</p>
          <ul>
            <li><strong>Create private onboarding podcasts</strong> for all new hires or specific roles and regions.</li>
            <li><strong>Group episodes into tracks</strong> that match the first days, weeks or months of the employee journey.</li>
            <li><strong>Invite new hires easily</strong> with private links that work in popular podcast apps or a web player.</li>
            <li><strong>Control who listens to what</strong> so people only see the onboarding content that fits their role.</li>
            <li><strong>Use AI transcripts</strong> so new hires can skim or search content when they can not listen with audio on.</li>
            <li><strong>Track listening activity</strong> to understand which episodes new hires actually consume.</li>
          </ul>
          <p>
            You do not need to build a custom system or manage public feeds. Brandscast gives you a focused tool for internal audio that fits modern onboarding.
          </p>
        </div>
        <aside className="highlight-box">
          <h3>An onboarding channel that scales with you</h3>
          <p>
            As you grow, your onboarding needs evolve. With Brandscast, you can add new series, update episodes and create dedicated tracks without redesigning your full process each time.
          </p>
          <p>
            New hires get a clear path, your HR and People teams gain leverage and managers spend their time where it has the most impact.
          </p>
        </aside>
      </div>
    </section>

    
    <section className="content-section">
      <div className="section-inner">
        <h2 className="centered-heading">How to add internal podcasts to your onboarding in four steps</h2>
        <p>
          You do not need a big project to test employee onboarding with audio. A small, focused experiment is enough to see how it works for your team.
        </p>
        <div className="step-list">
          <div className="step">
            <h3>1. Pick one onboarding moment to improve</h3>
            <p>
              Choose a specific part of your onboarding that would benefit from audio. Your welcome message, your company story or a product basics series. Start with one clear goal so you can measure the impact.
            </p>
          </div>
          <div className="step">
            <h3>2. Outline a short series of episodes</h3>
            <p>
              Define three to six episodes that cover the essentials for that moment. Give each episode one main idea and keep them short. It is easier for new hires to follow and complete a clear path than a single long recording.
            </p>
          </div>
          <div className="step">
            <h3>3. Record and publish in Brandscast</h3>
            <p>
              Record using a simple microphone and upload your episodes to Brandscast. Create a private onboarding podcast and invite the next group of new hires. Share simple instructions on how to subscribe and listen.
            </p>
          </div>
          <div className="step">
            <h3>4. Collect feedback and refine the journey</h3>
            <p>
              After their first weeks, ask new hires how the audio helped them and what was missing. Combine their feedback with listening analytics. Use these insights to improve episodes and decide which other parts of onboarding you want to move to audio.
            </p>
          </div>
        </div>
      </div>
    </section>

    
    <section className="content-section">
      <div className="section-inner">
        <h2>Frequently asked questions about employee onboarding with podcasts</h2>
        <div className="faq">
          <details>
            <summary>Will new hires really listen to onboarding episodes</summary>
            <p>
              When onboarding content is relevant, short and easy to access, adoption is usually strong. New hires are motivated to understand their new company. Audio lets them do it in moments that suit them instead of adding more calls to their calendar.
            </p>
          </details>
          <details>
            <summary>Do we need a full studio to start</summary>
            <p>
              No. A simple USB microphone and a quiet room are enough to begin. For internal onboarding, clarity matters more than perfect production. You can always improve quality later if you need to.
            </p>
          </details>
          <details>
            <summary>How do we keep onboarding content private</summary>
            <p>
              With Brandscast, each new hire receives a private feed and you manage access from a central dashboard. When someone leaves or changes role, you can update or revoke their access quickly so internal content stays protected.
            </p>
          </details>
          <details>
            <summary>How does audio fit with our existing onboarding</summary>
            <p>
              Audio does not replace everything you do today. It complements your current onboarding by moving explanations and stories into a more human, flexible format. You can still use documents, training platforms and live sessions for practice and interaction.
            </p>
          </details>
        </div>
      </div>
    </section>
      <CtaSection
        title="Make employee onboarding more engaging with Brandscast"
        lead="If you want new hires to feel informed, confident and connected from their first weeks, internal podcasts can become a key part of your employee onboarding."
        note="Create a private onboarding podcast in a few minutes and invite your next group of new hires."
      />
      </main>

      <RelatedLinks links={[
        { href: '/for-hr-teams/', label: 'For HR teams' },
        { href: '/training-and-compliance/', label: 'Training and compliance' },
        { href: '/audiocourses/', label: 'Audiocourses' },
        { href: '/hr-announcements/', label: 'HR announcements' },
      ]} />

      <FooterMinimal />
    </>
  );
}
