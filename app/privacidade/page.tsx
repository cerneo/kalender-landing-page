"use client"

import { KalenderLogo } from "@/components/kalender-logo"
import { LanguageSwitcher } from "@/components/language-switcher"
import { TranslationProvider, useTranslation } from "@/contexts/translation-context"

function LegalSection({ title, items }: { title: string; items: string }) {
  return (
    <>
      {title && <h3>{title}</h3>}
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

function PrivacidadeContent() {
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{t("legal.privacy_title")}</h1>
          <p className="text-sm text-gray-400 mb-8">{t("legal.privacy_updated")}</p>

          <p>{t("legal.privacy_intro")}</p>

          <h2>{t("legal.privacy_s1_title")}</h2>
          <LegalSection title={t("legal.privacy_s1_1_title")} items={t("legal.privacy_s1_1_items")} />
          <LegalSection title={t("legal.privacy_s1_2_title")} items={t("legal.privacy_s1_2_items")} />

          <h2>{t("legal.privacy_s2_title")}</h2>
          <ul>
            {t("legal.privacy_s2_items").split("|").map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2>{t("legal.privacy_s3_title")}</h2>
          <p>{t("legal.privacy_s3_text")}</p>
          <LegalSection title="" items={t("legal.privacy_s3_items")} />

          <h2>{t("legal.privacy_s4_title")}</h2>
          <p>{t("legal.privacy_s4_text")}</p>
          <LegalSection title="" items={t("legal.privacy_s4_items")} />
          <p>{t("legal.privacy_s4_footer")}</p>

          <h2>{t("legal.privacy_s5_title")}</h2>
          <ul>
            {t("legal.privacy_s5_items").split("|").map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2>{t("legal.privacy_s6_title")}</h2>
          <LegalSection title="" items={t("legal.privacy_s6_items")} />

          <h2>{t("legal.privacy_s7_title")}</h2>
          <p>{t("legal.privacy_s7_text")}</p>
          <ul>
            {t("legal.privacy_s7_items").split("|").map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p>
            {t("legal.privacy_s7_footer")}{" "}
            <a href="mailto:privacidade@kalender.com.br" className="text-primary hover:underline">privacidade@kalender.com.br</a>
          </p>

          <h2>{t("legal.privacy_s8_title")}</h2>
          <p>{t("legal.privacy_s8_text")}</p>
          <LegalSection title="" items={t("legal.privacy_s8_items")} />
          <p>{t("legal.privacy_s8_footer")}</p>

          <h2>{t("legal.privacy_s9_title")}</h2>
          <p>{t("legal.privacy_s9_text")}</p>

          <h2>{t("legal.privacy_s10_title")}</h2>
          <p>{t("legal.privacy_s10_text")}</p>

          <h2>{t("legal.privacy_s11_title")}</h2>
          <p>{t("legal.privacy_s11_text")}</p>

          <h2>{t("legal.privacy_s12_title")}</h2>
          <p>{t("legal.privacy_s12_text")}</p>

          <h2>{t("legal.privacy_s13_title")}</h2>
          <p>
            {t("legal.privacy_s13_text")}<br />
            Email: <a href="mailto:privacidade@kalender.com.br" className="text-primary hover:underline">privacidade@kalender.com.br</a>
          </p>

          <h2>{t("legal.privacy_s14_title")}</h2>
          <p>
            {t("legal.privacy_s14_text")}{" "}
            <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.gov.br/anpd</a>.
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

export default function PrivacidadePage() {
  return (
    <TranslationProvider>
      <PrivacidadeContent />
    </TranslationProvider>
  )
}
