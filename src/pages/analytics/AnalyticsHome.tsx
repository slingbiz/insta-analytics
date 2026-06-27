import type { ReactNode } from 'react'
import { PhoneFrame } from '../../components/layout/PhoneFrame'
import { DarkStatusBar } from '../../components/layout/DarkStatusBar'
import { HomeIndicator } from '../../components/layout/HomeIndicator'
import { useAnalyticsStore } from '../../store/analyticsStore'
import { defaultAnalytics } from '../../data/defaultAnalytics'
import { formatCompact } from '../../utils/format'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  SettingsIcon,
  TrendUpIcon,
  GrowPresenceIcon,
  MonthlyRecapIcon,
  GraduationCapIcon,
  LightbulbIcon,
  BrandedContentIcon,
  AffiliateProgramsIcon,
  PartnershipAdsIcon,
} from '../../components/icons/DashboardIcons'

export function AnalyticsHome() {
  const { insights } = useAnalyticsStore()

  return (
    <PhoneFrame dark>
      <div className="flex flex-col min-h-full bg-black text-white">
        <DarkStatusBar />

        <header className="flex items-center justify-between px-4 h-[44px] shrink-0">
          <button type="button" className="w-10 flex items-center justify-start -ml-1" aria-label="Back">
            <ChevronLeftIcon />
          </button>
          <h1 className="text-[16px] font-semibold tracking-[-0.2px]">Professional dashboard</h1>
          <button type="button" className="w-10 flex items-center justify-end -mr-1" aria-label="Settings">
            <SettingsIcon />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto pb-2">
          {/* Insights */}
          <section className="mt-[6px]">
            <div className="flex items-center justify-between px-4 mb-[2px]">
              <h2 className="text-[16px] font-bold tracking-[-0.2px]">Insights</h2>
              <span className="text-[14px] text-[#a8a8a8] tracking-[-0.1px]">{insights.dateRange}</span>
            </div>

            <InsightRow label="Views" value={formatCompact(insights.views)} />
            <InsightRow
              label="Interactions"
              value={
                <span className="flex items-center gap-[5px]">
                  <TrendUpIcon />
                  <span>{formatCompact(insights.interactions)}</span>
                </span>
              }
            />
            <InsightRow label="New followers" value={formatCompact(insights.newFollowers)} />
            <InsightRow label="Content you shared" value={String(insights.contentShared)} />
          </section>

          {/* Next steps */}
          <section className="mt-[28px]">
            <h2 className="text-[16px] font-bold tracking-[-0.2px] px-4 mb-[10px]">Next steps</h2>
            <button type="button" className="w-full flex items-center gap-3 px-4 py-[10px] text-left">
              <div className="w-[44px] h-[44px] rounded-[10px] bg-[#262626] flex items-center justify-center shrink-0">
                <GrowPresenceIcon />
              </div>
              <div className="flex-1 min-w-0 pr-2">
                <p className="text-[15px] font-semibold tracking-[-0.2px] leading-[20px]">Grow your presence</p>
                <p className="text-[13px] text-[#a8a8a8] leading-[17px] mt-[2px]">
                  Add your connected Facebook Page to Meta Creator Marketplace so more brands can find you.
                </p>
              </div>
              <ChevronRightIcon className="text-[#a8a8a8] shrink-0 mr-[2px]" />
            </button>
          </section>

          {/* Your tools */}
          <section className="mt-[28px]">
            <div className="flex items-center justify-between px-4 mb-[6px]">
              <h2 className="text-[16px] font-bold tracking-[-0.2px]">Your tools</h2>
              <button type="button" className="text-[14px] font-semibold text-[#0095f6] tracking-[-0.1px]">
                See all
              </button>
            </div>

            <ToolRow
              icon={<MonthlyRecapIcon />}
              title="Monthly recap"
              subtitle="See what you made happen last month."
              badge="New"
            />
            <ToolRow icon={<GraduationCapIcon />} title="Best practices" />
            <ToolRow icon={<LightbulbIcon />} title="Inspiration" />
            <ToolRow icon={<BrandedContentIcon />} title="Branded content" />
            <ToolRow icon={<AffiliateProgramsIcon />} title="Affiliate programs" badge="New" />
            <ToolRow icon={<PartnershipAdsIcon />} title="Partnership ads" />
          </section>
        </div>

        <HomeIndicator />
      </div>
    </PhoneFrame>
  )
}

function InsightRow({
  label,
  value,
}: {
  label: string
  value: ReactNode
}) {
  return (
    <button type="button" className="w-full flex items-center justify-between px-4 py-[13px] text-left">
      <span className="text-[15px] tracking-[-0.2px]">{label}</span>
      <span className="flex items-center gap-[10px]">
        <span className="text-[15px] tracking-[-0.2px]">{value}</span>
        <ChevronRightIcon className="text-[#a8a8a8] mr-[2px]" />
      </span>
    </button>
  )
}

function ToolRow({
  icon,
  title,
  subtitle,
  badge,
}: {
  icon: ReactNode
  title: string
  subtitle?: string
  badge?: string
}) {
  return (
    <button type="button" className="w-full flex items-center gap-3 px-4 py-[12px] text-left">
      <div className="w-[28px] h-[28px] flex items-center justify-center shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-[15px] tracking-[-0.2px] leading-[20px]">{title}</p>
        {subtitle && (
          <p className="text-[13px] text-[#a8a8a8] leading-[17px] mt-[1px]">{subtitle}</p>
        )}
      </div>
      <span className="flex items-center gap-[8px] shrink-0">
        {badge && (
          <span className="bg-[#0095f6] text-white text-[11px] font-semibold px-[7px] py-[3px] rounded-[4px] leading-none tracking-[0.1px]">
            {badge}
          </span>
        )}
        <ChevronRightIcon className="text-[#a8a8a8] mr-[2px]" />
      </span>
    </button>
  )
}
