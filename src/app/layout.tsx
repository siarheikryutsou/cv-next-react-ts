"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/widgets/header";
import Footer from "@/widgets/footer";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
            <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
