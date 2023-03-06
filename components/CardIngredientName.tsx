import { useRouter } from "next/router";
import Image from "next/image";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export default function CardIngredientName({
  idMeal,
  strMeal,
  strMealThumb,
}: Meal) {
  const router = useRouter();

  return (
    <div
      className="w-full overflow-hidden h-40  rounded-lg flex items-center relative font-main hover:shadow-xl hover:scale-[101%] duration-200 cursor-pointer"
      onClick={() => router.push(`/detail/${idMeal}`)}
    >
      <Image src={strMealThumb} alt={"picture"} width={700} height={400} />
      <div className="absolute bg-gray-900 w-full h-full opacity-60" />
      <div className="absolute top-0 w-full h-full flex justify-center items-center">
        <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl text-center">
          {strMeal}
        </h1>
      </div>
    </div>
  );
}
