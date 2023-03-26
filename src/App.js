import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Header = lazy(() => import("./components/Header"));
const NavBar = lazy(() => import("./components/NavBar"));
const Home = lazy(() => import("./pages/home/Home"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
