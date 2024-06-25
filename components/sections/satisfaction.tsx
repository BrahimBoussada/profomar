import { Badge } from "../badge";
import { Section, SectionHeading, SectionParagraph } from "../section";
import { Button } from "../ui/button";

export const Satisfaction = () => {
  return (
    <div className="pb-[4rem]">
      <Section className="text-center text-balance">
        <SectionHeading className=" font-bold text-primary text-3xl lg:text-4xl">
          Satisfaction Guarantee
        </SectionHeading>
        <SectionParagraph className=" text-lg text-muted-foreground lg:text-xl">
          Don't love us? Get a full refund.
        </SectionParagraph>
      </Section>

      <div className=" flex flex-wrap justify-center items-center gap-[1rem]">
        <Badge text="Experienced Professional" />
        <Badge text="No Minimum Commitment" />
        <Badge text="100s of Happy Clients" />
        <Badge text="Clear Communication " />
        <Badge text="High-Quality Results" />
        <Badge text="No Hidden Fees" />
      </div>
    </div>
  );
};
