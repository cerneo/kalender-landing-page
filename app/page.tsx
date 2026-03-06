import { TranslationProvider } from "@/contexts/translation-context"
import { LandingPageContent, type PlanDetails } from "@/components/landing-page-content"

const API_PLANS_URL = "https://api.kalender.com.br/billing/plans/details"

interface ApiPlan {
  id: number
  name: string
  description: string
  price: string
  isActive: boolean
  features: { featureId: number; enabled: boolean }[]
  quotas: { resourceCode: string; limit: number }[]
}

const QUOTA_LABELS: Record<string, (limit: number) => string> = {
  MAX_UNITS: (n) => `Até ${n} ${n === 1 ? "unidade" : "unidades"}`,
  MAX_USERS: (n) => `Até ${n} usuários`,
  MAX_APPOINTMENTS_MONTH: (n) =>
    n >= 10000 ? "Agendamentos ilimitados" : `Até ${n.toLocaleString("pt-BR")} agendamentos/mês`,
  API_CALLS_MONTH: (n) =>
    n >= 100000 ? "API ilimitada" : `${n.toLocaleString("pt-BR")} chamadas API/mês`,
  STORAGE_MB: (n) =>
    n >= 10240 ? `${Math.round(n / 1024)} GB de armazenamento` : `${n} MB de armazenamento`,
}

const FEATURE_LABELS: Record<number, string> = {
  1: "Gestão de clientes (CRM)",
  2: "Relatórios e insights",
  3: "Integrações avançadas",
  4: "WhatsApp Business",
  5: "Comissionamento",
  6: "Controle financeiro",
  7: "Pacotes e promoções",
  8: "Programa de fidelidade",
  9: "Pesquisas de satisfação",
  10: "Suporte prioritário",
  11: "Agendamento online",
  12: "Gestão de profissionais",
}

function transformPlan(api: ApiPlan): PlanDetails {
  const featureDescriptions: string[] = []

  // Add quota descriptions
  for (const q of api.quotas) {
    const fn = QUOTA_LABELS[q.resourceCode]
    if (fn) featureDescriptions.push(fn(q.limit))
  }

  // Add feature descriptions
  for (const f of api.features) {
    if (f.enabled && FEATURE_LABELS[f.featureId]) {
      featureDescriptions.push(FEATURE_LABELS[f.featureId])
    }
  }

  const monthlyPrice = parseFloat(api.price)

  return {
    id: api.id,
    name: api.name,
    description: api.description,
    price: monthlyPrice,
    annualPrice: Math.round(monthlyPrice * 10),
    isActive: api.isActive,
    isRecommended: api.id === 2,
    featureDescriptions,
  }
}

async function getPlans(): Promise<PlanDetails[]> {
  try {
    const res = await fetch(API_PLANS_URL, {
      cache: "no-store",
    })
    if (!res.ok) return []
    const data: ApiPlan[] = await res.json()
    if (!Array.isArray(data)) return []
    return data.filter((p) => p.isActive).map(transformPlan)
  } catch {
    return []
  }
}

export default async function LandingPage() {
  const plans = await getPlans()

  return (
    <TranslationProvider>
      <LandingPageContent initialPlans={plans} />
    </TranslationProvider>
  )
}
