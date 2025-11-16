import Services from "@/components/sections/services/default";
import Footer from "@/components/sections/footer/default";
import { LayoutLines } from "@/components/ui/layout-lines";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Our Services - WebDesino",
  description:
    "Comprehensive digital solutions including web development, SEO services, digital marketing, graphic design, and more. Helping businesses grow online.",
};

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Section>
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground max-w-[640px]">
            Contact us today for a free consultation and let's discuss how we can help grow your business online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href={siteConfig.navigation.contact}>
                Contact Us
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={siteConfig.navigation.home}>
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}

