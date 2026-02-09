"use client"

import { useState, useEffect, useRef } from "react"
import { KalenderLogo } from "@/components/kalender-logo"
import {
  Calendar,
  ArrowRight,
  BarChart3,
  CheckCircle,
  Clock,
  TrendingUp,
  ChevronDown,
  Menu,
  X,
  Users,
  Star,
  MessageSquare,
  Smartphone,
  DollarSign,
  Package,
  Heart,
  Gift,
  Tag,
  Bell,
  Link2,
  Bot,
  Building2,
  Lock,
  Boxes,
  ClipboardList,
  Send,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { TranslationProvider, useTranslation } from "@/contexts/translation-context"
import type { Locale } from "@/lib/translations"

// ─── Constants ────────────────────────────────────────────────────────────────

const LOGIN_URL = "https://app.kalender.com.br/login"
const ONBOARDING_URL = "https://app.kalender.com.br/onboarding"
const API_PLANS_URL = "https://api.kalender.com.br/billing/plans/details"

// ─── Types ────────────────────────────────────────────────────────────────────

interface PlanDetails {
  id: number
  name: string
  description: string
  price: number
  annualPrice: number
  isActive: boolean
  isRecommended: boolean
  quotas: Record<string, number>
  features: Record<string, boolean>
  featureDescriptions: string[]
}

// ─── Scroll Animation Hook ───────────────────────────────────────────────────

function useScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    const elements = document.querySelectorAll(".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

// ─── Header + Active Section + Scroll Progress Hook ─────────────────────────

const NAV_SECTIONS = ["features", "pricing", "faq"] as const

function useNavigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

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
        setShowBackToTop(scrollY > 600)

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

  return { scrolled, activeSection, scrollProgress, showBackToTop }
}

// ─── Price Formatter ─────────────────────────────────────────────────────────

function formatPrice(price: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

// ─── Language Labels ─────────────────────────────────────────────────────────

const LANGUAGES: { code: Locale; label: string; flag: string }[] = [
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
]

// ─── Module Category Structure ───────────────────────────────────────────────

const MODULE_CATEGORIES = [
  {
    titleKey: "mod_operations",
    color: "from-sky-500 to-blue-600",
    modules: [
      { icon: Calendar, nameKey: "mod_scheduling", descKey: "mod_scheduling_desc" },
      { icon: Clock, nameKey: "mod_availability", descKey: "mod_availability_desc" },
      { icon: Users, nameKey: "mod_professionals", descKey: "mod_professionals_desc" },
    ],
  },
  {
    titleKey: "mod_financial",
    color: "from-emerald-500 to-green-600",
    modules: [
      { icon: DollarSign, nameKey: "mod_cashflow", descKey: "mod_cashflow_desc" },
      { icon: BarChart3, nameKey: "mod_commissions", descKey: "mod_commissions_desc" },
      { icon: TrendingUp, nameKey: "mod_reports", descKey: "mod_reports_desc" },
    ],
  },
  {
    titleKey: "mod_clients",
    color: "from-violet-500 to-purple-600",
    modules: [
      { icon: Heart, nameKey: "mod_crm", descKey: "mod_crm_desc" },
      { icon: Gift, nameKey: "mod_loyalty", descKey: "mod_loyalty_desc" },
      { icon: Star, nameKey: "mod_nps", descKey: "mod_nps_desc" },
    ],
  },
  {
    titleKey: "mod_sales",
    color: "from-amber-500 to-orange-600",
    modules: [
      { icon: ClipboardList, nameKey: "mod_catalog", descKey: "mod_catalog_desc" },
      { icon: Tag, nameKey: "mod_promotions", descKey: "mod_promotions_desc" },
      { icon: Package, nameKey: "mod_inventory", descKey: "mod_inventory_desc" },
    ],
  },
  {
    titleKey: "mod_channels",
    color: "from-green-500 to-teal-600",
    modules: [
      { icon: Link2, nameKey: "mod_booking_link", descKey: "mod_booking_link_desc" },
      { icon: MessageSquare, nameKey: "mod_whatsapp", descKey: "mod_whatsapp_desc" },
      { icon: Smartphone, nameKey: "mod_instagram", descKey: "mod_instagram_desc" },
    ],
  },
  {
    titleKey: "mod_automation",
    color: "from-cyan-500 to-sky-600",
    modules: [
      { icon: Bot, nameKey: "mod_ai_studio", descKey: "mod_ai_studio_desc" },
      { icon: Bell, nameKey: "mod_notifications", descKey: "mod_notifications_desc" },
      { icon: Send, nameKey: "mod_messages", descKey: "mod_messages_desc" },
    ],
  },
  {
    titleKey: "mod_management",
    color: "from-slate-500 to-gray-700",
    modules: [
      { icon: Building2, nameKey: "mod_multi_location", descKey: "mod_multi_location_desc" },
      { icon: Lock, nameKey: "mod_permissions", descKey: "mod_permissions_desc" },
      { icon: Boxes, nameKey: "mod_leads", descKey: "mod_leads_desc" },
    ],
  },
]

// ─── Main Page Component (Wrapper with TranslationProvider) ──────────────────

export default function LandingPage() {
  return (
    <TranslationProvider>
      <LandingPageContent />
    </TranslationProvider>
  )
}

// ─── Landing Page Content ────────────────────────────────────────────────────

function LandingPageContent() {
  const { t, language, setLanguage } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [plans, setPlans] = useState<PlanDetails[]>([])
  const [plansLoading, setPlansLoading] = useState(true)
  const [plansError, setPlansError] = useState(false)
  const [isAnnual, setIsAnnual] = useState(true)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const faqRefs = useRef<(HTMLDivElement | null)[]>([])
  const { scrolled, activeSection, scrollProgress, showBackToTop } = useNavigation()
  useScrollAnimations()

  // Update html lang attribute when language changes
  useEffect(() => {
    const langMap: Record<string, string> = { pt: "pt-BR", en: "en", es: "es" }
    document.documentElement.lang = langMap[language] || "pt-BR"
  }, [language])

  // Close mobile menu on scroll
  useEffect(() => {
    if (!mobileMenuOpen) return
    const close = () => setMobileMenuOpen(false)
    window.addEventListener("scroll", close, { passive: true })
    return () => window.removeEventListener("scroll", close)
  }, [mobileMenuOpen])

  // Fetch plans from API
  useEffect(() => {
    setPlansLoading(true)
    setPlansError(false)
    fetch(API_PLANS_URL)
      .then((res) => {
        if (!res.ok) throw new Error("API error")
        return res.json()
      })
      .then((data: PlanDetails[]) => {
        const active = Array.isArray(data) ? data.filter((p) => p.isActive) : []
        console.log("[Kalender] Plans loaded:", active.length, active.map((p) => p.name))
        setPlans(active)
        setPlansLoading(false)
      })
      .catch((err) => {
        console.error("[Kalender] Failed to fetch plans:", err)
        setPlansError(true)
        setPlansLoading(false)
      })
  }, [])

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  // ─── Translated Data ────────────────────────────────────────────────────

  const navItems = [
    { label: t("landing.nav_features"), id: "features" },
    { label: t("landing.nav_pricing"), id: "pricing" },
    { label: t("landing.nav_faq"), id: "faq" },
  ]

  const heroAppointments = [
    { time: "09:00", client: t("landing.hero_client1"), service: t("landing.hero_service1"), color: "bg-primary", status: t("landing.hero_status_confirmed") },
    { time: "10:30", client: t("landing.hero_client2"), service: t("landing.hero_service2"), color: "bg-violet-500", status: t("landing.hero_status_waiting") },
    { time: "13:00", client: t("landing.hero_client3"), service: t("landing.hero_service3"), color: "bg-emerald-500", status: t("landing.hero_status_confirmed") },
    { time: "15:00", client: t("landing.hero_client4"), service: t("landing.hero_service4"), color: "bg-amber-500", status: t("landing.hero_status_new") },
  ]

  const socialStats = [
    { value: t("landing.social_revenue"), label: t("landing.social_revenue_label"), icon: TrendingUp, color: "text-emerald-500" },
    { value: t("landing.social_noshow"), label: t("landing.social_noshow_label"), icon: Calendar, color: "text-primary" },
    { value: t("landing.social_time"), label: t("landing.social_time_label"), icon: Clock, color: "text-violet-500" },
    { value: t("landing.social_satisfaction"), label: t("landing.social_satisfaction_label"), icon: Star, color: "text-amber-500" },
  ]

  const painPoints = [
    { title: t("landing.pain1_title"), desc: t("landing.pain1_desc"), icon: Calendar },
    { title: t("landing.pain2_title"), desc: t("landing.pain2_desc"), icon: DollarSign },
    { title: t("landing.pain3_title"), desc: t("landing.pain3_desc"), icon: Users },
  ]

  const howSteps = [
    { step: "1", title: t("landing.how1_title"), desc: t("landing.how1_desc"), icon: ClipboardList },
    { step: "2", title: t("landing.how2_title"), desc: t("landing.how2_desc"), icon: Link2 },
    { step: "3", title: t("landing.how3_title"), desc: t("landing.how3_desc"), icon: BarChart3 },
  ]

  const aiPoints = [
    t("landing.ai_point1"),
    t("landing.ai_point2"),
    t("landing.ai_point3"),
    t("landing.ai_point4"),
  ]

  const aiChatMessages = [
    { from: "user", text: t("landing.ai_chat_msg1"), time: "14:02" },
    { from: "bot", text: t("landing.ai_chat_msg2"), time: "14:02" },
    { from: "user", text: t("landing.ai_chat_msg3"), time: "14:03" },
    { from: "bot", text: t("landing.ai_chat_msg4"), time: "14:03" },
  ]

  const integrations = [
    { name: "Google Calendar", icon: Calendar },
    { name: "WhatsApp Business", icon: MessageSquare },
    { name: "Instagram", icon: Smartphone },
    { name: "Stripe", icon: DollarSign },
    { name: "Microsoft Outlook", icon: Calendar },
  ]

  const partners = [
    { name: "Magalu Cloud", icon: Building2 },
    { name: "Meta Partner", icon: MessageSquare },
    { name: "WhatsApp", icon: MessageSquare },
    { name: "Instagram", icon: Smartphone },
    { name: "Google", icon: Calendar },
    { name: "Microsoft", icon: Calendar },
  ]

  const faqCount = 8
  const faqs = Array.from({ length: faqCount }, (_, i) => ({
    q: t(`landing.faq_q${i + 1}`),
    a: t(`landing.faq_a${i + 1}`),
  }))

  // ─── Language Switcher Dropdown Component ────────────────────────────────

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0]

  const LanguageSelector = ({ dark }: { dark?: boolean }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors border ${
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
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SCROLL PROGRESS BAR                                              */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5">
        <div
          className="h-full bg-gradient-to-r from-primary to-cyan-400 transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* HEADER                                                           */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <KalenderLogo width={36} height={36} />
              <span className={`text-xl font-bold tracking-tight hidden sm:block ${scrolled ? "text-gray-900" : "text-white"}`}>
                Kalender
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative text-sm font-medium transition-colors py-1 ${
                    activeSection === item.id
                      ? "text-primary"
                      : scrolled
                      ? "text-gray-700 hover:text-primary"
                      : "text-gray-200 hover:text-white"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden md:block">
                <LanguageSelector dark={!scrolled} />
              </div>
              <Button
                variant="ghost"
                className={`hidden md:inline-flex text-sm ${scrolled ? "text-gray-700 hover:bg-gray-100" : "text-gray-200 hover:text-white hover:bg-white/10"}`}
                onClick={() => (window.location.href = LOGIN_URL)}
              >
                {t("landing.nav_login")}
              </Button>
              <Button
                className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white font-semibold text-sm"
                onClick={() => (window.location.href = ONBOARDING_URL)}
              >
                {t("landing.nav_cta")}
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden ${scrolled ? "text-gray-700" : "text-white"}`}
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
            <div className="pt-4 pb-2 border-t border-gray-200/20">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`text-left py-2.5 px-3 rounded-lg font-medium text-sm transition-colors ${
                      activeSection === item.id
                        ? "text-primary bg-primary/5"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="border-t border-gray-100 mt-2 pt-2 flex flex-col gap-2">
                  <div className="px-3 py-2">
                    <LanguageSelector />
                  </div>
                  <Button variant="outline" className="justify-start" onClick={() => { setMobileMenuOpen(false); window.location.href = LOGIN_URL }}>
                    {t("landing.nav_login")}
                  </Button>
                  <Button className="justify-start bg-primary text-white" onClick={() => { setMobileMenuOpen(false); window.location.href = ONBOARDING_URL }}>
                    {t("landing.nav_cta")} <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* HERO                                                             */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
                <div className="w-2 h-2 bg-primary rounded-full mr-2.5 animate-pulse" />
                <span className="text-primary text-sm font-medium">{t("landing.hero_badge")}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                {t("landing.hero_title")}{" "}
                <span className="text-gradient">{t("landing.hero_title_highlight")}</span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
                {t("landing.hero_description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold h-13 px-8 text-base rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                  onClick={() => (window.location.href = ONBOARDING_URL)}
                >
                  {t("landing.hero_cta_primary")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-13 px-8 text-base border-gray-600 text-gray-300 hover:bg-white/5 hover:text-white rounded-xl"
                  onClick={() => scrollTo("features")}
                >
                  {t("landing.hero_cta_secondary")}
                </Button>
              </div>

              <p className="text-sm text-gray-500">{t("landing.hero_note")}</p>
            </div>

            {/* Hero Visual - Calendar Mockup */}
            <div className="relative hidden lg:block">
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-2xl">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />

                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-white font-semibold text-sm">{t("landing.hero_month")}</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="px-2.5 py-1 rounded-md bg-primary/20 text-primary text-xs font-medium">{t("landing.hero_view_day")}</div>
                    <div className="px-2.5 py-1 rounded-md text-gray-400 text-xs">{t("landing.hero_view_week")}</div>
                    <div className="px-2.5 py-1 rounded-md text-gray-400 text-xs">{t("landing.hero_view_month")}</div>
                  </div>
                </div>

                {/* Appointment Cards */}
                <div className="space-y-2.5">
                  {heroAppointments.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/[0.07] rounded-lg p-3 hover:bg-white/[0.1] transition-colors">
                      <div className={`w-1 h-10 ${item.color} rounded-full`} />
                      <div className="text-xs text-gray-400 font-mono w-10">{item.time}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-sm font-medium truncate">{item.client}</div>
                        <div className="text-gray-400 text-xs truncate">{item.service}</div>
                      </div>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                        item.status === t("landing.hero_status_confirmed") ? "bg-emerald-500/20 text-emerald-400" :
                        item.status === t("landing.hero_status_waiting") ? "bg-amber-500/20 text-amber-400" :
                        "bg-primary/20 text-primary"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-white font-bold text-lg">12</div>
                    <div className="text-gray-500 text-[10px]">{t("landing.hero_stat_appointments")}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-emerald-400 font-bold text-lg">R$ 2.340</div>
                    <div className="text-gray-500 text-[10px]">{t("landing.hero_stat_revenue")}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-primary font-bold text-lg">92%</div>
                    <div className="text-gray-500 text-[10px]">{t("landing.hero_stat_occupation")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* SOCIAL PROOF BAR                                                 */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {socialStats.map((stat, i) => (
              <div key={i} className="animate-on-scroll text-center">
                <stat.icon className={`h-6 w-6 ${stat.color} mx-auto mb-2`} />
                <div className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PAIN POINTS                                                      */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              {t("landing.pain_title")}
            </h2>
            <p className="text-gray-500 text-lg">{t("landing.pain_subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 stagger-children">
            {painPoints.map((pain, i) => (
              <Card key={i} className="animate-on-scroll border-red-100 bg-red-50/50 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                    <pain.icon className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{pain.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{pain.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10 animate-on-scroll">
            <p className="text-xl font-semibold text-gray-900">
              {t("landing.pain_transition")}{" "}
              <span className="text-gradient">{t("landing.pain_transition_highlight")}</span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* HOW IT WORKS                                                     */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              {t("landing.how_title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {howSteps.map((item, i) => (
              <div key={i} className="animate-on-scroll text-center">
                <div className="relative mx-auto mb-5">
                  <div className="bg-gradient-to-br from-primary to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-primary/20">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white text-primary border-2 border-primary w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shadow-sm">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* MODULES / FEATURES                                               */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="features" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 animate-on-scroll">
            <Badge className="bg-primary/10 text-primary border-0 mb-4 px-4 py-1.5">{t("landing.features_badge")}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              {t("landing.features_title")}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              {t("landing.features_subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto stagger-children">
            {MODULE_CATEGORIES.map((cat, ci) => (
              <Card key={ci} className="animate-on-scroll border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all group">
                <CardHeader className="pb-3">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${cat.color} bg-clip-text`}>
                    <CardTitle className={`text-sm font-bold bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                      {t(`landing.${cat.titleKey}`)}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  {cat.modules.map((mod, mi) => (
                    <div key={mi} className="flex items-start gap-3">
                      <div className="bg-gray-100 group-hover:bg-gray-50 p-1.5 rounded-lg mt-0.5 transition-colors">
                        <mod.icon className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{t(`landing.${mod.nameKey}`)}</div>
                        <div className="text-xs text-gray-500 leading-relaxed">{t(`landing.${mod.descKey}`)}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* AI HIGHLIGHT                                                     */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-on-scroll-left">
              <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 mb-4 px-4 py-1.5">{t("landing.ai_badge")}</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                {t("landing.ai_title")}{" "}
                <span className="text-gradient">{t("landing.ai_title_highlight")}</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {t("landing.ai_description")}
              </p>

              <div className="space-y-4 mb-8">
                {aiPoints.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl shadow-lg shadow-primary/25"
                onClick={() => (window.location.href = ONBOARDING_URL)}
              >
                {t("landing.ai_cta")} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* WhatsApp Chat Mockup */}
            <div className="animate-on-scroll-right hidden lg:block">
              <div className="bg-[#0b141a] rounded-2xl p-5 shadow-2xl border border-white/5 max-w-sm ml-auto">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{t("landing.ai_chat_name")}</div>
                    <div className="text-green-400 text-[10px]">{t("landing.ai_chat_status")}</div>
                  </div>
                </div>
                <div className="space-y-2.5">
                  {aiChatMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`rounded-lg p-2.5 max-w-[85%] ${
                        msg.from === "user"
                          ? "bg-[#202c33] rounded-tl-sm"
                          : "bg-[#005c4b] rounded-tr-sm ml-auto"
                      }`}
                    >
                      <p className="text-gray-200 text-xs">{msg.text}</p>
                      <span className={`text-[9px] mt-0.5 block text-right ${msg.from === "user" ? "text-gray-500" : "text-gray-400"}`}>
                        {msg.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* INTEGRATIONS                                                     */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-3">
              {t("landing.integrations_title")}
            </h2>
            <p className="text-gray-500 mb-10">{t("landing.integrations_subtitle")}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center animate-on-scroll">
            {integrations.map((integration, i) => (
              <div key={i} className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                  <integration.icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-medium">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PARTNERS / TECH                                                  */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll text-center">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">{t("landing.partners_label")}</p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 md:gap-x-16">
              {partners.map((partner, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-400">
                  <partner.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* PRICING                                                          */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <Badge className="bg-primary/10 text-primary border-0 mb-4 px-4 py-1.5">{t("landing.pricing_badge")}</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              {t("landing.pricing_title")}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
              {t("landing.pricing_subtitle")}
            </p>

            {/* Annual Toggle */}
            <div className="flex items-center justify-center gap-3">
              <span className={`text-sm font-medium ${!isAnnual ? "text-gray-900" : "text-gray-400"}`}>{t("landing.pricing_monthly")}</span>
              <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-primary" />
              <span className={`text-sm font-medium ${isAnnual ? "text-gray-900" : "text-gray-400"}`}>{t("landing.pricing_annual")}</span>
              {isAnnual && <Badge className="bg-emerald-100 text-emerald-700 border-0 text-xs">{t("landing.pricing_save")}</Badge>}
            </div>
          </div>

          {/* Pricing Cards */}
          {plansLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="border-gray-200 animate-pulse">
                  <CardContent className="p-6">
                    <div className="h-6 bg-gray-200 rounded w-24 mb-4" />
                    <div className="h-10 bg-gray-200 rounded w-32 mb-4" />
                    <div className="space-y-2">
                      {[1, 2, 3].map((j) => (
                        <div key={j} className="h-4 bg-gray-100 rounded w-full" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : plansError ? (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">{language === "en" ? "Could not load plans. Please try again." : language === "es" ? "No se pudieron cargar los planes. Intenta de nuevo." : "Não foi possível carregar os planos. Tente novamente."}</p>
              <Button variant="outline" onClick={() => window.location.reload()}>
                {language === "en" ? "Reload" : language === "es" ? "Recargar" : "Recarregar"}
              </Button>
            </div>
          ) : (
            <div className={`grid gap-6 max-w-6xl mx-auto stagger-children ${
              plans.length <= 2 ? "md:grid-cols-2 max-w-3xl" :
              plans.length === 3 ? "md:grid-cols-3 max-w-5xl" :
              "md:grid-cols-2 lg:grid-cols-4"
            }`}>
              {plans.map((plan) => {
                const monthlyPrice = isAnnual ? plan.annualPrice / 12 : plan.price
                const isEnterprise = plan.name.toLowerCase() === "enterprise"
                const isRecommended = plan.isRecommended

                return (
                  <Card
                    key={plan.id}
                    className={`animate-on-scroll relative transition-all hover:shadow-lg ${
                      isRecommended ? "border-2 border-primary shadow-md scale-[1.02]" : "border-gray-200"
                    }`}
                  >
                    {isRecommended && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-primary text-white font-bold px-4 py-1 shadow-sm">{t("landing.pricing_popular")}</Badge>
                      </div>
                    )}

                    <CardHeader className="text-center pb-2 pt-8">
                      <CardTitle className="text-xl font-bold text-gray-900">{plan.name}</CardTitle>
                      <p className="text-gray-500 text-sm mt-1">{plan.description}</p>
                    </CardHeader>

                    <CardContent className="px-6 pb-6">
                      <div className="text-center mb-6">
                        {isEnterprise ? (
                          <div className="text-2xl font-bold text-gray-900 py-2">{t("landing.pricing_custom")}</div>
                        ) : (
                          <>
                            <div className="text-4xl font-bold text-gray-900">
                              {formatPrice(monthlyPrice)}
                              <span className="text-base font-normal text-gray-500">{t("landing.pricing_per_month")}</span>
                            </div>
                            {isAnnual && (
                              <div className="text-xs text-gray-400 mt-1">
                                {formatPrice(plan.annualPrice)} {t("landing.pricing_billed_annually")}
                              </div>
                            )}
                            {isAnnual && plan.price > 0 && (
                              <div className="text-xs text-emerald-600 font-medium mt-1">
                                {t("landing.pricing_savings_prefix")} {formatPrice((plan.price * 12) - plan.annualPrice)}{t("landing.pricing_savings_suffix")}
                              </div>
                            )}
                          </>
                        )}
                      </div>

                      {/* Features */}
                      <div className="space-y-2.5 mb-6">
                        {plan.featureDescriptions.map((feature, fi) => (
                          <div key={fi} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        className={`w-full ${
                          isRecommended
                            ? "bg-primary hover:bg-primary/90 text-white shadow-sm"
                            : isEnterprise
                            ? "bg-gray-900 hover:bg-gray-800 text-white"
                            : "bg-white border-2 border-gray-200 text-gray-900 hover:border-primary hover:text-primary"
                        }`}
                        onClick={() =>
                          (window.location.href = isEnterprise ? "/contact" : ONBOARDING_URL)
                        }
                      >
                        {isEnterprise ? t("landing.pricing_cta_enterprise") : t("landing.pricing_cta")}
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}

          <p className="text-center text-xs text-gray-400 mt-8">
            {t("landing.pricing_footnote")}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* FAQ                                                              */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section id="faq" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
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
                    className={`w-full flex items-center justify-between p-5 bg-white border transition-all text-left ${
                      isOpen
                        ? "rounded-t-xl border-gray-200 shadow-sm"
                        : "rounded-xl border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <span className={`font-semibold text-sm pr-4 transition-colors ${isOpen ? "text-primary" : "text-gray-900"}`}>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 transition-all duration-300 ${
                        isOpen ? "rotate-180 text-primary" : "text-gray-400"
                      }`}
                    />
                  </button>
                  <div
                    ref={(el) => { faqRefs.current[i] = el }}
                    className="overflow-hidden transition-all duration-300 ease-out"
                    style={{
                      maxHeight: isOpen ? `${faqRefs.current[i]?.scrollHeight ?? 200}px` : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="px-5 pb-5 pt-2 bg-white rounded-b-xl border border-t-0 border-gray-200">
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* FINAL CTA                                                        */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
        <div className="container mx-auto px-4 text-center max-w-3xl animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            {t("landing.cta_title")}
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            {t("landing.cta_subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold h-13 px-8 text-base rounded-xl shadow-lg shadow-primary/25"
              onClick={() => (window.location.href = ONBOARDING_URL)}
            >
              {t("landing.cta_primary")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-13 px-8 text-base border-gray-600 text-gray-300 hover:bg-white/5 hover:text-white rounded-xl"
              onClick={() => (window.location.href = LOGIN_URL)}
            >
              {t("landing.cta_secondary")}
            </Button>
          </div>
          <p className="text-sm text-gray-500">{t("landing.cta_note")}</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* FOOTER                                                           */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <footer className="bg-gray-950 text-gray-400 py-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <KalenderLogo width={28} height={28} />
                <span className="text-white font-bold text-lg">Kalender</span>
              </div>
              <p className="text-sm leading-relaxed">
                {t("landing.footer_description")}
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">{t("landing.footer_product")}</h4>
              <ul className="space-y-2.5">
                {[
                  { label: t("landing.footer_features"), action: () => scrollTo("features") },
                  { label: t("landing.footer_pricing"), action: () => scrollTo("pricing") },
                  { label: t("landing.footer_faq"), action: () => scrollTo("faq") },
                ].map((item, i) => (
                  <li key={i}>
                    <button onClick={item.action} className="text-sm hover:text-white transition-colors">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">{t("landing.footer_company")}</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="/contact" className="text-sm hover:text-white transition-colors">{t("landing.footer_contact")}</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">{t("landing.footer_legal")}</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="/legal" className="text-sm hover:text-white transition-colors">{t("landing.footer_terms")}</a>
                </li>
                <li>
                  <a href="/legal" className="text-sm hover:text-white transition-colors">{t("landing.footer_privacy")}</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-8 text-center text-sm">
            <p>{t("landing.footer_copyright")}</p>
          </div>
        </div>
      </footer>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* BACK TO TOP                                                      */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 bg-primary text-white p-3 rounded-full shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary/90 hover:scale-110 ${
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label={t("landing.back_to_top")}
      >
        <ChevronDown className="h-5 w-5 rotate-180" />
      </button>
    </div>
  )
}
