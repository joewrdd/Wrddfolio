import type { Metadata } from "next";
import { Inter, Orbitron, Rubik_Glitch, Roboto } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const rubikGlitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubik-glitch",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "WrddX Portfolio",
  description: "My Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${orbitron.variable} ${rubikGlitch.variable} ${roboto.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
