export interface ProfileStats {
  followers: number
  following: number
  posts: number
  username: string
  displayName: string
  avatarUrl: string
}

export interface PostAnalytics {
  id: string
  imageUrl: string
  type: 'post' | 'reel' | 'story'
  date: string
  likes: number
  comments: number
  shares: number
  saves: number
  reach: number
  impressions: number
  accountsEngaged: number
  profileVisits: number
  follows: number
}

export interface OverviewMetrics {
  accountsReached: number
  accountsReachedChange: number
  impressions: number
  impressionsChange: number
  profileVisits: number
  profileVisitsChange: number
  websiteClicks: number
  websiteClicksChange: number
  periodLabel: string
}

export interface DashboardInsights {
  views: number
  interactions: number
  newFollowers: number
  contentShared: number
  dateRange: string
}

export interface AnalyticsState {
  profile: ProfileStats
  overview: OverviewMetrics
  insights: DashboardInsights
  recentPosts: PostAnalytics[]
  recentStories: PostAnalytics[]
  recentReels: PostAnalytics[]
}
