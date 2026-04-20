import Section from "@/components/app/ui/section";
import { IconProps } from "@/components/app/icons/types";
import { FC } from "react";
import ShieldIcon from "@/components/app/icons/shieldIcon";
import KeyIcon from "@/components/app/icons/keyIcon";
import FileTimeIcon from "@/components/app/icons/fileTimeIcon";
import LayersIcon from "@/components/app/icons/layersIcon";
import WindowIcon from "@/components/app/icons/windowIcon";
import BinaryTreeIcon from "@/components/app/icons/binaryTreeIcon";

interface Feature {
  Icon: FC<IconProps>;
  title: string;
  description: string;
}
const features: Feature[] = [
  {
    Icon: ShieldIcon,
    title: "Zero-trus by default",
    description:
      "Every access request is verified, regardless of network location. No implicit trust. No open doors.",
  },
  {
    Icon: KeyIcon,
    title: "Atomic permissions level",
    description:
      "Define access at the resource level - not just roles. Control read, write, and execute independently for every team member",
  },
  {
    Icon: FileTimeIcon,
    title: "Real-time audit log",
    description:
      "Every action is recorded with timestamp, user, and context. Know exactly what happened, when, and who did it.",
  },
  {
    Icon: LayersIcon,
    title: "Multi-environment support",
    description:
      "Manage staging, production, and dev access from a single workspace. Separate policies, unified visibility.",
  },
  {
    Icon: BinaryTreeIcon,
    title: "Instant revocation",
    description:
      "Remove access in one click - effective immediately across all connected services. No propagation delays.",
  },
  {
    Icon: WindowIcon,
    title: "API-first design",
    description:
      'Automate access provisioning through our REST API. Integrate "The door" into your existing CI/CD pipeline. ',
  },
];

const Features = () => {
  return (
    <Section extraClass="py-18" id="features">
      <h2 className="text-center text-xl md:text-2xl font-sans text-foreground/80 font-semibold py-6">
        Secure credentials, access management, secure development and more.
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-x-3 gap-y-12 md:gap-x-12 md:gap-y-6">
        {features.map(({ title, description, Icon }, index) => {
          return (
            <div
              key={index + title}
              className="group flex flex-col justify-between items-center gap-1 md:gap-3 h-full"
            >
              <Icon extraClass="w-30 h-30 text-foreground/40 group-hover:text-primary/30 duration-200"></Icon>
              <h3 className="text-center w-full font-semibold font-mono group-hover:text-primary duration-200">
                {title}
              </h3>
              <p className="text-center w-full text-sm md:text-base">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Features;
