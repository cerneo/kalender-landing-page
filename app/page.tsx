import { TranslationProvider } from "@/contexts/translation-context"
import { LandingPageContent, type PlanDetails } from "@/components/landing-page-content"

const API_PLANS_URL = "https://api.kalender.com.br/billing/plans/details"

async function getPlans(): Promise<PlanDetails[]> {
  try {
    const res = await fetch(API_PLANS_URL, {
      cache: 'no-store',
    })
    if (!res.ok) return []
    const data = await res.json()
    return Array.isArray(data) ? data.filter((p: PlanDetails) => p.isActive) : []
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
