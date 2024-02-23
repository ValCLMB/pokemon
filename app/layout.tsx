import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Pokémon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <main className="flex flex-col items-center gap-5  p-2 md:p-8">
          {children}
        </main>
        <Toaster />
        <footer className="flex justify-center items-center gap-1 pb-5 text-black/50 hover:text-black transition-all">
          <GitHubLogoIcon />
          <Link href="https://github.com/valclmb">valclmb</Link>
        </footer>
      </body>
    </html>
  );
}
