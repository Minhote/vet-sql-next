import type { Metadata } from "next";
import "./globals.css";

// export const runtime = "edge";

export const metadata: Metadata = {
  title: "My Vet App",
};

import { ThemeProvider } from "../app/components/ThemeProvider";
import Header from "./components/Header";
import { Toaster } from "./components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster richColors position="top-right" />
            {children}

            <footer className="self-stretch bg-primary text-txt">
              Pie de página
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
