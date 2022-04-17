import { Routes, Route } from "react-router-dom";
import AppNavigation from "./components/AppNavigation";
import Favorite from "./pages/Favorite";
import Pokedex from "./pages/Pokedex";
import PokemonDetails from "./pages/PokemonDetails";
function App() {
  return (
    <Routes>
      <Route element={<AppNavigation />}>
        <Route path="/" exact element={<Pokedex />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
        <Route path="/favorite" element={<Favorite />} />
      </Route>
    </Routes>
  );
}

export default App;
