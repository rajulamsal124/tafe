import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../public/assets/sass/styles.scss";
import Header from "@/components/header/header";
import FooterOne from "@/components/footer/footer";

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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <FooterOne />
      </body>
    </html>
  );
}
