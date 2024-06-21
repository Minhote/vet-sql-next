import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "My Vet App",
};

import { ThemeProvider } from "../components/ThemeProvider";
import Header from "../components/Header";
import { Toaster } from "../components/ui/sonner";
import { getSession } from "@/lib/user_utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  if (session) {
    const {
      user: { id },
    } = session;
    revalidatePath("/user");
    redirect(`/user/${id}`);
  }
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
            <Header />
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
