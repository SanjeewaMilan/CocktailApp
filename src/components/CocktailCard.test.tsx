import React from "react";
import { render, screen } from "@testing-library/react";
import CocktailCard from "./CocktailCard";
import App from "../App";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import store from "../store";

const cocktailDummyData = {
  strDrink: "Drink Name",
  strDrinkThumb: "Image url",
  strCategory: "Category",
  idDrink: "1234",
};
const mockStore = configureStore();
const initialState = [];

test("renders Cocktail Card", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  render(<CocktailCard item={cocktailDummyData} />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
});
