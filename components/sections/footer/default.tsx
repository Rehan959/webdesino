import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import WebDesino from "../../logos/webdesino";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";
import { ModeToggle } from "../../ui/mode-toggle";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = <WebDesino />,
  name = "WebDesino",
  columns = [
    {
      title: "Services",
      links: [
        { text: "Web Development", href: `${siteConfig.navigation.services}#web-development` },
        { text: "SEO Services", href: `${siteConfig.navigation.services}#seo` },
        { text: "Digital Marketing", href: `${siteConfig.navigation.services}#digital-marketing` },
        { text: "Graphic Design", href: `${siteConfig.navigation.services}#graphic-design` },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About Us", href: siteConfig.navigation.about },
        { text: "Our Clients", href: siteConfig.navigation.clients },
        { text: "Blog", href: siteConfig.navigation.blog },
        { text: "Contact", href: siteConfig.navigation.contact },
      ],
    },
    {
      title: "Contact",
      links: [
        { text: "Email", href: siteConfig.links.email },
        { text: "Twitter", href: siteConfig.links.twitter },
        { text: "LinkedIn", href: siteConfig.links.linkedin },
        { text: "Facebook", href: siteConfig.links.facebook },
      ],
    },
  ],
  copyright = `© ${new Date().getFullYear()} WebDesino. All rights reserved.`,
  policies = [
    { text: "Privacy Policy", href: `${siteConfig.url}/privacy` },
    { text: "Terms of Service", href: `${siteConfig.url}/terms` },
  ],
  showModeToggle = true,
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                {logo}
                <h3 className="text-xl font-bold">{name}</h3>
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href}>
                  {policy.text}
                </a>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
