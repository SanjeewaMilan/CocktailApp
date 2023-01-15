import {
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActions,
  Chip,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../custom-hooks/reduxHooks";
import favouriteActions from "../store/favouriteSlice";
import { CocktailInterface } from "../store/cocktailSlice";
import { createPortal } from "react-dom";
import CardActionButton from "./CardActionButton";

const CocktailCard = (props: { item: CocktailInterface }) => {
  const item = props.item;

  return (
    <Card className="shadow-lg drop-shadow-lg shadow-primary hover:shadow-xl border-secondary hover:border-[1px]">
      <CardMedia
        sx={{ height: 280 }}
        image={item.strDrinkThumb}
        title={item.strDrink}
      />
      <CardContent>
        <div className="grow">
          <h1 className="font-bold text-xl">{item.strDrink}</h1>
        </div>
        <div className="">
          <Chip
            label={item.strCategory}
            size="small"
            sx={{
              backgroundColor: "black",
              color: "white",
              fontWeight: "bold",
              fontSize: "10px",
            }}
          />
        </div>
      </CardContent>
      <CardActions>
        <CardActionButton item={item} />
      </CardActions>
    </Card>
  );
};

export default CocktailCard;
