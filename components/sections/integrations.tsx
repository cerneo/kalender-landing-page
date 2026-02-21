"use client"

import Image from "next/image"
import { useTranslation } from "@/contexts/translation-context"
import Marquee from "react-fast-marquee"

const logos = [
  { name: "Google", logo: "/images/icons/google.svg" },
  { name: "Microsoft", logo: "/images/icons/microsoft.svg" },
  { name: "Meta", logo: "/images/icons/facebook-v2.svg" },
  { name: "WhatsApp", logo: "/images/icons/whatsapp.svg" },
  { name: "Instagram", logo: "/images/icons/instagram.svg" },
  { name: "Slack", logo: "/images/icons/slack.svg" },
  { name: "AWS", logo: "/images/icons/aws.svg" },
  { name: "Magalu", logo: "/images/icons/magalu.svg" },
]

function LogoCard({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="flex flex-col items-center gap-2 mx-6 group">
      <div className="w-14 h-14 shrink-0 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all duration-300 overflow-hidden">
        <Image
          src={logo}
          alt={name}
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      </div>
      <span className="text-[11px] font-medium text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

export function IntegrationsSection() {
  const { t } = useTranslation()

  return (
    <section className="py-14 bg-gray-50 dark:bg-gray-900 overflow-hidden">
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
        <div className="animate-on-scroll">
          <Marquee
            speed={35}
            autoFill
            pauseOnHover
            gradient
            gradientColor="rgb(249, 250, 251)"
            gradientWidth={80}
          >
            {logos.map((item, i) => (
              <LogoCard key={i} name={item.name} logo={item.logo} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
