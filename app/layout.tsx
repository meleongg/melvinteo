import type { Metadata } from "next";
import "./globals.css";
import { themeScript } from "./lib/theme-script";
import { lato } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Melvin Teo",
  description: "Melvin Teo's personal website",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
  },
  openGraph: {
    title: "Melvin Teo",
    description: "Melvin Teo's personal website",
    images: [
      {
        url: "/meta-image.png",
        width: 1200,
        height: 630,
        alt: "Site preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/meta-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${lato.className} antialiased bg-white dark:bg-gray-900 transition-colors`}
      >
        {children}
      </body>
    </html>
  );
}
