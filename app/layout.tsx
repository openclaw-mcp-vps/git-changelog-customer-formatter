import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GitChangelog — Customer-Friendly Release Notes from Git Commits',
  description: 'Connect your GitHub repos, filter technical jargon with AI, and publish polished changelogs your customers actually want to read.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f2bfadb2-d48b-4573-93e5-e570f4a0e779"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
