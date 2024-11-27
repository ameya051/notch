import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Provider from "@/components/providers/Provider";

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Notch",
  description: "Query notes with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={outfit.className}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
