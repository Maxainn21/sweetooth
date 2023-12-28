"use client";

import Rating from "@/components/Rating";
import axios from "axios";
import { RatingType } from "@/types/RatingType";
import useSWR, { useSWRConfig } from "swr";
import { IoStar } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";

export default function Ratings({ recipe }: { recipe: string }) {
  const fetcher = (url: string) => axios.post(url).then(res => res.data);
  const { mutate } = useSWRConfig();

  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [star, setStar] = useState(3);

  const { data, error, isLoading } = useSWR<RatingType[], Error>(
    `/api/rating/${recipe}`,
    fetcher
  );

  async function formHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await axios.post(
      `/api/rating/add`,
      {
        recipe,
        name,
        rating: star,
        comments,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    mutate(`/api/rating/${recipe}`);
  }

  if (!data) return <div></div>;

  return (
    <div className="bg-primary">
      <div className="container py-8 w-4/5 flex flex-wrap items-center">
        <div className="w-full md:w-1/2">
          <p className="font-serif font-bold">Reply to</p>
          <p className="text-3xl leading-none font-serif font-bold">
            Sweetooth Lab
          </p>
          <p className="font-serif mt-2">
            Thank you for visiting sweetooth lab, where we share our passion for
            baking and cooking. We appreciate your feedback and suggestions on
            this recipe, as they help us improve our skills and creativity. We
            hope to see you again soon on our website, where you can find more
            delicious treats for your sweet tooth.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <form
            className="ml-0 md:ml-16 mt-4 md:mt-0 flex flex-col"
            onSubmit={formHandler}>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Name..."
                required
                value={name}
                onChange={e => setName(e.target.value)}
                className="text-sm p-1 w-full text-gray-600 border-b border-accent bg-background bg-opacity-75 mt-2 outline-none"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Comments..."
              required
              value={comments}
              onChange={e => setComments(e.target.value)}
              className="text-sm p-1 w-full text-gray-600 border-b border-accent bg-background bg-opacity-75 mt-2 outline-none"
            />
            <div className="flex items-center mt-2">
              <p className="font-serif">Rating : </p>
              <div className="flex gap-1 ml-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <label
                    htmlFor={`star-${i + 1}`}
                    onClick={() => setStar(i + 1)}
                    key={i}>
                    <input
                      type="radio"
                      name="star"
                      id={`star-${i + 1}`}
                      className="hidden"
                    />
                    <IoStar
                      className={`${
                        star >= i + 1 ? "text-yellow-300" : "text-gray-300"
                      } cursor-pointer`}
                    />
                  </label>
                ))}
              </div>
              <button
                type="submit"
                className="bg-accent text-white font-serif font-bold active:scale-110 duration-150 text-sm px-4 py-1 rounded-md ml-auto">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      {data.length !== 0 ? (
        <div className="container py-8 w-4/5 flex flex-row overflow-x-scroll items-center rating">
          {data.map((rating: RatingType, index) => (
            <>
              <Rating
                key={index}
                name={rating.name}
                rating={rating.rating}
                time={rating.time}
                comments={rating.comments}
              />
            </>
          ))}
        </div>
      ) : (
        <div className="container flex flex-col pb-8 justify-center items-center">
          <Image src="/img/404.svg" alt="404" width={300} height={300} />
          <p className="text-xl font-serif text-center font-bold">
            No ratings yet. Be the first to rate this recipe.
          </p>
        </div>
      )}
    </div>
  );
}
