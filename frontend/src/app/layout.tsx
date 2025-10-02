import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: 'CPS Academy - Master Competitive Programming',
  description: 'Join CPS Academy to master competitive programming with structured training programs, hands-on problem-solving sessions, and expert mentorship to build a successful career in tech.',
  keywords: 'competitive programming, coding, algorithms, data structures, programming courses',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
