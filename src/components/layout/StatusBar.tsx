interface StatusBarProps {
  time?: string
}

export function StatusBar({ time = '9:41' }: StatusBarProps) {
  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[15px] font-semibold">
      <span>{time}</span>
      <div className="flex items-center gap-1.5">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="0.5" />
          <rect x="4" y="5" width="3" height="7" rx="0.5" />
          <rect x="8" y="2" width="3" height="10" rx="0.5" />
          <rect x="12" y="0" width="3" height="12" rx="0.5" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 2.4C10.4 2.4 12.6 3.4 14.2 5L15.6 3.6C13.6 1.4 10.9 0 8 0S2.4 1.4 0.4 3.6L1.8 5C3.4 3.4 5.6 2.4 8 2.4Z" />
          <path d="M8 5.6C9.4 5.6 10.7 6.1 11.7 7L13.1 5.6C11.7 4.2 9.9 3.4 8 3.4S4.3 4.2 2.9 5.6L4.3 7C5.3 6.1 6.6 5.6 8 5.6Z" />
          <circle cx="8" cy="10" r="2" />
        </svg>
        <svg width="27" height="13" viewBox="0 0 27 13" fill="currentColor">
          <rect x="0" y="1" width="22" height="11" rx="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
          <rect x="2" y="3" width="17" height="7" rx="1" />
          <rect x="23" y="4.5" width="2" height="4" rx="0.5" />
        </svg>
      </div>
    </div>
  )
}
