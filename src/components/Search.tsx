import { useRef } from "react";
import { searchByName } from "../helpers/ApiRequest";
import { useAppDispatch, useAppSelector } from "../custom-hooks/reduxHooks";
import { homeCocktailActions } from "../store/cocktailSlice";
import { loadingActions } from "../store/loadingSlice";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextField } from "@mui/material";

const RefreshButton = () => {
  const dispatch = useAppDispatch();
  const searchRef = useRef<HTMLInputElement>(null);
  const onClickHandler = async () => {
    console.log("Refresh clicked");
    dispatch(loadingActions.setLoading(true));
    if (searchRef?.current?.value) {
      const data = await searchByName(searchRef.current.value);
      dispatch(homeCocktailActions.setCocktails(data));
    }

    dispatch(loadingActions.setLoading(false));
  };
  return (
    <div className="flex flex-row">
      <TextField
        id="outlined-basic"
        label="Search by name"
        variant="outlined"
        size="small"
        inputRef={searchRef}
      />

      <IconButton color="primary" onClick={onClickHandler}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default RefreshButton;
