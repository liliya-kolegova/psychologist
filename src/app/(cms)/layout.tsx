export const metadata = {
  title: 'CMS Лилия Колегова',
  description: 'A CMS for Psychotherapist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
