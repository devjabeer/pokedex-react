import { Routes, Route } from "react-router-dom";
import AppNavigation from "./components/AppNavigation";
import Pokedex from "./pages/Pokedex";

function App() {
  return (
    <Routes>
      <Route element={<AppNavigation />}>
        <Route path="/" element={<Pokedex />} />
      </Route>
    </Routes>
  );
}

export default App;
