import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/widgets/header";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Siarhei Kryutsou | Front End Developer',
  description: 'Personal site of Siarhei Kryutsou | Front End Developer',
}

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  )
}
