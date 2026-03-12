"use client"

import { useTranslation } from "@/contexts/translation-context"
import {
  CalendarX2, UserX, MessageSquareWarning,
  EyeOff, CreditCard, RefreshCcw,
} from "lucide-react"

const PAINS = [
  { icon: CalendarX2, titleKey: "pain1_title", descKey: "pain1_desc", color: "text-red-500" },
  { icon: UserX, titleKey: "pain2_title", descKey: "pain2_desc", color: "text-amber-500" },
  { icon: MessageSquareWarning, titleKey: "pain3_title", descKey: "pain3_desc", color: "text-orange-500" },
  { icon: RefreshCcw, titleKey: "pain4_title", descKey: "pain4_desc", color: "text-rose-500" },
  { icon: EyeOff, titleKey: "pain5_title", descKey: "pain5_desc", color: "text-violet-500" },
  { icon: CreditCard, titleKey: "pain6_title", descKey: "pain6_desc", color: "text-red-400" },
]

export function PainPointsSection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-zinc-100 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4">
            {t("landing.pain_title")}
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg lg:text-xl max-w-2xl mx-auto">
            {t("landing.pain_subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-14 stagger-children">
          {PAINS.map((pain, i) => (
            <div
              key={i}
              className="animate-on-scroll rounded-xl border border-zinc-200 dark:border-zinc-500/25 bg-white dark:bg-zinc-950 p-6 hover:border-red-300/50 dark:hover:border-red-500/20 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-red-50 dark:bg-red-900/10 mb-4">
                <pain.icon className={`h-5 w-5 ${pain.color}`} />
              </div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-2">
                {t(`landing.${pain.titleKey}`)}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {t(`landing.${pain.descKey}`)}
              </p>
            </div>
          ))}
        </div>

        {/* Transition */}
        <div className="text-center animate-on-scroll">
          <p className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white">
            {t("landing.pain_transition")}{" "}
            <span className="text-gradient">{t("landing.pain_transition_highlight")}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
