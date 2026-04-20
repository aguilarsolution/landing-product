import Section from "@/components/app/ui/section";
import CloudflareIcon from "@/components/app/icons/cloudflareIcon";
import { FC } from "react";
import { IconProps } from "@/components/app/icons/types";
import IndeedIcon from "@/components/app/icons/indeedIcon";
import AppleIcon from "@/components/app/icons/appleIcon";
import CrowdstrikeIcon from "@/components/app/icons/crowdstrikeIcon";
import TeslaIcon from "@/components/app/icons/teslaIcon";
import StripeIcon from "@/components/app/icons/stripeIcon";

interface companyItem {
  name: string;
  Icon: FC<IconProps>;
}

const companiesList: companyItem[] = [
  {
    name: "Cloudflare",
    Icon: CloudflareIcon,
  },
  {
    name: "Indeed",
    Icon: IndeedIcon,
  },
  {
    name: "Apple",
    Icon: AppleIcon,
  },
  {
    name: "Crowdstrike",
    Icon: CrowdstrikeIcon,
  },
  { name: "Tesla", Icon: TeslaIcon },
  { name: "Stripe", Icon: StripeIcon },
];

const MarqueeItem = () => {
  return (
    <div
      className={`flex gap-20 shrink-0 items-center text-foreground/30 justify-around animate-marquee min-w-full px-10`}
    >
      {companiesList.map(({ Icon, name }, index) => (
        <Icon key={index + name} title={name} extraClass="w-50" />
      ))}
    </div>
  );
};
const LogosBar = () => {
  return (
    <Section
      sectionTitle="Trusted by engenieering teams at"
      extraClass="pt-12 pb-6 md:pt-48 md:pb-24"
    >
      <div className="overflow-hidden flex flex-row">
        <MarqueeItem></MarqueeItem>
        <MarqueeItem></MarqueeItem>
      </div>
    </Section>
  );
};

export default LogosBar;
