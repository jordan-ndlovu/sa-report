import { categoryIcon, categoryLabel } from '../data/categories'
import { timeAgo } from '../data/time'

export default function ReportCard({ report, onConfirm }) {
  return (
    <div className="card">
      <div className="card-top">
        <div>
          <div className="card-title">
            {categoryIcon(report.category)} {report.title}
          </div>
          <div className="card-meta">
            {categoryLabel(report.category)} · reported {timeAgo(report.reported_at)}
          </div>
        </div>
        <span className={`status-pill ${report.status === 'resolved' ? 'resolved' : ''}`}>
          {report.status === 'resolved' ? 'Resolved' : 'Still there'}
        </span>
      </div>

      {report.description && (
        <p style={{ fontSize: 13, color: '#555', marginTop: 8 }}>{report.description}</p>
      )}

      <div className="card-actions">
        <span style={{ fontSize: 13, color: '#888' }}>
          👍 {report.affected_count} people affected
        </span>
        <button className="confirm-btn" onClick={() => onConfirm(report.id)}>
          Still there
        </button>
      </div>
    </div>
  )
}
