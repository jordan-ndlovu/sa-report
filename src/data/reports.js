// v0.1 storage: browser localStorage.
// Function signatures are deliberately kept simple so this file can be
// swapped for a Supabase-backed version later without touching components.

const STORAGE_KEY = 'sa-report:reports'

function readAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : seedReports()
  } catch {
    return seedReports()
  }
}

function writeAll(reports) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reports))
}

export function getReports() {
  return readAll().sort((a, b) => new Date(b.reported_at) - new Date(a.reported_at))
}

export function addReport({ category, title, lat, lng, address, description }) {
  const reports = readAll()
  const now = new Date().toISOString()
  const report = {
    id: crypto.randomUUID(),
    category,
    title,
    lat,
    lng,
    address,
    description: description || '',
    reported_at: now,
    last_confirmed_at: now,
    status: 'still_there',
    affected_count: 1,
  }
  reports.push(report)
  writeAll(reports)
  return report
}

export function confirmReport(id) {
  const reports = readAll()
  const updated = reports.map((r) =>
    r.id === id
      ? { ...r, affected_count: r.affected_count + 1, last_confirmed_at: new Date().toISOString() }
      : r
  )
  writeAll(updated)
  return updated.find((r) => r.id === id)
}

function seedReports() {
  const now = Date.now()
  const seed = [
    {
      id: crypto.randomUUID(),
      category: 'pothole',
      title: 'Pothole - William Nicol Drive',
      lat: -26.0525,
      lng: 28.0567,
      address: 'William Nicol Drive, Johannesburg',
      description: 'Deep pothole in the left lane, hard to see at night.',
      reported_at: new Date(now - 15 * 60 * 1000).toISOString(),
      last_confirmed_at: new Date(now - 5 * 60 * 1000).toISOString(),
      status: 'still_there',
      affected_count: 42,
    },
    {
      id: crypto.randomUUID(),
      category: 'water_outage',
      title: 'Water outage - Sandton CBD',
      lat: -26.1076,
      lng: 28.0567,
      address: 'Sandton CBD',
      description: 'No water since this morning.',
      reported_at: new Date(now - 3 * 60 * 60 * 1000).toISOString(),
      last_confirmed_at: new Date(now - 30 * 60 * 1000).toISOString(),
      status: 'still_there',
      affected_count: 18,
    },
  ]
  writeAll(seed)
  return seed
}
