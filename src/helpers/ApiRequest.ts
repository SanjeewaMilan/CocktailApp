import { useEffect } from "react";

export const getRandomcocktail = async () => {
  try {
    const tempArr = [];
    for (let i = 0; i < 5; i++) {
      const response = await fetch(
        "https://thecocktaildb.com/api/json/v1/1/random.php",
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Something Wrong!");
      }
      const data = await response.json();
      tempArr.push(data.drinks[0]);
    }

    return tempArr;
  } catch (error) {
    console.log("error", error);
  }
};

export const searchByName = async (name: string) => {
  try {
    const response = await fetch(
      `https://thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error("Something Wrong!");
    }
    const data = await response.json();

    return data.drinks;
  } catch (error) {
    console.log("error", error);
  }
};
