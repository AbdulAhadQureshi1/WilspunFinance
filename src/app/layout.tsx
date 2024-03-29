import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wilspun Finance App",
  description: "wilspun finance app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " flex"}>
        <Sidebar />
        <div className="py-8 px-6 flex-grow">{children}</div>
      </body>
    </html>
  );
}
