import { ReactNode } from "react"
import "./globals.css"
import Head from "./head"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head />
      <body>{children}</body>
    </html>
  )
}
