"use client";

import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Badge } from "../../ui/badge";
import { Section } from "../../ui/section";

interface Company {
  name: string;
  logo?: ReactNode;
  website?: string;
}

interface CompaniesProps {
  title?: string;
  subtitle?: string;
  badge?: ReactNode | false;
  companies?: Company[];
  className?: string;
}

const defaultCompanies: Company[] = [
  { name: "TechCorp", website: "https://techcorp.com" },
  { name: "Digital Solutions", website: "https://digitalsolutions.com" },
  { name: "InnovateHub", website: "https://innovatehub.com" },
  { name: "CloudTech", website: "https://cloudtech.com" },
  { name: "WebMasters", website: "https://webmasters.com" },
  { name: "StartupX", website: "https://startupx.com" },
  { name: "BusinessPro", website: "https://businesspro.com" },
  { name: "Enterprise Plus", website: "https://enterpriseplus.com" },
  { name: "GlobalTech", website: "https://globaltech.com" },
  { name: "NextGen Solutions", website: "https://nextgensolutions.com" },
  { name: "SmartBiz", website: "https://smartbiz.com" },
  { name: "FutureWorks", website: "https://futureworks.com" },
];

export default function Companies({
  title = "Trusted by Leading Companies",
  subtitle = "We've had the privilege of working with amazing businesses across various industries",
  badge = (
    <Badge variant="outline" className="border-brand/30 text-brand">
      Our Partners
    </Badge>
  ),
  companies = defaultCompanies,
  className,
}: CompaniesProps) {
  return (
    <Section className={cn("bg-muted/30 overflow-hidden", className)}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          {badge !== false && badge}
          <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-[640px] text-lg">
              {subtitle}
            </p>
          )}
        </div>

        {/* Animated Marquee */}
        <div className="w-full overflow-hidden py-8">
          <div className="flex w-max">
            {/* First marquee */}
            <div
              className="flex gap-12 whitespace-nowrap"
              style={{
                animation: "marquee 30s linear infinite",
              }}
            >
              {companies.map((company, index) => (
                <div
                  key={`first-${index}`}
                  className="flex shrink-0 items-center justify-center"
                >
                  {company.logo ? (
                    <div className="flex h-16 w-32 items-center justify-center opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                      {company.logo}
                    </div>
                  ) : (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-16 w-32 shrink-0 items-center justify-center rounded-lg border border-border bg-card px-4 text-sm font-semibold opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 hover:border-primary"
                    >
                      {company.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
            {/* Second marquee for seamless loop */}
            <div
              className="flex gap-12 whitespace-nowrap"
              style={{
                animation: "marquee 30s linear infinite",
              }}
              aria-hidden="true"
            >
              {companies.map((company, index) => (
                <div
                  key={`second-${index}`}
                  className="flex shrink-0 items-center justify-center"
                >
                  {company.logo ? (
                    <div className="flex h-16 w-32 items-center justify-center opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                      {company.logo}
                    </div>
                  ) : (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-16 w-32 shrink-0 items-center justify-center rounded-lg border border-border bg-card px-4 text-sm font-semibold opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0 hover:border-primary"
                    >
                      {company.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

