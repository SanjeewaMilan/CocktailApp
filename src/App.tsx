import React from "react";
import "./App.css";
import Layout from "./layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";

function App() {
  let theme = createTheme({
    palette: {
      primary: {
        main: "#00264f",
      },
      secondary: {
        main: "#00c5f0",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourite />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
