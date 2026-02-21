"use client"

import { KalenderLogo } from "@/components/kalender-logo"
import { LanguageSwitcher } from "@/components/language-switcher"
import { TranslationProvider, useTranslation } from "@/contexts/translation-context"

function LegalSection({ title, items }: { title: string; items: string }) {
  return (
    <>
      <h3>{title}</h3>
      <ul>
        {items.split("|").map((item, i) => {
          const [bold, ...rest] = item.split(": ")
          return rest.length > 0 ? (
            <li key={i}><strong>{bold}:</strong> {rest.join(": ")}</li>
          ) : (
            <li key={i}>{item}</li>
          )
        })}
      </ul>
    </>
  )
}

function TermosContent() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <header className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <KalenderLogo width={32} height={32} />
            <span className="text-lg font-bold text-gray-900 dark:text-white">Kalender</span>
          </a>
          <LanguageSwitcher />
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
        <article className="prose prose-gray max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t("legal.terms_title")}</h1>
          <p className="text-sm text-gray-400 mb-8">{t("legal.terms_updated")}</p>

          <h2>{t("legal.terms_s1_title")}</h2>
          <p>{t("legal.terms_s1_text")}</p>

          <h2>{t("legal.terms_s2_title")}</h2>
          <p>{t("legal.terms_s2_text")}</p>

          <h2>{t("legal.terms_s3_title")}</h2>
          <p>{t("legal.terms_s3_text")}</p>
          <ul>
            {t("legal.terms_s3_items").split("|").map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p>{t("legal.terms_s3_footer")}</p>

          <h2>{t("legal.terms_s4_title")}</h2>
          <LegalSection title="" items={t("legal.terms_s4_items")} />

          <h2>{t("legal.terms_s5_title")}</h2>
          <p>{t("legal.terms_s5_text")}</p>
          <ul>
            {t("legal.terms_s5_items").split("|").map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2>{t("legal.terms_s6_title")}</h2>
          <p>{t("legal.terms_s6_text")}</p>

          <h2>{t("legal.terms_s7_title")}</h2>
          <p>{t("legal.terms_s7_text")}</p>

          <h2>{t("legal.terms_s8_title")}</h2>
          <ul>
            {t("legal.terms_s8_items").split("|").map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2>{t("legal.terms_s9_title")}</h2>
          <p>{t("legal.terms_s9_text")}</p>

          <h2>{t("legal.terms_s10_title")}</h2>
          <p>{t("legal.terms_s10_text")}</p>

          <h2>{t("legal.terms_s11_title")}</h2>
          <p>{t("legal.terms_s11_text")}</p>

          <h2>{t("legal.terms_s12_title")}</h2>
          <p>{t("legal.terms_s12_text")}</p>

          <h2>{t("legal.terms_s13_title")}</h2>
          <p>
            {t("legal.terms_s13_text")}{" "}
            <a href="mailto:contato@kalender.com.br" className="text-primary hover:underline">contato@kalender.com.br</a>
          </p>
        </article>
      </div>

      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-8">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 text-center text-sm text-gray-400">
          <p>{t("legal.footer_copyright")}</p>
        </div>
      </footer>
    </div>
  )
}

export default function TermosPage() {
  return (
    <TranslationProvider>
      <TermosContent />
    </TranslationProvider>
  )
}
