import type { Metadata } from 'next';
import Header from '@/components/Header';
import FooterMinimal from '@/components/FooterMinimal';

export const metadata: Metadata = {
  title: 'About Brandscast | Private podcasts for teams',
  description: 'I am Pol Rodríguez, a Barcelona-based entrepreneur who has been launching internet projects for more than sixteen years. Brandscast is my way to help teams communicate better with private podcasts.',
  alternates: { canonical: 'https://brandscast.com/about/' },
  robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  openGraph: {
    url: 'https://brandscast.com/about',
    title: 'About Brandscast | Private podcasts for teams',
    description: 'Brandscast is built by Pol Rodríguez, an entrepreneur from Barcelona focused on SaaS and podcasting. Learn the story behind the product.',
    images: '/pol-rodriguez.jpg',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">About Brandscast</div>
          <h1>The story behind Brandscast and who I am</h1>
          <p className="lead">
            My name is <strong>Pol Rodríguez</strong>. I live near Barcelona and I have been launching internet projects for more than sixteen years. Brandscast is the tool I am building to help teams communicate better with private podcasts.
          </p>
          <p className="hero-meta">
            On this page I want to explain why Brandscast exists, what I believe about internal communication and how my path in SaaS and podcasting has led to this project.
          </p>
        </div>
      </div>

      <main>
        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>What Brandscast is and why I am building it</h2>
              <p>
                Brandscast is a focused tool that lets you create <strong>private podcasts for your team</strong>. Instead of adding more meetings and more emails to your week, you record short audio messages that your colleagues can listen to when it actually fits into their day.
              </p>
              <p>
                I do not want to replace every channel you use today. My goal is much simpler. I want to give you a better format for the messages that really matter. Things like strategy updates, leadership messages, culture stories and training sessions work much better when people can hear a human voice instead of reading a long email.
              </p>
              <p>
                Brandscast stays small on purpose. You can create internal podcasts, invite people with secure access, see who listens and keep everything inside your company. There are no public feeds to manage and no need to turn your team into a production studio.
              </p>
              <p>
                When I design features, I try to remember how full a normal workday already feels. Attention is limited. That is why Brandscast is designed to be light, simple and respectful with everyone&apos;s time.
              </p>
            </div>
            <aside className="highlight-box">
              <h3>Brandscast in my own words</h3>
              <p>
                For me, Brandscast is a way to help companies communicate in a more human and sustainable way. You still share the same information, but in a format that feels closer and less demanding than another meeting on the calendar.
              </p>
              <p>
                I like tools that do one thing well. Brandscast is exactly that: private podcasts for teams, built with internal communication in mind from day one.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Who I am</h2>
              <p>
                I am <strong>Pol Rodríguez</strong>, an entrepreneur who has spent most of his adult life building projects on the internet. Over more than sixteen years I have launched different products and collaborations, always with the same curiosity about how people use digital tools and content to work and create.
              </p>
              <p>
                I live close to Barcelona, a city that has given me a lot in terms of community, inspiration and access to the world of technology and creators. During these years I have tried many things, but two areas keep pulling me back: <strong>SaaS businesses</strong> and <strong>podcasting</strong>.
              </p>
              <p>
                On the SaaS side, I have learned how hard and how rewarding it is to build something that people pay for every month. I have spent a lot of time thinking about onboarding, value, churn and the small details that make a product feel reliable and honest.
              </p>
              <p>
                On the podcasting side, I have been on both sides of the microphone. I have hosted shows, produced content and worked with other creators. Podcasting has been a constant in my life for many years and it has shaped how I think about communication, voice and storytelling.
              </p>
              <p>
                Brandscast is a direct result of this mix. It combines everything I have learned from SaaS with everything I love about audio.
              </p>
            </div>
            <aside className="profile-card">
              <div className="profile-photo">
                <img src="/pol-rodriguez.jpg" alt="Photo of Pol Rodríguez" />
              </div>
              <div className="profile-name">Pol Rodríguez</div>
              <div className="profile-role">Founder of Brandscast</div>
              <p>
                Based near Barcelona, I have been building internet projects for more than sixteen years, with a special focus on SaaS products and podcasting.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner">
            <h2>Why I decided to create Brandscast</h2>
            <p>
              The idea for Brandscast came from something I kept seeing in different companies. Everyone says internal communication is important, but the main tools and formats have not changed that much. Long emails, crowded chats and long meetings are still the default.
            </p>
            <p>
              At the same time, podcast listening is now part of everyday life for many people. On the way to work, during a walk or while cooking dinner, it is normal to have a podcast playing in the background. Audio has a way of fitting into all those small moments that are impossible to use for anything else.
            </p>
            <p>
              One day I asked myself a simple question. What if we used this same habit inside companies. Not for marketing or external communication, but for the way teams talk to each other. What if leadership updates, strategy changes or onboarding content arrived as short, private podcast episodes instead of as more slides.
            </p>
            <p>
              Once I saw that possibility, I could not unsee it. From there I started to design Brandscast as a tool focused on that idea. No public shows, no complex network features. Just private podcasts for teams, with secure access and a workflow that internal communication and HR people can actually manage.
            </p>
            <div className="timeline">
              <div className="timeline-item">
                <h3>From public podcasts to private audio for teams</h3>
                <p>
                  After years working with public podcasts, I realised that many of the same strengths of audio could help inside a company. I wanted to take that experience and apply it to internal communication.
                </p>
              </div>
              <div className="timeline-item">
                <h3>From big feature lists to a focused product</h3>
                <p>
                  I have built and used products that try to do too many things. With Brandscast I made a deliberate choice to stay focused. I prefer a small, sharp product over a big, vague one.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>The values behind how I work</h2>
              <p>
                Tools are not neutral. They reflect the beliefs and habits of the person who creates them. Brandscast follows a few simple values that guide how I make decisions and how I prioritise what to build next.
              </p>
              <div className="values-grid">
                <div className="value-card">
                  <h3>Clarity over noise</h3>
                  <p>
                    I think good internal communication should make things easier to understand. With Brandscast I try to encourage short, direct messages instead of more noise in an already loud environment.
                  </p>
                </div>
                <div className="value-card">
                  <h3>Respect for attention</h3>
                  <p>
                    I know how full a workday can be. I do not want Brandscast to compete for attention in an aggressive way. I prefer a tool that fits naturally into the way people already live and work.
                  </p>
                </div>
                <div className="value-card">
                  <h3>Simple by design</h3>
                  <p>
                    I enjoy products that feel simple and honest. In Brandscast I try to remove extra steps, hidden settings and unnecessary friction so you can focus on what you want to say.
                  </p>
                </div>
              </div>
            </div>
            <aside className="highlight-box">
              <h3>How I improve Brandscast</h3>
              <p>
                I do my best work when I am close to the people who use what I build. When teams sign up to Brandscast, I listen carefully to their use cases and questions. That feedback helps me decide what to adjust and what to leave out.
              </p>
              <p>
                I prefer small, continuous improvements over big launches. For you, this should translate into a product that keeps getting better without changing its core or becoming more complex every month.
              </p>
            </aside>
          </div>
        </section>

        <section className="content-section">
          <div className="section-inner two-cols">
            <div>
              <h2>Who I am building Brandscast for</h2>
              <p>
                Brandscast is for teams that care about internal communication and want a format that feels more human and more flexible. If you have remote or hybrid teams, different offices or people who rarely sit behind a desk, audio can make a big difference.
              </p>
              <p>
                If you work in HR, internal comms, people and culture or leadership, my goal is to give you a channel that makes your work easier, not heavier. You do not need to become a professional host. You just need a quiet room, a simple microphone and something clear to say.
              </p>
              <p>
                Brandscast is also a good fit if you, like me, appreciate simple SaaS products. If you prefer a tool that solves one problem well instead of a big all in one suite, I think you will feel at home here.
              </p>
            </div>
            <aside className="highlight-box">
              <h3>What you can expect if you join</h3>
              <p>
                When you start using Brandscast, you are not dealing with a huge company. You are working with a product built and cared for by a person who has been on your side of the table many times.
              </p>
              <p>
                You can expect direct communication, a realistic roadmap and a constant effort to keep the product useful, simple and stable.
              </p>
            </aside>
          </div>
        </section>

        <section className="cta-section">
          <div className="section-inner cta-inner">
            <h2>Want to try Brandscast with your team</h2>
            <p className="lead">
              If you want to see how private podcasts could fit into your internal communication, you can create a free account and experiment with a small group of people.
            </p>
            <div className="cta-actions">
              <a className="btn" href="https://app.brandscast.com/signup" target="_blank" rel="noopener">Start Trial</a>
            </div>
            <p style={{ margin: 0, color: 'var(--muted)' }}>Set up a private podcast in a few minutes and see how it feels in real life.</p>
          </div>
        </section>
      </main>

      <FooterMinimal />
    </>
  );
}
