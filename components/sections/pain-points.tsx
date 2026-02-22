"use client"

import { useTranslation } from "@/contexts/translation-context"
import { Calendar, DollarSign, Users, FileX } from "lucide-react"

export function PainPointsSection() {
  const { t } = useTranslation()

  const painPoints = [
    { title: t("landing.pain1_title"), desc: t("landing.pain1_desc"), icon: Calendar },
    { title: t("landing.pain2_title"), desc: t("landing.pain2_desc"), icon: DollarSign },
    { title: t("landing.pain3_title"), desc: t("landing.pain3_desc"), icon: Users },
    { title: t("landing.pain4_title"), desc: t("landing.pain4_desc"), icon: FileX },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
              {t("landing.pain_title")}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">{t("landing.pain_subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 stagger-children">
            {painPoints.map((pain, i) => (
              <div
                key={i}
                className="animate-on-scroll group rounded-2xl border border-red-100 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/20 p-6 hover:shadow-lg hover:shadow-red-100/50 dark:hover:shadow-red-900/20 transition-all hover:-translate-y-1"
              >
                <div className="bg-red-100 dark:bg-red-900/40 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <pain.icon className="h-6 w-6 text-red-500 dark:text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{pain.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{pain.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              {t("landing.pain_transition")}{" "}
              <span className="text-gradient">{t("landing.pain_transition_highlight")}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
