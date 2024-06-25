import Link from "next/link";
import { Button } from "../ui/button";
import { CircleArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const Ready = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-between lg:flex-row lg:items-center] py-[4rem]",
        className
      )}
    >
      <h2 className=" text-primary-blue font-bold text-2xl pb-[1rem] lg:pb-0 font-ubuntu">
        Ready? <br /> Let's get started.
      </h2>

      <div className=" flex items-center gap-[1.5rem] justify-center w-full  lg:w-auto  ">
        <Button asChild size="lg" className="w-full ">
          <Link href="https://cal.com/profomar/book-a-call">Book a call</Link>
        </Button>
      </div>
    </div>
  );
};
