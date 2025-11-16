import Link from "next/link";

import { siteConfig } from "@/config/site";
import Footer from "@/components/sections/footer/default";
import Stats from "@/components/sections/stats/default";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LayoutLines } from "@/components/ui/layout-lines";
import { Section } from "@/components/ui/section";

export const metadata = {
  title: "Our Clients - WebDesino",
  description:
    "See our portfolio of successful projects and happy clients. WebDesino has helped businesses across Delhi NCR grow online.",
};

export default function ClientsPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />


      <Section>
        <div className="max-w-container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Client Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>E-commerce Platform</CardTitle>
                <CardDescription>Online Retail</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Developed a fully responsive e-commerce platform with integrated payment 
                  gateway, resulting in 300% increase in online sales within 6 months.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Corporate Website</CardTitle>
                <CardDescription>Business Services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Redesigned and optimized corporate website with SEO-first approach, 
                  achieving #1 ranking for target keywords and 250% increase in organic traffic.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Mobile App</CardTitle>
                <CardDescription>Technology Startup</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built cross-platform mobile application with modern UI/UX, resulting 
                  in 50,000+ downloads and 4.8-star rating on app stores.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Join Our Success Stories
          </h2>
          <p className="text-muted-foreground max-w-[640px]">
            Let us help you achieve similar results. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href={siteConfig.navigation.contact}>
                Get Started
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={siteConfig.navigation.services}>
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}

