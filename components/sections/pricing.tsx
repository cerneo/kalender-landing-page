"use client"

import { useState } from "react"
import { useTranslation } from "@/contexts/translation-context"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { CheckCircle, ArrowRight } from "lucide-react"

const ONBOARDING_URL = "https://app.kalender.com.br/onboarding"

export interface PlanDetails {
  id: number
  name: string
  description: string
  price: number
  annualPrice: number
  isActive: boolean
  isRecommended: boolean
  quotas: Record<string, number>
  features: Record<string, boolean>
  featureDescriptions: string[]
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

interface PricingSectionProps {
  plans: PlanDetails[]
}

export function PricingSection({ plans }: PricingSectionProps) {
  const { t } = useTranslation()
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-950 scroll-mt-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="text-center mb-12 animate-on-scroll">
          <Badge className="bg-primary/10 text-primary border-0 mb-4 px-4 py-1.5 rounded-full">
            {t("landing.pricing_badge")}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
            {t("landing.pricing_title")}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            {t("landing.pricing_subtitle")}
          </p>

          {/* Annual Toggle */}
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-medium transition-colors ${!isAnnual ? "text-gray-900 dark:text-white" : "text-gray-400"}`}>
              {t("landing.pricing_monthly")}
            </span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-primary" />
            <span className={`text-sm font-medium transition-colors ${isAnnual ? "text-gray-900 dark:text-white" : "text-gray-400"}`}>
              {t("landing.pricing_annual")}
            </span>
            {isAnnual && (
              <Badge className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 border-0 text-xs rounded-full">
                {t("landing.pricing_save")}
              </Badge>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        {plans.length === 0 ? (
          <div className="text-center py-12 animate-on-scroll">
            <div className="max-w-md mx-auto rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
              <p className="text-gray-500 dark:text-gray-400 mb-4">{t("landing.pricing_subtitle")}</p>
              <Button
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
                onClick={() => (window.location.href = "/contact")}
              >
                {t("landing.pricing_cta_enterprise")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <div
            className={`grid gap-6 max-w-6xl mx-auto stagger-children ${
              plans.length <= 2
                ? "md:grid-cols-2 max-w-3xl"
                : plans.length === 3
                ? "md:grid-cols-3 max-w-5xl"
                : "md:grid-cols-2 lg:grid-cols-4"
            }`}
          >
            {plans.map((plan) => {
              const monthlyPrice = isAnnual ? plan.annualPrice / 12 : plan.price
              const isEnterprise = plan.name.toLowerCase() === "enterprise"
              const isRecommended = plan.isRecommended

              return (
                <div
                  key={plan.id}
                  className={`animate-on-scroll-scale relative rounded-2xl transition-all duration-300 ${
                    isRecommended
                      ? "border-2 border-primary shadow-lg shadow-primary/10 scale-[1.02] bg-white dark:bg-gray-900 animate-border-glow hover:shadow-xl hover:shadow-primary/20"
                      : "border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:-translate-y-2 hover:shadow-xl"
                  }`}
                >
                  {isRecommended && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-white font-bold px-4 py-1 shadow-md rounded-full animate-pulse-glow">
                        {t("landing.pricing_popular")}
                      </Badge>
                    </div>
                  )}

                  <div className="text-center pt-8 pb-2 px-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{plan.description}</p>
                  </div>

                  <div className="px-6 pb-6">
                    <div className="text-center mb-6">
                      {isEnterprise ? (
                        <div className="text-2xl font-bold text-gray-900 dark:text-white py-2">
                          {t("landing.pricing_custom")}
                        </div>
                      ) : (
                        <>
                          <div className="text-4xl font-bold text-gray-900 dark:text-white">
                            {formatPrice(monthlyPrice)}
                            <span className="text-base font-normal text-gray-500">
                              {t("landing.pricing_per_month")}
                            </span>
                          </div>
                          {isAnnual && (
                            <div className="text-xs text-gray-400 mt-1">
                              {formatPrice(plan.annualPrice)} {t("landing.pricing_billed_annually")}
                            </div>
                          )}
                          {isAnnual && plan.price > 0 && (
                            <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">
                              {t("landing.pricing_savings_prefix")} {formatPrice(plan.price * 12 - plan.annualPrice)}
                              {t("landing.pricing_savings_suffix")}
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-2.5 mb-6">
                      {plan.featureDescriptions.map((feature, fi) => (
                        <div key={fi} className="flex items-start gap-2.5">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className={`w-full rounded-full font-semibold transition-all hover:scale-[1.02] ${
                        isRecommended
                          ? "bg-primary hover:bg-primary/90 text-white shadow-sm shadow-primary/25"
                          : isEnterprise
                          ? "bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900"
                          : "bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:border-primary hover:text-primary"
                      }`}
                      onClick={() =>
                        (window.location.href = isEnterprise ? "/contact" : ONBOARDING_URL)
                      }
                    >
                      {isEnterprise ? t("landing.pricing_cta_enterprise") : t("landing.pricing_cta")}
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        <p className="text-center text-xs text-gray-400 mt-8">{t("landing.pricing_footnote")}</p>
      </div>
    </section>
  )
}
