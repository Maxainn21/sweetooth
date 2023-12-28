import Image from "next/image";
import Link from "next/link";
import { IoArrowDownOutline } from "react-icons/io5";

export default function Categories() {
  return (
    <div className="bg-primary">
      <div
        id="categories"
        className="container flex flex-col pt-6 mt-16 scroll-m-24">
        <div className="mx-auto font-serif text-center">
          <p className="text-3xl">Our Goodies</p>
          <p>
            Find your new favourite dessert in our amazing collection of easy
            baking recipes.
          </p>
        </div>
        <div className="flex flex-wrap justify-center mt-4 mb-8">
          <div className="w-1/2 md:w-1/3 lg:w-1/4 font-serif">
            <Link
              href="/?categories=cakes#recipes"
              className="flex flex-col border border-accent p-3 mx-2 hover:bg-accent hover:bg-opacity-30 duration-500 h-full">
              <Image
                src="/img/categories/cupcakes.jpg"
                alt="Cupcakes"
                width={1920}
                height={1280}
              />
              <p className="text-center mt-4 text-xl">Cakes & Cupcakes</p>
              <p className="text-center w-3/4 mt-2 mx-auto mb-auto">
                Choose from our selection of amazing homemade cakes
              </p>
              <IoArrowDownOutline className="mx-auto mt-4 text-4xl" />
            </Link>
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-1/4 font-serif">
            <Link
              href="/?categories=bars#recipes"
              className="flex flex-col border border-accent p-3 mx-2 hover:bg-accent hover:bg-opacity-30 duration-500 h-full">
              <Image
                src="/img/categories/brownies.jpg"
                alt="Brownies"
                width={1920}
                height={1280}
              />
              <p className="text-center mt-4 text-xl">Brownies & Bars</p>
              <p className="text-center w-3/4 mt-2 mx-auto mb-auto">
                Made with lots of love and extra chocolate fudge
              </p>
              <IoArrowDownOutline className="mx-auto mt-4 text-4xl" />
            </Link>
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-1/4 font-serif md:mt-0 mt-4">
            <Link
              href="/?categories=cookies#recipes"
              className="flex flex-col border border-accent p-3 mx-2 hover:bg-accent hover:bg-opacity-30 duration-500 h-full">
              <Image
                src="/img/categories/cookies.jpg"
                alt="Cookies"
                width={1920}
                height={1280}
              />
              <p className="text-center mt-4 text-xl">All Cookies</p>
              <p className="text-center w-3/4 mt-2 mx-auto mb-auto">
                Chewy, chunky, decadent, and always fresgly baked
              </p>
              <IoArrowDownOutline className="mx-auto mt-4 text-4xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
