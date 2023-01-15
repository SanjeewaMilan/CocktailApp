import React from "react";
import { Grid, TextField, Card, IconButton, Button } from "@mui/material";
import { RefreshButton, Search } from "../components/index";

function Sidebar() {
  return (
    <>
      <Grid spacing={2} className="min-height-screen">
        <Grid item sm={12}>
          <Card className="p-4">
            <div className="grid justify-items-center">
              <RefreshButton />
            </div>
            <div className="mt-8 width-full grid justify-items-center">
              <Search />
            </div>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Sidebar;
