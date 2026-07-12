export default function Footer() {
  // Placeholder links — replace these three with your real profile URLs
  // once they exist. Until then they point nowhere useful, so feel free
  // to delete a link entirely if you don't plan to run that platform.
  const socialLinks = [
    { label: 'Facebook', href: 'https://facebook.com/', letter: 'f' },
    { label: 'X (Twitter)', href: 'https://x.com/', letter: '𝕏' },
    { label: 'YouTube', href: 'https://youtube.com/', letter: '▶' },
  ]

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

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginTop: '20px',
            paddingTop: '16px',
            borderTop: '1px solid #2A3940',
          }}
        >
          <p style={{ color: '#8A9598', margin: 0 }}>
            Built with zero budget. Hosted on GitHub Pages. © {new Date().getFullYear()} SA-Report contributors.
          </p>

          <div style={{ display: 'flex', gap: '10px' }} aria-label="Follow SA-Report on social media">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                title={social.label}
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: '#22323C',
                  color: '#DDEBE4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                }}
              >
                {social.letter}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

