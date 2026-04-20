import Section from "../ui/section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Tier {
  name: string;
  description: string;
  price?: number;
  period: string;
  features: string[];
  cta: string;
}
const tierList: Tier[] = [
  {
    name: "Free",
    description: "For individuals and small projects",
    price: 0,
    period: "month",
    features: [
      "Up to 3 users",
      "2 connected services",
      "Basic audit log",
      "Community support",
    ],
    cta: "Get started",
  },
  {
    name: "Pro",
    description: "For growing engineering teams",
    price: 29,
    period: "month per workspace",
    features: [
      "Unlimited users",
      "Up to 20 services",
      "Full audit log with export",
      "Role-based access control",
      "Priority support",
      "API access",
    ],
    cta: "Start free trial",
  },
  {
    name: "Enterprise",
    description: "For organizations at scale",
    period: "Custom Pricing",
    features: [
      "Unlimited everything",
      "SSO & SAML integration",
      "Custom retention policies",
      " Dedicated support engineer",
      " SLA guarantee",
      "On-premise deployment",
    ],
    cta: "Contact sales",
  },
];
const Pricing = () => {
  return (
    <Section
      sectionTitle="Pricing"
      extraClass="py-24 flex items-center justify-centeri"
      id="pricing"
    >
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full max-w-xs md:max-w-3xl"
      >
        <CarouselContent>
          {tierList.map(
            ({ name, description, price, period, features, cta }, index) => {
              return (
                <CarouselItem
                  key={index + name}
                  className={`basis-2/2 md:basis-1/2`}
                >
                  <Card
                    className={`flex h-full duration-200 border-1 hover:border-1 hover:border-primary ${name == "Pro" && "border-4 hover:border-4 border-primary/60"}`}
                  >
                    <CardHeader>
                      <CardTitle>
                        <h2>{name}</h2>
                      </CardTitle>
                      <CardDescription className="text-xs text-foreground/70">
                        {description}
                      </CardDescription>
                      {name == "Pro" && (
                        <CardAction>
                          <Badge>Most popular</Badge>
                        </CardAction>
                      )}
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3 justify-between h-full">
                      {price !== undefined ? (
                        <h3 className="!text-6xl flex justify-center">
                          {`$${price.toLocaleString("es-mx")}`}
                          <span className="text-xs flex items-end">
                            /{period}
                          </span>
                        </h3>
                      ) : (
                        <h3 className="!text-3xl flex justify-center">
                          {period}
                        </h3>
                      )}
                      <div className="flex-1">
                        <h4 className="font-semibold">Features</h4>
                        <ul className="list-disc pl-4">
                          {features.map((feature, index) => {
                            return (
                              <li key={index + feature}>
                                <h4 className="!text-base py-3">{feature}</h4>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-2">
                      <Button variant={"default"} className="w-full">
                        {cta}
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              );
            },
          )}
        </CarouselContent>
        <CarouselNext></CarouselNext>
        <CarouselPrevious></CarouselPrevious>
      </Carousel>
    </Section>
  );
};

export default Pricing;
