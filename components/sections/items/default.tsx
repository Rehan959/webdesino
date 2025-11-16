import {
  AwardIcon,
  CheckCircleIcon,
  ClockIcon,
  LineChartIcon,
  RocketIcon,
  SmartphoneIcon,
  HeadphonesIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string | ReactNode;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = (
    <>
      Why Choose WebDesino?
    </>
  ),
  items = [
    {
      title: "Proven Results",
      description:
        "Trusted by businesses across Delhi NCR with measurable growth in traffic, leads, and sales.",
      icon: <LineChartIcon className="size-5 stroke-1" />,
    },
    {
      title: "Timely Delivery",
      description:
        "We deliver fully tested, high-performing websites on time, every time.",
      icon: <ClockIcon className="size-5 stroke-1" />,
    },
    {
      title: "Award Winning",
      description:
        "Recognized for professional work and premium-quality digital solutions.",
      icon: <AwardIcon className="size-5 stroke-1" />,
    },
    {
      title: "Highest Rankings in Delhi",
      description:
        "Our SEO-first approach ensures your business ranks at the top of Google searches.",
      icon: <RocketIcon className="size-5 stroke-1" />,
    },
    {
      title: "SEO-Optimized Websites",
      description:
        "All websites are mobile-friendly, fast-loading, and designed to perform on Google.",
      icon: <SmartphoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "24/7 Support",
      description:
        "Our team is available round the clock for maintenance, updates, and assistance.",
      icon: <HeadphonesIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>

        {items !== false && items.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
