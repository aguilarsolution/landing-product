import { Button } from "@/components/ui/button";
import Section from "../ui/section";
const CTASection = () => {
  return (
    <Section extraClass="py-24 flex flex-col justify-center items-center">
      <h2 className="!text-3xl md:!text-6xl font-bold text-center pt-6 pb-3">
        Your infrastructure deserves better access control.
      </h2>
      <h3 className="!text-xl md:!text-2xl !font-light pb-3 text-center">
        Join thousands of engineers who stopped guessing who has access to what.
      </h3>
      <Button
        variant="default"
        className={"w-fit font-bold text-lg md:text-xl py-6 px-6 md:px-18"}
        size={"lg"}
      >
        Start for free — no credit card required!
      </Button>
    </Section>
  );
};
export default CTASection;
