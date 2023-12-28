"use client";

import Image from "next/image";
import Link from "next/link";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTiktok,
  IoLogoYoutube,
} from "react-icons/io5";
import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <header className="sticky top-0 left-0 w-full flex px-8 py-4 shadow bg-background z-40">
        <nav className="md:flex items-center justify-start gap-4 font-sans text-base font-normal hidden w-1/3">
          <div className="flex justify-start group/nav">
            <Link href="/#categories" className="cursor-pointer font-medium">
              Categories
            </Link>
            <div className="flex fixed bg-background border border-secondary duration-500 delay-200 p-4 rounded mt-10 opacity-0 scale-0  group-hover/nav:opacity-100 group-hover/nav:scale-100 z-30 w-[500px]">
              <div className="w-1/3 my-auto">
                <Image
                  src="/img/nav-img.jpg"
                  alt="categories"
                  width={1920}
                  height={2430}
                  className="object-fill h-64 rounded shadow w-auto"
                />
              </div>
              <div className="w-2/3 font-sans my-auto ml-4">
                <Link
                  href="/?categories=cakes#recipes"
                  className="block p-1 rounded hover:bg-primary duration-300">
                  <p className="font-semibold">Cakes & Cupcakes</p>
                  <p>Choose from our selection of amazing homemade cakes</p>
                </Link>
                <Link
                  href="/?categories=bars#recipes"
                  className="block p-1 rounded hover:bg-primary duration-300 mt-2">
                  <p className="font-semibold">Brownies & Bars</p>
                  <p>Made with lots of love and extra chocolate fudge</p>
                </Link>
                <Link
                  href="/?categories=cookies#recipes"
                  className="block p-1 rounded hover:bg-primary duration-300 mt-2">
                  <p className="font-semibold">All Cookies</p>
                  <p>Chewy, chunky, decadent, and always fresgly baked</p>
                </Link>
              </div>
            </div>
          </div>
          <Link href="/#recipes" className="font-medium">
            Recipes
          </Link>
          <p className="font-medium">About</p>
          <p className="font-medium">Contact</p>
        </nav>
        <div className="w-1/3 md:hidden block"></div>
        <div className="flex w-1/3 justify-center">
          <a className="flex" href="/">
            <Image
              src="/img/logo/text.png"
              alt="Sweetooth Lab"
              width={1000}
              height={1000}
              className="object-contain h-10 w-auto my-auto"
            />
          </a>
        </div>
        <nav className="ml-auto">
          <div className="md:hidden my-auto ml-auto">
            <Hamburger toggled={isOpen} toggle={setOpen} rounded />
          </div>
        </nav>
        <form
          className="md:flex hidden w-1/3 justify-end items-center"
          onSubmit={event => {
            event.preventDefault();
            router.push(`/?search=${search}#recipes`);
          }}>
          <input
            type="text"
            placeholder="Search..."
            onChange={e => setSearch(e.target.value)}
            value={search}
            className="border-b border-accent bg-inherit w-2/3 outline-none"
          />
        </form>
      </header>
      <div
        className={`fixed flex flex-col top-20 right-0 z-30 bg-background border-l w-[249px] h-screen border-accent p-4 duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-[249px]"
        }`}>
        <Link href="/" onClick={() => setOpen(!isOpen)}>
          <Image
            src="/img/logo/text.png"
            alt="Sweetooth Lab"
            width={1000}
            height={1000}
            className="object-contain h-10 w-auto mx-auto mt-8"
          />
        </Link>
        <form
          className="flex mx-auto"
          onSubmit={event => {
            event.preventDefault();
            router.push(`/?search=${search}#recipes`);
            setOpen(!isOpen);
          }}>
          <input
            type="text"
            placeholder="Search..."
            onChange={e => setSearch(e.target.value)}
            value={search}
            className="mt-6 border-b border-accent bg-inherit w-2/3 mx-auto outline-none"
          />
        </form>
        <Link
          href="/#categories"
          className="font-medium text-center mt-6"
          onClick={() => setOpen(!isOpen)}>
          Categories
        </Link>
        <Link
          href="/#recipes"
          className="font-medium text-center mt-6"
          onClick={() => setOpen(!isOpen)}>
          Recipes
        </Link>
        <p className="font-medium text-center mt-6">About</p>
        <p className="font-medium text-center mt-6">Contact</p>
        <div className="flex mx-auto mt-8 gap-6">
          <IoLogoInstagram className="text-2xl" />
          <IoLogoFacebook className="text-2xl" />
          <IoLogoTiktok className="text-2xl" />
          <IoLogoYoutube className="text-2xl" />
        </div>
      </div>
    </>
  );
}
