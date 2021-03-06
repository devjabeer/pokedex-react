import React from "react";
import { Routes, Route } from "react-router-dom";
import AppNavigation from "./components/AppNavigation";
import Error404 from "./components/Error404";
import Favorite from "./pages/Favorite";
import Pokedex from "./pages/Pokedex";
import PokemonDetails from "./pages/PokemonDetails";
function App() {
  return (
    <Routes>
      {/* Main App Navigation on top */}
      <Route element={<AppNavigation />}>
        {/* home and /pokemon routes points to same */}
        <Route path="/" element={<Pokedex />} />
        <Route path="/pokemon" element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
        <Route path="/favorite" element={<Favorite />} />
        {/* 404 Page */}
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
