export default function SearchBar({ value, onChange }) {
  return (
    <div style={{ position: 'relative' }}>
      <label htmlFor="service-search" style={{ display: 'block', marginBottom: '8px' }} className="eyebrow">
        What do you need to do?
      </label>
      <input
        id="service-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g. lost ID, UIF, register a business, potholes…"
        style={{
          width: '100%',
          padding: '14px 16px',
          fontSize: '1.05rem',
          borderRadius: '6px',
          border: '2px solid var(--ink)',
          background: 'var(--paper-raised)',
          color: 'var(--ink)',
          fontFamily: 'var(--font-body)',
        }}
      />
    </div>
  )
}
