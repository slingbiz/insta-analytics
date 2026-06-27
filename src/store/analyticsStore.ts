import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { defaultAnalytics } from '../data/defaultAnalytics'
import type { AnalyticsState, PostAnalytics, ProfileStats, OverviewMetrics } from '../types/analytics'

interface AnalyticsStore extends AnalyticsState {
  setProfile: (profile: Partial<ProfileStats>) => void
  setOverview: (overview: Partial<OverviewMetrics>) => void
  setRecentPosts: (posts: PostAnalytics[]) => void
  setRecentStories: (stories: PostAnalytics[]) => void
  setRecentReels: (reels: PostAnalytics[]) => void
  updatePost: (id: string, updates: Partial<PostAnalytics>) => void
  resetToDefaults: () => void
  importState: (state: AnalyticsState) => void
}

export const useAnalyticsStore = create<AnalyticsStore>()(
  persist(
    (set) => ({
      ...defaultAnalytics,

      setProfile: (profile) =>
        set((state) => ({ profile: { ...state.profile, ...profile } })),

      setOverview: (overview) =>
        set((state) => ({ overview: { ...state.overview, ...overview } })),

      setRecentPosts: (posts) => set({ recentPosts: posts }),

      setRecentStories: (stories) => set({ recentStories: stories }),

      setRecentReels: (reels) => set({ recentReels: reels }),

      updatePost: (id, updates) =>
        set((state) => ({
          recentPosts: state.recentPosts.map((p) => (p.id === id ? { ...p, ...updates } : p)),
          recentStories: state.recentStories.map((p) => (p.id === id ? { ...p, ...updates } : p)),
          recentReels: state.recentReels.map((p) => (p.id === id ? { ...p, ...updates } : p)),
        })),

      resetToDefaults: () => set(defaultAnalytics),

      importState: (state) => set(state),
    }),
    { name: 'insta-analytics-store' },
  ),
)
