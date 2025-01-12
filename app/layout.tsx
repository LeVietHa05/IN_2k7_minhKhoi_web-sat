import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./ui/nav";
import Footer from "./ui/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SATBuddy",
  description: "Start your SAT journey with us today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased w-[1440px] bg-gray-50 mx-auto pt-[98px]`}>
        <Nav></Nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
