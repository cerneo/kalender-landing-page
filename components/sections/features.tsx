"use client"

import { useTranslation } from "@/contexts/translation-context"
import {
  Calendar, DollarSign, Heart,
  MessageSquare, Bot, Building2,
} from "lucide-react"

const FEATURES = [
  {
    icon: Calendar,
    titleKey: "mod_operations",
    descKey: "features_card_operations_desc",
  },
  {
    icon: DollarSign,
    titleKey: "mod_financial",
    descKey: "features_card_financial_desc",
  },
  {
    icon: Heart,
    titleKey: "mod_clients",
    descKey: "features_card_clients_desc",
  },
  {
    icon: MessageSquare,
    titleKey: "mod_channels",
    descKey: "features_card_channels_desc",
  },
  {
    icon: Bot,
    titleKey: "mod_automation",
    descKey: "features_card_automation_desc",
  },
  {
    icon: Building2,
    titleKey: "mod_management",
    descKey: "features_card_management_desc",
  },
]

export function FeaturesSection() {
  const { t } = useTranslation()

  return (
    <section id="features" className="py-20 bg-white dark:bg-zinc-950 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4">
            {t("landing.features_title")}
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg lg:text-xl max-w-2xl mx-auto">
            {t("landing.features_subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto stagger-children">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="animate-on-scroll rounded-xl border border-zinc-200 dark:border-zinc-500/25 bg-white dark:bg-zinc-950 p-6 hover:border-primary/50 hover:shadow-sm transition-all duration-300 ease-in-out"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 mb-4">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-2">
                {t(`landing.${feature.titleKey}`)}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {t(`landing.${feature.descKey}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
