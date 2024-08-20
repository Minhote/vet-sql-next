import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "My Vet App",
};

import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { getSession } from "@/lib/user_utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  if (session !== null) {
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

            <footer className="bg-primary p-4 text-center text-xl font-bold text-primary-100">
              Count on us
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
