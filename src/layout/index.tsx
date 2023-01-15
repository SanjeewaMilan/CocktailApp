import React from "react";
import { Grid, Container } from "@mui/material";
import Header from "./Header";

interface propsTypes {
  children: React.ReactNode;
}

function Layout(props: propsTypes) {
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <Header />

        <Container className="mt-6">{props.children}</Container>
      </div>
    </>
  );
}

export default Layout;
