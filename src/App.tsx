import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { AnalyticsHome } from './pages/analytics/AnalyticsHome'
import { Dashboard } from './pages/dashboard/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnalyticsHome />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Link
        to="/dashboard"
        className="fixed bottom-6 right-6 z-[100] px-4 py-2 bg-black/80 text-white text-xs rounded-full backdrop-blur hover:bg-black transition-colors"
      >
        Dashboard
      </Link>
    </BrowserRouter>
  )
}
