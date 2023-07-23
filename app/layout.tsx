import "./globals.css";
import "react-tooltip/dist/react-tooltip.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Foreign Currency Savings",
  description:
    "Discover the best foreign currency savings accounts available to UK residents, including US Dollar (USD) and Euro (EUR) accounts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
