"use client"

import { useTranslation } from "@/contexts/translation-context"
import { Badge } from "@/components/ui/badge"
import {
  Calendar, Clock, Users, DollarSign, BarChart3, TrendingUp,
  Heart, Gift, Star, ClipboardList, Tag, Package,
  Link2, MessageSquare, Smartphone, Bot, Bell, Send,
  Building2, Lock, Boxes,
} from "lucide-react"

const MODULE_CATEGORIES = [
  {
    titleKey: "mod_operations",
    color: "from-sky-500 to-blue-600",
    iconBg: "bg-sky-100 dark:bg-sky-900/40",
    modules: [
      { icon: Calendar, nameKey: "mod_scheduling", descKey: "mod_scheduling_desc" },
      { icon: Clock, nameKey: "mod_availability", descKey: "mod_availability_desc" },
      { icon: Users, nameKey: "mod_professionals", descKey: "mod_professionals_desc" },
    ],
  },
  {
    titleKey: "mod_financial",
    color: "from-emerald-500 to-green-600",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/40",
    modules: [
      { icon: DollarSign, nameKey: "mod_cashflow", descKey: "mod_cashflow_desc" },
      { icon: BarChart3, nameKey: "mod_commissions", descKey: "mod_commissions_desc" },
      { icon: TrendingUp, nameKey: "mod_reports", descKey: "mod_reports_desc" },
    ],
  },
  {
    titleKey: "mod_clients",
    color: "from-violet-500 to-purple-600",
    iconBg: "bg-violet-100 dark:bg-violet-900/40",
    modules: [
      { icon: Heart, nameKey: "mod_crm", descKey: "mod_crm_desc" },
      { icon: Gift, nameKey: "mod_loyalty", descKey: "mod_loyalty_desc" },
      { icon: Star, nameKey: "mod_nps", descKey: "mod_nps_desc" },
    ],
  },
  {
    titleKey: "mod_sales",
    color: "from-amber-500 to-orange-600",
    iconBg: "bg-amber-100 dark:bg-amber-900/40",
    modules: [
      { icon: ClipboardList, nameKey: "mod_catalog", descKey: "mod_catalog_desc" },
      { icon: Tag, nameKey: "mod_promotions", descKey: "mod_promotions_desc" },
      { icon: Package, nameKey: "mod_inventory", descKey: "mod_inventory_desc" },
    ],
  },
  {
    titleKey: "mod_channels",
    color: "from-green-500 to-teal-600",
    iconBg: "bg-green-100 dark:bg-green-900/40",
    modules: [
      { icon: Link2, nameKey: "mod_booking_link", descKey: "mod_booking_link_desc" },
      { icon: MessageSquare, nameKey: "mod_whatsapp", descKey: "mod_whatsapp_desc" },
      { icon: Smartphone, nameKey: "mod_instagram", descKey: "mod_instagram_desc" },
    ],
  },
  {
    titleKey: "mod_automation",
    color: "from-cyan-500 to-sky-600",
    iconBg: "bg-cyan-100 dark:bg-cyan-900/40",
    modules: [
      { icon: Bot, nameKey: "mod_ai_studio", descKey: "mod_ai_studio_desc" },
      { icon: Bell, nameKey: "mod_notifications", descKey: "mod_notifications_desc" },
      { icon: Send, nameKey: "mod_messages", descKey: "mod_messages_desc" },
    ],
  },
  {
    titleKey: "mod_management",
    color: "from-slate-500 to-gray-700",
    iconBg: "bg-slate-100 dark:bg-slate-900/40",
    modules: [
      { icon: Building2, nameKey: "mod_multi_location", descKey: "mod_multi_location_desc" },
      { icon: Lock, nameKey: "mod_permissions", descKey: "mod_permissions_desc" },
      { icon: Boxes, nameKey: "mod_leads", descKey: "mod_leads_desc" },
    ],
  },
]

export function FeaturesSection() {
  const { t } = useTranslation()

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-950 scroll-mt-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="text-center mb-14 animate-on-scroll">
          <Badge className="bg-primary/10 text-primary border-0 mb-4 px-4 py-1.5 rounded-full">{t("landing.features_badge")}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
            {t("landing.features_title")}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            {t("landing.features_subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto stagger-children">
          {MODULE_CATEGORIES.map((cat, ci) => (
            <div
              key={ci}
              className="animate-on-scroll rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 hover:shadow-lg hover:border-gray-200 dark:hover:border-gray-700 transition-all group hover:-translate-y-1"
            >
              <div className="mb-4">
                <span
                  className={`text-sm font-bold bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}
                >
                  {t(`landing.${cat.titleKey}`)}
                </span>
              </div>
              <div className="space-y-3.5">
                {cat.modules.map((mod, mi) => (
                  <div key={mi} className="flex items-start gap-3">
                    <div className={`${cat.iconBg} p-1.5 rounded-lg mt-0.5 transition-transform group-hover:scale-110`}>
                      <mod.icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">{t(`landing.${mod.nameKey}`)}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{t(`landing.${mod.descKey}`)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
