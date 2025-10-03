import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-bgPrimary text-textPrimary">
      <Header />
      <main className="min-h-screen py-12">{children}</main>
      <Footer />
    </div>
  )
}
