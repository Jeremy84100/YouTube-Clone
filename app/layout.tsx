import Menu from "@/components/Menu";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/app/redux/provider";

import LateralNav from "@/components/LateralNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className}>
        <Providers>
          <Menu />
          <div className="flex w-full">
            <LateralNav />
            <div className="sm:px-6 mt-14 w-full">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
