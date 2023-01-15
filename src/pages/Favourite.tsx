import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../custom-hooks/reduxHooks";
import { Card, Grid } from "@mui/material";
import Sidebar from "../layout/Sidebar";
import CocktailCard from "../components/CocktailCard";
import useApiRequest from "../custom-hooks/useApiRequest";
import { getRandomcocktail } from "../helpers/ApiRequest";
import { favouriteActions } from "../store/favouriteSlice";
import { loadingActions } from "../store/loadingSlice";
import LoadingSpinner from "../components/LoadingSpinner";
import Layout from "../layout";

function Favourite() {
  const getDataFn = useApiRequest(); //use custom hook for fetch data from api
  const dispatch = useAppDispatch();
  const Favourite = useAppSelector((state) => state.favouriteReducer);
  const ISLOADING = useAppSelector((state) => state.loadingReducer.loading);

  useEffect(() => {
    const getData = async () => {
      dispatch(loadingActions.setLoading(true));

      dispatch(loadingActions.setLoading(false));
    };

    getData();
  }, []);

  return (
    <>
      <Layout>
        <Grid container spacing={2}>
          <Grid item xs={12} key="card">
            <Card sx={{ minHeight: "85vh" }} className="p-4">
              {ISLOADING ? (
                <LoadingSpinner loading={ISLOADING} />
              ) : (
                <Grid container spacing={2}>
                  {Favourite &&
                    Favourite.length > 0 &&
                    Favourite.map((item) => (
                      <Grid item xs={12} md={4} lg={3} alignItems="stretch">
                        <CocktailCard item={item} />
                      </Grid>
                    ))}
                  {(!Favourite || Favourite.length === 0) && (
                    <Grid item xs={12}>
                      <span className="grid justify-items-center pt-4 font-bold text-xl ">
                        No Favourite Cocktails
                      </span>
                    </Grid>
                  )}
                </Grid>
              )}
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export default Favourite;
