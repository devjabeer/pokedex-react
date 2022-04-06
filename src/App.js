import { Routes, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
    </Routes>
  );
}

export default App;
