import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import Sparks from "@/components/Sparks";
import TechMarquee from "@/components/TechMarquee";
import WorkSection from "@/components/WorkSection";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
};

export default function Home() {
  return (
    <Sparks className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Header />
      <main id="main" className="mx-auto w-full max-w-6xl flex-1 px-4">
        <Intro />
        <TechMarquee />
        <Reveal>
          <WorkSection />
        </Reveal>
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>
      <Footer />
    </Sparks>
  );
}
