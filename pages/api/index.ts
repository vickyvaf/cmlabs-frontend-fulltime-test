interface Api {
  ingredients: string;
  filterIngredients: string;
  detail: string;
}

export const api: Api = {
  ingredients: process.env.LIST ?? "",
  filterIngredients: process.env.FILTER ?? "",
  detail: process.env.DETAIL ?? "",
};
