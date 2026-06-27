import type { ReactNode } from 'react'

interface PhoneFrameProps {
  children: ReactNode
  dark?: boolean
}

export function PhoneFrame({ children, dark = false }: PhoneFrameProps) {
  return (
    <div className="min-h-full flex items-center justify-center p-4 md:p-8 bg-[#1a1a1a]">
      <div
        className={`relative w-full max-w-[390px] h-[844px] rounded-[40px] shadow-2xl overflow-hidden border-[8px] border-[#1c1c1c] ${
          dark ? 'bg-black' : 'bg-ig-bg'
        }`}
        style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6)' }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[126px] h-[34px] bg-black rounded-b-[20px] z-50" />
        <div className="h-full overflow-hidden flex flex-col">{children}</div>
      </div>
    </div>
  )
}
