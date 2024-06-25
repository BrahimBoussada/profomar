import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Check,
  Megaphone,
  PencilLine,
  Shield,
  ShieldCheck,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Separator } from "../ui/separator";

export const PriceCards = () => {
  return (
    <div className="grid gap-[1rem] md:grid-cols-2 lg:grid-cols-3">
      {/* 1ST CARD */}

      <Card
        className="bg-primary border-white/0 hover: hover:-translate-y-2 transition-all duration-300
"
      >
        {/* Title */}

        <CardHeader className="pb-[1rem] gap-[0.5rem]">
          <ShieldCheck className="text-white" size={32} />
          <CardTitle className="text-2xl text-white font-bold">
            Crisis Management Package
          </CardTitle>
          <Separator className="h-[2px] bg-white/50" />
        </CardHeader>

        {/* PRICING */}

        <CardContent className=" md:h-[578px]">
          <div className="flex flex-col gap-[0.25rem] mb-[1rem]">
            <p className=" line-through   text-white ">SR31,000</p>
            <p className=" text-3xl text-white  font-bold">SR20,000</p>
            <p className=" text-yellow-300 font-bold text-lg">Save 35%</p>
          </div>

          {/* BORDER */}

          <div className=" border rounded-md p-4 mb-[1rem]">
            <p className=" text-white font-medium">
              Ideal for individuals or organizations seeking a comprehensive
              crisis strategy.
            </p>
          </div>

          {/* PERKS */}

          <div className=" flex flex-col gap-[1rem]">
            <div className="flex items-center justify-between gap-[0.5rem]">
              <p className=" text-white font-medium min-w-[8rem]">
                What's Included:
              </p>
              <Separator className="h-[1px]  bg-white/50 w-2/3" />
            </div>

            <div className=" flex flex-col gap-[1rem]">
              {/* 1 */}

              <div className="flex gap-[0.5rem]">
                <Check className=" text-green-500" />
                <p className=" text-white font-medium">Crisis Assessment</p>
              </div>

              {/* 2 */}

              <div className="flex gap-[0.5rem] ">
                <Check className=" text-green-500" />
                <p className=" text-white font-medium">
                  In-Depth Crisis Analysis
                </p>
              </div>

              {/* 3 */}

              <div className="flex gap-[0.5rem]">
                <Check className=" text-green-500" />
                <p className=" text-white font-medium">Tailored Strategy</p>
              </div>

              {/* 4 */}

              <div className="flex gap-[0.5rem]">
                <Check className=" text-green-500" />
                <p className=" text-white font-medium">
                  Comprehensive Crisis Plan
                </p>
              </div>

              {/* 5 */}

              <div className="flex gap-[0.5rem]">
                <Check className=" text-green-500" />
                <p className=" text-white font-medium">Consultation</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href="https://cal.com/profomar/book-a-call">Book a call</Link>
          </Button>
        </CardFooter>
      </Card>

      {/* 2ND CARD */}

      <Card className="bg-[#4B175D] border-white/0 hover: hover:-translate-y-2 transition-all duration-300">
        {/* Title */}

        <CardHeader className="pb-[1rem] gap-[0.5rem]">
          <PencilLine className="text-white" size={32} />
          <CardTitle className="text-2xl text-white font-bold">
            Paper Review & Editing Package
          </CardTitle>
          <Separator className="h-[2px] bg-white/50" />
        </CardHeader>

        {/* PRICING */}

        <CardContent className=" md:h-[578px]">
          <div className="flex flex-col gap-[0.25rem] mb-[1rem]">
            <p className=" line-through   text-white ">SR12,000</p>
            <p className=" text-3xl text-white  font-bold">SR8,000</p>
            <p className=" text-yellow-300 font-bold text-lg">Save 15%</p>
          </div>

          {/* BORDER */}

          <div className=" border rounded-md p-4 mb-[1rem]">
            <p className=" text-white font-medium">
              Best for academics and researchers looking to refine their written
              work.
            </p>
          </div>

          {/* PERKS */}

          <div className=" flex flex-col gap-[1rem]">
            <div className="flex items-center justify-between gap-[0.5rem]">
              <p className=" text-white font-medium min-w-[8rem]">
                What's Included:
              </p>
              <Separator className="h-[1px]  bg-white/50 w-2/3" />
            </div>

            <div className=" flex flex-col gap-[1rem]">
              {/* 1 */}

              <div className="flex gap-[0.5rem]">
                <Check className=" text-green-500" />
                <p className=" text-white font-medium">
                  Thorough Review by Expert
                </p>
              </div>

              {/* 2 */}

              <div className="flex gap-[0.5rem] ">
                <Check className=" text-green-500" />
                <p className=" text-white font-medium">Language Enhancement</p>
              </div>

              {/* 3 */}

              <div className="flex gap-[0.5rem]">
                <Check className=" text-green-500" />
                <p className=" text-white font-medium">
                  Formatting and Citations
                </p>
              </div>

              {/* 4 */}

              <div className="flex gap-[0.5rem]">
                <Check className=" text-green-500" />
                <p className=" text-white font-medium">
                  Targeted Feedback & Recommendations
                </p>
              </div>

              {/* 5 */}

              <div className="flex gap-[0.5rem]">
                <Check className=" text-green-500" />
                <p className=" text-white font-medium">
                  Increased Paper's Acceptance Chance
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className=" ">
          <Button asChild variant="outline" className="w-full">
            <Link href="https://cal.com/profomar/book-a-call">Book a call</Link>
          </Button>
        </CardFooter>
      </Card>

      {/* 3RD CARD */}

      <Card className="bg-primary-blue md:col-span-2 lg:col-span-1 border-white/0 hover: hover:-translate-y-2 transition-all duration-300">
        {/* Title */}

        <CardHeader className="pb-[1rem] gap-[0.5rem]">
          <Megaphone className="text-white" size={32} />
          <CardTitle className="text-2xl text-white font-bold">
            Journalism Support Package
          </CardTitle>
          <Separator className="h-[2px] bg-white/50" />
        </CardHeader>

        {/* PRICING */}

        <CardContent className=" md:h-[578px]">
          <div className="flex flex-col gap-[0.25rem] mb-[1rem]">
            <p className=" line-through   text-white ">SR7,000</p>
            <p className=" text-3xl text-white  font-bold">SR5,000</p>
            <p className=" text-yellow-300 font-bold text-lg">Save 15%</p>
          </div>

          {/* BORDER */}

          <div className=" border rounded-md p-4 mb-[1rem]">
            <p className=" text-white font-medium">
              Perfect for writers, journalists, or content creators.
            </p>
          </div>

          {/* PERKS */}

          <div className=" flex flex-col gap-[1rem]">
            <div className="flex items-center justify-between gap-[0.5rem]">
              <p className=" text-white font-medium min-w-[8rem]">
                What's Included:
              </p>
              <Separator className="h-[1px]  bg-white/50 " />
            </div>

            <div className=" flex flex-col gap-[1rem]">
              {/* 1 */}

              <div className="flex gap-[0.5rem]">
                <Check className=" text-green-500" />
                <p className=" text-white font-medium">Editorial Guidance</p>
              </div>

              {/* 2 */}

              <div className="flex gap-[0.5rem] ">
                <Check className=" text-green-500" />
                <p className=" text-white font-medium">Content Strategy</p>
              </div>

              {/* 3 */}

              <div className="flex gap-[0.5rem]">
                <Check className=" text-green-500" />
                <p className=" text-white font-medium">
                  Personalized Content Plan
                </p>
              </div>

              {/* 4 */}

              <div className="flex gap-[0.5rem]">
                <Check className=" text-green-500" />
                <p className=" text-white font-medium">
                  Media Exposure Strategy
                </p>
              </div>

              {/* 5 */}

              <div className="flex gap-[0.5rem]">
                <Check className=" text-green-500" />
                <p className=" text-white font-medium">Consultation</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full">
            <Link href="https://cal.com/profomar/book-a-call">Book a call</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
