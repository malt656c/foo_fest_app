"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BasketProvider } from "./contexts/basketContext";
import { Suspense } from "react";
import Loading from "./loading";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>FooFest</title>
        <link rel="icon" href="/mobilelogo.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <BasketProvider>
          <header>
            <Header></Header>
          </header>
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer></Footer>
        </BasketProvider>
      </body>
    </html>
  );
}
