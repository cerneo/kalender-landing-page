"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { useTranslation } from "@/contexts/translation-context"
import { TrendingUp, Calendar, Clock, Star } from "lucide-react"

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const animate = useCallback(() => {
    if (hasAnimated) return
    setHasAnimated(true)
    const startTime = performance.now()
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Decelerate easing: 1 - (1 - t)^3
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [end, duration, hasAnimated])

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate()
          observer.unobserve(node)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [animate])

  return { count, ref }
}

function parseStatValue(value: string): { prefix: string; number: number; suffix: string } {
  const match = value.match(/^([+\-]?)(\d+)(.*?)$/)
  if (!match) return { prefix: "", number: 0, suffix: value }
  return { prefix: match[1], number: parseInt(match[2]), suffix: match[3] }
}

function AnimatedStat({ value, label, icon: Icon, color }: {
  value: string
  label: string
  icon: React.ElementType
  color: string
}) {
  const parsed = parseStatValue(value)
  const { count, ref } = useCountUp(parsed.number)

  return (
    <div ref={ref} className="animate-on-scroll text-center group">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gray-100 dark:bg-gray-800 mb-3 group-hover:scale-110 transition-transform">
        <Icon className={`h-5 w-5 ${color}`} />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tabular-nums">
        {parsed.prefix}{count}{parsed.suffix}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{label}</div>
    </div>
  )
}

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
            <AnimatedStat key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
