"use client"

import { useTranslation } from "@/contexts/translation-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, ShieldCheck, Zap } from "lucide-react"

const ONBOARDING_URL = "https://app.kalender.com.br/onboarding"

export function HeroSection() {
  const { t } = useTranslation()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[92vh] flex items-center bg-zinc-100 dark:bg-zinc-950 overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/10 dark:bg-primary/5 mb-8">
              <span className="text-primary text-sm font-medium">{t("landing.hero_badge")}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold text-zinc-800 dark:text-white mb-6 leading-[1.08] tracking-tight">
              {t("landing.hero_title")}{" "}
              <span className="text-gradient">{t("landing.hero_title_highlight")}</span>
            </h1>

            <p className="text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 max-w-lg">
              {t("landing.hero_description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold h-12 px-7 text-base rounded-xl transition-colors"
                onClick={() => (window.location.href = ONBOARDING_URL)}
              >
                {t("landing.hero_cta_primary")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-7 text-base border-primary/50 text-zinc-800 hover:border-primary dark:text-white rounded-xl transition-all duration-300 ease-in-out"
                onClick={() => scrollTo("pillars")}
              >
                {t("landing.hero_cta_secondary")}
              </Button>
            </div>

            <div className="flex items-center gap-5 text-sm text-zinc-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-500" />
                <span>{t("landing.hero_note")}</span>
              </div>
            </div>
          </div>

          {/* Right: Revenue Dashboard Mockup */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white dark:bg-white/[0.04] rounded-2xl p-6 border border-zinc-200 dark:border-zinc-500/25 shadow-sm dark:shadow-none">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-zinc-400 dark:text-zinc-500 text-xs font-medium uppercase tracking-wider mb-1">{t("landing.hero_dashboard_label")}</div>
                  <div className="text-zinc-900 dark:text-white font-bold text-2xl">{t("landing.hero_dashboard_revenue")}</div>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-lg text-xs font-semibold">
                  <TrendingUp className="h-3.5 w-3.5" />
                  +23%
                </div>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="bg-zinc-50 dark:bg-white/[0.04] rounded-xl p-3 border border-zinc-100 dark:border-zinc-500/15">
                  <div className="text-zinc-400 dark:text-zinc-500 text-[10px] font-medium uppercase tracking-wider mb-1">{t("landing.hero_kpi_occupation")}</div>
                  <div className="text-zinc-900 dark:text-white font-bold text-lg">94%</div>
                  <div className="text-emerald-500 text-[10px] font-medium">+12pp</div>
                </div>
                <div className="bg-zinc-50 dark:bg-white/[0.04] rounded-xl p-3 border border-zinc-100 dark:border-zinc-500/15">
                  <div className="text-zinc-400 dark:text-zinc-500 text-[10px] font-medium uppercase tracking-wider mb-1">{t("landing.hero_kpi_noshow")}</div>
                  <div className="text-zinc-900 dark:text-white font-bold text-lg">3.2%</div>
                  <div className="text-emerald-500 text-[10px] font-medium">-73%</div>
                </div>
                <div className="bg-zinc-50 dark:bg-white/[0.04] rounded-xl p-3 border border-zinc-100 dark:border-zinc-500/15">
                  <div className="text-zinc-400 dark:text-zinc-500 text-[10px] font-medium uppercase tracking-wider mb-1">{t("landing.hero_kpi_recurrence")}</div>
                  <div className="text-zinc-900 dark:text-white font-bold text-lg">68%</div>
                  <div className="text-emerald-500 text-[10px] font-medium">+18pp</div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="space-y-2">
                {[
                  { icon: "💳", text: t("landing.hero_activity1"), value: "R$ 350", color: "text-emerald-600 dark:text-emerald-400" },
                  { icon: "📅", text: t("landing.hero_activity2"), value: t("landing.hero_activity2_status"), color: "text-primary" },
                  { icon: "🤖", text: t("landing.hero_activity3"), value: t("landing.hero_activity3_status"), color: "text-violet-600 dark:text-violet-400" },
                  { icon: "🔔", text: t("landing.hero_activity4"), value: t("landing.hero_activity4_status"), color: "text-amber-600 dark:text-amber-400" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-zinc-50 dark:bg-white/[0.04] rounded-xl p-3 border border-zinc-100 dark:border-zinc-500/15"
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="flex-1 text-zinc-600 dark:text-zinc-400 text-xs truncate">{item.text}</span>
                    <span className={`text-[11px] font-semibold ${item.color} whitespace-nowrap`}>{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Bottom: AI Active indicator */}
              <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-500/25 flex items-center gap-2">
                <Zap className="h-3.5 w-3.5 text-primary" />
                <span className="text-[11px] text-zinc-400 dark:text-zinc-500">{t("landing.hero_ai_active")}</span>
                <span className="ml-auto flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Online</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
