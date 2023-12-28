import relativeTimeConverter from "@/libs/relativeTimeConverter";
import { IoStar } from "react-icons/io5";
import { RatingType } from "@/types/RatingType";

/* eslint-disable @next/next/no-img-element */
export default function Rating({ name, rating, time, comments }: RatingType) {
  return (
    <div className="w-[24rem] flex-shrink-0 flex h-full">
      <div className="flex w-full flex-col bg-background rounded-md drop-shadow-md mx-4 px-6 py-8">
        <div className="flex items-center">
          <img
            src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${name}&backgroundColor=f5ebe0&scale=80`}
            alt={name}
            className="rounded-full w-12 h-12 drop-shadow"
          />
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center ml-4">
              <p className="font-serif font-bold line-clamp-1">{name}</p>
              <p className="text-xs shrink-0">{relativeTimeConverter(time)}</p>
            </div>
            <div className="flex ml-4 gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <IoStar
                  key={index}
                  className={`text-${
                    rating >= index + 1 ? "yellow-300" : "secondary"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-sm mt-4 line-clamp-6">{comments}</p>
      </div>
    </div>
  );
}
