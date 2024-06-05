import Providers from "./providers";
import { inter, poppins } from "@/utils/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import './globals.css';
import './App.scss';
import Head from "next/head";
import { SidebarMobileBurger } from "@/components/Sidebar/SidebarMobileBurger";
import { SidebarBurger } from "@/components/Sidebar/SidebarBurger";

export const metadata = {
  title: "Gamefy",
  description: "Gamefy yourself",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${poppins.className} ${inter.className}`}>
      <Head>
        {/* Preconnect to Cloud Front */}
        <link rel="preconnect" href="https://daklj4c4w9af1.cloudfront.net" />

      </Head>
      <body 
        suppressHydrationWarning={true} 
        className={`antialiased vsc-initialized`}
      >
        <Providers>
          {children}

          <SpeedInsights />
          <Analytics />
          <SidebarBurger />
          <SidebarMobileBurger />
        </Providers>
      </body>
    </html>
  );
}
