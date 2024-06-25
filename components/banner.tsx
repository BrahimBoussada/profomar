import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Banner = () => {
  return (
    <div id="banner">
      <Link
        href="https://cal.com/profomar/book-a-call"
        className=" group flex bg-primary w-full items-center justify-center py-3 text-white text-sm font-medium tracking-wider text-center transition-all px-4"
      >
        <p>
          Let's chat about your project. <span>Book a call</span>
          <ArrowRight
            className="inline-flex   group-hover:translate-x-1 transition"
            width="0.875rem"
            height="0.875rem"
          />
        </p>
      </Link>
    </div>
  );
};
