"use client"

import { ThemeProvider } from "next-themes"
import { AppProvider } from "@/context/app-context"
import { ScreenRouter } from "@/components/redi/screen-router"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <AppProvider>
        <main className="min-h-screen bg-background">
          <ScreenRouter />
        </main>
      </AppProvider>
    </ThemeProvider>
  )
}
