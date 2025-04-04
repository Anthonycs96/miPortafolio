'use client';  // Marca este archivo como un componente cliente, debe estar en la primera línea

import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { useState, useEffect } from "react";
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AudioPlayer from '@/components/AudioPlayer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState("white"); // opciones: "dark", "white"

  // Esta parte detecta el tema del sistema y aplica la clase correspondiente
  useEffect(() => {
    const html = document.documentElement;

    const handleThemeChange = (e) => {
      html.classList.remove("dark", "white"); // limpia antes de aplicar

      if (e.matches) {
        html.classList.add("dark");
        setDarkMode("dark");
      } else {
        html.classList.add("white");
        setDarkMode("white");
      }
    };

    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    handleThemeChange(prefersDarkMode); // Aplica el tema inicial

    prefersDarkMode.addEventListener("change", handleThemeChange); // Escucha cambios

    return () => {
      prefersDarkMode.removeEventListener("change", handleThemeChange); // Limpia el listener
    };
  }, []);

  return (
    <>
      <Head>
        <title>Mi Portafolio</title>
        <meta name="description" content="Portafolio profesional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
