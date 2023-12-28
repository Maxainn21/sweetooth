import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import {
  IoAddCircle,
  IoCheckmarkCircle,
  IoPrintOutline,
  IoRemoveCircle,
  IoShareOutline,
  IoStar,
} from "react-icons/io5";
import useSWR from "swr";
import ReactLoading from "react-loading";
import { RecipeType } from "@/types/RecipeType";

export default function Recipe({ recipe }: { recipe: string }) {
  const fetcher = (url: string) => axios.post(url).then(res => res.data);
  const [serving, setServing] = useState(1);

  const { data, error, isLoading } = useSWR<RecipeType, Error>(
    `/api/recipes/${recipe}`,
    fetcher
  );

  if (!data)
    return (
      <div className="flex justify-center items-center h-screen">
        <ReactLoading type="bubbles" color="#000" />
      </div>
    );

  return (
    <>
      <div className="bg-accent">
        <div className="flex flex-wrap container py-10">
          <div className="w-full lg:w-2/3">
            <div className="flex gap-1 text-sm items-center ml-2">
              <p>Recipes</p>
              <p>-&gt;</p>
              <p>{data.title}</p>
            </div>
            <div>
              <p className="text-6xl font-bold font-serif mt-4 text-center lg:text-left">
                {data.title}
              </p>
            </div>
            <div className="flex flex-wrap mt-6">
              <div className="w-full lg:w-3/5 flex gap-4 lg:justify-start justify-center text-center lg:text-left">
                <div className="flex flex-col font-sans leading-none">
                  <p>Total Time</p>
                  <p className="font-bold mt-1">
                    {data.recipes.time.total} min
                  </p>
                </div>
                <div className="flex flex-col font-sans leading-none">
                  <p>Prep Time</p>
                  <p className="font-bold mt-1">{data.recipes.time.prep} min</p>
                </div>
                <div className="flex flex-col font-sans leading-none">
                  <p>Cook Time</p>
                  <p className="font-bold mt-1">{data.recipes.time.cook} min</p>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/5 mt-6 lg:mt-0 flex justify-center lg:justify-start text-center lg:text-left">
                <div className="flex flex-col font-sans leading-none">
                  <p>{data.recipes.reviews.count} Reviews</p>
                  <div className="flex gap-1 mt-1">
                    <span className="text-yellow-300 hidden"></span>
                    <span className="text-secondary hidden"></span>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <IoStar
                        key={index}
                        className={`text-${
                          data.recipes.reviews.rating >= index + 1
                            ? "yellow-300"
                            : "secondary"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-1/2 lg:w-1/5 mt-6 lg:mt-0 flex gap-4 justify-center lg:justify-start">
                <div className="flex flex-col font-sans leading-none">
                  <IoShareOutline className="text-xl mx-auto" />
                  <p className="mt-1">Share</p>
                </div>
                <div className="flex flex-col font-sans leading-none">
                  <IoPrintOutline className="text-xl mx-auto" />
                  <p className="mt-1">Print</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-wrap mt-8 lg:mt-0 justify-center">
            <Image
              src={`/img/recipes/${data.id}.webp`}
              alt={data.title}
              width={1000}
              height={1000}
              className="object-contain static lg:absolute max-w-[320px] h-auto drop-shadow-xl"
            />
            <div className="static lg:absolute hidden lg:block lg:translate-y-[500px] w-80 h-min p-4 bg-primary drop-shadow-xl">
              <p className="font-bold text-xl">Bahan</p>
              <div className="flex items-center mt-2 mb-4 gap-3">
                <IoRemoveCircle
                  className={`inline-block text-3xl active:scale-110 duration-300 cursor-pointer ${
                    serving === 1 ? "text-gray-400" : "text-accent"
                  }`}
                  onClick={() => setServing(serving > 1 ? serving - 1 : 1)}
                />
                <p className="text-sm w-max select-none">{serving} Sajian</p>
                <IoAddCircle
                  className="inline-block text-3xl text-accent active:scale-110 duration-300 cursor-pointer"
                  onClick={() => setServing(serving + 1)}
                />
              </div>
              <div className="ml-2">
                {data.recipes.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center mt-1 gap-2">
                    <div>
                      <IoCheckmarkCircle className="inline-block text-base text-accent" />
                    </div>
                    <p>
                      {typeof ingredient.quantity === "number"
                        ? ingredient.quantity * serving
                        : ""}{" "}
                      {ingredient.unit} {ingredient.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-6 font-sans flex flex-wrap">
        <div className="w-full lg:w-2/3 mx-2 md:mx-0">
          <p className="w-full md:w-4/5">{data.desc}</p>
          <p className="mt-4 font-bold text-lg">Nutrisi persajian</p>
          <div className="flex mt-2 gap-1 lg:gap-4 flex-wrap justify-evenly lg:justify-start">
            <div className="flex flex-col items-center bg-primary p-1 w-20 drop-shadow-sm">
              <p className="px-1 pb-1">Calories</p>
              <p className="bg-background w-full text-center font-semibold font-mono">
                {data.recipes.nutrition.calories}
              </p>
            </div>
            <div className="flex flex-col items-center bg-primary p-1 w-20 drop-shadow-sm">
              <p className="px-1 pb-1">Protein</p>
              <p className="bg-background w-full text-center font-semibold font-mono">
                {data.recipes.nutrition.protein}g
              </p>
            </div>
            <div className="flex flex-col items-center bg-primary p-1 w-20 drop-shadow-sm">
              <p className="px-1 pb-1">Carbs</p>
              <p className="bg-background w-full text-center font-semibold font-mono">
                {data.recipes.nutrition.carbs}g
              </p>
            </div>
            <div className="flex flex-col items-center bg-primary p-1 w-20 drop-shadow-sm">
              <p className="px-1 pb-1">Fats</p>
              <p className="bg-background w-full text-center font-semibold font-mono">
                {data.recipes.nutrition.fats}g
              </p>
            </div>
            <div className="flex flex-col items-center bg-primary p-1 w-20 drop-shadow-sm">
              <p className="px-1 pb-1">Fibre</p>
              <p className="bg-background w-full text-center font-semibold font-mono">
                {data.recipes.nutrition.fibre}g
              </p>
            </div>
          </div>
          <p className="mt-4 font-bold text-xl">Alat</p>
          <div className="ml-2">
            {data.recipes.utensils.map((utensil, index) => (
              <div key={index} className="flex items-center mt-1 gap-2">
                <div>
                  <IoCheckmarkCircle className="inline-block text-base text-accent" />
                </div>
                <p>{utensil}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 h-min block lg:hidden">
            <p className="font-bold text-xl">Bahan</p>
            <div className="flex items-center mt-2 mb-4 gap-3">
              <IoRemoveCircle
                className={`inline-block text-3xl active:scale-110 duration-300 cursor-pointer ${
                  serving === 1 ? "text-gray-400" : "text-accent"
                }`}
                onClick={() => setServing(serving > 1 ? serving - 1 : 1)}
              />
              <p className="text-sm w-max select-none">{serving} Sajian</p>
              <IoAddCircle
                className="inline-block text-3xl text-accent active:scale-110 duration-300 cursor-pointer"
                onClick={() => setServing(serving + 1)}
              />
            </div>
            <div className="ml-2">
              {data.recipes.ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center mt-1 gap-2">
                  <div>
                    <IoCheckmarkCircle className="inline-block text-base text-accent" />
                  </div>
                  <p>
                    {typeof ingredient.quantity === "number"
                      ? ingredient.quantity * serving
                      : ""}{" "}
                    {ingredient.unit} {ingredient.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 font-bold text-xl">Cara membuat</p>
          <div className="ml-2">
            {data.recipes.steps.map((step, index) => (
              <div key={index} className="flex items-center mt-1 gap-2">
                <div>
                  <IoCheckmarkCircle className="inline-block text-base text-accent" />
                </div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/3 block md:hidden"></div>
      </div>
    </>
  );
}
