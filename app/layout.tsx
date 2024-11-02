import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  Navbar from "@/components/navbar"
import  Footer  from '@/components/footer'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cultural Club",
  description: "developed by Arpan Saini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
          <Navbar/>
          {children}
          <Footer/>
          
        </div>
        </body>
    </html>
  );
}
