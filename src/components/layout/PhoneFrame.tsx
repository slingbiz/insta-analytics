import type { ReactNode } from 'react'

interface PhoneFrameProps {
  children: ReactNode
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="min-h-full flex items-center justify-center p-4 md:p-8">
      <div
        className="relative w-full max-w-[390px] h-[844px] bg-ig-bg rounded-[40px] shadow-2xl overflow-hidden border-[8px] border-black"
        style={{ boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4)' }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-2xl z-50" />
        <div className="h-full overflow-y-auto overflow-x-hidden">{children}</div>
      </div>
    </div>
  )
}
