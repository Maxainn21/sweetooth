import Image from "next/image";
import Link from "next/link";

type LatestRecipesProps = {
  img: string;
  text: string;
  link: string;
};

export default function LatestRecipes({ img, text, link }: LatestRecipesProps) {
  return (
    <Link href={`/recipes/${link}`} className="flex group cursor-pointer">
      <div className="flex items-center">
        <Image
          src={`/img/latest/${img}.jpg`}
          alt="Latest Recipe 1"
          height={1080}
          width={1920}
          className="object-contain w-32 h-auto drop-shadow-2xl rounded group-hover:scale-110 duration-500"
        />
      </div>
      <p className="max-w-[290px] font-serif text-lg my-auto md:text-xl leading-none ml-4 group-hover:opacity-25 duration-500">
        {text}
      </p>
    </Link>
  );
}
