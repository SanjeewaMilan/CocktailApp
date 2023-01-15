import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../custom-hooks/reduxHooks";
import favouriteActions from "../store/favouriteSlice";
import { CocktailInterface, homeCocktailActions } from "../store/cocktailSlice";
import { createPortal } from "react-dom";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const CardActionButton = (props: { item: CocktailInterface }) => {
  const item = props.item;
  const [isFavourite, setisFavourite] = useState<Boolean>(false);
  const FAVOURITE = useAppSelector((state) => state.favouriteReducer);
  const COCKTAILS = useAppSelector((state) => state.homeCocktailReducer);

  useEffect(() => {
    const index = FAVOURITE.findIndex((val) => val.idDrink === item.idDrink);
    if (index > -1) {
      setisFavourite(true);
      dispatch(homeCocktailActions.setCocktails(COCKTAILS));
    }
  }, []);

  const dispatch = useAppDispatch();

  const addToFavouriteHandler = (item: CocktailInterface): void => {
    setisFavourite(true);
    dispatch(favouriteActions.actions.addToFavourite(item));
  };

  const removeFromFavouriteHandler = (itemId: string): void => {
    setisFavourite(false);
    dispatch(favouriteActions.actions.removeFromFavourite(itemId));
  };

  return (
    <>
      {isFavourite ? (
        <Button
          variant="contained"
          size="small"
          sx={{ width: "100%" }}
          onClick={() => removeFromFavouriteHandler(item.idDrink)}
        >
          Remove from favourite{" "}
          <StarIcon sx={{ color: "#ebcc34", fontSize: "20px" }} />
        </Button>
      ) : (
        <Button
          variant="contained"
          size="small"
          sx={{ width: "100%" }}
          onClick={() => addToFavouriteHandler(item)}
        >
          Add to favourite <StarBorderIcon sx={{ fontSize: "20px" }} />
        </Button>
      )}
    </>
  );
};

export default CardActionButton;
