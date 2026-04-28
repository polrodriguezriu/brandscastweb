import type { Metadata } from "next";
import Header from "@/components/Header";
import FooterFull from "@/components/FooterFull";

export const metadata: Metadata = {
  title: "Help Center | Brandscast",
  description:
    "Step-by-step tutorials to get the most out of Brandscast. Learn how to create podcasts, invite your team, read analytics and manage your account.",
  alternates: { canonical: "https://brandscast.com/help/" },
  robots:
    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
  openGraph: {
    url: "https://brandscast.com/help",
    title: "Help Center | Brandscast",
    description: "Step-by-step tutorials to get the most out of Brandscast.",
    images: "/og-image.png",
  },
};

const categories = [
  {
    id: "getting-started",
    label: "Getting started",
    color: "brand",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5Z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    tutorials: [
      {
        id: "t1",
        title: "How to create your Brandscast account",
        steps: [
          'Go to <a href="https://app.brandscast.com/signup" target="_blank" rel="noopener">app.brandscast.com/signup</a> and enter your name, work email and a password.',
          "Check your inbox for a verification email and click the link inside. The link expires in 24 hours.",
          "Once your email is verified, you will land on the onboarding flow where you choose a plan or start a free trial.",
          "Your account is ready. You can now create your first podcast.",
        ],
        tip: "Use a work email address. Members will receive invitation emails from that same domain, which makes the invite look trustworthy.",
      },
      {
        id: "t2",
        title: "How to create your first private podcast",
        steps: [
          "From the dashboard, click <strong>New podcast</strong> in the top navigation or the Podcasts section.",
          "Choose <strong>Podcast</strong> as the type (or Track if it is a structured course — see tutorial 7).",
          "Fill in the title, a short description and select a category. These details help listeners identify the show.",
          "Upload a cover image. Square format, at least 1400 × 1400 px works best across all podcast apps.",
          "Click <strong>Create podcast</strong>. The podcast is private by default — no one can access it until you invite members.",
        ],
        tip: 'Keep the title short and specific. "Q1 Sales Kick-off" is clearer than "Sales updates".',
      },
      {
        id: "t3",
        title: "How to publish your first episode",
        steps: [
          "Open the podcast you want to add an episode to and click <strong>New episode</strong>.",
          "Enter the episode title and an optional description. The description appears in podcast apps.",
          "Upload your audio file. Brandscast accepts MP3 and M4A files up to 500 MB.",
          "Set the episode number and season if you use a structured series format.",
          "Click <strong>Publish</strong>. The episode is available immediately to all members who have access to this podcast.",
        ],
        tip: "Record audio at 128 kbps stereo or higher for good quality without a large file size. A 30-minute episode at 128 kbps is around 57 MB.",
      },
    ],
  },
  {
    id: "managing-content",
    label: "Managing content",
    color: "green",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
    tutorials: [
      {
        id: "t4",
        title: "How to edit a podcast's details and settings",
        steps: [
          "Open the podcast from the Podcasts list and click the <strong>···</strong> menu next to the podcast title.",
          "Select <strong>Edit podcast</strong> to open the edit form.",
          "Update the title, description, cover image or category as needed.",
          "Click <strong>Save changes</strong>. Updates are reflected immediately in all podcast apps.",
        ],
        tip: "Changing the cover image does not affect existing episodes already cached in a listener's app. Most apps refresh artwork within 24 hours.",
      },
      {
        id: "t5",
        title: "How to edit an episode after publishing",
        steps: [
          "Open the podcast that contains the episode.",
          "Find the episode in the list and click <strong>Edit</strong> from the episode's <strong>···</strong> menu.",
          "You can update the title, description, episode number or replace the audio file.",
          "Click <strong>Save</strong>. If you replaced the audio file, listeners who have already downloaded the old version will not be affected. The new file is served for new downloads.",
        ],
        tip: "Avoid renaming episodes after listeners have already heard them. It can cause confusion in podcast apps that display the title.",
      },
      {
        id: "t6",
        title: "How to import an existing podcast via RSS",
        steps: [
          "Go to the Podcasts section and click <strong>New podcast → Import from RSS</strong>.",
          "Paste the RSS feed URL of the podcast you want to import.",
          "Brandscast will validate the feed and show you a preview of the episodes it will import.",
          "Confirm the import. Episodes are copied into a new private podcast in your account.",
          "After the import, invite your members to the new podcast so they can access it.",
        ],
        tip: "Importing a feed creates a copy. Changes to the original external feed will not sync automatically after the import.",
      },
      {
        id: "t7",
        title: "How to create a track",
        steps: [
          "From the Podcasts section, click <strong>New podcast</strong> and choose <strong>Track</strong> as the type.",
          "Fill in the course title, description and cover image just as you would for a regular podcast.",
          "Publish episodes in the order you want listeners to follow them. Episode numbers define the sequence.",
          "Invite the people who should take the course as members, exactly as you would for a regular podcast.",
          "Listeners see the course episodes listed in order in their podcast app with a clear progression.",
        ],
        tip: "Tracks work well for onboarding sequences, compliance training and product education. Keep each episode under 15 minutes to maintain engagement.",
      },
    ],
  },
  {
    id: "managing-audience",
    label: "Managing your audience",
    color: "yellow",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    tutorials: [
      {
        id: "t8",
        title: "How to invite members to a podcast",
        steps: [
          "Open the podcast you want to share and go to the <strong>Members</strong> tab.",
          "Click <strong>Add member</strong> and enter the listener's email address.",
          "Brandscast sends an invitation email with a private link to access the podcast feed.",
          "The member appears in your Members list. Once they accept the invite and listen to at least one episode, their status changes to <strong>Active</strong>.",
        ],
        tip: "You can add the same member to multiple podcasts. Each podcast has its own private feed link.",
      },
      {
        id: "t9",
        title: "How to remove or revoke a member's access",
        steps: [
          "Go to the <strong>Members</strong> section from the top navigation.",
          "Find the member you want to remove and click the <strong>···</strong> menu next to their name.",
          "Select <strong>Remove member</strong> and confirm the action.",
          "The member's private feed link stops working immediately. They lose access to all podcasts they were invited to under your account.",
        ],
        tip: "Always revoke access when someone leaves your organisation. Their personal feed link is unique and cannot be transferred.",
      },
      {
        id: "t10",
        title: "How to add a podcast to an existing member",
        steps: [
          "Go to <strong>Members</strong> and click the member's name to open their detail page.",
          "In the member detail page, click <strong>Add podcast</strong>.",
          "Select the podcast you want to give them access to.",
          "Brandscast sends an invitation email automatically. The new podcast appears in their feed.",
        ],
        tip: "This is useful when you launch a new podcast and want to give access to people who are already members of another podcast.",
      },
      {
        id: "t11",
        title: "How to understand member activity (Active vs Inactive)",
        steps: [
          "In the <strong>Members</strong> list, each member shows a status badge.",
          "<strong>Active</strong> means the member has listened to at least one episode of a podcast you invited them to.",
          "<strong>Inactive</strong> means the member has accepted the invite but has not listened to any episode yet.",
          "Use this information to follow up with inactive members or check whether your invitation emails are being received.",
        ],
        tip: "A member can be Active in one podcast and Inactive in another. The status is calculated per podcast.",
      },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    color: "red",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 3v18h18" />
        <path d="M7 14l3-3 4 4 6-7" />
      </svg>
    ),
    tutorials: [
      {
        id: "t12",
        title: "How to read the listening analytics dashboard",
        steps: [
          "Click <strong>Analytics</strong> in the top navigation to open the analytics dashboard.",
          "The dashboard shows total plays, unique listeners and engagement over the selected date range.",
          "Use the date picker at the top right to filter by the last 7 days, 30 days, 90 days or a custom range.",
          "The <strong>Episode downloads</strong> table shows each episode's play count so you can see which content performs best.",
        ],
        tip: 'A "play" is counted when a listener downloads at least 60 seconds of an episode.',
      },
      {
        id: "t13",
        title: "How to use episode download data",
        steps: [
          "In the Analytics dashboard, scroll to the <strong>Episode downloads</strong> table.",
          "Episodes are sorted by download count by default. Click column headers to reorder.",
          "Use the data to identify which topics or formats get the most listens and replicate what works.",
          "Low-performing episodes may indicate the topic was not relevant, the title was unclear or the episode was too long.",
        ],
        tip: "Compare episodes published at different times of day or week to find when your audience listens most.",
      },
      {
        id: "t14",
        title: "How to filter analytics by device or app",
        steps: [
          "In the Analytics dashboard, scroll to the <strong>Top devices</strong> and <strong>Top apps</strong> cards.",
          "These cards show which devices (mobile, desktop, tablet) and which podcast apps your members use.",
          "Use this data to decide whether to recommend a specific podcast app to your team.",
          "If most listeners use mobile, keep episodes concise. Mobile listening often happens during commutes.",
        ],
        tip: "Unknown devices are excluded from the percentage calculations to give you a more accurate picture of known listeners.",
      },
      {
        id: "t14b",
        title: "How to download an analytics report as PDF",
        steps: [
          "Open the Analytics dashboard from the top navigation.",
          "Set the date range you want to include in the report using the date picker at the top right.",
          "Click the <strong>Download report</strong> button. Brandscast generates a PDF with a cover page, key metrics, member engagement and episode breakdown.",
          "The PDF respects your current filters, so the report reflects exactly what you see on screen.",
          "Share the PDF with leadership, HR or other stakeholders who need a summary without accessing the app.",
        ],
        tip: "The PDF includes your podcast name and date range on the cover page, so it is ready to share as-is without any editing.",
      },
      {
        id: "t14c",
        title: "How to read the sector benchmark in your analytics",
        steps: [
          "Open the Analytics dashboard and look at the <strong>Engagement rate</strong> card.",
          "Below your engagement rate, you will see a line showing the <strong>sector average</strong> for your industry.",
          "The sector is set in your account settings under <strong>Company sector</strong>. Update it there if it does not match your industry.",
          "Use the benchmark to understand whether your engagement is above or below average for teams like yours.",
          "If your rate is below the sector average, consider reviewing episode length, topic relevance or how you promote the podcast internally.",
        ],
        tip: "The benchmark is calculated across all Brandscast accounts in the same sector. The more accounts in your sector, the more representative the average.",
      },
    ],
  },
  {
    id: "team-account",
    label: "Team and account",
    color: "brand",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    tutorials: [
      {
        id: "t15",
        title: "How to invite users to your account (team members)",
        steps: [
          "Go to <strong>Users</strong> in the top navigation.",
          "Click <strong>Invite user</strong> and enter the colleague's email address.",
          "Choose their role: <strong>Admin</strong> (full access except billing) or <strong>Editor</strong> (can manage content but not users).",
          "The colleague receives an invitation email. Once accepted, they can log in and access your account.",
        ],
        tip: "Users (your team) are different from Members (your listeners). Users help you manage the account; Members receive the podcast content.",
      },
      {
        id: "t16",
        title: "How to manage user roles (Owner, Admin, Editor)",
        steps: [
          "Go to <strong>Users</strong> and find the user whose role you want to change.",
          "Click the <strong>···</strong> menu next to their name and select <strong>Edit role</strong>.",
          "<strong>Owner</strong>: full access including billing and account deletion. Only one Owner per account.",
          "<strong>Admin</strong>: can manage podcasts, episodes and members. Cannot access billing or delete the account.",
          "<strong>Editor</strong>: can create and edit content. Cannot manage members, users or billing.",
        ],
        tip: "Assign the Editor role to people who only need to upload episodes. Reserve Admin for people who manage the audience.",
      },
      {
        id: "t17",
        title: "How to switch between accounts",
        steps: [
          "Click your account name or avatar at the top right of the dashboard.",
          "A dropdown shows all accounts you belong to.",
          "Click the account you want to switch to. The dashboard reloads with that account's data.",
          "You can belong to multiple accounts at once — for example your own account and a client's account.",
        ],
        tip: "Each account has independent podcasts, members and analytics. Switching accounts does not affect the data of other accounts.",
      },
      {
        id: "t18",
        title: "How to upgrade or change your plan",
        steps: [
          "Click <strong>Plans</strong> in the top navigation or go to the billing settings.",
          "The current plan shows your usage: podcasts created, members and episodes published.",
          "Click <strong>Upgrade</strong> next to the plan you want to switch to.",
          "Enter your payment details. Billing is monthly or annual (annual saves around 17%).",
          "Your new limits are available immediately after payment.",
        ],
        tip: "You can downgrade at any time. The change takes effect at the start of the next billing cycle. Existing data is preserved.",
      },
    ],
  },
  {
    id: "profile-settings",
    label: "Profile and settings",
    color: "green",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 1 0-16 0" />
      </svg>
    ),
    tutorials: [
      {
        id: "t19",
        title: "How to update your profile and password",
        steps: [
          "Click your name or avatar at the top right and select <strong>Profile</strong>.",
          "In the Profile tab, update your full name and click <strong>Save</strong>.",
          "To change your password, scroll to the <strong>Change password</strong> section.",
          "Enter your current password, then the new password twice, and click <strong>Update password</strong>.",
          "If you have forgotten your password, log out and use the <strong>Forgot password</strong> link on the login page.",
        ],
        tip: "Use a strong, unique password. Brandscast does not support SSO yet, so your password is the main credential for account access.",
      },
      {
        id: "t20",
        title:
          "How to listen to Brandscast podcasts in your favourite podcast app",
        steps: [
          "When you are invited to a podcast, you receive an email with a private feed link.",
          "Copy the feed link from the email.",
          "Open your podcast app (Apple Podcasts, Overcast, Pocket Casts or any app that supports private RSS feeds) and look for <strong>Add by URL</strong> or <strong>Add private feed</strong>.",
          "Paste the feed link and follow the app's instructions. The podcast will appear in your library.",
          "New episodes published by your team will arrive in the app automatically, just like any public podcast.",
        ],
        tip: "Each podcast has its own private feed link. If you are invited to three podcasts, you will receive three separate feed links to add.",
      },
    ],
  },
];

const colorMap: Record<string, string> = {
  brand: "brand",
  green: "green",
  yellow: "yellow",
  red: "red",
};

export default function HelpPage() {
  return (
    <>
      <Header />

      <div className="hero-page">
        <div className="hero-page-inner">
          <div className="eyebrow">Help Center</div>
          <h1>Step-by-step tutorials for Brandscast</h1>
          <p className="lead">
            Everything you need to set up private podcasts for your team, manage
            your audience and make sense of your analytics.
          </p>
          <p className="hero-meta">
            Can&apos;t find what you need? Write to us at{" "}
            <a
              href="mailto:hello@brandscast.com"
              style={{ color: "var(--brand)" }}
            >
              hello@brandscast.com
            </a>{" "}
            and we will help you directly.
          </p>
        </div>
      </div>

      <main>
        {/* Quick navigation */}
        <section className="content-section" style={{ paddingBottom: 0 }}>
          <div className="section-inner">
            <h2
              className="centered-heading"
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: ".05em",
              }}
            >
              Jump to a section
            </h2>
            <div
              className="cards"
              style={{ gridTemplateColumns: "repeat(3, 1fr)", marginTop: 0 }}
            >
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    textDecoration: "none",
                  }}
                >
                  <div
                    className={`icon ${colorMap[cat.color] !== "brand" ? colorMap[cat.color] : ""}`}
                  >
                    {cat.icon}
                  </div>
                  <span style={{ fontWeight: 700, fontSize: ".97rem" }}>
                    {cat.label}
                  </span>
                  <span
                    style={{
                      marginLeft: "auto",
                      color: "var(--muted)",
                      fontSize: ".85rem",
                    }}
                  >
                    {cat.tutorials.length} tutorials
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Tutorial categories */}
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id} className="content-section">
            <div className="section-inner">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: "1.4rem",
                }}
              >
                <div
                  className={`icon ${colorMap[cat.color] !== "brand" ? colorMap[cat.color] : ""}`}
                >
                  {cat.icon}
                </div>
                <h2 style={{ margin: 0 }}>{cat.label}</h2>
              </div>

              <div className="faq">
                {cat.tutorials.map((tutorial) => (
                  <details key={tutorial.id}>
                    <summary>{tutorial.title}</summary>
                    <div style={{ marginTop: ".8rem" }}>
                      <ol style={{ margin: "0 0 .8rem 1.2rem", padding: 0 }}>
                        {tutorial.steps.map((step, i) => (
                          <li
                            key={i}
                            style={{
                              marginBottom: ".6rem",
                              color: "var(--ink)",
                              lineHeight: 1.75,
                            }}
                            dangerouslySetInnerHTML={{ __html: step }}
                          />
                        ))}
                      </ol>
                      {tutorial.tip && (
                        <div
                          style={{
                            background: "var(--tag-bg)",
                            borderRadius: 10,
                            padding: "10px 14px",
                            fontSize: ".9rem",
                            color: "var(--tag-fg)",
                            display: "flex",
                            gap: 8,
                            alignItems: "flex-start",
                          }}
                        >
                          <strong style={{ flexShrink: 0 }}>Tip:</strong>
                          <span>{tutorial.tip}</span>
                        </div>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="cta-section">
          <div className="section-inner cta-inner">
            <h2>Still have questions?</h2>
            <p className="lead">
              Send us a message and we will get back to you the same day.
            </p>
            <div className="cta-actions">
              <a className="btn" href="mailto:hello@brandscast.com">
                Contact support
              </a>
            </div>
            <p style={{ margin: 0, color: "var(--muted)" }}>
              Or start your free trial and explore Brandscast yourself.
            </p>
          </div>
        </section>
      </main>

      <FooterFull />
    </>
  );
}
