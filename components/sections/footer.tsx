"use client"

import { useTranslation } from "@/contexts/translation-context"
import { KalenderLogo } from "@/components/kalender-logo"

export function FooterSection() {
  const { t } = useTranslation()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-950 text-gray-400 py-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <KalenderLogo width={28} height={28} />
              <span className="text-white font-bold text-lg">Kalender</span>
            </div>
            <p className="text-sm leading-relaxed">
              {t("landing.footer_description")}
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">{t("landing.footer_product")}</h4>
            <ul className="space-y-2.5">
              {[
                { label: t("landing.footer_features"), action: () => scrollTo("features") },
                { label: t("landing.footer_pricing"), action: () => scrollTo("pricing") },
                { label: t("landing.footer_faq"), action: () => scrollTo("faq") },
              ].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={item.action}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">{t("landing.footer_company")}</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="/contact" className="text-sm hover:text-white transition-colors">
                  {t("landing.footer_contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">{t("landing.footer_legal")}</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="/termos" className="text-sm hover:text-white transition-colors">
                  {t("landing.footer_terms")}
                </a>
              </li>
              <li>
                <a href="/privacidade" className="text-sm hover:text-white transition-colors">
                  {t("landing.footer_privacy")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>{t("landing.footer_copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
