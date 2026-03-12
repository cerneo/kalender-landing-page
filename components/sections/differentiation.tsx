"use client"

import { useTranslation } from "@/contexts/translation-context"
import {
  Layers, TrendingUp, MessageCircle, Brain,
} from "lucide-react"

const DIFFS = [
  {
    icon: Layers,
    titleKey: "diff1_title",
    descKey: "diff1_desc",
    iconBg: "bg-primary/10 dark:bg-primary/15",
    iconColor: "text-primary",
  },
  {
    icon: TrendingUp,
    titleKey: "diff2_title",
    descKey: "diff2_desc",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: MessageCircle,
    titleKey: "diff3_title",
    descKey: "diff3_desc",
    iconBg: "bg-violet-100 dark:bg-violet-900/20",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    icon: Brain,
    titleKey: "diff4_title",
    descKey: "diff4_desc",
    iconBg: "bg-amber-100 dark:bg-amber-900/20",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
]

export function DifferentiationSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-zinc-100 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4">
            {t("landing.diff_title")}
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg lg:text-xl max-w-2xl mx-auto">
            {t("landing.diff_subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto stagger-children">
          {DIFFS.map((diff, i) => (
            <div
              key={i}
              className="animate-on-scroll rounded-2xl border border-zinc-200 dark:border-zinc-500/25 bg-white dark:bg-zinc-950 p-7 hover:shadow-sm transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${diff.iconBg} mb-4`}>
                <diff.icon className={`h-5 w-5 ${diff.iconColor}`} />
              </div>
              <h3 className="text-lg font-extrabold text-zinc-900 dark:text-white mb-2">
                {t(`landing.${diff.titleKey}`)}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {t(`landing.${diff.descKey}`)}
              </p>
            </div>
          ))}
        </div>

        {/* Price comparison banner */}
        <div className="animate-on-scroll max-w-4xl mx-auto mt-10 rounded-2xl border border-primary/20 bg-primary/5 dark:bg-primary/5 p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white mb-2">
            {t("landing.diff_price_title")}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
            {t("landing.diff_price_desc")}
          </p>
        </div>
      </div>
    </section>
  )
}
