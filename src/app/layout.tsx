import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/app/sections/header";
import Footer from "@/components/app/sections/footer";
import ThemeProvider from "./theme-provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Door",
  applicationName: "The Door",
  description: "System Access Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <Head>
        <meta property="og:image" content="/preview.webp" />
        <meta
          property="og:image:alt"
          content="Security, example, cibersecurity"
        />
        <meta name="twitter:title" content="The Door" />
        <meta
          name="twitter:description"
          content="Landingpage a system access management (example)"
        />
        <meta name="twitter:url" content="https://x.com/@aguilarsolution" />
        <meta name="twitter:image:src" content="/preview.webp" />
        <meta name="twitter:image:alt" content="the door landingpage " />
        <meta name="twitter:creator" content="@aguilarsolution" />
        <meta name="twitter:site" content="@aguilarsolution" />
      </Head>
      <body className="min-h-full">
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header></Header>
          {children}
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
