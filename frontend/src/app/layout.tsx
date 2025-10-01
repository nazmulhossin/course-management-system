import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CPS Academy",
  description: "Master competitive programming with structured training programs, hands-on problem-solving sessions, and expert mentorship to build a successful career in tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
