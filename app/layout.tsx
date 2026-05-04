import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contract Deadline Enforcer — Never Miss a Deliverable',
  description: 'AI-powered contract parsing that extracts deadlines and deliverables, creates calendar events, and sends escalating reminders to your team.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bfc64fd0-dd40-4172-a692-a6f8f4c5b569"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
