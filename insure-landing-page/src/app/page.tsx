import React from "react";
import { Karla, DM_Serif_Display } from "next/font/google";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Different from "@/components/Different";
import FindOut from "@/components/FindOut";
import Footer from "@/components/Footer";

import "./globals.css";

const karla = Karla({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-karla",
});

const dm_serif_display = DM_Serif_Display({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
});

const metadata = {
  title: "Insure landing page",
  description: "Mockup of an Insure company landing page by create next app",
};

const Home: React.FC = () => {
  return (
    <html
      lang="en"
      className={`${karla.variable} ${dm_serif_display.variable}`}
    >
      <body>
        <Navbar />
        <Hero />
        <Different />
        <FindOut />
        <Footer />
      </body>
    </html>
  );
};

export default Home;
