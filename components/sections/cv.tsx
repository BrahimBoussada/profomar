import Link from "next/link";
import { Button } from "../ui/button";

export const Cv = () => {
  return (
    <div className="max-w-[880px] mx-auto mt-[4rem]">
      <h2 className={`text-primary-blue text-3xl font-bold font-ubuntu`}>
        Download Prof. Dr. Omar Boussada's CV
      </h2>
      <p className=" py-[1rem] text-lg">
        Uncover the extensive academic and professional journey of Prof. Dr.
        Omar Boussada by downloading his comprehensive Curriculum Vitae. Delve
        into his rich experiences, achievements, and contributions to the world
        of academia.
      </p>
      <div className=" flex gap-[1rem]">
        <Button asChild size="lg">
          <Link href="/pdf/CV.pdf">{`Download CV`}</Link>
        </Button>

        <Button asChild size="lg">
          <Link
            href="/pdf/السيرة الذاتية.pdf"
            className=" font-rubik "
          >{`تحميل السيرة الذاتية`}</Link>
        </Button>
      </div>
    </div>
  );
};
