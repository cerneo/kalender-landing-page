"use client"

import { useEffect } from "react"
import { TranslationProvider, useTranslation } from "@/contexts/translation-context"
import { Navbar } from "@/components/layout/navbar"
import { FooterSection } from "@/components/sections/footer"
import { ArrowLeft } from "lucide-react"

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

function TermosContent() {
  const { t, language } = useTranslation()

  useEffect(() => {
    const langMap: Record<string, string> = { pt: "pt-BR", en: "en", es: "es" }
    document.documentElement.lang = langMap[language] || "pt-BR"
  }, [language])

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans antialiased flex flex-col">
      <Navbar solid />

      <main className="flex-1 pt-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <a href="/" className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            {t("landing.nav_features") ? "Voltar" : "Back"}
          </a>

          <article className="prose prose-zinc max-w-none">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white mb-2 tracking-tight">{t("legal.terms_title")}</h1>
            <p className="text-sm text-zinc-400 mb-10">{t("legal.terms_updated")}</p>

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
      </main>

      <FooterSection />
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
