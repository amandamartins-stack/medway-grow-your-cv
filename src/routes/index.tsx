import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { LogoBar } from "@/components/site/LogoBar";
import { Problem } from "@/components/site/Problem";
import { Product } from "@/components/site/Product";
import { Differentials } from "@/components/site/Differentials";
import { PlanoMedway } from "@/components/site/PlanoMedway";
import { ForWhom } from "@/components/site/ForWhom";
import { Comparison } from "@/components/site/Comparison";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <LogoBar />
        <Problem />
        <Product />
        <Differentials />
        <ForWhom />
        <Comparison />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
