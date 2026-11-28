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

// Makes the tab icon follow the site theme (incl. the toggle): black circle on
// light, white circle on dark. src/app/icon.svg (follows the system theme) is
// the no-JS fallback; Next adds its <link rel="icon"> after this script runs,
// so new icon links in <head> are recoloured as they appear.
const faviconScript = `(function(){var root=document.documentElement;var href="";function make(){var d=root.dataset.theme==="dark";var bg=d?"#fafafa":"#0a0a0a";var fg=d?"#0a0a0a":"#fafafa";href="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="32" fill="'+bg+'"/><path fill="'+fg+'" d="M15 16h8l9 24 9-24h8L36 50h-8z"/></svg>');}function apply(){document.querySelectorAll('link[rel="icon"]').forEach(function(l){if(l.href!==href)l.href=href;});}make();new MutationObserver(function(){make();apply();}).observe(root,{attributes:true,attributeFilter:["data-theme"]});new MutationObserver(apply).observe(document.head,{childList:true});document.addEventListener("DOMContentLoaded",apply);})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: faviconScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
