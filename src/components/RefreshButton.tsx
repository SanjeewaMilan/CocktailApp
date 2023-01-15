import { Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { getRandomcocktail } from "../helpers/ApiRequest";
import { useAppDispatch, useAppSelector } from "../custom-hooks/reduxHooks";
import { homeCocktailActions } from "../store/cocktailSlice";
import { loadingActions } from "../store/loadingSlice";

const RefreshButton = () => {
  const dispatch = useAppDispatch();

  const onClickHandler = async () => {
    console.log("Refresh clicked");
    dispatch(loadingActions.setLoading(true));
    const data = await getRandomcocktail();
    dispatch(homeCocktailActions.setCocktails(data));
    dispatch(loadingActions.setLoading(false));
  };
  return (
    <Button variant="contained" onClick={onClickHandler}>
      <span className="font-sans">Refresh</span>
      <RefreshIcon className="" fontSize="small" />
    </Button>
  );
};

export default RefreshButton;
