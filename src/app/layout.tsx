import type { Metadata } from "next";

import "./globals.css";
import Nav from "@/components/layout/Header/Nav";
import { roboto } from "@/ui/fonts";
import Footer from "@/components/layout/Footer/Footer";



export const metadata: Metadata = {
  title: "Wuala",
  description: "Restaurant App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Nav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
