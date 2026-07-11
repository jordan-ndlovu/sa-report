export const CATEGORIES = [
  { id: 'pothole', label: 'Pothole', icon: '🕳️' },
  { id: 'water_leak', label: 'Water leak', icon: '💧' },
  { id: 'crime_alert', label: 'Crime alert', icon: '⚠️' },
  { id: 'broken_robot', label: 'Broken robot', icon: '🚦' },
  { id: 'illegal_dumping', label: 'Illegal dumping', icon: '🗑️' },
  { id: 'water_outage', label: 'Water outage', icon: '🚱' },
  { id: 'electricity_outage', label: 'Electricity outage', icon: '⚡' },
]

export function categoryLabel(id) {
  return CATEGORIES.find((c) => c.id === id)?.label || id
}

export function categoryIcon(id) {
  return CATEGORIES.find((c) => c.id === id)?.icon || '📍'
}
