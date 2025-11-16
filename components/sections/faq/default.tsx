import { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Frequently Asked Questions",
  items = [
    {
      question: "What services does WebDesino offer?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            WebDesino offers comprehensive digital solutions including web development, 
            SEO services, digital marketing, graphic design, mobile app development, 
            and analytics & reporting. We provide end-to-end digital solutions to help 
            businesses grow online.
          </p>
        </>
      ),
    },
    {
      question: "How long does it take to develop a website?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            The timeline for website development depends on the complexity and scope of 
            your project. A simple business website typically takes 2-4 weeks, while 
            more complex e-commerce or custom web applications may take 6-12 weeks or more.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            We always provide a detailed timeline during the initial consultation and 
            keep you updated throughout the development process.
          </p>
        </>
      ),
    },
    {
      question: "Do you provide SEO services?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Yes, SEO is one of our core services. We offer comprehensive SEO strategies 
            including on-page optimization, technical SEO, content marketing, link building, 
            and local SEO for businesses in Delhi NCR.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Our SEO-first approach ensures that all websites we build are optimized for 
            search engines from the ground up, helping you achieve better rankings and 
            increased organic traffic.
          </p>
        </>
      ),
    },
    {
      question: "What is your pricing structure?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Our pricing is customized based on your specific requirements and project scope. 
            We offer flexible packages for web development, SEO, and digital marketing services.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Contact us for a free consultation and detailed quote tailored to your business needs. 
            We provide transparent pricing with no hidden costs.
          </p>
        </>
      ),
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Yes, we offer 24/7 support and maintenance services. Our team is available round the 
            clock for updates, bug fixes, security patches, and any assistance you may need.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            We provide various maintenance packages to suit different business needs, ensuring 
            your website stays updated, secure, and performing optimally.
          </p>
        </>
      ),
    },
    {
      question: "Can you help with existing websites?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Absolutely! We can redesign, optimize, and improve existing websites. Whether you 
            need a complete redesign, performance optimization, SEO improvements, or just regular 
            updates, we&apos;re here to help.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Contact us to discuss your requirements, and we&apos;ll provide a customized solution 
            for your existing website.
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
