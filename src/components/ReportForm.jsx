import { useState } from 'react'
import { CATEGORIES, categoryLabel } from '../data/categories'

export default function ReportForm({ onSubmit, onClose }) {
  const [category, setCategory] = useState(CATEGORIES[0].id)
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  const [locating, setLocating] = useState(false)
  const [coords, setCoords] = useState(null)

  function useMyLocation() {
    if (!navigator.geolocation) return
    setLocating(true)
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude })
        setLocating(false)
      },
      () => setLocating(false)
    )
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!address.trim()) return
    const lat = coords?.lat ?? -26.2041 + (Math.random() - 0.5) * 0.1
    const lng = coords?.lng ?? 28.0473 + (Math.random() - 0.5) * 0.1
    onSubmit({
      category,
      title: `${categoryLabel(category)} - ${address}`,
      address,
      description,
      lat,
      lng,
    })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Report an issue</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {CATEGORIES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.icon} {c.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              placeholder="e.g. William Nicol Drive, Johannesburg"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={useMyLocation}
              style={{ marginTop: 8, fontSize: 13, padding: '6px 10px' }}
              className="confirm-btn"
            >
              {locating ? 'Getting location…' : coords ? 'Location captured ✓' : 'Use my current location'}
            </button>
          </div>

          <div className="form-group">
            <label>Description (optional)</label>
            <textarea
              rows={3}
              placeholder="Any extra detail that helps others understand the issue"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Submit report
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
