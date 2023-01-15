import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../custom-hooks/reduxHooks";
import { Card, Grid } from "@mui/material";
import Sidebar from "../layout/Sidebar";
import CocktailCard from "../components/CocktailCard";
import useApiRequest from "../custom-hooks/useApiRequest";
import { getRandomcocktail } from "../helpers/ApiRequest";
import { homeCocktailActions, CocktailInterface } from "../store/cocktailSlice";
import { loadingActions } from "../store/loadingSlice";
import LoadingSpinner from "../components/LoadingSpinner";
import Layout from "../layout";

function Home() {
  const getDataFn = useApiRequest(); //use custom hook for fetch data from api
  const dispatch = useAppDispatch();
  const COCKTAILS = useAppSelector((state) => state.homeCocktailReducer);
  const ISLOADING = useAppSelector((state) => state.loadingReducer.loading);

  useEffect(() => {
    const getData = async () => {
      dispatch(loadingActions.setLoading(true));
      const data = await getRandomcocktail();
      dispatch(homeCocktailActions.setCocktails(data));
      dispatch(loadingActions.setLoading(false));
    };

    getData();
  }, []);

  return (
    <>
      <Layout>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={3} key="sidebar">
            <Sidebar />
          </Grid>
          <Grid item xs={12} lg={9} key="card">
            <Card sx={{ minHeight: "85vh" }} className="p-4">
              {ISLOADING ? (
                <LoadingSpinner loading={ISLOADING} />
              ) : (
                <Grid container spacing={2}>
                  {COCKTAILS &&
                    COCKTAILS.length > 0 &&
                    COCKTAILS.map((item) => (
                      <Grid item xs={12} md={6} lg={4} alignItems="stretch">
                        <CocktailCard item={item} />
                      </Grid>
                    ))}
                  {!COCKTAILS && (
                    <Grid item xs={12}>
                      <span className="grid justify-items-center pt-4 font-bold text-xl">
                        No Cocktails Found
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

export default Home;
