import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/service/${service.id}`}
      style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'flex-start',
        padding: '20px',
        background: 'var(--paper-raised)',
        border: '1px solid var(--line)',
        borderRadius: '8px',
        textDecoration: 'none',
        color: 'var(--ink)',
        transition: 'border-color 0.15s ease',
      }}
      className="service-card"
    >
      <span className="stamp-badge" aria-hidden="true">{service.code}</span>
      <span>
        <span className="eyebrow">{service.category}</span>
        <h3 style={{ fontSize: '1.1rem', margin: '4px 0 6px 0' }}>{service.title}</h3>
        <p style={{ margin: 0, color: 'var(--ink-soft)', fontSize: '0.95rem' }}>{service.summary}</p>
      </span>
    </Link>
  )
}
