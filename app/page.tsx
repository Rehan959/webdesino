import Companies from "../components/sections/companies/default";
import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Services from "../components/sections/services/default";
import Stats from "../components/sections/stats/default";
import { LayoutLines } from "../components/ui/layout-lines";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Hero />
      <Stats />
      <Items />
      <Companies />
      <Services />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
