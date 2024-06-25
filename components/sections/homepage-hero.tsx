import Link from "next/link";
import { Hero, HeroParagraph, HeroTitle } from "../hero";
import { WhatsApp } from "../icons/whatsApp";
import { Button } from "../ui/button";

export const HomepageHero = () => {
  return (
    <Hero className="">
      <HeroTitle className="text-balance text-5xl lg:text-7xl font-medium text-primary-blue mt-[2rem] lg:mt-[6rem] !leading-[4rem] lg:!leading-[5rem] font-ubuntu ">
        Unlock Your Full Potential with <br /> Professor Omar
      </HeroTitle>
      <HeroParagraph className="text-balance font-medium text-foreground/75 text-lg md:text-2xl  tracking-wide my-[2rem] !leading-[2.25rem]  ">
        Start today and access expert academic support and growth. No expensive
        hourly billing. <br /> No hidden fees.{" "}
        <span className="">Flat pricing rates.</span> Add us to
        <WhatsApp className="inline-flex w-fit h-[36px]" />
        WhatsApp. Pause anytime.
      </HeroParagraph>
      <div className="flex flex-col gap-[1rem] justify-center md:flex-row md:gap-[1.5rem]">
        <Button variant="default" size="lg">
          <Link
            href="https://cal.com/profomar/book-a-call"
            className="text-base"
          >
            Book a call
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="text-base">
          <Link href="#pricing">View pricing</Link>
        </Button>
      </div>
    </Hero>
  );
};
