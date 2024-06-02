import { Poppins, Inter } from "next/font/google";

export const poppins = Poppins({ 
  subsets: ["devanagari"],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: "swap"
});

export const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: "swap"
});