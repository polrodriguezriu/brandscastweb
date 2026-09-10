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
    url: "https://brandscast.com/help/",
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
          "Your account is ready. You can now create your first audio.",
        ],
        tip: "Use a work email address. Members will receive invitation emails from that same domain, which makes the invite look trustworthy.",
      },
      {
        id: "t2",
        title: "How to create your first private audio",
        steps: [
          "From the dashboard, click <strong>New podcast</strong> in the top navigation or the Podcasts section.",
          "Choose <strong>Audio</strong> as the type (or Track if it is a structured course — see tutorial 7).",
          "Fill in the title, a short description and select a category. These details help listeners identify the show.",
          "Upload a square cover image, at least 1400 × 1400 px, for compatible podcast apps.",
          "Click <strong>Create audio</strong>. It is not published to a public directory; access is distributed through the member records you invite.",
        ],
        tip: 'Keep the title short and specific. "Q1 Sales Kick-off" is clearer than "Sales updates".',
      },
      {
        id: "t3",
        title: "How to publish your first episode",
        steps: [
          "Open the audio you want to add an episode to and click <strong>New episode</strong>.",
          "Enter the episode title and an optional description. The description appears in podcast apps.",
          "Upload your audio file. Brandscast accepts MP3 and M4A files up to 500 MB.",
          "Set the episode number and season if you use a structured series format.",
          "Click <strong>Publish</strong>. The episode is available immediately to all members who have access to this audio.",
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
        title: "How to edit an audio's details and settings",
        steps: [
          "Open the audio from the Audio list and click the <strong>···</strong> menu next to the audio title.",
          "Select <strong>Edit audio</strong> to open the edit form.",
          "Update the title, description, cover image or category as needed.",
          "Click <strong>Save changes</strong>. Compatible podcast apps refresh the feed on their own schedule.",
        ],
        tip: "Changing the cover image does not affect existing episodes already cached in a listener's app. Most apps refresh artwork within 24 hours.",
      },
      {
        id: "t5",
        title: "How to edit an episode after publishing",
        steps: [
          "Open the audio that contains the episode.",
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
          "Paste the RSS feed URL of the audio you want to import.",
          "Brandscast will validate the feed and show you a preview of the episodes it will import.",
          "Confirm the import. Episodes are copied into a new private audio in your account.",
          "After the import, invite your members to the new podcast so they can access it.",
        ],
        tip: "Importing a feed creates a copy. Changes to the original external feed will not sync automatically after the import.",
      },
      {
        id: "t7",
        title: "How to create a track",
        steps: [
          "From the Podcasts section, click <strong>New podcast</strong> and choose <strong>Track</strong> as the type.",
          "Fill in the course title, description and cover image just as you would for a regular audio.",
          "Publish episodes in the order you want listeners to follow them. Episode numbers define the sequence.",
          "Invite the people who should take the course as members, exactly as you would for a regular audio.",
          "Listeners see the course episodes listed in order in their podcast app with a clear progression.",
        ],
        tip: "Use Tracks for onboarding, training or product education. Give each episode one clear topic so it is easy to follow and revisit.",
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
        title: "How to invite members to an audio",
        steps: [
          "Open the audio you want to share and go to the <strong>Members</strong> tab.",
          "Click <strong>Add member</strong> and enter the listener's email address.",
          "Brandscast sends an invitation email with a private link to access the podcast feed.",
          "The member appears in your Members list. Once they accept the invite and listen to at least one episode, their status changes to <strong>Active</strong>.",
        ],
        tip: "You can assign multiple Tracks to the same member. Their personal RSS feed reflects the audio currently assigned to that member record.",
      },
      {
        id: "t9",
        title: "How to remove or revoke a member's access",
        steps: [
          "Go to the <strong>Members</strong> section from the top navigation.",
          "Find the member you want to remove and click the <strong>···</strong> menu next to their name.",
          "Select <strong>Remove member</strong> and confirm the action.",
          "Future requests through the member's private feed stop returning protected audio. Files already downloaded to a device may remain there.",
        ],
        tip: "Remove access when someone leaves your organisation. Keep personal feed links private: anyone with the link can use it.",
      },
      {
        id: "t10",
        title: "How to add an audio to an existing member",
        steps: [
          "Go to <strong>Members</strong> and click the member's name to open their detail page.",
          "In the member detail page, click <strong>Add audio</strong>.",
          "Select the audio you want to give them access to.",
          "Brandscast sends an invitation email. The assigned Track becomes available through the member's existing private feed when their compatible app refreshes it.",
        ],
        tip: "This is useful when you launch a new podcast and want to give access to people who are already members of another podcast.",
      },
      {
        id: "t11",
        title: "How to understand member activity (Active vs Inactive)",
        steps: [
          "In the <strong>Members</strong> list, each member shows a status badge.",
          "<strong>Active</strong> means Brandscast has associated at least one recorded play with that Member across their assigned audio.",
          "<strong>Inactive</strong> means there is no recorded play for that Member yet.",
          "For inactive Members, check that they received their invitation and help them add their feed to a podcast app.",
        ],
        tip: "The global Members list is Active when any assigned audio has a recorded play. A specific audio can still show a different activity status.",
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
          'The dashboard shows total plays, "unique listeners" and engagement over the selected date range. "Unique listeners" counts Member feeds with qualifying listening activity.',
          "Use the date picker at the top right to filter by the last 7 days, 30 days, 90 days or a custom range.",
          "Use the <strong>Episode downloads</strong> table to compare recorded plays across episodes and spot topics to explore in your next update.",
        ],
        tip: 'A "play" is counted when Brandscast records a qualifying request for at least 60 seconds of an episode.',
      },
      {
        id: "t13",
        title: "How to use episode download data",
        steps: [
          "In the Analytics dashboard, scroll to the <strong>Episode downloads</strong> table.",
          "Episodes are sorted by download count by default. Click column headers to reorder.",
          "Look for topics and formats with more recorded plays to help plan future episodes.",
          "If an episode has fewer plays, ask your team about the topic, timing and any trouble accessing it.",
        ],
        tip: "Compare episodes over similar time periods, and pair the numbers with feedback from your team.",
      },
      {
        id: "t14",
        title: "How to filter analytics by device or app",
        steps: [
          "In the Analytics dashboard, scroll to the <strong>Top devices</strong> and <strong>Top apps</strong> cards.",
          "These cards show the devices (mobile, desktop, tablet) and podcast apps associated with recorded requests.",
          "Use this data to decide whether to recommend a specific podcast app to your team.",
          "Use the most common apps as a starting point for your team's listening setup instructions.",
        ],
        tip: "Percentages cover recognised devices and apps. Unknown devices are excluded.",
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
        tip: "The PDF includes your audio name and date range on the cover page, so it is ready to share as-is without any editing.",
      },
      {
        id: "t14c",
        title: "How to read audience coverage in your analytics",
        steps: [
          "Open the Analytics dashboard and find the <strong>Audience coverage</strong> card. It counts Members with listening activity rather than total plays.",
          "<strong>Coverage</strong> is the percentage of Members with recorded listening activity in the selected period. <strong>Reached</strong> is the same figure as a Member count.",
          "<strong>Silent this period</strong> are members with earlier recorded listening but no relevant activity in the selected period.",
          "<strong>Never reached</strong> means no listening activity has been recorded for those Members. Start by helping them find their invitation and set up their feed.",
          "Use the <strong>Engagement by department</strong> and <strong>by country</strong> cards to spot teams to follow up with or ask for feedback.",
        ],
        tip: "Department and country breakdowns only appear once your members have those fields filled in. You can set them when importing members from CSV, or edit them on a member's page.",
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
        title: "How to invite users to your account (Admin or Editor)",
        steps: [
          "Go to <strong>Users</strong> in the top navigation.",
          "Click <strong>Invite user</strong> and enter the colleague's email address.",
          "Choose their role: <strong>Admin</strong> for broader workspace management, or <strong>Editor</strong> for content-focused access.",
          "The colleague receives an invitation email. Once accepted, they can log in and access your account.",
        ],
        tip: "Users (your team) are different from Members (your listeners). Users help you manage the account; Members receive the audio content.",
      },
      {
        id: "t16",
        title: "How to manage user roles (Owner, Admin, Editor)",
        steps: [
          "Go to <strong>Users</strong> and find the user whose role you want to change.",
          "Click the <strong>···</strong> menu next to their name and select <strong>Edit role</strong>.",
          "<strong>Owner</strong>: full access including billing and account deletion. Only one Owner per account.",
          "<strong>Admin</strong>: broader day-to-day access across the workspace, but not billing or account deletion.",
          "<strong>Editor</strong>: content-focused access for creating and editing audio content. Exact capabilities can vary based on how your workspace is set up.",
        ],
        tip: "Use Editor for teammates focused on producing content. Use Admin when someone needs broader operational access across the workspace.",
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
        tip: "Each account has independent audio, members and analytics. Switching accounts does not affect the data of other accounts.",
      },
      {
        id: "t18",
        title: "How to upgrade or change your plan",
        steps: [
          "Click <strong>Plans</strong> in the top navigation or go to the billing settings.",
          "The current plan shows your usage: audio created, members and episodes published.",
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
        title: "How to add Brandscast audio to a compatible podcast app",
        steps: [
          "When you are invited to an audio, you receive an email with a private feed link.",
          "Copy the feed link from the email.",
          "Open PulsarCast, Apple Podcasts, Pocket Casts, Overcast, AntennaPod or Podcast Addict and look for <strong>Add by URL</strong> or <strong>Add private feed</strong>. Spotify does not support this private RSS workflow.",
          "Paste the feed link and follow the app's instructions. The audio will appear in your library.",
          "Compatible apps can fetch newly published episodes on their own refresh schedule. Downloads and notifications depend on the app and device settings.",
        ],
        tip: "One personal feed brings together the Tracks shared with you. Keep the link to yourself, and listen in your podcast app; there is no Member web player.",
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
            Everything you need to set up private audio for your team, manage
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
            <div className="cards help-navigation">
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
