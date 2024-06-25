import { Container } from "@/components/container";
import {
  Section,
  SectionHeading,
  SectionParagraph,
} from "@/components/section";
import { Cv } from "@/components/sections/cv";
import { Ready } from "@/components/sections/ready";
import { bios } from "@/lib/data";
import Image from "next/image";
export default function WhoIsProfOmar() {
  return (
    <main className="">
      <Container>
        <Section className="text-center text-balance pt-[2rem]">
          <h1 className="pb-[1rem] text-primary-blue text-5xl md:text-5xl font-bold !leading-[3.5rem] font-ubuntu">
            Who is Prof. Dr. Omar Boussada
          </h1>

          <SectionParagraph className=" text-lg text-muted-foreground lg:text-xl">
            Learn more and get insight into his life work.
          </SectionParagraph>
        </Section>
        <div></div>

        <div className="flex  flex-col gap-[1rem] max-w-[880px] mx-auto">
          {bios.map((bio) => (
            <p key={bio.id} className=" text-lg text-justify leading-8">
              {bio.paragraph}
            </p>
          ))}
        </div>

        <Cv />

        <Ready className="max-w-[880px] mx-auto" />
      </Container>
    </main>
  );
}
