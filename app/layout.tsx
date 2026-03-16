import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kalender - Revenue OS para Negócios com Atendimento",
  description: "Transforme atendimento em receita recorrente. Reduza no-show, aumente ocupação, automatize cobranças e fidelize clientes com IA. Para clínicas, salões, barbearias, estética e consultórios. Teste grátis 7 dias.",
  keywords: "revenue os, sistema gestão receita, reduzir no-show, aumentar ocupação agenda, CRM clientes serviços, WhatsApp IA agendamento, plataforma atendimento, sistema clínica, sistema salão, sistema barbearia, automação agendamento, pacotes créditos recorrência",
  authors: [{ name: "Kalender" }],
  creator: "Kalender",
  publisher: "Kalender",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kalender.com.br"),
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "en": "/en",
      "es": "/es",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://kalender.com.br",
    title: "Kalender - Revenue OS para Negócios com Atendimento",
    description: "Transforme atendimento em receita recorrente. Reduza no-show, aumente ocupação e fidelize clientes com IA. Teste grátis 7 dias.",
    siteName: "Kalender",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kalender - Revenue OS para Negócios com Atendimento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalender - Revenue OS para Negócios com Atendimento",
    description: "Transforme atendimento em receita recorrente. Reduza no-show, aumente ocupação e fidelize clientes com IA.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/kalender-logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/kalender-logo.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/kalender-logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/kalender-logo.png",
  },
  // verification: {
  //   google: "GOOGLE_SEARCH_CONSOLE_ID",
  // },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Kalender",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
      priceValidUntil: "2026-12-31",
      description: "Teste grátis por 7 dias"
    },
    description: "Revenue OS para negócios com atendimento. Reduza no-show, aumente ocupação, automatize cobranças e fidelize clientes com IA.",
    featureList: [
      "Redução de no-show com confirmação automática",
      "Pagamentos e cobranças antecipadas",
      "CRM e retenção de clientes",
      "Atendimento por IA no WhatsApp",
      "Inteligência operacional e relatórios",
      "Pacotes, créditos e recorrência",
      "Agenda inteligente multi-profissional"
    ],
    screenshot: "https://kalender.com.br/og-image.png",
    url: "https://kalender.com.br",
    publisher: {
      "@type": "Organization",
      name: "Kalender",
      logo: {
        "@type": "ImageObject",
        url: "https://kalender.com.br/kalender-logo.png"
      }
    }
  }

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/kalender-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/kalender-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/kalender-logo.png" />
        <meta name="theme-color" content="#0EA5E9" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <Script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "6d342d99eda9462bbcf92b1fbadac713"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
