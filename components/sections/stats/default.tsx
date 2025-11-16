import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Section } from "../../ui/section";

interface StatProps {
  value: string | number;
  label: string;
  description?: string;
}

interface StatsProps {
  title?: string | ReactNode;
  stats?: StatProps[];
  className?: string;
}

export default function Stats({
  title = "Our Achievements",
  stats = [
    {
      value: siteConfig.stats.clients,
      label: "Happy Clients",
      description: "Satisfied businesses across Delhi NCR",
    },
    {
      value: siteConfig.stats.projects,
      label: "Projects Completed",
      description: "Successful digital projects delivered",
    },
    {
      value: siteConfig.stats.employees,
      label: "Team Members",
      description: "Expert professionals in our team",
    },
    {
      value: siteConfig.stats.total,
      label: "Total Projects",
      description: "And counting...",
    },
  ],
  className,
}: StatsProps) {
  return (
    <Section className={cn("bg-muted/30", className)}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-12">
        {title && (
          <h2 className="text-center text-3xl font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
        )}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 w-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="text-4xl font-bold sm:text-5xl md:text-6xl text-primary">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold">{stat.label}</div>
                {stat.description && (
                  <div className="text-muted-foreground text-sm">
                    {stat.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

