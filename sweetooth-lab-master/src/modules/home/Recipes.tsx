"use client";

import RecipesCard from "@/components/RecipesCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { RecipeType } from "@/types/RecipeType";

export default function Recipes({
  search,
  categories,
}: {
  search: string;
  categories: string;
}) {
  const [recipes, setRecipes] = useState([]);

  async function getData() {
    const res = await axios.post(
      `/api/recipes?search=${search}&categories=${categories}`
    );
    setRecipes(res.data);
  }
  useEffect(() => {
    getData();
  }, [search, categories]);

  return (
    <>
      <div id="recipes" className="container flex flex-col mt-16 scroll-m-24">
        <div className="mx-auto font-serif text-center">
          <p className="text-3xl">What&apos;s on our table</p>
          <p>
            Find your new favourite dessert in our amazing collection of easy
            baking recipes.
          </p>
        </div>
        <div className="flex flex-wrap justify-center mt-4 mb-8 w-4/5 md:w-2/3 mx-auto">
          {recipes.map((recipe: RecipeType) => (
            <RecipesCard
              key={recipe._id.$oid}
              id={recipe.id}
              title={recipe.title}
              author={recipe.author}
              time={recipe.time}
            />
          ))}
        </div>
      </div>
    </>
  );
}
