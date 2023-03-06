import { useRouter } from "next/router";
import { truncate } from "@/utils";

interface Meal {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
}

export default function CardIngredient({
  idIngredient,
  strDescription,
  strIngredient,
}: Meal) {
  const router = useRouter();

  return (
    <div
      key={idIngredient}
      onClick={() =>
        router.push(`/ingredient/${strIngredient.toLocaleLowerCase()}`)
      }
      className="w-full border-gray-200 border-[1px] rounded-lg p-5 hover:shadow-lg duration-200 cursor-pointer space-y-5 font-main"
    >
      <h1 className="font-semibold text-xl text-center">{strIngredient}</h1>
      <p>{truncate(strDescription, 250)}</p>
    </div>
  );
}
