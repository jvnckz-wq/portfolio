import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
  },
};

// Runs before the page paints: applies the saved theme (or the system one) so the
// page never flashes the wrong colours, and follows system changes until the
// visitor picks a theme with the toggle.
const themeScript = `(function(){try{var root=document.documentElement;var saved=localStorage.getItem("theme");var mq=window.matchMedia("(prefers-color-scheme: dark)");root.dataset.theme=saved||(mq.matches?"dark":"light");mq.addEventListener("change",function(e){if(!localStorage.getItem("theme"))root.dataset.theme=e.matches?"dark":"light";});}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
