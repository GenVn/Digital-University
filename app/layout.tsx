import { cn } from "@/lib/utils"
import "@/styles/globals.css"
import localFont from "next/font/local"

const fontSegoeUI = localFont({
  src: "../assets/fonts/Segoe-UI.ttf",
})

const fontQuickSand = localFont({
  src: "../assets/fonts/QuickSand.ttf",
})

export const metadata = {
  title: "Digital University",
  description: "Mạng xã hội đa nền tảng",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          fontQuickSand.className
        )}
      >
        {children}
      </body>
    </html>
  )
}
