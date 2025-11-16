export const siteConfig = {
  name: "WebDesino",
  url: "https://webdesino.com",
  getStartedUrl: "https://webdesino.com/contact",
  ogImage: "https://webdesino.com/og.jpg",
  description:
    "Digital-first web development & SEO agency based in Delhi, specializing in responsive websites, SEO-friendly builds, and growth-driven digital solutions.",
  links: {
    twitter: "https://twitter.com/webdesino",
    github: "https://github.com/webdesino",
    email: "mailto:info@webdesino.com",
    linkedin: "https://linkedin.com/company/webdesino",
    facebook: "https://facebook.com/webdesino",
  },
  navigation: {
    home: "/",
    services: "/services",
    about: "/about",
    clients: "/clients",
    contact: "/contact",
    blog: "/blog",
  },
  pricing: {
    basic: "https://webdesino.com/contact",
    premium: "https://webdesino.com/contact",
  },
  stats: {
    clients: 100,
    projects: 800,
    employees: 10,
    total: "800+",
    updated: "16 Nov 2025",
  },
};

export type SiteConfig = typeof siteConfig;
