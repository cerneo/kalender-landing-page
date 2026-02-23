"use client"

import { useTranslation } from "@/contexts/translation-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, CheckCircle } from "lucide-react"

const ONBOARDING_URL = "https://app.kalender.com.br/onboarding"

export function HeroSection() {
  const { t } = useTranslation()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const heroAppointments = [
    { time: "09:00", client: t("landing.hero_client1"), service: t("landing.hero_service1"), color: "bg-primary", status: t("landing.hero_status_confirmed") },
    { time: "10:30", client: t("landing.hero_client2"), service: t("landing.hero_service2"), color: "bg-violet-500", status: t("landing.hero_status_waiting") },
    { time: "13:00", client: t("landing.hero_client3"), service: t("landing.hero_service3"), color: "bg-emerald-500", status: t("landing.hero_status_confirmed") },
    { time: "15:00", client: t("landing.hero_client4"), service: t("landing.hero_service4"), color: "bg-amber-500", status: t("landing.hero_status_new") },
  ]

  return (
    <section className="relative min-h-[90vh] flex items-center bg-zinc-100 dark:bg-zinc-950 overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/10 dark:bg-primary/5 mb-8">
              <span className="text-primary text-sm font-medium">{t("landing.hero_badge")}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-zinc-800 dark:text-white mb-6 leading-[1.08] tracking-tight">
              {t("landing.hero_title")}{" "}
              <span className="text-primary">{t("landing.hero_title_highlight")}</span>
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
                onClick={() => scrollTo("features")}
              >
                {t("landing.hero_cta_secondary")}
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              <span>{t("landing.hero_note")}</span>
            </div>
          </div>

          {/* Right: Calendar Mockup */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white dark:bg-white/[0.04] rounded-2xl p-6 border border-zinc-200 dark:border-zinc-500/25 shadow-sm dark:shadow-none">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="bg-primary/10 dark:bg-primary/15 p-1.5 rounded-lg">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-zinc-900 dark:text-white font-semibold text-sm">{t("landing.hero_month")}</span>
                </div>
                <div className="flex gap-1">
                  <div className="px-3 py-1.5 rounded-lg bg-primary/10 dark:bg-primary/15 text-primary text-xs font-medium">{t("landing.hero_view_day")}</div>
                  <div className="px-3 py-1.5 rounded-lg text-zinc-400 dark:text-zinc-500 text-xs">{t("landing.hero_view_week")}</div>
                  <div className="px-3 py-1.5 rounded-lg text-zinc-400 dark:text-zinc-500 text-xs">{t("landing.hero_view_month")}</div>
                </div>
              </div>

              {/* Appointment Cards */}
              <div className="space-y-2">
                {heroAppointments.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-zinc-50 dark:bg-white/[0.04] rounded-xl p-3.5 border border-zinc-100 dark:border-zinc-500/15"
                  >
                    <div className={`w-1 h-10 ${item.color} rounded-full`} />
                    <div className="text-xs text-zinc-400 dark:text-zinc-500 font-mono w-10">{item.time}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-zinc-900 dark:text-white text-sm font-medium truncate">{item.client}</div>
                      <div className="text-zinc-400 dark:text-zinc-500 text-xs truncate">{item.service}</div>
                    </div>
                    <span
                      className={`text-[10px] font-medium px-2.5 py-1 rounded-full ${
                        item.status === t("landing.hero_status_confirmed")
                          ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400"
                          : item.status === t("landing.hero_status_waiting")
                          ? "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400"
                          : "bg-primary/10 text-primary dark:bg-primary/15"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Stats */}
              <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-zinc-200 dark:border-zinc-500/25">
                <div className="text-center">
                  <div className="text-zinc-900 dark:text-white font-bold text-lg">12</div>
                  <div className="text-zinc-400 dark:text-zinc-600 text-[10px]">{t("landing.hero_stat_appointments")}</div>
                </div>
                <div className="text-center">
                  <div className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">R$ 2.340</div>
                  <div className="text-zinc-400 dark:text-zinc-600 text-[10px]">{t("landing.hero_stat_revenue")}</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-lg">92%</div>
                  <div className="text-zinc-400 dark:text-zinc-600 text-[10px]">{t("landing.hero_stat_occupation")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
