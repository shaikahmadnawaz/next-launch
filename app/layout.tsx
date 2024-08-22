import type { Metadata } from "next";
import { Gaegu } from "next/font/google";
import "./globals.css";

const gaegu = Gaegu({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Tempo",
  description: "Orchestrate Your Day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gaegu.className}>{children}</body>
    </html>
  );
}
