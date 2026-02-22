"use client"

import { useState, useRef } from "react"
import { useTranslation } from "@/contexts/translation-context"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const { t } = useTranslation()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const faqRefs = useRef<(HTMLDivElement | null)[]>([])

  const faqCount = 11
  const faqs = Array.from({ length: faqCount }, (_, i) => ({
    q: t(`landing.faq_q${i + 1}`),
    a: t(`landing.faq_a${i + 1}`),
  }))

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900 scroll-mt-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
              {t("landing.faq_title")}
            </h2>
          </div>

          <div className="space-y-3 stagger-children">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div key={i} className="animate-on-scroll">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className={`w-full flex items-center justify-between p-5 bg-white dark:bg-gray-800 border transition-all text-left ${
                      isOpen
                        ? "rounded-t-2xl border-gray-200 dark:border-gray-700 shadow-sm"
                        : "rounded-2xl border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-sm"
                    }`}
                  >
                    <span
                      className={`font-semibold text-sm pr-4 transition-colors ${
                        isOpen ? "text-primary" : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 transition-all duration-300 ${
                        isOpen ? "rotate-180 text-primary" : "text-gray-400"
                      }`}
                    />
                  </button>
                  <div
                    ref={(el) => {
                      faqRefs.current[i] = el
                    }}
                    className="overflow-hidden transition-all duration-300 ease-out"
                    style={{
                      maxHeight: isOpen ? `${faqRefs.current[i]?.scrollHeight ?? 200}px` : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="px-5 pb-5 pt-2 bg-white dark:bg-gray-800 rounded-b-2xl border border-t-0 border-gray-200 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
