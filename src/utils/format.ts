export function formatNumber(n: number): string {
  if (n >= 1_000_000) {
    const val = n / 1_000_000
    return val % 1 === 0 ? `${val}M` : `${val.toFixed(1)}M`
  }
  if (n >= 10_000) {
    const val = n / 1_000
    return val % 1 === 0 ? `${val}K` : `${val.toFixed(1)}K`
  }
  if (n >= 1_000) {
    return n.toLocaleString('en-US')
  }
  return String(n)
}

export function formatChange(change: number): string {
  const sign = change >= 0 ? '+' : ''
  return `${sign}${change.toFixed(1)}%`
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}
