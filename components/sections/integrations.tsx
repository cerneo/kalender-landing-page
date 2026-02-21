"use client"

import { useTranslation } from "@/contexts/translation-context"
import { Calendar, MessageSquare, Smartphone, DollarSign, Mail, Cloud, Database, BarChart3 } from "lucide-react"
import Marquee from "react-fast-marquee"

const integrations = [
  { name: "Google Calendar", icon: Calendar },
  { name: "WhatsApp Business", icon: MessageSquare },
  { name: "Instagram", icon: Smartphone },
  { name: "Stripe", icon: DollarSign },
  { name: "Microsoft Outlook", icon: Mail },
  { name: "Magalu Cloud", icon: Cloud },
  { name: "Meta Business", icon: Database },
  { name: "Google Analytics", icon: BarChart3 },
]

const partners = [
  { name: "Magalu Cloud" },
  { name: "Meta Partner" },
  { name: "WhatsApp" },
  { name: "Instagram" },
  { name: "Google" },
  { name: "Microsoft" },
]

function IntegrationCard({ name, icon: Icon }: { name: string; icon: React.ElementType }) {
  return (
    <div className="flex flex-col items-center gap-2.5 mx-4 group">
      <div className="w-16 h-16 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
        <Icon className="h-7 w-7 text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors duration-300" />
      </div>
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">{name}</span>
    </div>
  )
}

export function IntegrationsSection() {
  const { t } = useTranslation()

  return (
    <>
      {/* Integrations */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">
              {t("landing.integrations_title")}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-10">{t("landing.integrations_subtitle")}</p>
          </div>
          <div className="animate-on-scroll">
            <Marquee
              speed={40}
              autoFill
              pauseOnHover
              gradient
              gradientColor="rgb(249, 250, 251)"
              gradientWidth={80}
              className="py-4"
            >
              {integrations.map((integration, i) => (
                <IntegrationCard key={i} name={integration.name} icon={integration.icon} />
              ))}
            </Marquee>
            <Marquee
              speed={30}
              autoFill
              pauseOnHover
              direction="right"
              gradient
              gradientColor="rgb(249, 250, 251)"
              gradientWidth={80}
              className="py-4 mt-2"
            >
              {[...integrations].reverse().map((integration, i) => (
                <IntegrationCard key={i} name={integration.name} icon={integration.icon} />
              ))}
            </Marquee>
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
            <Marquee
              speed={25}
              autoFill
              pauseOnHover
              gradient
              gradientColor="white"
              gradientWidth={60}
            >
              {partners.map((partner, i) => (
                <span key={i} className="text-sm font-medium text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 transition-colors mx-8">
                  {partner.name}
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </>
  )
}
