export default function Contribute() {
  return (
    <div className="container" style={{ padding: '48px 20px', maxWidth: '760px' }}>
      <p className="eyebrow">Get involved</p>
      <h1>Every improvement helps.</h1>
      <p style={{ fontSize: '1.05rem', color: 'var(--ink-soft)' }}>
        Whether you're a developer, designer, writer, researcher, or simply someone who
        wants to improve access to public information, your contribution is welcome.
      </p>

      <hr className="perforated" />

      <h2>Add or fix a service guide</h2>
      <p>All guides live in one file: <code>src/data/services.json</code>. Each entry follows this shape:</p>
      <pre
        style={{
          background: 'var(--ink)',
          color: '#E6EAE7',
          padding: '18px',
          borderRadius: '8px',
          overflowX: 'auto',
          fontSize: '0.85rem',
          lineHeight: 1.6,
        }}
      >
{`{
  "id": "unique-url-slug",
  "category": "Home Affairs",
  "code": "DHA-01",
  "title": "Short, plain-language title",
  "summary": "One sentence describing the outcome",
  "whoFor": "Who this guide applies to",
  "documents": ["Document 1", "Document 2"],
  "steps": ["Step 1", "Step 2", "Step 3"],
  "cost": "Typical cost",
  "processingTime": "Typical turnaround",
  "officialLink": "https://example.gov.za",
  "tags": ["keyword1", "keyword2"]
}`}
      </pre>
      <p>
        Open a pull request with your addition or correction, and include a link to the
        official government source you used, so it can be verified during review.
      </p>

      <hr className="perforated" />

      <h2>Other ways to help</h2>
      <ul style={{ paddingLeft: '20px', lineHeight: 1.8 }}>
        <li>Report outdated fees, links, or processing times as a GitHub issue</li>
        <li>Improve the design, accessibility, or mobile experience</li>
        <li>Translate guides into other South African languages</li>
        <li>Test the search on real questions people ask and tell us what it misses</li>
        <li>Share the project with someone who'd find it useful</li>
      </ul>

      <hr className="perforated" />

      <p style={{ color: 'var(--ink-soft)' }}>
        This project follows a Zero Budget First philosophy — no infrastructure decisions
        are made until real usage justifies them. See the{' '}
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub repository</a>{' '}
        for open issues and the contribution guide.
      </p>
    </div>
  )
}
