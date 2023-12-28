"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Recipe from "@/modules/recipes/Recipe";
import Ratings from "@/modules/recipes/Ratings";

type Props = {
  params: { recipe: string };
};

export default function Page({ params }: Props) {
  const recipe = params.recipe;
  return (
    <>
      <Header />
      <Recipe recipe={recipe} />
      <Ratings recipe={recipe} />
      <Footer />
    </>
  );
}
