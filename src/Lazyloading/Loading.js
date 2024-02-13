import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";

const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Loading = () => {
  return (
    <BrowserRouter>
      <Nav />
      <React.Suspense fallback={<div>....loading</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default Loading;
