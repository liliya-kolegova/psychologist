import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Metrika } from "@/components/Metrika";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Психолог Лилия Колегова",
  description: "Психолог Лилия Колегова",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang}>
      <Metrika />
      <body className={inter.className}>
        {/* <Header params={params} /> */}
        {children}
        <Footer params={params} />
      </body>
    </html>
  );
}
