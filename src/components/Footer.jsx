export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: '#C9D1D3', marginTop: '3rem' }}>
      <div className="container" style={{ padding: '32px 20px', fontSize: '0.9rem' }}>
        <p style={{ marginBottom: '0.5rem', color: 'white', fontFamily: 'var(--font-display)', fontSize: '1.05rem' }}>
          SA-Report
        </p>
        <p style={{ maxWidth: '640px', color: '#AEB8BA' }}>
          An independent, open-source, community-built project. SA-Report is not
          affiliated with any government department. Always confirm requirements,
          fees, and processing times with the relevant official source before you
          rely on them — links to official pages are provided on every guide.
        </p>
        <p style={{ color: '#8A9598', marginTop: '1rem', marginBottom: 0 }}>
          Built with zero budget. Hosted on GitHub Pages. © {new Date().getFullYear()} SA-Report contributors.
        </p>
      </div>
    </footer>
  )
}
