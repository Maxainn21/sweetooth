import titleConverter from "@/libs/titleConverter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  params: { recipe: string };
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const { recipe } = props.params;

  return {
    title: `${titleConverter(recipe)} - Sweetooth Lab`,
    description: `Recipe for ${titleConverter(recipe)}`,
  };
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
