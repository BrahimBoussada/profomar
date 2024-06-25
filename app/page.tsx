import { Container } from "@/components/container";
import { BookCall } from "@/components/sections/bookCall";
import { Clients } from "@/components/sections/clients";
import { Faqs } from "@/components/sections/faqs";
import { HomepageHero } from "@/components/sections/homepage-hero";
import { HowWeWork } from "@/components/sections/howWeWork";
import { Pricing } from "@/components/sections/pricing";
import { Ready } from "@/components/sections/ready";
import { Satisfaction } from "@/components/sections/satisfaction";
import { WhyLoveUs } from "@/components/sections/whyLoveUs";

export default function Home() {
  return (
    <main>
      <Container>
        <HomepageHero />
        <Clients />
        <HowWeWork />
        <WhyLoveUs />
        <Pricing />
        <Satisfaction />
        <BookCall />
        <Faqs />
        <Ready />
      </Container>
    </main>
  );
}
