import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./_context/cart";
import AuthProvider from "./_providers/auth";
import { Toaster } from "@/app/_components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ems_food",
  description: "Encontre refeições perto de você",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="PT-br">
      <body className={inter.className}>
        <AuthProvider>
          <div className="relative">
            <CartProvider>{children}</CartProvider>
          </div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
