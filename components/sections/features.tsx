"use client"

import { useTranslation } from "@/contexts/translation-context"
import {
  Calendar, CreditCard, Users, BarChart3,
  Check,
} from "lucide-react"

const FEATURE_BLOCKS = [
  {
    icon: Calendar,
    titleKey: "feat_scheduling_title",
    descKey: "feat_scheduling_desc",
    pointsPrefix: "feat_scheduling_point",
    pointsCount: 5,
    iconBg: "bg-primary/10 dark:bg-primary/15",
    iconColor: "text-primary",
  },
  {
    icon: CreditCard,
    titleKey: "feat_payments_title",
    descKey: "feat_payments_desc",
    pointsPrefix: "feat_payments_point",
    pointsCount: 5,
    iconBg: "bg-emerald-100 dark:bg-emerald-900/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Users,
    titleKey: "feat_crm_title",
    descKey: "feat_crm_desc",
    pointsPrefix: "feat_crm_point",
    pointsCount: 5,
    iconBg: "bg-violet-100 dark:bg-violet-900/20",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    icon: BarChart3,
    titleKey: "feat_intelligence_title",
    descKey: "feat_intelligence_desc",
    pointsPrefix: "feat_intelligence_point",
    pointsCount: 5,
    iconBg: "bg-amber-100 dark:bg-amber-900/20",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
]

export function FeaturesSection() {
  const { t } = useTranslation()

  return (
    <section id="features" className="py-20 bg-zinc-100 dark:bg-zinc-950 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4">
            {t("landing.features_title")}
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg lg:text-xl max-w-2xl mx-auto">
            {t("landing.features_subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto stagger-children">
          {FEATURE_BLOCKS.map((block, i) => {
            const points = Array.from({ length: block.pointsCount }, (_, j) =>
              t(`landing.${block.pointsPrefix}${j + 1}`)
            )

            return (
              <div
                key={i}
                className="animate-on-scroll rounded-2xl border border-zinc-200 dark:border-zinc-500/25 bg-white dark:bg-zinc-950 p-7 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${block.iconBg} flex-shrink-0`}>
                    <block.icon className={`h-5 w-5 ${block.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white mb-1">
                      {t(`landing.${block.titleKey}`)}
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {t(`landing.${block.descKey}`)}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2.5 ml-[3.75rem]">
                  {points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${block.iconColor}`} />
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
