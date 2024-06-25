"use client";
import { links } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "./icons/logo";
import { Container } from "./container";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", menuOpen);
  });

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);

    window.addEventListener("orientationchange", closeMenu);
    window.addEventListener("resize", closeMenu);

    return () => {
      window.addEventListener("orientationchange", closeMenu);
      window.addEventListener("resize", closeMenu);
    };
  }, [setMenuOpen]);

  return (
    <header className=" ">
      <Container className=" flex items-center justify-between py-[1.125rem]">
        <Link
          href="/"
          className=" flex w-[10.5rem] py-[1rem]"
          onClick={() => setMenuOpen((close) => !open)}
        >
          <Logo />
        </Link>

        <nav
          className={cn(
            "ml-auto mr-8 fixed top-[8rem] left-0 h-full w-full backdrop-blur-xl lg:h-auto lg:w-auto lg:static overflow-hidden",
            menuOpen ? "" : "hidden"
          )}
        >
          <ul className="flex font-medium flex-col space-y-8 text-2xl pl-[1.5rem] lg:flex-row lg:space-y-0 lg:space-x-8  lg:text-base lg:pl-0">
            {links.map((link) => (
              <li
                key={link.name}
                className={cn(
                  "hover:text-primary transition-all duration-300  lg:flex"
                )}
              >
                <Link
                  onClick={() => setMenuOpen((open) => !open)}
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className=" lg:hidden flex flex-col gap-[1rem] pt-[2rem] px-[1.5rem]">
            <Button
              asChild
              variant={"outline"}
              className=" w-full"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <Link href="/who-is-prof-omar">Who is Prof. Omar</Link>
            </Button>
            <Button
              asChild
              className="w-full"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <Link href="https://cal.com/profomar/book-a-call">
                Book a Call
              </Link>
            </Button>
          </div>
        </nav>

        <div className=" hidden lg:flex ">
          <Button asChild variant={"outline"} className="mr-4">
            <Link href="/who-is-prof-omar">Who is Prof. Omar</Link>
          </Button>
          <Button asChild className=" ">
            <Link href="https://cal.com/profomar/book-a-call">Book a Call</Link>
          </Button>
        </div>
        <div
          className="ml-auto lg:hidden cursor-pointer"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MenuIcon className="w-auto h-[2rem] " />
        </div>
      </Container>
    </header>
  );
};
