type Ingredients = {
  quantity: number | string;
  unit: string;
  name: string;
};

type Time = {
  prep: number;
  cook: number;
  total: number;
};

type Reviews = {
  rating: number;
  count: number;
};

type Nutrition = {
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  fibre: number;
};

type Recipes = {
  time: Time;
  reviews: Reviews;
  nutrition: Nutrition;
  ingredients: Ingredients[];
  utensils: string[];
  steps: string[];
};

type Oid = {
  $oid: string;
};

export type RecipeType = {
  _id: Oid;
  id: string;
  title: string;
  desc: string;
  author: string;
  time: number;
  recipes: Recipes;
};
