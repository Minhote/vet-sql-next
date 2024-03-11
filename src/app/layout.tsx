import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Vet App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background">{children}</body>
    </html>
  );
}
