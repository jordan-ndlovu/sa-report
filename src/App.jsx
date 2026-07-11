import { useState, useEffect } from 'react'
import { CATEGORIES } from './data/categories'
import { getReports, addReport, confirmReport } from './data/reports'
import MapView from './components/MapView'
import ReportList from './components/ReportList'
import ReportForm from './components/ReportForm'

export default function App() {
  const [reports, setReports] = useState([])
  const [view, setView] = useState('map') // 'map' | 'list'
  const [activeCategory, setActiveCategory] = useState('all')
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    setReports(getReports())
  }, [])

  const filtered =
    activeCategory === 'all' ? reports : reports.filter((r) => r.category === activeCategory)

  function handleSubmit(data) {
    addReport(data)
    setReports(getReports())
    setShowForm(false)
  }

  function handleConfirm(id) {
    confirmReport(id)
    setReports(getReports())
  }

  return (
    <>
      <div className="header">
        <h1>SA Report</h1>
        <span style={{ fontSize: 12, color: '#888' }}>v0.1</span>
      </div>

      <div className="tabs">
        <button className={view === 'map' ? 'active' : ''} onClick={() => setView('map')}>
          Map
        </button>
        <button className={view === 'list' ? 'active' : ''} onClick={() => setView('list')}>
          List
        </button>
      </div>

      <div className="filters">
        <button
          className={activeCategory === 'all' ? 'active' : ''}
          onClick={() => setActiveCategory('all')}
        >
          All
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            className={activeCategory === c.id ? 'active' : ''}
            onClick={() => setActiveCategory(c.id)}
          >
            {c.icon} {c.label}
          </button>
        ))}
      </div>

      {view === 'map' ? (
        <MapView reports={filtered} onConfirm={handleConfirm} />
      ) : (
        <ReportList reports={filtered} onConfirm={handleConfirm} />
      )}

      <button className="fab" onClick={() => setShowForm(true)}>
        + Report an issue
      </button>

      {showForm && <ReportForm onSubmit={handleSubmit} onClose={() => setShowForm(false)} />}
    </>
  )
}
