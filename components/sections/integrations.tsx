"use client"

import { useTranslation } from "@/contexts/translation-context"
import { Calendar, MessageSquare, Smartphone, DollarSign } from "lucide-react"

export function IntegrationsSection() {
  const { t } = useTranslation()

  const integrations = [
    { name: "Google Calendar", icon: Calendar },
    { name: "WhatsApp Business", icon: MessageSquare },
    { name: "Instagram", icon: Smartphone },
    { name: "Stripe", icon: DollarSign },
    { name: "Microsoft Outlook", icon: Calendar },
  ]

  const partners = [
    { name: "Magalu Cloud" },
    { name: "Meta Partner" },
    { name: "WhatsApp" },
    { name: "Instagram" },
    { name: "Google" },
    { name: "Microsoft" },
  ]

  return (
    <>
      {/* Integrations */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">
              {t("landing.integrations_title")}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-10">{t("landing.integrations_subtitle")}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-10 items-center animate-on-scroll">
            {integrations.map((integration, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all">
                  <integration.icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-medium">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-10 bg-white dark:bg-gray-950 border-y border-gray-100 dark:border-gray-800">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="animate-on-scroll text-center">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
              {t("landing.partners_label")}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 md:gap-x-16">
              {partners.map((partner, i) => (
                <span key={i} className="text-sm font-medium text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                  {partner.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
