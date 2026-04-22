"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import Logo from "@/components/app/icons/logo";
import ThemeToggle from "../ui/themeToggle";
import MenuIcon from "../icons/menuIcon";
import { Separator } from "@/components/ui/separator";
import { EventHandler, useEffect, useRef, useState } from "react";

interface RouteItem {
  text: string;
  href: string;
  title: string;
}
const routeItems: RouteItem[] = [
  { text: "Features", href: "/#features", title: "Go to features section" },
  {
    text: "How it works",
    href: "/#howItWorks",
    title: "Go to how it works section",
  },
  {
    text: "Pricing",
    href: "/#pricing",
    title: "Go to pricing section",
  },
  {
    text: " Docs",
    href: "/docs",
    title: "Visit the docs page",
  },
];
const Header = () => {
  const menuRef = useRef<HTMLUListElement>(null);
  const [mobilMenuOpen, SetMobilMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    SetMobilMenuOpen(!mobilMenuOpen);
  };
  const closeMobilMenu = () => SetMobilMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMobilMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="max-w-300 mx-auto py-3 !z-50 sticky bg-background">
      <nav className="flex flex-row px-6 py-3 xl:p-0 gap-24 justify-between !z-50">
        <Button
          variant={"outline"}
          size={"icon-lg"}
          className={" md:hidden"}
          onClick={toggleMobileMenu}
        >
          <MenuIcon />{" "}
        </Button>
        <Link
          href={"/"}
          className={buttonVariants({
            variant: "ghost",
            size: "lg",
            className: "md:hidden xl:flex",
          })}
        >
          <Logo></Logo> The Door
        </Link>
        <ul
          className={` ${mobilMenuOpen ? "translate-x-0" : "-translate-x-full"} duration-300 md:translate-x-0 fixed  md:relative top-0 left-0 flex-col flex bg-background md:bg-transparent h-full md:h-fit w-2/3 md:w-fit  px-6 md:p-0 md:flex md:flex-row gap-x-6`}
          ref={menuRef}
        >
          <div className="flex md:hidden py-6 justify-left items-center">
            <Button
              variant={"outline"}
              size={"icon-lg"}
              onClick={toggleMobileMenu}
            >
              <MenuIcon />
            </Button>
            <Link
              href={"/"}
              onClick={closeMobilMenu}
              className="flex flex-1 gap-3 text-sm items-center justify-center"
            >
              <Logo extraClass="w-4" /> The Door
            </Link>
          </div>
          {routeItems.map(({ text, title, href }, index) => {
            return (
              <li
                key={index + text}
                title={title}
                className=""
                onClick={closeMobilMenu}
              >
                <Link
                  href={href}
                  className={buttonVariants({
                    variant: "ghost",
                    size: "default",
                    className:
                      "w-full lg:w-fit justify-start lg:justify-center",
                  })}
                >
                  {text}
                </Link>
                <Separator className={"md:hidden"} />
              </li>
            );
          })}
        </ul>
        <div className="flex gap-3 items-center justify-center">
          <ThemeToggle />
          <div className="hidden md:block">
            <Link
              href="/free-trial"
              className={`${buttonVariants({
                variant: "default",
                size: "lg",
              })}`}
            >
              Start FREE Trial
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
