import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAnalyticsStore } from '../../store/analyticsStore'
import type { PostAnalytics } from '../../types/analytics'

export function Dashboard() {
  const store = useAnalyticsStore()
  const [activeTab, setActiveTab] = useState<'insights' | 'profile' | 'overview' | 'posts' | 'stories' | 'reels'>('insights')

  return (
    <div className="min-h-full bg-gray-100">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Analytics Dashboard</h1>
          <p className="text-sm text-gray-500">Control all numbers and images shown in the analytics UI</p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => store.resetToDefaults()}
            className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Reset defaults
          </button>
          <Link
            to="/"
            className="px-4 py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Preview analytics
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto p-6">
        <div className="flex gap-2 mb-6 flex-wrap">
          {(['insights', 'profile', 'overview', 'posts', 'stories', 'reels'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm rounded-lg capitalize ${
                activeTab === tab ? 'bg-black text-white' : 'bg-white border border-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'insights' && <InsightsEditor />}
        {activeTab === 'profile' && <ProfileEditor />}
        {activeTab === 'overview' && <OverviewEditor />}
        {activeTab === 'posts' && <ContentEditor type="posts" />}
        {activeTab === 'stories' && <ContentEditor type="stories" />}
        {activeTab === 'reels' && <ContentEditor type="reels" />}
      </div>
    </div>
  )
}

function InsightsEditor() {
  const { insights, setInsights } = useAnalyticsStore()

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
      <h2 className="font-semibold text-lg">Professional dashboard — Insights</h2>
      <Field label="Date range" value={insights.dateRange} onChange={(v) => setInsights({ dateRange: v })} />
      <NumberField label="Views" value={insights.views} onChange={(v) => setInsights({ views: v })} />
      <NumberField label="Interactions" value={insights.interactions} onChange={(v) => setInsights({ interactions: v })} />
      <NumberField label="New followers" value={insights.newFollowers} onChange={(v) => setInsights({ newFollowers: v })} />
      <NumberField label="Content you shared" value={insights.contentShared} onChange={(v) => setInsights({ contentShared: v })} />
      <p className="text-sm text-gray-500 pt-2">
        Preview values: {insights.views.toLocaleString()} views → displayed as compact number on the analytics screen.
      </p>
    </div>
  )
}

function ProfileEditor() {
  const { profile, setProfile } = useAnalyticsStore()

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
      <h2 className="font-semibold text-lg">Profile</h2>
      <Field label="Username" value={profile.username} onChange={(v) => setProfile({ username: v })} />
      <Field label="Display name" value={profile.displayName} onChange={(v) => setProfile({ displayName: v })} />
      <Field label="Avatar URL" value={profile.avatarUrl} onChange={(v) => setProfile({ avatarUrl: v })} />
      <NumberField label="Followers" value={profile.followers} onChange={(v) => setProfile({ followers: v })} />
      <NumberField label="Following" value={profile.following} onChange={(v) => setProfile({ following: v })} />
      <NumberField label="Posts" value={profile.posts} onChange={(v) => setProfile({ posts: v })} />
    </div>
  )
}

function OverviewEditor() {
  const { overview, setOverview } = useAnalyticsStore()

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
      <h2 className="font-semibold text-lg">Overview metrics</h2>
      <Field label="Period label" value={overview.periodLabel} onChange={(v) => setOverview({ periodLabel: v })} />
      <NumberField label="Accounts reached" value={overview.accountsReached} onChange={(v) => setOverview({ accountsReached: v })} />
      <NumberField label="Accounts reached change %" value={overview.accountsReachedChange} onChange={(v) => setOverview({ accountsReachedChange: v })} step={0.1} />
      <NumberField label="Impressions" value={overview.impressions} onChange={(v) => setOverview({ impressions: v })} />
      <NumberField label="Impressions change %" value={overview.impressionsChange} onChange={(v) => setOverview({ impressionsChange: v })} step={0.1} />
      <NumberField label="Profile visits" value={overview.profileVisits} onChange={(v) => setOverview({ profileVisits: v })} />
      <NumberField label="Profile visits change %" value={overview.profileVisitsChange} onChange={(v) => setOverview({ profileVisitsChange: v })} step={0.1} />
      <NumberField label="Website clicks" value={overview.websiteClicks} onChange={(v) => setOverview({ websiteClicks: v })} />
      <NumberField label="Website clicks change %" value={overview.websiteClicksChange} onChange={(v) => setOverview({ websiteClicksChange: v })} step={0.1} />
    </div>
  )
}

function ContentEditor({ type }: { type: 'posts' | 'stories' | 'reels' }) {
  const store = useAnalyticsStore()
  const items =
    type === 'posts' ? store.recentPosts : type === 'stories' ? store.recentStories : store.recentReels
  const setter =
    type === 'posts' ? store.setRecentPosts : type === 'stories' ? store.setRecentStories : store.setRecentReels

  const updateItem = (index: number, updates: Partial<PostAnalytics>) => {
    const next = items.map((item, i) => (i === index ? { ...item, ...updates } : item))
    setter(next)
  }

  const addItem = () => {
    const newItem: PostAnalytics = {
      id: `${type}-${Date.now()}`,
      imageUrl: 'https://picsum.photos/seed/new/400/400',
      type: type === 'posts' ? 'post' : type === 'stories' ? 'story' : 'reel',
      date: new Date().toISOString().slice(0, 10),
      likes: 0,
      comments: 0,
      shares: 0,
      saves: 0,
      reach: 0,
      impressions: 0,
      accountsEngaged: 0,
      profileVisits: 0,
      follows: 0,
    }
    setter([...items, newItem])
  }

  const removeItem = (index: number) => {
    setter(items.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg capitalize">Recent {type}</h2>
        <button
          type="button"
          onClick={addItem}
          className="px-4 py-2 text-sm bg-black text-white rounded-lg"
        >
          Add {type === 'posts' ? 'post' : type.slice(0, -1)}
        </button>
      </div>

      {items.map((item, index) => (
        <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-6 space-y-3">
          <div className="flex justify-between items-start">
            <div className="flex gap-4">
              <img src={item.imageUrl} alt="" className="w-16 h-16 object-cover rounded" />
              <span className="text-sm text-gray-500">#{index + 1}</span>
            </div>
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
          <Field label="Image URL" value={item.imageUrl} onChange={(v) => updateItem(index, { imageUrl: v })} />
          <Field label="Date" value={item.date} onChange={(v) => updateItem(index, { date: v })} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <NumberField label="Reach" value={item.reach} onChange={(v) => updateItem(index, { reach: v })} />
            <NumberField label="Impressions" value={item.impressions} onChange={(v) => updateItem(index, { impressions: v })} />
            <NumberField label="Likes" value={item.likes} onChange={(v) => updateItem(index, { likes: v })} />
            <NumberField label="Comments" value={item.comments} onChange={(v) => updateItem(index, { comments: v })} />
            <NumberField label="Shares" value={item.shares} onChange={(v) => updateItem(index, { shares: v })} />
            <NumberField label="Saves" value={item.saves} onChange={(v) => updateItem(index, { saves: v })} />
            <NumberField label="Accounts engaged" value={item.accountsEngaged} onChange={(v) => updateItem(index, { accountsEngaged: v })} />
            <NumberField label="Profile visits" value={item.profileVisits} onChange={(v) => updateItem(index, { profileVisits: v })} />
            <NumberField label="Follows" value={item.follows} onChange={(v) => updateItem(index, { follows: v })} />
          </div>
        </div>
      ))}
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string
  value: string
  onChange: (v: string) => void
}) {
  return (
    <label className="block">
      <span className="text-sm text-gray-600">{label}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
      />
    </label>
  )
}

function NumberField({
  label,
  value,
  onChange,
  step = 1,
}: {
  label: string
  value: number
  onChange: (v: number) => void
  step?: number
}) {
  return (
    <label className="block">
      <span className="text-sm text-gray-600">{label}</span>
      <input
        type="number"
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
      />
    </label>
  )
}
