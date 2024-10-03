import type { Metadata } from "next";
import "./globals.css";
import {Montserrat} from 'next/font/google'

const font = Montserrat({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Gamer.store",
  description: "A versão inicial da loja de games",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
