import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhijeet's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icons8-fire.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ActiveSectionContextProvider>
            {children}
          </ActiveSectionContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
