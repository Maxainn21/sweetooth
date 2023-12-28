"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Categories from "@/modules/home/Categories";
import Jumbotron from "@/modules/home/Jumbotron";
import Recipes from "@/modules/home/Recipes";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const search: any = searchParams.get("search");
  const categories: any = searchParams.get("categories");

  return (
    <>
      <Header />
      <Jumbotron />
      <Categories />
      <Recipes search={search} categories={categories} />
      <Footer />
    </>
  );
}
