"use client"

import { useTranslation } from "@/contexts/translation-context"
import { TrendingUp, Calendar, Clock, Star } from "lucide-react"

export function SocialProofSection() {
  const { t } = useTranslation()

  const stats = [
    { value: t("landing.social_revenue"), label: t("landing.social_revenue_label"), icon: TrendingUp, color: "text-emerald-500" },
    { value: t("landing.social_noshow"), label: t("landing.social_noshow_label"), icon: Calendar, color: "text-primary" },
    { value: t("landing.social_time"), label: t("landing.social_time_label"), icon: Clock, color: "text-violet-500" },
    { value: t("landing.social_satisfaction"), label: t("landing.social_satisfaction_label"), icon: Star, color: "text-amber-500" },
  ]

  return (
    <section className="py-14 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 border-b border-gray-100 dark:border-gray-800">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="animate-on-scroll text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 mb-3 group-hover:scale-110 transition-transform">
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
