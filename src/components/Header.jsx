import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header
      style={{
        background: 'var(--ink)',
        color: 'white',
        borderBottom: '4px solid var(--stamp)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: 34,
              height: 34,
              borderRadius: '50%',
              border: '2px solid var(--stamp)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              color: 'var(--stamp)',
              transform: 'rotate(-6deg)',
            }}
          >
            SA
          </span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem' }}>
            SA-Report
          </span>
        </Link>

        <nav aria-label="Main navigation">
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              gap: '20px',
              margin: 0,
              padding: 0,
              fontSize: '0.95rem',
            }}
          >
            <li><NavStyledLink to="/">Find a service</NavStyledLink></li>
            <li><NavStyledLink to="/about">About</NavStyledLink></li>
            <li><NavStyledLink to="/contribute">Contribute</NavStyledLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function NavStyledLink({ to, children }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        color: isActive ? 'var(--stamp)' : 'white',
        textDecoration: 'none',
        fontWeight: isActive ? 700 : 500,
        borderBottom: isActive ? '2px solid var(--stamp)' : '2px solid transparent',
        paddingBottom: '2px',
      })}
    >
      {children}
    </NavLink>
  )
}
