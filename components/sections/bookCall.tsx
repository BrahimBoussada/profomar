import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export const BookCall = () => {
  return (
    <div>
      <Card className="max-w-[37rem] mx-auto hover:border-primary/50 transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-center gap-[0.5rem]">
          <Image
            className=" select-none"
            src="/avatar/avatar.png"
            alt="Prof. Omar avatar"
            width={72}
            height={96}
            quality={100}
          />
          <div className="flex flex-col">
            <CardTitle className=" text-primary-blue font-bold text-xl">
              Prof. Dr. Omar Boussada
            </CardTitle>
            <CardDescription className="text-base ">
              Founder, ProfOmar.com
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-center text-balance ">
            Do you have a question or need help planning your project? <br />
            Let's chat first.
          </p>
        </CardContent>
        <CardFooter>
          <Button
            asChild
            variant="outline"
            className="w-full border-primary text-primary hover:text-primary"
          >
            <Link href="https://cal.com/profomar/book-a-call">Book a call</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
