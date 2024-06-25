import { PriceCards } from "../cards/priceCards";
import { Section, SectionHeading, SectionParagraph } from "../section";

export const Pricing = () => {
  return (
    <div id="pricing">
      <Section className="text-center text-balance">
        <SectionHeading className=" font-bold text-primary-blue text-3xl lg:text-4xl">
          Clear & Simple Pricing
        </SectionHeading>
        <SectionParagraph className=" text-lg text-muted-foreground lg:text-xl">
          Flat Rates, Zero Hidden Fees - Guaranteed!
        </SectionParagraph>
      </Section>

      <PriceCards />
    </div>
  );
};
