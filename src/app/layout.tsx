import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

import { Navbar,Footer } from '@/sections';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Bahaj Abderrazak | Innovative Full Stack Development",
  description: "I Bahaj Abderrazak specialize in innovative Full Stack Development solutions, blending technical prowess with creativity. Let's collaborate and create impactful projects together",
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children} 
        <SpeedInsights />
        <Analytics/>
        <Footer/>
      </body>
    </html>
  )
}
