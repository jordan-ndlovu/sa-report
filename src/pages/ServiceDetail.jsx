import { useParams, Link } from 'react-router-dom'
import services from '../data/services.json'

export default function ServiceDetail() {
  const { id } = useParams()
  const service = services.find((s) => s.id === id)

  if (!service) {
    return (
      <div className="container" style={{ padding: '48px 20px' }}>
        <h1>Guide not found</h1>
        <p>We couldn't find that guide. It may have been renamed or removed.</p>
        <Link to="/">← Back to all services</Link>
      </div>
    )
  }

  return (
    <article className="container" style={{ padding: '40px 20px 64px', maxWidth: '760px' }}>
      <Link to="/" style={{ fontSize: '0.9rem' }}>← Back to all services</Link>

      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginTop: '20px' }}>
        <span className="stamp-badge" aria-hidden="true">{service.code}</span>
        <div>
          <p className="eyebrow">{service.category}</p>
          <h1 style={{ fontSize: 'clamp(1.6rem, 4vw, 2.1rem)' }}>{service.title}</h1>
          <p style={{ color: 'var(--ink-soft)', fontSize: '1.05rem' }}>{service.summary}</p>
        </div>
      </div>

      <hr className="perforated" />

      <Section title="Who this is for">
        <p>{service.whoFor}</p>
      </Section>

      <Section title="Documents you'll likely need">
        <ul style={{ paddingLeft: '20px' }}>
          {service.documents.map((doc, i) => (
            <li key={i} style={{ marginBottom: '8px' }}>{doc}</li>
          ))}
        </ul>
      </Section>

      <Section title="How it works, step by step">
        <ol style={{ paddingLeft: '20px' }}>
          {service.steps.map((step, i) => (
            <li key={i} style={{ marginBottom: '12px', lineHeight: 1.6 }}>{step}</li>
          ))}
        </ol>
      </Section>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          margin: '28px 0',
        }}
      >
        <InfoBlock label="Typical cost" value={service.cost} />
        <InfoBlock label="Typical processing time" value={service.processingTime} />
      </div>

      <div
        style={{
          background: 'var(--alert-soft)',
          border: '1px solid var(--alert)',
          borderRadius: '8px',
          padding: '18px 20px',
          margin: '28px 0',
        }}
      >
        <p style={{ margin: 0, fontWeight: 600, color: 'var(--alert)' }}>Always verify before you go</p>
        <p style={{ margin: '6px 0 0 0', color: 'var(--ink-soft)' }}>
          Fees, required documents, and processing times change from time to time and can
          vary by office. Confirm the current requirements with the official source below
          before making a trip or a payment.
        </p>
        <p style={{ margin: '10px 0 0 0' }}>
          <a href={service.officialLink} target="_blank" rel="noreferrer">
            Visit the official {service.category} website →
          </a>
        </p>
      </div>

      <hr className="perforated" />

      <p style={{ color: 'var(--ink-soft)', fontSize: '0.92rem' }}>
        Spotted something outdated or incorrect in this guide?{' '}
        <Link to="/contribute">Here's how to help fix it</Link>.
      </p>
    </article>
  )
}

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: '28px' }}>
      <h2 style={{ fontSize: '1.15rem' }}>{title}</h2>
      {children}
    </section>
  )
}

function InfoBlock({ label, value }) {
  return (
    <div style={{ background: 'var(--green-soft)', borderRadius: '8px', padding: '16px' }}>
      <p className="eyebrow" style={{ color: 'var(--green)' }}>{label}</p>
      <p style={{ margin: '6px 0 0 0', fontWeight: 600 }}>{value}</p>
    </div>
  )
}
