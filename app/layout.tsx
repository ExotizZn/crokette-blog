import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Le blog de Crokette",
  description: "Woof !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col w-full h-full antialiased`}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
