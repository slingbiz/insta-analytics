import { useNavigate } from 'react-router-dom'

interface NavHeaderProps {
  title: string
  showBack?: boolean
  rightAction?: React.ReactNode
}

export function NavHeader({ title, showBack = true, rightAction }: NavHeaderProps) {
  const navigate = useNavigate()

  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-ig-border">
      <div className="w-10">
        {showBack && (
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="p-1 -ml-1"
            aria-label="Go back"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}
      </div>
      <h1 className="text-[16px] font-semibold">{title}</h1>
      <div className="w-10 flex justify-end">{rightAction}</div>
    </header>
  )
}
