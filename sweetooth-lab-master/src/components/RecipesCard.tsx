"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoHeart, IoHeartOutline, IoTimerOutline } from "react-icons/io5";

type RecipesCardProps = {
  id: string;
  title: string;
  author: string;
  time: number;
};

export default function RecipesCard({
  id,
  title,
  author,
  time,
}: RecipesCardProps) {
  const [isLiked, setLiked] = useState(false);

  return (
    <div className="w-1/2 md:w-1/3 lg:w-1/4">
      <div className="relative block mx-2 mt-4 drop-shadow-md group hover:scale-105 duration-300 select-none">
        <Link href={`/recipes/${id}`} scroll={false}>
          <Image
            src={`/img/recipes/${id}.webp`}
            alt={title}
            width={1920}
            height={2880}
          />
        </Link>
        <div className="absolute flex w-full p-2 top-0 opacity-0 group-hover:opacity-100 duration-300 bg-gradient-to-b from-primary">
          <div className="flex">
            <IoHeartOutline
              onClick={() => setLiked(!isLiked)}
              className={`text-xl duration-300 cursor-pointer ${
                isLiked ? "scale-0 opacity-0" : "scale-100 opacity-100"
              }`}
            />
            <IoHeart
              onClick={() => setLiked(!isLiked)}
              className={`absolute text-xl duration-300 cursor-pointer text-rose-600 ${
                !isLiked ? "scale-0 opacity-0" : "scale-100 opacity-100"
              }`}
            />
          </div>
          <div className="flex items-center ml-auto">
            <IoTimerOutline className="text-xl" />
            <p className="text-xs ml-1">{time} min</p>
          </div>
        </div>
        <Link
          href={`/recipes/${id}`}
          scroll={false}
          className="bg-primary absolute w-full p-2 bottom-0 min-h-[88px] group-hover:bg-opacity-75 duration-300">
          <p className="font-sans text-xs font-bold">RECIPE</p>
          <p className="font-serif text-base leading-none">{title}</p>
          <p className="text-xs">
            by <span className="text-accent">{author}</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
