import { type VariantProps } from "class-variance-authority";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

import { ThemeToggleAnimated } from "@/components/theme-toggle/theme-toggle";
import { cn } from "@/lib/utils";

import WebDesino from "../../logos/webdesino";
import { Button, buttonVariants } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import WebDesinoNavigation from "../../ui/webdesino-navigation";

interface NavbarLink {
  text: string;
  href: string;
}

interface NavbarActionProps {
  text: string;
  href: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
  isButton?: boolean;
}

interface NavbarProps {
  logo?: ReactNode;
  name?: string;
  homeUrl?: string;
  mobileLinks?: NavbarLink[];
  actions?: NavbarActionProps[];
  showNavigation?: boolean;
  customNavigation?: ReactNode;
  className?: string;
}

export default function Navbar({
  logo = <WebDesino />,
  name = "WebDesino",
  homeUrl = "/",
  mobileLinks = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Our Clients", href: "/clients" },
    { text: "Contact", href: "/contact" },
    { text: "Blog", href: "/blog" },
  ],
  actions = [
    {
      text: "Contact Us",
      href: "/contact",
      isButton: true,
      variant: "default",
    },
  ],
  showNavigation = true,
  customNavigation,
  className,
}: NavbarProps) {
  return (
    <header className={cn("sticky top-0 z-50 -mb-4 px-4 pb-4", className)}>
      <div className="fade-bottom bg-background/15 absolute left-0 h-24 w-full backdrop-blur-lg"></div>
      <div className="max-w-container relative mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <Link
              href={homeUrl}
              className="flex items-center gap-2 text-xl font-bold"
            >
              {logo}
              {name}
            </Link>
            {showNavigation && (customNavigation || <WebDesinoNavigation />)}
          </NavbarLeft>
          <NavbarRight>
            <div className="hidden md:flex items-center gap-4">
              {actions.map((action, index) => (
                action.isButton ? (
                  <Button
                    key={index}
                    variant={action.variant || "default"}
                    asChild
                  >
                    <Link href={action.href}>
                      {action.icon}
                      {action.text}
                      {action.iconRight}
                    </Link>
                  </Button>
                ) : (
                  <Link
                    key={index}
                    href={action.href}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {action.text}
                  </Link>
                )
              ))}
            </div>
            <ThemeToggleAnimated />
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 mt-8">
                  {mobileLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {link.text}
                    </Link>
                  ))}
                  {actions.map((action, index) => (
                    <Button
                      key={index}
                      variant={action.variant || "default"}
                      className="w-auto md:w-auto"
                      asChild
                    >
                      <Link href={action.href}>
                        {action.icon}
                        {action.text}
                        {action.iconRight}
                      </Link>
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
