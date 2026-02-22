"use client"

import { useTranslation } from "@/contexts/translation-context"
import { Stethoscope, Sparkles, Check } from "lucide-react"

export function SegmentsShowcaseSection() {
  const { t } = useTranslation()

  const healthPoints = [
    t("landing.segment_health_point1"),
    t("landing.segment_health_point2"),
    t("landing.segment_health_point3"),
    t("landing.segment_health_point4"),
    t("landing.segment_health_point5"),
  ]

  const beautyPoints = [
    t("landing.segment_beauty_point1"),
    t("landing.segment_beauty_point2"),
    t("landing.segment_beauty_point3"),
    t("landing.segment_beauty_point4"),
    t("landing.segment_beauty_point5"),
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
              {t("landing.segments_title")}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              {t("landing.segments_subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 stagger-children mb-8">
            {/* Health Card */}
            <div className="animate-on-scroll rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-7 hover:shadow-xl hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-rose-100 dark:bg-rose-900/40 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Stethoscope className="h-6 w-6 text-rose-500 dark:text-rose-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t("landing.segment_health_title")}
                </h3>
              </div>
              <ul className="space-y-3">
                {healthPoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-rose-100 dark:bg-rose-900/40 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-3.5 w-3.5 text-rose-500 dark:text-rose-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Beauty Card */}
            <div className="animate-on-scroll rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-7 hover:shadow-xl hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-violet-100 dark:bg-violet-900/40 w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="h-6 w-6 text-violet-500 dark:text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {t("landing.segment_beauty_title")}
                </h3>
              </div>
              <ul className="space-y-3">
                {beautyPoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-violet-100 dark:bg-violet-900/40 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-3.5 w-3.5 text-violet-500 dark:text-violet-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Price Banner */}
          <div className="animate-on-scroll rounded-2xl bg-gradient-to-r from-primary to-cyan-500 p-7 text-white text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              {t("landing.segment_price_title")}
            </h3>
            <p className="text-white/90 mb-3 max-w-2xl mx-auto">
              {t("landing.segment_price_desc")}
            </p>
            <p className="text-sm font-semibold bg-white/20 inline-block px-4 py-2 rounded-full">
              {t("landing.segment_price_example")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
