import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { barberConfig } from "@/lib/config"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: `${barberConfig.name} - Premium Barbershop`,
  description: barberConfig.description,
  keywords: "barbearia, corte masculino, barba, grooming, premium barbershop",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
