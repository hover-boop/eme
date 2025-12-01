import type { Metadata } from "next";
// FIX: Use @/app/ instead of ./
import "@/app/globals.css";
import { Providers } from "@/app/providers";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Emerald AI Suite",
  description: "AI Business Automation Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
