"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { KalenderLogo } from "@/components/kalender-logo"
import { LanguageSwitcher } from "@/components/language-switcher"
import { TranslationProvider, useTranslation } from "@/contexts/translation-context"

type Tab = "termos" | "privacidade"

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

function LegalPageContent() {
  const searchParams = useSearchParams()
  const initialTab = (searchParams.get("tab") === "privacidade" ? "privacidade" : "termos") as Tab
  const [activeTab, setActiveTab] = useState<Tab>(initialTab)
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <KalenderLogo width={32} height={32} />
            <span className="text-lg font-bold text-gray-900">Kalender</span>
          </a>
          <LanguageSwitcher />
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Tab Navigation */}
        <div className="flex gap-1 mb-10 bg-gray-100 p-1 rounded-lg w-fit">
          <button
            onClick={() => setActiveTab("termos")}
            className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
              activeTab === "termos"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {t("legal.terms_tab")}
          </button>
          <button
            onClick={() => setActiveTab("privacidade")}
            className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all ${
              activeTab === "privacidade"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {t("legal.privacy_tab")}
          </button>
        </div>

        {activeTab === "termos" && (
          <article className="prose prose-gray max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{t("legal.terms_title")}</h1>
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
            <ul>
              {t("legal.terms_s4_items").split("|").map((item, i) => {
                const [bold, ...rest] = item.split(": ")
                return rest.length > 0 ? (
                  <li key={i}><strong>{bold}:</strong> {rest.join(": ")}</li>
                ) : (
                  <li key={i}>{item}</li>
                )
              })}
            </ul>

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
        )}

        {activeTab === "privacidade" && (
          <article className="prose prose-gray max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{t("legal.privacy_title")}</h1>
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
            <ul>
              {t("legal.privacy_s3_items").split("|").map((item, i) => {
                const [bold, ...rest] = item.split(": ")
                return rest.length > 0 ? (
                  <li key={i}><strong>{bold}:</strong> {rest.join(": ")}</li>
                ) : (
                  <li key={i}>{item}</li>
                )
              })}
            </ul>

            <h2>{t("legal.privacy_s4_title")}</h2>
            <p>{t("legal.privacy_s4_text")}</p>
            <ul>
              {t("legal.privacy_s4_items").split("|").map((item, i) => {
                const [bold, ...rest] = item.split(": ")
                return rest.length > 0 ? (
                  <li key={i}><strong>{bold}:</strong> {rest.join(": ")}</li>
                ) : (
                  <li key={i}>{item}</li>
                )
              })}
            </ul>
            <p>{t("legal.privacy_s4_footer")}</p>

            <h2>{t("legal.privacy_s5_title")}</h2>
            <ul>
              {t("legal.privacy_s5_items").split("|").map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h2>{t("legal.privacy_s6_title")}</h2>
            <ul>
              {t("legal.privacy_s6_items").split("|").map((item, i) => {
                const [bold, ...rest] = item.split(": ")
                return rest.length > 0 ? (
                  <li key={i}><strong>{bold}:</strong> {rest.join(": ")}</li>
                ) : (
                  <li key={i}>{item}</li>
                )
              })}
            </ul>

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
            <ul>
              {t("legal.privacy_s8_items").split("|").map((item, i) => {
                const [bold, ...rest] = item.split(": ")
                return rest.length > 0 ? (
                  <li key={i}><strong>{bold}:</strong> {rest.join(": ")}</li>
                ) : (
                  <li key={i}>{item}</li>
                )
              })}
            </ul>
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
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>{t("legal.footer_copyright")}</p>
        </div>
      </footer>
    </div>
  )
}

export default function LegalPage() {
  return (
    <TranslationProvider>
      <LegalPageContent />
    </TranslationProvider>
  )
}
