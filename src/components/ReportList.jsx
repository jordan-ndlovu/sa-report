import ReportCard from './ReportCard'

export default function ReportList({ reports, onConfirm }) {
  if (reports.length === 0) {
    return (
      <div className="list">
        <p style={{ color: '#888', fontSize: 14, padding: '20px 0', textAlign: 'center' }}>
          No reports yet for this filter. Be the first to report something.
        </p>
      </div>
    )
  }

  return (
    <div className="list">
      {reports.map((r) => (
        <ReportCard key={r.id} report={r} onConfirm={onConfirm} />
      ))}
    </div>
  )
}
