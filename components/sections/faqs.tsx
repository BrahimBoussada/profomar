import Link from "next/link";
import { Section, SectionHeading, SectionParagraph } from "../section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faqs = () => {
  return (
    <div id="faqs">
      <Section className="text-center text-balance">
        <SectionHeading className=" font-bold text-primary-blue text-3xl lg:text-4xl">
          Frequently asked questions
        </SectionHeading>
        <SectionParagraph className=" text-lg text-muted-foreground lg:text-xl">
          Find answers to your questions here.
        </SectionParagraph>
      </Section>

      {/* ACCORDION */}

      <Accordion type="single" collapsible className=" max-w-[880px] mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Who is Prof. Omar, and what services does he offer?
          </AccordionTrigger>
          <AccordionContent>
            Prof. Dr. Omar Boussada is an esteemed academic professional who
            offers a range of services, including Crisis Management Strategy,
            Journalism, Media and Communication Consulting, and Paper Review and
            Editing.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            Who can benefit from Prof. Omar services?
          </AccordionTrigger>
          <AccordionContent>
            Prof. Omar's services are designed to benefit a diverse range of
            individuals, including businesses, academics, journalists, and
            students.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            What is the pricing structure for Prof. Omar's services?
          </AccordionTrigger>
          <AccordionContent>
            Prof. Omar offers a flat, transparent pricing structure for each
            project, ensuring you know the cost upfront. There are no hidden
            fees or hourly charges.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            What languages does Prof. Omar speak?
          </AccordionTrigger>
          <AccordionContent>
            Prof. Omar is fluent in Arabic, English, and French, allowing him to
            assist clients from diverse linguistic backgrounds.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            How do I request Prof. Omar's services?
          </AccordionTrigger>
          <AccordionContent>
            You can easily request Prof. Omar's services by booking a call. This
            convenient method allows you to connect with us, discuss your needs,
            and begin your journey with ease.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>
            How long will it take to receive results?
          </AccordionTrigger>
          <AccordionContent>
            The timeline for results varies depending on the service you choose
            and your specific goals. Prof. Omar will work with you to create a
            realistic timeline for your expectations.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>
            How can I learn more about Prof. Omar ?
          </AccordionTrigger>
          <AccordionContent>
            To learn more about Prof. Omar and his accomplishments, visit our{" "}
            <Link href="/who-is-prof-omar" className=" underline">
              Who is Prof. Omar
            </Link>{" "}
            page. You'll find in-depth information about his background,
            expertise, and notable achievements.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8">
          <AccordionTrigger>
            Is there a way to view Prof. Omar's CV?
          </AccordionTrigger>
          <AccordionContent>
            Yes, you can view and download Prof. Omar's CV directly from our
            website. You can access it by by clicking{" "}
            <Link href="/pdf/CV.pdf" className=" underline">
              here.
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
