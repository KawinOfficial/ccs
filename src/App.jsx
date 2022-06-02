import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Login, MainPage, Export, PlantReg } from "./page";
import ContentWarpper from "./components/warpper/ContentWarpper";

import "./App.css";
import "react-datepicker/dist/react-datepicker.min.css";
import "mapbox-gl/dist/mapbox-gl.css";

export default function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Login />} />
        <Route
          path="/snc-layout"
          element={<ContentWarpper content={MainPage} />}
        />
        <Route path="/export" element={<ContentWarpper content={Export} />} />
        <Route
          path="/register"
          element={<ContentWarpper content={PlantReg} />}
        />
      </Routes>
    </>
  );
}
