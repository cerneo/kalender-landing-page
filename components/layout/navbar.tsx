"use client"

import { useState, useEffect } from "react"
import { KalenderLogo } from "@/components/kalender-logo"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTranslation } from "@/contexts/translation-context"
import type { Locale } from "@/lib/translations"
import { ArrowRight, ChevronDown, Globe, Menu, X } from "lucide-react"

const LOGIN_URL = "https://app.kalender.com.br/login"
const ONBOARDING_URL = "https://app.kalender.com.br/onboarding"

const LANGUAGES: { code: Locale; label: string; flag: string }[] = [
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
]

const NAV_SECTIONS = ["features", "pricing", "faq"] as const

export function Navbar() {
  const { t, language, setLanguage } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const scrollY = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        setScrolled(scrollY > 20)
        setScrollProgress(docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0)

        let current = ""
        for (const id of NAV_SECTIONS) {
          const el = document.getElementById(id)
          if (el) {
            const rect = el.getBoundingClientRect()
            if (rect.top <= 120 && rect.bottom > 120) {
              current = id
            }
          }
        }
        setActiveSection(current)
        ticking = false
      })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return
    const close = () => setMobileMenuOpen(false)
    window.addEventListener("scroll", close, { passive: true })
    return () => window.removeEventListener("scroll", close)
  }, [mobileMenuOpen])

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  const navItems = [
    { label: t("landing.nav_features"), id: "features" },
    { label: t("landing.nav_pricing"), id: "pricing" },
    { label: t("landing.nav_faq"), id: "faq" },
  ]

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0]

  const LanguageSelector = ({ dark }: { dark?: boolean }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-sm font-medium transition-all border ${
            dark
              ? "border-white/15 text-gray-300 hover:text-white hover:bg-white/10"
              : "border-gray-200 text-gray-700 hover:bg-gray-50"
          }`}
        >
          <Globe className="h-3.5 w-3.5" />
          <span>{currentLang.flag}</span>
          <span className="hidden sm:inline text-xs">{currentLang.code.toUpperCase()}</span>
          <ChevronDown className="h-3 w-3 opacity-60" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center gap-2.5 cursor-pointer ${
              language === lang.code ? "bg-primary/10 text-primary font-medium" : ""
            }`}
          >
            <span className="text-base">{lang.flag}</span>
            <span>{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5">
        <div
          className="h-full bg-gradient-to-r from-primary to-cyan-400 transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
            >
              <KalenderLogo width={36} height={36} />
              <span
                className={`text-xl font-bold tracking-tight hidden sm:block transition-colors ${
                  scrolled || mobileMenuOpen
                    ? "text-gray-900 dark:text-white"
                    : "text-white"
                }`}
              >
                Kalender
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? "text-primary bg-primary/10"
                      : scrolled
                      ? "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10"
                      : "text-gray-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <LanguageSelector dark={!scrolled} />
              </div>
              <Button
                variant="ghost"
                className={`hidden md:inline-flex rounded-full text-sm ${
                  scrolled
                    ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10"
                    : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
                onClick={() => (window.location.href = LOGIN_URL)}
              >
                {t("landing.nav_login")}
              </Button>
              <Button
                className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white font-semibold text-sm rounded-full px-5"
                onClick={() => (window.location.href = ONBOARDING_URL)}
              >
                {t("landing.nav_cta")}
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden rounded-full ${
                  scrolled || mobileMenuOpen
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-white"
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
              mobileMenuOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <div className="pt-4 pb-2 border-t border-gray-200/20 dark:border-gray-700/20">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`text-left py-2.5 px-3 rounded-lg font-medium text-sm transition-colors ${
                      activeSection === item.id
                        ? "text-primary bg-primary/5"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="border-t border-gray-100 dark:border-gray-800 mt-2 pt-2 flex flex-col gap-2">
                  <div className="px-3 py-2">
                    <LanguageSelector />
                  </div>
                  <Button
                    variant="outline"
                    className="justify-start rounded-full"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      window.location.href = LOGIN_URL
                    }}
                  >
                    {t("landing.nav_login")}
                  </Button>
                  <Button
                    className="justify-start bg-primary text-white rounded-full"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      window.location.href = ONBOARDING_URL
                    }}
                  >
                    {t("landing.nav_cta")} <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
