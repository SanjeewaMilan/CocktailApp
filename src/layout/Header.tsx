import React from "react";
import { Grid, Container, IconButton, Badge } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../custom-hooks/reduxHooks";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import HomeIcon from "@mui/icons-material/Home";
function Header() {
  const Favourite = useAppSelector((state) => state.favouriteReducer);

  return (
    <>
      <div className="bg-primary">
        <Container>
          <Grid container spacing={2} className="p-3">
            <Grid item xs={9}>
              <span className="text-white text-3xl font-bold">
                Cocktail App
              </span>
            </Grid>
            <Grid item xs={3}>
              <div className="flex flex-row justify-end">
                <Link to="/" className="text-white">
                  <IconButton
                    size="large"
                    aria-label="Go to home"
                    color="inherit"
                  >
                    <HomeIcon />
                  </IconButton>
                </Link>
                <Link to="/favourites" className="text-white">
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge badgeContent={Favourite.length} color="error">
                      <StarIcon />
                    </Badge>
                  </IconButton>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Header;
