import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "My Vet App",
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/ui/sonner";
import { getSession } from "@/lib/user_utils";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  if (session === null) redirect("/login");

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
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
