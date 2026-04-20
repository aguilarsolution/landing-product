import { HTMLAttributes, ReactNode } from "react";

interface ComponentSectionProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  extraClass?: string;
  sectionTitle?: string;
}
const Section = ({
  children,
  extraClass,
  sectionTitle,
  ...props
}: ComponentSectionProps) => {
  return (
    <section className={`flex flex-col px-6 md:px-0 ${extraClass}`} {...props}>
      {sectionTitle && (
        <h2 className="text-center font-mono font-semibold py-6">
          {sectionTitle}
        </h2>
      )}
      {children}
    </section>
  );
};

export default Section;
