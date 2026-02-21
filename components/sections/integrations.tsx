"use client"

import Image from "next/image"
import { useTranslation } from "@/contexts/translation-context"
import Marquee from "react-fast-marquee"

const row1 = [
  { name: "Google Calendar", logo: "/images/icons/google-calendar.svg" },
  { name: "WhatsApp", logo: "/images/icons/whatsapp.svg" },
  { name: "Instagram", logo: "/images/icons/instagram.svg" },
  { name: "Stripe", logo: "/images/icons/stripe.svg" },
  { name: "Microsoft", logo: "/images/icons/microsoft.svg" },
  { name: "Slack", logo: "/images/icons/slack.svg" },
  { name: "Google", logo: "/images/icons/google.svg" },
]

const row2 = [
  { name: "Meta", logo: "/images/icons/facebook-v2.svg" },
  { name: "Zapier", logo: "/images/icons/zapier.svg" },
  { name: "Notion", logo: "/images/icons/notion-v2.svg" },
  { name: "Figma", logo: "/images/icons/figma.svg" },
  { name: "Shopify", logo: "/images/icons/shopify.svg" },
  { name: "Google Calendar", logo: "/images/icons/google-calendar.svg" },
  { name: "WhatsApp", logo: "/images/icons/whatsapp.svg" },
]

function LogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex flex-col items-center gap-2.5 mx-5 group">
      <figure className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 p-3 md:p-4">
        <Image
          src={logo}
          alt={name}
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </figure>
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
        {name}
      </span>
    </div>
  )
}

export function IntegrationsSection() {
  const { t } = useTranslation()

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 text-center">
        <div className="animate-on-scroll">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            {t("landing.partners_label")}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">
            {t("landing.integrations_title")}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10">{t("landing.integrations_subtitle")}</p>
        </div>
        <div className="animate-on-scroll space-y-6">
          <Marquee
            speed={40}
            autoFill
            pauseOnHover
            gradient
            gradientColor="rgb(249, 250, 251)"
            gradientWidth={80}
            className="py-2"
          >
            {row1.map((item, i) => (
              <LogoCard key={i} name={item.name} logo={item.logo} />
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
            className="py-2"
          >
            {row2.map((item, i) => (
              <LogoCard key={i} name={item.name} logo={item.logo} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
