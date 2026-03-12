"use client"

import { useTranslation } from "@/contexts/translation-context"
import { Settings, DollarSign, Heart, Check } from "lucide-react"

const PILLARS = [
  {
    icon: Settings,
    titleKey: "pillar_ops_title",
    descKey: "pillar_ops_desc",
    pointsPrefix: "pillar_ops_point",
    pointsCount: 5,
    color: "primary",
    iconBg: "bg-primary/10 dark:bg-primary/15",
    iconColor: "text-primary",
    borderHover: "hover:border-primary/40",
  },
  {
    icon: DollarSign,
    titleKey: "pillar_revenue_title",
    descKey: "pillar_revenue_desc",
    pointsPrefix: "pillar_revenue_point",
    pointsCount: 5,
    color: "emerald",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    borderHover: "hover:border-emerald-400/40",
  },
  {
    icon: Heart,
    titleKey: "pillar_rel_title",
    descKey: "pillar_rel_desc",
    pointsPrefix: "pillar_rel_point",
    pointsCount: 5,
    color: "violet",
    iconBg: "bg-violet-100 dark:bg-violet-900/20",
    iconColor: "text-violet-600 dark:text-violet-400",
    borderHover: "hover:border-violet-400/40",
  },
]

export function PillarsSection() {
  const { t } = useTranslation()

  return (
    <section id="pillars" className="py-20 bg-white dark:bg-zinc-950 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4">
            {t("landing.pillars_title")}
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg lg:text-xl max-w-2xl mx-auto">
            {t("landing.pillars_subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto stagger-children">
          {PILLARS.map((pillar, i) => {
            const points = Array.from({ length: pillar.pointsCount }, (_, j) =>
              t(`landing.${pillar.pointsPrefix}${j + 1}`)
            )

            return (
              <div
                key={i}
                className={`animate-on-scroll rounded-2xl border border-zinc-200 dark:border-zinc-500/25 bg-white dark:bg-zinc-950 p-7 ${pillar.borderHover} transition-all duration-300`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${pillar.iconBg} mb-5`}>
                  <pillar.icon className={`h-6 w-6 ${pillar.iconColor}`} />
                </div>
                <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white mb-2">
                  {t(`landing.${pillar.titleKey}`)}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-5 leading-relaxed">
                  {t(`landing.${pillar.descKey}`)}
                </p>
                <ul className="space-y-2.5">
                  {points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${pillar.iconColor}`} />
                      <span className="text-sm text-zinc-600 dark:text-zinc-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
