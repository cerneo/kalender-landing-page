"use client"

import { useTranslation } from "@/contexts/translation-context"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bot, CheckCircle } from "lucide-react"

const ONBOARDING_URL = "https://app.kalender.com.br/onboarding"

export function AIHighlightSection() {
  const { t } = useTranslation()

  const aiPoints = [
    t("landing.ai_point1"),
    t("landing.ai_point2"),
    t("landing.ai_point3"),
    t("landing.ai_point4"),
  ]

  const chatMessages = [
    { from: "user", text: t("landing.ai_chat_msg1"), time: "14:02" },
    { from: "bot", text: t("landing.ai_chat_msg2"), time: "14:02" },
    { from: "user", text: t("landing.ai_chat_msg3"), time: "14:03" },
    { from: "bot", text: t("landing.ai_chat_msg4"), time: "14:03" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="animate-on-scroll-left">
            <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 mb-4 px-4 py-1.5 rounded-full">
              {t("landing.ai_badge")}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
              {t("landing.ai_title")}{" "}
              <span className="text-gradient">{t("landing.ai_title_highlight")}</span>
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
              {t("landing.ai_description")}
            </p>

            <div className="space-y-4 mb-8">
              {aiPoints.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <Button
              className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full shadow-lg shadow-primary/25 hover:scale-[1.02] transition-all px-6"
              onClick={() => (window.location.href = ONBOARDING_URL)}
            >
              {t("landing.ai_cta")} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* WhatsApp Chat Mockup */}
          <div className="animate-on-scroll-right hidden lg:block">
            <div className="bg-[#0b141a] rounded-2xl p-5 shadow-2xl border border-white/5 max-w-sm ml-auto">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{t("landing.ai_chat_name")}</div>
                  <div className="text-green-400 text-[10px]">{t("landing.ai_chat_status")}</div>
                </div>
              </div>
              <div className="space-y-2.5">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`rounded-xl p-3 max-w-[85%] ${
                      msg.from === "user"
                        ? "bg-[#202c33] rounded-tl-sm"
                        : "bg-[#005c4b] rounded-tr-sm ml-auto"
                    }`}
                  >
                    <p className="text-gray-200 text-xs leading-relaxed">{msg.text}</p>
                    <span
                      className={`text-[9px] mt-1 block text-right ${
                        msg.from === "user" ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {msg.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
