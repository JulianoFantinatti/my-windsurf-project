import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ES Analitica - Equipamentos Analíticos",
  description: "Serviços profissionais de manutenção e reparo de equipamentos analíticos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
