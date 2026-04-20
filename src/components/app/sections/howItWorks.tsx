import Section from "@/components/app/ui/section";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FC } from "react";
import { IconProps } from "@/components/app/icons/types";
import OneIcon from "@/components/app/icons/oneIcon";
import TwoIcon from "../icons/twoIcon";
import ThreeIcon from "../icons/threeIcon";
import FourIcon from "../icons/fourIcon";
interface Step {
  name: string;
  description: string;
  NumberIcon: FC<IconProps>;
}
const steps: Step[] = [
  {
    name: "Connect your infrastructure",
    description:
      "Link your servers, databases, and cloud services through our secure agent or direct API integration. Setup takes under ten minutes.",
    NumberIcon: OneIcon,
  },

  {
    name: "Define access policies",
    description:
      "Create fine-grained policies that specify who can access what, under which conditions, and for how long.",
    NumberIcon: TwoIcon,
  },
  {
    name: "Provision access instantly",
    description:
      "Grant temporary or permanent access to team members with a single action. Credentials are generated and delivered automatically.",
    NumberIcon: ThreeIcon,
  },
  {
    name: "Monitor and audit continuously",
    description:
      "Track every session, command, and data query in real time. Generate compliance reports with one click.",
    NumberIcon: FourIcon,
  },
];
const HowItWorks = () => {
  return (
    <Section
      sectionTitle="How it works"
      id="howItWorks"
      extraClass="pt-6 md:pt-18"
    >
      <div className="flex flex-row gap-6 flex-wrap justify-between">
        {steps.map(({ name, description, NumberIcon }, index) => {
          return (
            <Card key={index + name} className="w-full max-w-full group">
              <CardHeader>
                <CardTitle>
                  <h3>{name}</h3>
                </CardTitle>
                <CardAction>
                  <NumberIcon extraClass="w-10 h-10 stroke-1 group-hover:text-primary/80 duration-200"></NumberIcon>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>{description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
export default HowItWorks;
