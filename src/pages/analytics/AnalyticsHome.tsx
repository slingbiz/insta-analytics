import { PhoneFrame } from '../../components/layout/PhoneFrame'
import { StatusBar } from '../../components/layout/StatusBar'
import { NavHeader } from '../../components/layout/NavHeader'
import { useAnalyticsStore } from '../../store/analyticsStore'
import { formatNumber, formatChange } from '../../utils/format'

export function AnalyticsHome() {
  const { profile, overview, recentPosts } = useAnalyticsStore()

  return (
    <PhoneFrame>
      <StatusBar />
      <NavHeader title="Insights" showBack={false} />

      <div className="px-4 py-3">
        <p className="text-[13px] text-ig-secondary mb-4">{overview.periodLabel}</p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <MetricCard label="Accounts reached" value={overview.accountsReached} change={overview.accountsReachedChange} />
          <MetricCard label="Impressions" value={overview.impressions} change={overview.impressionsChange} />
          <MetricCard label="Profile visits" value={overview.profileVisits} change={overview.profileVisitsChange} />
          <MetricCard label="Website clicks" value={overview.websiteClicks} change={overview.websiteClicksChange} />
        </div>

        <section>
          <h2 className="text-[14px] font-semibold mb-3">Recent posts</h2>
          <div className="grid grid-cols-4 gap-1">
            {recentPosts.slice(0, 4).map((post) => (
              <div key={post.id} className="aspect-square relative">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-[11px] font-semibold opacity-0 hover:opacity-100 transition-opacity">
                  <span>{formatNumber(post.reach)} reach</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 p-4 bg-ig-surface rounded-lg border border-dashed border-ig-border text-center">
          <p className="text-[13px] text-ig-secondary leading-relaxed">
            Placeholder layout — share your Xfer Analytics screenshots and we will rebuild this page pixel-perfect.
          </p>
          <p className="text-[12px] text-ig-secondary mt-2">
            @{profile.username} · {formatNumber(profile.followers)} followers
          </p>
        </div>
      </div>
    </PhoneFrame>
  )
}

function MetricCard({
  label,
  value,
  change,
}: {
  label: string
  value: number
  change: number
}) {
  const isPositive = change >= 0

  return (
    <div className="bg-ig-surface rounded-lg p-3">
      <p className="text-[12px] text-ig-secondary mb-1">{label}</p>
      <p className="text-[20px] font-semibold">{formatNumber(value)}</p>
      <p className={`text-[12px] mt-0.5 ${isPositive ? 'text-ig-green' : 'text-ig-red'}`}>
        {formatChange(change)}
      </p>
    </div>
  )
}
