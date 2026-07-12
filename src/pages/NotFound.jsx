import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container" style={{ padding: '64px 20px', textAlign: 'center' }}>
      <span className="stamp-badge" aria-hidden="true" style={{ margin: '0 auto 20px' }}>404</span>
      <h1>This page hasn't been registered.</h1>
      <p style={{ color: 'var(--ink-soft)' }}>
        The page you're looking for doesn't exist. Let's get you back to something useful.
      </p>
      <p><Link to="/">← Back to all services</Link></p>
    </div>
  )
}
