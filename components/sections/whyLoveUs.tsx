import {
  BicepsFlexed,
  CirclePercent,
  Infinity,
  Phone,
  ScrollText,
  Target,
} from "lucide-react";

import { WhatsAppWhite } from "../icons/whatsAppWhite";

import { Section, SectionHeading, SectionParagraph } from "../section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WhatsApp } from "../icons/whatsApp";

export const WhyLoveUs = () => {
  return (
    <div id="why-choose-us">
      <Section className="text-center text-balance">
        <SectionHeading className=" font-bold text-primary-blue text-3xl lg:text-4xl">
          Why Choose Us
        </SectionHeading>
        <SectionParagraph className=" text-lg text-muted-foreground lg:text-xl">
          Prof.Omar is a fully-professional service provider.
        </SectionParagraph>
      </Section>

      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-[1rem] lg:gap-[2rem]">
        {/* CARDS */}

        {/* 1 */}

        <Card
          className=" bg-[#EB0E44] border-[#EB0E44] hover:border-primary/50 hover:-translate-y-2 transition-all duration-300
"
        >
          <CardHeader className="flex items-center justify-center rounded-md m-[1rem] bg-gradient-radial h-[14rem]">
            <Infinity className="text-white mx-auto inline-flex" size={64} />
          </CardHeader>
          <CardContent className=" flex flex-col gap-[1rem]">
            <h3 className="text-white font-bold text-xl">
              Unlimited Expertise
            </h3>
            <p className="text-white">
              With Professor Omar, there's no limit to the knowledge and
              guidance you can access. Your questions, our priority.
            </p>
          </CardContent>
        </Card>

        {/*2 */}

        <Card
          className=" bg-[#EB0E44] border-[#EB0E44] hover:border-primary/50 hover:-translate-y-2 transition-all duration-300
"
        >
          <CardHeader className="flex items-center justify-center rounded-md m-[1rem] bg-gradient-radial h-[14rem]">
            <ScrollText className="text-white mx-auto inline-flex" size={64} />
          </CardHeader>
          <CardContent className=" flex flex-col gap-[1rem]">
            <h3 className="text-white font-bold text-xl">
              Seasoned Academic Excellence
            </h3>
            <p className="text-white">
              Our services are curated by an esteemed professor who understands
              your unique needs to ensure you receive the precise results you're
              looking for.
            </p>
          </CardContent>
        </Card>

        {/* 3 */}

        <Card
          className=" bg-[#EB0E44] border-[#EB0E44] hover:border-primary/50 hover:-translate-y-2 transition-all duration-300
 "
        >
          <CardHeader className="flex items-center justify-center rounded-md m-[1rem] bg-gradient-radial h-[14rem]">
            <Target className="text-white mx-auto inline-flex" size={64} />
          </CardHeader>
          <CardContent className=" flex flex-col gap-[1rem]">
            <h3 className="text-white font-bold text-xl">
              Production-Ready Flow
            </h3>
            <p className="text-white">
              Our approach is as practical as it is informative. We don't stop
              at theory - we provide actionable advice, putting you on the path
              to success.
            </p>
          </CardContent>
        </Card>

        {/* 4 */}

        <Card
          className=" bg-[#EB0E44] border-[#EB0E44] hover:border-primary/50 hover:-translate-y-2 transition-all duration-300
"
        >
          <CardHeader className="flex items-center justify-center rounded-md m-[1rem] bg-gradient-radial h-[14rem]">
            <WhatsAppWhite className="text-white mx-auto inline-flex w-[64px] h-[64px]" />
          </CardHeader>
          <CardContent className=" flex flex-col gap-[1rem]">
            <h3 className="text-white font-bold text-xl">Add us to WhatApp</h3>
            <p className="text-white">
              Connect with us on WhatsApp for an unmatched level of support.
              Join Professor Omar and start you journey of success.
            </p>
          </CardContent>
        </Card>

        {/*5 */}

        <Card
          className=" bg-[#EB0E44] border-[#EB0E44] hover:border-primary/50 hover:-translate-y-2 transition-all duration-300
"
        >
          <CardHeader className="flex items-center justify-center rounded-md m-[1rem] bg-gradient-radial h-[14rem]">
            <CirclePercent
              className="text-white mx-auto inline-flex"
              size={64}
            />
          </CardHeader>
          <CardContent className=" flex flex-col gap-[1rem]">
            <h3 className="text-white font-bold text-xl">
              Transparent Pricing
            </h3>
            <p className="text-white">
              Professor offers a straightforward pricing structure. No hidden
              fees or fluctuating costs. We're here to help you grow
              confidently.
            </p>
          </CardContent>
        </Card>

        {/*6 */}

        <Card
          className=" bg-[#EB0E44] border-[#EB0E44] hover:border-primary/50 hover:-translate-y-2 transition-all duration-300
 "
        >
          <CardHeader className="flex items-center justify-center rounded-md m-[1rem] bg-gradient-radial h-[14rem]">
            <BicepsFlexed
              className="text-white mx-auto inline-flex"
              size={64}
            />
          </CardHeader>
          <CardContent className=" flex flex-col gap-[1rem]">
            <h3 className="text-white font-bold text-xl">
              Flexibility at Its Finest
            </h3>
            <p className="text-white">
              Your academic journey is your own, and we're here to complement
              it. Professor Omar services are incredibly flexible.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
