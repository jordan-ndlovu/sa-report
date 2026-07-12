import { useMemo, useState } from 'react'
import services from '../data/services.json'
import SearchBar from '../components/SearchBar.jsx'
import ServiceCard from '../components/ServiceCard.jsx'

const STOP_WORDS = new Set([
  'a', 'an', 'the', 'is', 'it', 'to', 'do', 'i', 'me', 'my', 'in', 'on', 'at',
  'for', 'of', 'and', 'or', 'how', 'can', 'you', 'please', 'help', 'need',
  'want', 'this', 'that', 'with', 'be', 'am', 'was', 'were', 'than', 'so',
  'get', 'got', 'just', 'im', "i'm"
])

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 1 && !STOP_WORDS.has(word))
}

function scoreService(service, queryWords) {
  if (queryWords.length === 0) return 1

  const haystack = [
    service.title,
    service.summary,
    service.category,
    ...service.tags,
  ]
    .join(' ')
    .toLowerCase()

  let score = 0
  for (const word of queryWords) {
    if (haystack.includes(word)) score += 1
  }
  return score
}

export default function Home() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(services.map((s) => s.category)))],
    []
  )

  const results = useMemo(() => {
    const queryWords = tokenize(query)
    return services
      .filter((s) => category === 'All' || s.category === category)
      .map((s) => ({ service: s, score: scoreService(s, queryWords) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ service }) => service)
  }, [query, category])

  return (
    <>
      <section style={{ background: 'var(--green)', color: 'white' }}>
        <div className="container" style={{ padding: '56px 20px 44px' }}>
          <p className="eyebrow" style={{ color: '#CFE3DA' }}>DHA · SASSA · UIF · CIPC · SARS · Municipal Services</p>
          <h1 style={{ color: 'white', fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', maxWidth: '640px' }}>
            South African public services, in one place — and in plain language.
          </h1>
          <p style={{ maxWidth: '580px', color: '#DDEBE4', fontSize: '1.05rem' }}>
            SA-Report is a free, open-source guide to getting things done with government —
            from replacing your ID to reporting a burst pipe. Built by the community, for the community.
          </p>
          <div style={{ maxWidth: '560px', marginTop: '24px' }}>
            <SearchBar value={query} onChange={setQuery} />
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '40px 20px' }}>
        <div
          role="group"
          aria-label="Filter by category"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}
        >
          {categories.map((cat) => {
            const active = cat === category
            return (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                aria-pressed={active}
                style={{
                  padding: '8px 14px',
                  borderRadius: '999px',
                  border: `1.5px solid ${active ? 'var(--stamp)' : 'var(--line)'}`,
                  background: active ? 'var(--stamp)' : 'var(--paper-raised)',
                  color: active ? 'white' : 'var(--ink-soft)',
                  fontSize: '0.88rem',
                  fontWeight: active ? 700 : 500,
                }}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <hr className="perforated" aria-hidden="true" style={{ margin: '0 0 28px 0' }} />

        {results.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '48px 20px', color: 'var(--ink-soft)' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--ink)' }}>
              No guide matches that search yet.
            </p>
            <p>
              Try a different word, or{' '}
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                suggest this guide on GitHub
              </a>{' '}
              so a contributor can add it.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '16px',
            }}
          >
            {results.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
