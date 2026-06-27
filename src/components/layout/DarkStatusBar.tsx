interface DarkStatusBarProps {
  time?: string
  battery?: number
}

export function DarkStatusBar({ time = '5:03', battery = 73 }: DarkStatusBarProps) {
  return (
    <div className="flex items-center justify-between px-[26px] pt-[13px] pb-[4px] text-white">
      <div className="flex items-center gap-[5px] min-w-[72px]">
        <span className="text-[15px] font-semibold tracking-[-0.3px] leading-none">{time}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-90">
          <path
            d="M5 1.5 8.5 8H1.5L5 1.5Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="flex items-center gap-[5px]">
        <svg width="17" height="11" viewBox="0 0 17 11" fill="white">
          <rect x="0" y="6" width="3" height="5" rx="0.8" />
          <rect x="4.5" y="4" width="3" height="7" rx="0.8" />
          <rect x="9" y="2" width="3" height="9" rx="0.8" />
          <rect x="13.5" y="0" width="3" height="11" rx="0.8" />
        </svg>
        <span className="text-[13px] font-semibold tracking-[-0.2px] leading-none">5G</span>
        <div className="flex items-center gap-[2px] ml-[1px]">
          <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
            <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="white" strokeOpacity="0.35" />
            <rect x="2" y="2" width={`${Math.max(4, (battery / 100) * 17)}`} height="8" rx="1.2" fill="white" />
            <rect x="22.5" y="4" width="1.5" height="4" rx="0.5" fill="white" fillOpacity="0.4" />
          </svg>
          <span className="text-[11px] font-medium leading-none">{battery}</span>
        </div>
      </div>
    </div>
  )
}
