"use client"

import { useTranslation } from "@/contexts/translation-context"
import { ClipboardList, Link2, BarChart3 } from "lucide-react"

export function HowItWorksSection() {
  const { t } = useTranslation()

  const steps = [
    { step: "1", title: t("landing.how1_title"), desc: t("landing.how1_desc"), icon: ClipboardList },
    { step: "2", title: t("landing.how2_title"), desc: t("landing.how2_desc"), icon: Link2 },
    { step: "3", title: t("landing.how3_title"), desc: t("landing.how3_desc"), icon: BarChart3 },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
              {t("landing.how_title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-children relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-[52px] left-[16.5%] right-[16.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

            {steps.map((item, i) => (
              <div key={i} className="animate-on-scroll text-center relative">
                <div className="relative mx-auto mb-6">
                  <div className="bg-gradient-to-br from-primary to-blue-600 w-[68px] h-[68px] rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-primary/20 group hover:scale-105 transition-transform">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white dark:bg-gray-900 text-primary border-2 border-primary w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
