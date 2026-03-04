'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { useEffect } from "react";
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AudioPlayer from '@/components/AudioPlayer';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const Layout = ({ children }) => {
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    let isDark;
    if (saved) {
      isDark = saved === 'dark';
    } else {
      // Sigue al sistema operativo automáticamente
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  return (
    <>
      <Head>
        <title>Anthony Carhuayalle — Dev Journey</title>
        <meta name="description" content="Portafolio de Anthony Carhuayalle — De supervisor de transporte a desarrollador de software" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative min-h-screen flex flex-col" style={{ zIndex: 1 }}>
        <Navbar />
        <main className="flex-grow relative" style={{ zIndex: 1 }}>
          {children}
        </main>
        <Footer />
        <AudioPlayer />
      </div>
    </>
  );
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
