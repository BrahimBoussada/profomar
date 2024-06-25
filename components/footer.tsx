import { footerLinks } from "@/lib/data";
import { Container } from "./container";
import { LogoMark } from "./icons/logoMark";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-primary-blue">
      <Container className="pt-[3rem] pb-[1rem] flex flex-col gap-[2rem]">
        <div className=" flex flex-col gap-[2rem] justify-between items-start lg:flex-row">
          <div className=" flex flex-col gap-[1rem]">
            <LogoMark className=" w-[3rem]" />
            <h2 className=" text-white font-bold text-xl font-ubuntu">
              Unlock Your Full Potential <br /> with Prof. Omar
            </h2>
          </div>

          <div>
            <ul className=" flex flex-col gap-[1rem]">
              {footerLinks.map((footerLink) => (
                <li key={footerLink.name} className="lg:text-right">
                  <Link
                    href={footerLink.hash}
                    target={footerLink.target}
                    className="text-white font-medium text-base  hover:text-white/75 transition-all duration-300"
                  >
                    {footerLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* TERMS */}

        <div className=" flex flex-col justify-between lg:flex-row">
          <div className="flex flex-col gap-[1rem] lg:flex-row mb-[1rem] lg:mb-[0rem]">
            <Link
              href="/terms-of-service"
              className=" text-white/50 font-medium hover:text-white/75 transition-all duration-300 pointer-events-none"
            >
              Terms of Service
            </Link>
            <Link
              href="/terms-of-service"
              className=" text-white/50 font-medium hover:text-white/75 transition-all duration-300 pointer-events-none"
            >
              Privacy
            </Link>
          </div>

          <p className=" text-white/50 font-medium select-none">
            &copy; Prof.Omar
          </p>
        </div>
      </Container>
    </footer>
  );
};
