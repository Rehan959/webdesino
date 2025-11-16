import Footer from "@/components/sections/footer/default";

import { LayoutLines } from "@/components/ui/layout-lines";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AwardIcon,
  UsersIcon,
  TargetIcon,
  HeartIcon,
} from "lucide-react";

export const metadata = {
  title: "About Us - WebDesino",
  description:
    "Learn about WebDesino, a leading digital marketing agency in Delhi. Our mission, values, and commitment to helping businesses grow online.",
};

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Section>
        <div className="max-w-container mx-auto flex flex-col gap-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Who Are We?</h2>
              <p className="text-muted-foreground mb-4">
                WebDesino is a digital-first web development and SEO agency based in Delhi, 
                specializing in responsive websites, SEO-friendly builds, and growth-driven 
                digital solutions.
              </p>
              <p className="text-muted-foreground mb-4">
                We are trusted by businesses across Delhi NCR with measurable growth in 
                traffic, leads, and sales. Our team of expert professionals is dedicated 
                to delivering high-quality digital solutions that drive results.
              </p>
              <p className="text-muted-foreground">
                With a proven track record of {siteConfig.stats.projects}+ successful projects 
                and {siteConfig.stats.clients}+ happy clients, we have established ourselves 
                as one of the leading digital agencies in the region.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AwardIcon className="size-5" />
                    Award Winning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Recognized for professional work and premium-quality digital solutions
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UsersIcon className="size-5" />
                    Expert Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {siteConfig.stats.employees}+ skilled professionals dedicated to your success
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TargetIcon className="size-5" />
                    Results Driven
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Focused on delivering measurable results and ROI for your business
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <HeartIcon className="size-5" />
                    Client Focused
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    24/7 support and maintenance to ensure your success
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Our Mission
          </h2>
          <p className="text-muted-foreground max-w-[640px] text-lg">
            To empower businesses with cutting-edge digital solutions that drive growth, 
            increase visibility, and maximize online success. We believe in building 
            long-term partnerships with our clients and delivering exceptional value 
            through innovative strategies and expert execution.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-container mx-auto flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-[640px]">
            Ready to take your business to the next level? Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href={siteConfig.navigation.contact}>
                Get in Touch
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={siteConfig.navigation.services}>
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </Section>
      <Footer />
    </main>
  );
}

