import LatestRecipes from "@/components/LatestRecipes";
import Image from "next/image";

export default function Jumbotron() {
  return (
    <div className="flex flex-wrap lg:flex-nowrap container">
      <div className="relative w-3/4 lg:w-1/2 my-auto mx-auto">
        <Image
          src="/img/jumbotron.png"
          alt="Strawberry Juice"
          height={1000}
          width={1000}
          className="object-contain"
        />
        <div className="flex flex-col absolute top-[40%] right-0 font-serif gap-1">
          <p className="bg-secondary opacity-80 text-4xl w-max px-1">
            Strawberry Juice
          </p>
          <p className="bg-secondary opacity-80 text-4xl w-max px-1">
            with Milk and
          </p>
          <p className="bg-secondary opacity-80 text-4xl w-max px-1">
            Mix Berries
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 my-auto lg:ml-40 mx-auto px-4 lg:px-0">
        <p className="font-serif text-3xl lg:text-lg font-normal lg:font-bold lg:mt-0 mt-8 mb-4 lg:text-left text-center">
          Latest Recipes
        </p>
        <div className="flex flex-col gap-4">
          <LatestRecipes
            img="latest-1"
            text="Dive into the extraordinary world of our divine chocolate pudding."
            link="chocolate-pudding"
          />
          <LatestRecipes
            img="latest-2"
            text="Treat your taste buds to the heavenly delight of our baklava roll."
            link="baklava-roll"
          />
          <LatestRecipes
            img="latest-3"
            text="Embark on a flavor journey with our luscious mango cheesecake."
            link="mango-cheesecake"
          />
          <LatestRecipes
            img="latest-4"
            text="Relish the delicate layers of our classic pudding custard."
            link="pudding-custard"
          />
        </div>
      </div>
    </div>
  );
}
