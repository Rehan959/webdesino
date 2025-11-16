import { ReactNode } from "react";

import {
  BarChartIcon,
  GlobeIcon,
  MegaphoneIcon,
  PaletteIcon,
  SearchIcon,
  SmartphoneIcon,
} from "lucide-react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ServiceProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ServicesProps {
  title?: string | ReactNode;
  subtitle?: string;
  services?: ServiceProps[];
  className?: string;
}

export default function Services({
  title = "Our Services",
  subtitle = "Comprehensive digital solutions to help your business thrive online",
  services = [
    {
      title: "Web Development",
      description:
        "Custom website development with modern technologies, responsive design, and SEO optimization. We build fast, secure, and scalable websites that convert visitors into customers.",
      icon: <GlobeIcon className="size-5 stroke-1" />,
    },
    {
      title: "SEO Services",
      description:
        "Comprehensive SEO strategies to improve your search engine rankings. We optimize your website for better visibility, higher traffic, and increased conversions.",
      icon: <SearchIcon className="size-5 stroke-1" />,
    },
    {
      title: "Digital Marketing",
      description:
        "End-to-end digital marketing solutions including social media marketing, content marketing, PPC campaigns, and email marketing to grow your online presence.",
      icon: <MegaphoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "Graphic Design",
      description:
        "Creative graphic design services for logos, branding, marketing materials, and web graphics. We create visually stunning designs that represent your brand effectively.",
      icon: <PaletteIcon className="size-5 stroke-1" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile app development for iOS and Android. We create user-friendly mobile applications that engage users and drive business growth.",
      icon: <SmartphoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "Analytics & Reporting",
      description:
        "Data-driven insights and comprehensive reporting to track your website performance, user behavior, and marketing ROI. Make informed decisions with actionable analytics.",
      icon: <BarChartIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ServicesProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-center text-3xl font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-[640px] text-lg">
              {subtitle}
            </p>
          )}
        </div>

        {services && services.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{service.icon}</ItemIcon>
                  {service.title}
                </ItemTitle>
                <ItemDescription>{service.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

