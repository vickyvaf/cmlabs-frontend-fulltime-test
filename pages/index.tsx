import { useState } from "react";
import { api } from "./api";
import Head from "next/head";
import CardIngredient from "@/components/CardIngredient";
import Banner from "@/components/Banner";

export interface Meal {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: string;
}

export interface ListMeals {
  meals: Meal[];
}

export async function getStaticProps() {
  const res = await fetch(api.ingredients);
  const datas = await res.json();

  return {
    props: { meals: datas.meals },
  };
}

export default function Home({ meals }: ListMeals) {
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <Head>
        <title>Meals</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner setSearch={setSearch} search={search} />
      <ul className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {meals
          .filter((data) => data.strIngredient.toLowerCase().includes(search))
          .map((data: Meal) => {
            return (
              <CardIngredient
                idIngredient={data.idIngredient}
                strDescription={data.strDescription}
                strIngredient={data.strIngredient}
              />
            );
          })}
      </ul>
    </>
  );
}