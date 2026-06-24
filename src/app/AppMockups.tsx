const NAV_ITEMS = [
  { label: "Audio", icon: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z M19 10v2a7 7 0 0 1-14 0v-2 M12 19v3 M8 22h8" },
  { label: "Analytics", icon: "M3 3v18h18 M7 16l4-4 4 4 4-6" },
  { label: "Members", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" },
  { label: "Plans", icon: "M22 12h-4l-3 9L9 3l-3 9H2" },
];

function AppSidebar({ active }: { active: string }) {
  return (
    <div
      style={{
        width: "90px",
        borderRight: "1px solid #e8ebf2",
        background: "#f7f9fd",
        padding: "10px 0",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: "1px",
      }}
    >
      <div
        style={{
          padding: "6px 10px 10px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          borderBottom: "1px solid #e8ebf2",
          marginBottom: "6px",
        }}
      >
        <svg viewBox="0 0 20 20" style={{ width: "14px", height: "14px", flexShrink: 0 }} fill="none">
          <path d="M10 2C5.6 2 2 5.6 2 10s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Z" fill="#2e5af4" opacity=".15" />
          <path d="M10 5.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z" fill="#2e5af4" opacity=".3" />
          <circle cx="10" cy="10" r="2.2" fill="#2e5af4" />
        </svg>
        <span style={{ fontSize: "10px", fontWeight: 700, color: "#0f172a" }}>Brandscast</span>
      </div>
      {NAV_ITEMS.map((item) => (
        <div
          key={item.label}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "5px 10px",
            margin: "0 5px",
            borderRadius: "6px",
            background: item.label === active ? "#e6ecff" : "transparent",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            style={{ width: "11px", height: "11px", flexShrink: 0, color: item.label === active ? "#2e5af4" : "#8089a0" }}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={item.icon} />
          </svg>
          <span style={{ fontSize: "10px", fontWeight: item.label === active ? 600 : 400, color: item.label === active ? "#2e5af4" : "#5c6478" }}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function AppWindow({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        borderRadius: "12px",
        border: "1px solid var(--line)",
        overflow: "hidden",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      {/* Browser chrome */}
      <div style={{ background: "#f0f2f5", borderBottom: "1px solid #dde1ea", padding: "7px 10px", display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ display: "flex", gap: "4px", flexShrink: 0 }}>
          <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ff5f57", display: "block" }} />
          <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#ffbd2e", display: "block" }} />
          <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#28ca41", display: "block" }} />
        </div>
        <div style={{ flex: 1, background: "white", borderRadius: "5px", padding: "3px 8px", fontSize: "10px", color: "#888", textAlign: "center", border: "1px solid #dde1ea", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

export function MockupPodcasts() {
  const cards = [
    { title: "Q2 Company Updates", episodes: 12, updated: "2d", type: "Podcast", color: "linear-gradient(135deg,#2e5af4 0%,#5b82ff 100%)" },
    { title: "Leadership AMA", episodes: 8, updated: "5d", type: "Podcast", color: "linear-gradient(135deg,#7c3aed 0%,#a78bfa 100%)" },
    { title: "Onboarding 101", episodes: 6, updated: "1w", type: "Track", color: "linear-gradient(135deg,#0ea5e9 0%,#38bdf8 100%)" },
    { title: "Sales Playbook", episodes: 5, updated: "2w", type: "Track", color: "linear-gradient(135deg,#10b981 0%,#34d399 100%)" },
  ];
  return (
    <div style={{ display: "flex", background: "white", height: "260px" }}>
      <AppSidebar active="Audio" />
      <div style={{ flex: 1, padding: "12px 14px", overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
          <span style={{ fontSize: "13px", fontWeight: 800, color: "#0f172a" }}>Audio</span>
          <span style={{ fontSize: "9px", fontWeight: 600, color: "white", background: "#2e5af4", padding: "3px 8px", borderRadius: "5px" }}>
            + New podcast
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
          {cards.map((c) => (
            <div key={c.title} style={{ borderRadius: "7px", border: "1px solid #e8ebf2", overflow: "hidden", background: "white" }}>
              <div style={{ height: "60px", background: c.color }} />
              <div style={{ padding: "5px 6px 6px" }}>
                <span style={{ fontSize: "8px", fontWeight: 600, color: c.type === "Podcast" ? "#2e5af4" : "#5c6478", background: c.type === "Podcast" ? "#e6ecff" : "#f1f3f9", padding: "1px 5px", borderRadius: "999px", display: "inline-block", marginBottom: "3px" }}>
                  {c.type}
                </span>
                <div style={{ fontSize: "9px", fontWeight: 700, color: "#0f172a", lineHeight: 1.3, marginBottom: "4px" }}>{c.title}</div>
                <div style={{ fontSize: "8px", color: "#8089a0" }}>{c.episodes} ep · {c.updated} ago</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MockupAnalytics() {
  return (
    <div style={{ display: "flex", background: "white", height: "280px" }}>
      <AppSidebar active="Analytics" />
      <div style={{ flex: 1, padding: "12px 14px", overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 800, color: "#0f172a" }}>Analytics</div>
            <div style={{ fontSize: "8.5px", color: "#8089a0", marginTop: "1px" }}>Listening behavior across all podcasts</div>
          </div>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <span style={{ fontSize: "8px", background: "#f7f9fd", border: "1px solid #e8ebf2", borderRadius: "4px", padding: "2px 6px", color: "#5c6478" }}>All podcasts</span>
            <span style={{ fontSize: "8px", background: "#f7f9fd", border: "1px solid #e8ebf2", borderRadius: "4px", padding: "2px 6px", color: "#5c6478" }}>Last 30 days</span>
            <span style={{ fontSize: "8px", background: "white", border: "1px solid #e8ebf2", borderRadius: "4px", padding: "2px 6px", color: "#5c6478" }}>↓ Report</span>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "6px", marginBottom: "8px" }}>
          {[{ label: "Total plays", value: "1,247" }, { label: "Unique listeners", value: "50" }, { label: "Avg. duration", value: "18 min" }].map((m) => (
            <div key={m.label} style={{ background: "#f7f9fd", borderRadius: "7px", border: "1px solid #e8ebf2", padding: "7px 9px" }}>
              <div style={{ fontSize: "13px", fontWeight: 800, color: "#0f172a" }}>{m.value}</div>
              <div style={{ fontSize: "8px", color: "#8089a0", marginTop: "1px" }}>{m.label}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "#f7f9fd", border: "1px solid #e8ebf2", borderRadius: "7px", padding: "8px 10px", marginBottom: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "7px" }}>
            <span style={{ fontSize: "9px", fontWeight: 700, color: "#0f172a" }}>Member engagement</span>
            <span style={{ fontSize: "7.5px", color: "#8089a0" }}>Last 30 days</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "5px" }}>
            <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "5px", padding: "6px 7px" }}>
              <div style={{ fontSize: "13px", fontWeight: 800, color: "#16a34a" }}>76%</div>
              <div style={{ fontSize: "7.5px", color: "#15803d" }}>Engagement rate</div>
              <div style={{ fontSize: "7px", color: "#8089a0", marginTop: "1px" }}>Sector avg · 58%</div>
            </div>
            <div style={{ background: "white", border: "1px solid #e8ebf2", borderRadius: "5px", padding: "6px 7px" }}>
              <div style={{ fontSize: "13px", fontWeight: 800, color: "#0f172a" }}>38</div>
              <div style={{ fontSize: "7.5px", color: "#8089a0" }}>Active members</div>
            </div>
            <div style={{ background: "white", border: "1px solid #e8ebf2", borderRadius: "5px", padding: "6px 7px" }}>
              <div style={{ fontSize: "13px", fontWeight: 800, color: "#0f172a" }}>12</div>
              <div style={{ fontSize: "7.5px", color: "#8089a0" }}>Inactive</div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {[{ name: "Sarah M.", ep: "12 ep", dot: "#22c55e" }, { name: "James T.", ep: "8 ep", dot: "#22c55e" }, { name: "Laura K.", ep: "3 ep", dot: "#f59e0b" }].map((m) => (
            <div key={m.name} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "4px 6px", background: "#f7f9fd", borderRadius: "5px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: m.dot, flexShrink: 0, display: "block" }} />
              <span style={{ flex: 1, fontSize: "8.5px", fontWeight: 500, color: "#0f172a" }}>{m.name}</span>
              <span style={{ fontSize: "8px", color: "#8089a0" }}>{m.ep}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MockupPodcast() {
  const episodes = [
    { num: 12, title: "CEO Message — Week of May 19", dur: "4:32" },
    { num: 11, title: "Product Roadmap Q3", dur: "8:15" },
    { num: 10, title: "Team Spotlight: Engineering", dur: "6:44" },
    { num: 9, title: "Q1 Results — Full Recap", dur: "12:20" },
  ];
  return (
    <div style={{ display: "flex", background: "white", height: "260px" }}>
      <AppSidebar active="Audio" />
      <div style={{ flex: 1, padding: "12px 14px", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "12px" }}>
          <div style={{ width: "46px", height: "46px", borderRadius: "8px", flexShrink: 0, background: "linear-gradient(135deg,#2e5af4 0%,#5b82ff 100%)" }} />
          <div>
            <div style={{ fontSize: "12px", fontWeight: 800, color: "#0f172a", marginBottom: "2px" }}>Q2 Company Updates</div>
            <div style={{ fontSize: "8.5px", color: "#8089a0", marginBottom: "5px" }}>12 episodes · 38 members</div>
            <div style={{ display: "flex", gap: "4px" }}>
              <span style={{ fontSize: "8px", fontWeight: 600, color: "#2e5af4", background: "#e6ecff", padding: "2px 6px", borderRadius: "999px" }}>Podcast</span>
              <span style={{ fontSize: "8px", fontWeight: 600, color: "#16a34a", background: "#f0fdf4", padding: "2px 6px", borderRadius: "999px", border: "1px solid #bbf7d0" }}>Published</span>
            </div>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: "4px" }}>
            <span style={{ fontSize: "8px", background: "#f7f9fd", border: "1px solid #e8ebf2", borderRadius: "4px", padding: "3px 7px", color: "#5c6478" }}>Edit</span>
            <span style={{ fontSize: "8px", fontWeight: 600, color: "white", background: "#2e5af4", borderRadius: "4px", padding: "3px 7px" }}>+ Episode</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {episodes.map((ep) => (
            <div key={ep.num} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "6px 8px", borderRadius: "6px", border: "1px solid #e8ebf2", background: "white" }}>
              <div style={{ width: "22px", height: "22px", borderRadius: "5px", background: "#f7f9fd", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" style={{ width: "10px", height: "10px", fill: "#2e5af4" }}><path d="M8 5v14l11-7z" /></svg>
              </div>
              <div style={{ flex: 1, overflow: "hidden" }}>
                <div style={{ fontSize: "8.5px", fontWeight: 600, color: "#0f172a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  Ep {ep.num} · {ep.title}
                </div>
                <div style={{ fontSize: "7.5px", color: "#8089a0", marginTop: "1px" }}>{ep.dur}</div>
              </div>
              <span style={{ fontSize: "7.5px", fontWeight: 600, color: "#16a34a", background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "1px 5px", borderRadius: "999px", flexShrink: 0 }}>
                Published
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MockupMembers() {
  const members = [
    { name: "Sarah M.", dept: "Marketing", rate: 85, active: true },
    { name: "James T.", dept: "Engineering", rate: 72, active: true },
    { name: "Laura K.", dept: "HR", rate: 34, active: true },
    { name: "Marco R.", dept: "Sales", rate: 0, active: false },
    { name: "Anna L.", dept: "Marketing", rate: 91, active: true },
  ];
  return (
    <div style={{ display: "flex", background: "white", height: "260px" }}>
      <AppSidebar active="Members" />
      <div style={{ flex: 1, padding: "12px 14px", overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 800, color: "#0f172a" }}>Members</div>
            <div style={{ fontSize: "8.5px", color: "#8089a0", marginTop: "1px" }}>50 members · 38 active</div>
          </div>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "4px", background: "#f7f9fd", border: "1px solid #e8ebf2", borderRadius: "5px", padding: "3px 7px" }}>
              <svg viewBox="0 0 24 24" style={{ width: "9px", height: "9px", color: "#8089a0" }} fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
              <span style={{ fontSize: "8px", color: "#8089a0" }}>Search</span>
            </div>
            <span style={{ fontSize: "8px", fontWeight: 600, color: "white", background: "#2e5af4", borderRadius: "5px", padding: "3px 8px" }}>Invite member</span>
          </div>
        </div>
        <div style={{ border: "1px solid #e8ebf2", borderRadius: "7px", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 90px 55px", gap: "0", background: "#f7f9fd", padding: "5px 8px", borderBottom: "1px solid #e8ebf2" }}>
            {["Name", "Department", "Engagement", "Status"].map((h) => (
              <div key={h} style={{ fontSize: "7.5px", fontWeight: 600, color: "#8089a0", textTransform: "uppercase", letterSpacing: "0.04em" }}>{h}</div>
            ))}
          </div>
          {members.map((m, i) => {
            const barColor = m.rate >= 70 ? "#22c55e" : m.rate >= 30 ? "#f59e0b" : "#ef4444";
            const initials = m.name.split(" ").map((n) => n[0]).join("");
            return (
              <div key={m.name} style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 90px 55px", gap: "0", padding: "6px 8px", borderBottom: i < members.length - 1 ? "1px solid #f1f3f9" : "none", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#e6ecff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: "7px", fontWeight: 700, color: "#2e5af4" }}>{initials}</span>
                  </div>
                  <span style={{ fontSize: "8.5px", fontWeight: 600, color: "#0f172a" }}>{m.name}</span>
                </div>
                <span style={{ fontSize: "8px", color: "#5c6478" }}>{m.dept}</span>
                <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <div style={{ width: "40px", height: "4px", borderRadius: "999px", background: "#f1f3f9", overflow: "hidden" }}>
                    <div style={{ width: `${m.rate}%`, height: "100%", background: barColor, borderRadius: "999px" }} />
                  </div>
                  <span style={{ fontSize: "7.5px", color: "#8089a0" }}>{m.rate}%</span>
                </div>
                <span style={{ fontSize: "7.5px", fontWeight: 600, color: m.active ? "#16a34a" : "#8089a0", background: m.active ? "#f0fdf4" : "#f7f9fd", padding: "1px 5px", borderRadius: "999px", border: m.active ? "1px solid #bbf7d0" : "1px solid #e8ebf2", display: "inline-block" }}>
                  {m.active ? "Active" : "Inactive"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
