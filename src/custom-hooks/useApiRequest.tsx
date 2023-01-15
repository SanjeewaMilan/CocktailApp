import react from "react";
import { CocktailInterface } from "../store/cocktailSlice";

const useApiRequest = () => {
  const getdata = async (
    config: { url: string },
    setCocktails: (data: CocktailInterface[]) => void
  ) => {
    try {
      const response = await fetch(config.url, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Something Wrong!");
      }
      const data = await response.json();

      setCocktails(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  return getdata;
};

export default useApiRequest;
