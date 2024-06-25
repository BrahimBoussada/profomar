import { CalendarPlus, Download, ShieldCheck } from "lucide-react";
import { Section, SectionHeading, SectionParagraph } from "../section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const HowWeWork = () => {
  return (
    <div id="how-we-work">
      <Section className="text-center text-balance">
        <SectionHeading className=" font-bold text-primary-blue text-3xl lg:text-4xl">
          How We Work
        </SectionHeading>
        <SectionParagraph className=" text-lg text-muted-foreground lg:text-xl">
          A step-by-step approach designed to get our clients the best results.
        </SectionParagraph>
      </Section>

      {/* CARDS */}

      {/* 1 */}

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto place-items-center gap-[1rem] xl:grid-cols-3 ">
        <Card className="w-full h-full hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg flex gap-[0.5rem] md:text-xl ">
              <CalendarPlus className=" text-primary " />
              1. Book a Consultation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Start by scheduling a call with the professor to discuss your
              project in detail.{" "}
              <span className="text-primary">
                We listen to your needs and help refine your requests to ensure
                you get the highest results.
              </span>{" "}
              You can change or add to your requests - we'll keep them
              organized.
            </p>
          </CardContent>
        </Card>

        {/* 2 */}

        <Card className="w-full h-full hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg flex gap-[0.5rem] md:text-xl">
              <ShieldCheck className=" text-primary" />
              2. Secure Payment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Once the project details are clarified, make the necessary payment
              to proceed.{" "}
              <span className="text-primary">
                We promise no sudden delays or additional fees.
              </span>{" "}
              This payment secures your place in the professor's schedule,
              guaranteeing a seamless workflow.
            </p>
          </CardContent>
        </Card>

        {/* 3 */}

        <Card className="w-full h-full md:col-span-2 lg:col-span-1 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg flex gap-[0.5rem] md:text-xl">
              <Download className=" text-primary" />
              3. Completed Work Delivered
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="">
              We're committed to meticulous work on your project, ensuring it
              aligns with your vision and expectations. When it's ready,{" "}
              <span className="text-primary">
                we swiftly send you the finished project, fully prepared for
                immediate use.
              </span>{" "}
              If refinements are needed, we work together until perfection.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
