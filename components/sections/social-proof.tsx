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

function AnimatedStat({ value, label, icon: Icon }: {
  value: string
  label: string
  icon: React.ElementType
}) {
  const parsed = parseStatValue(value)
  const { count, ref } = useCountUp(parsed.number)

  return (
    <div ref={ref} className="text-center">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 mb-3">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tabular-nums">
        {parsed.prefix}{count}{parsed.suffix}
      </div>
      <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{label}</div>
    </div>
  )
}

export function SocialProofSection() {
  const { t } = useTranslation()

  const stats = [
    { value: t("landing.social_revenue"), label: t("landing.social_revenue_label"), icon: TrendingUp },
    { value: t("landing.social_noshow"), label: t("landing.social_noshow_label"), icon: Calendar },
    { value: t("landing.social_time"), label: t("landing.social_time_label"), icon: Clock },
    { value: t("landing.social_satisfaction"), label: t("landing.social_satisfaction_label"), icon: Star },
  ]

  return (
    <section className="py-14 bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-zinc-500 dark:text-zinc-400 text-sm mb-8">
          {t("landing.social_subtitle")}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedStat key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
