export default function About() {
  return (
    <div className="container" style={{ padding: '48px 20px', maxWidth: '760px' }}>
      <p className="eyebrow">About the project</p>
      <h1>Solve real problems before spending money.</h1>
      <p style={{ fontSize: '1.05rem', color: 'var(--ink-soft)' }}>
        SA-Report is a community-driven, open-source civic platform that helps South
        Africans understand and navigate government services from one place — how to
        replace an ID, apply for UIF, register a business, or report a municipal issue.
      </p>

      <hr className="perforated" />

      <h2>Zero Budget First</h2>
      <p>
        Every decision in this project is guided by a simple rule: prove the idea works
        before spending a cent on it. That means:
      </p>
      <ul style={{ paddingLeft: '20px', lineHeight: 1.8 }}>
        <li>Open source, from day one</li>
        <li>Built in public, with a visible roadmap</li>
        <li>Hosted for free, on GitHub Pages</li>
        <li>Community driven — no gatekeeping</li>
        <li>No infrastructure we don't already need</li>
        <li>We grow the moment people are actually using it — not before</li>
      </ul>
      <p style={{ fontWeight: 600 }}>Monthly hosting cost: R0.</p>

      <hr className="perforated" />

      <h2>Current stack</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
        <tbody>
          {[
            ['Frontend', 'React + Vite'],
            ['Hosting', 'GitHub Pages'],
            ['Deployment', 'GitHub Actions'],
            ['Data', 'JSON'],
            ['Version control', 'GitHub'],
            ['Backend', 'None (Phase 1)'],
            ['Database', 'None (Phase 1)'],
            ['Authentication', 'None (Phase 1)'],
          ].map(([k, v]) => (
            <tr key={k} style={{ borderTop: '1px solid var(--line)' }}>
              <td style={{ padding: '8px 0', color: 'var(--ink-soft)', width: '40%' }}>{k}</td>
              <td style={{ padding: '8px 0', fontWeight: 600 }}>{v}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr className="perforated" />

      <h2>Roadmap</h2>
      <h3>Phase 1 — Zero Budget</h3>
      <p>Government service guides, search, a structured knowledge base, and a mobile-friendly interface — everything running from GitHub with no servers or paid services.</p>
      <h3>Phase 2 — Community Growth</h3>
      <p>As the project gains users, we'll expand the knowledge base, improve search, and welcome community contributions.</p>
      <h3>Phase 3 — AI (Future)</h3>
      <p>Only after validating the project with real users will we explore AI-powered features such as natural-language search and plain-language explanations of public service processes.</p>

      <hr className="perforated" />

      <p style={{ color: 'var(--ink-soft)' }}>
        SA-Report is an independent, open-source community project and is not
        affiliated with any South African government department.
      </p>
    </div>
  )
}
