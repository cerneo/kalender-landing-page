"use client"

import { useTranslation } from "@/contexts/translation-context"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const LOGIN_URL = "https://app.kalender.com.br/login"
const ONBOARDING_URL = "https://app.kalender.com.br/onboarding"

export function CTASection() {
  const { t } = useTranslation()

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            {t("landing.cta_title")}
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            {t("landing.cta_subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-8 text-base rounded-full shadow-lg shadow-primary/25 hover:scale-[1.02] transition-all"
              onClick={() => (window.location.href = ONBOARDING_URL)}
            >
              {t("landing.cta_primary")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base border-gray-600 text-gray-300 hover:bg-white/5 hover:text-white rounded-full hover:scale-[1.02] transition-all"
              onClick={() => (window.location.href = LOGIN_URL)}
            >
              {t("landing.cta_secondary")}
            </Button>
          </div>
          <p className="text-sm text-gray-500">{t("landing.cta_note")}</p>
        </div>
      </div>
    </section>
  )
}
