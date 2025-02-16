import type { Metadata } from "next";
import { Bowlby_One_SC, DM_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { SVGFilters } from "@/components/SVGFilters";
// import { Footer } from "@/components/Footer";

const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bowlby-sc",
  weight: "400"
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-mono",
  weight: "500"
});

export const metadata: Metadata = {
  title: "ROII",
  description: "Research Oriented Innovation Incubator",
};

export default function StateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <SVGFilters />
    </>
  );
}

