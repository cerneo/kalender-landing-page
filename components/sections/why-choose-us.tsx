"use client"

import { useTranslation } from "@/contexts/translation-context"
import { Shield, Zap, HeartHandshake, BarChart3 } from "lucide-react"

export function WhyChooseUsSection() {
  const { t } = useTranslation()

  const reasons = [
    {
      icon: Zap,
      titleKey: "landing.why_speed_title",
      descKey: "landing.why_speed_desc",
      color: "text-amber-500",
      bg: "bg-amber-100 dark:bg-amber-900/40",
    },
    {
      icon: Shield,
      titleKey: "landing.why_security_title",
      descKey: "landing.why_security_desc",
      color: "text-emerald-500",
      bg: "bg-emerald-100 dark:bg-emerald-900/40",
    },
    {
      icon: HeartHandshake,
      titleKey: "landing.why_support_title",
      descKey: "landing.why_support_desc",
      color: "text-violet-500",
      bg: "bg-violet-100 dark:bg-violet-900/40",
    },
    {
      icon: BarChart3,
      titleKey: "landing.why_results_title",
      descKey: "landing.why_results_desc",
      color: "text-primary",
      bg: "bg-sky-100 dark:bg-sky-900/40",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
              {t("landing.why_title")}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              {t("landing.why_subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="animate-on-scroll rounded-2xl border border-gray-100 dark:border-gray-800 p-6 hover:shadow-lg hover:border-gray-200 dark:hover:border-gray-700 transition-all group hover:-translate-y-1 bg-white dark:bg-gray-900"
              >
                <div className={`${reason.bg} w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <reason.icon className={`h-6 w-6 ${reason.color}`} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {t(reason.titleKey)}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {t(reason.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
