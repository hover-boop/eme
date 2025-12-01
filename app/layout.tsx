import type { Metadata } from "next";
import "@/app/globals.css"; // Changed from "./globals.css"
import { Providers } from "@/app/providers"; // Changed from "./providers"
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
