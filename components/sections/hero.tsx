"use client"

import { useTranslation } from "@/contexts/translation-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, CheckCircle, Clock, Sparkles } from "lucide-react"

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
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float-delayed" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 pt-28 pb-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8 animate-pulse-glow">
              <Sparkles className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary text-sm font-medium">{t("landing.hero_badge")}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-white mb-6 leading-[1.08] tracking-tight">
              {t("landing.hero_title")}{" "}
              <span className="text-gradient animate-text-gradient">{t("landing.hero_title_highlight")}</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-10 max-w-xl">
              {t("landing.hero_description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                size="lg"
                className="group-arrow bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-base rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] transition-all"
                onClick={() => (window.location.href = ONBOARDING_URL)}
              >
                {t("landing.hero_cta_primary")}
                <ArrowRight className="ml-2 h-5 w-5 arrow-icon" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base border-gray-600 text-gray-300 hover:bg-white/5 hover:text-white rounded-full hover:scale-[1.02] transition-all"
                onClick={() => scrollTo("features")}
              >
                {t("landing.hero_cta_secondary")}
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400" />
                <span>{t("landing.hero_note")}</span>
              </div>
            </div>
          </div>

          {/* Right: Calendar Mockup */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white/[0.06] backdrop-blur-sm rounded-[20px] p-6 border border-white/10 shadow-2xl">
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-float" />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed" />

              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="bg-primary/20 p-1.5 rounded-lg">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-white font-semibold text-sm">{t("landing.hero_month")}</span>
                </div>
                <div className="flex gap-1">
                  <div className="px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-medium">{t("landing.hero_view_day")}</div>
                  <div className="px-3 py-1.5 rounded-full text-gray-400 text-xs hover:bg-white/5 transition-colors cursor-pointer">{t("landing.hero_view_week")}</div>
                  <div className="px-3 py-1.5 rounded-full text-gray-400 text-xs hover:bg-white/5 transition-colors cursor-pointer">{t("landing.hero_view_month")}</div>
                </div>
              </div>

              {/* Appointment Cards */}
              <div className="space-y-2.5">
                {heroAppointments.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/[0.07] rounded-xl p-3.5 hover:bg-white/[0.1] transition-colors group"
                  >
                    <div className={`w-1 h-10 ${item.color} rounded-full`} />
                    <div className="text-xs text-gray-400 font-mono w-10">{item.time}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{item.client}</div>
                      <div className="text-gray-400 text-xs truncate">{item.service}</div>
                    </div>
                    <span
                      className={`text-[10px] font-medium px-2.5 py-1 rounded-full ${
                        item.status === t("landing.hero_status_confirmed")
                          ? "bg-emerald-500/20 text-emerald-400"
                          : item.status === t("landing.hero_status_waiting")
                          ? "bg-amber-500/20 text-amber-400"
                          : "bg-primary/20 text-primary"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Stats */}
              <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-white/10">
                <div className="text-center">
                  <div className="text-white font-bold text-lg">12</div>
                  <div className="text-gray-500 text-[10px]">{t("landing.hero_stat_appointments")}</div>
                </div>
                <div className="text-center">
                  <div className="text-emerald-400 font-bold text-lg">R$ 2.340</div>
                  <div className="text-gray-500 text-[10px]">{t("landing.hero_stat_revenue")}</div>
                </div>
                <div className="text-center">
                  <div className="text-primary font-bold text-lg">92%</div>
                  <div className="text-gray-500 text-[10px]">{t("landing.hero_stat_occupation")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
