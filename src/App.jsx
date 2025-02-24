import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonContext";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokemonDetail from "./pages/PokemonDetail";

function App() {
  return (
    <PokemonProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} /> 
        </Routes>
      </Router>
    </PokemonProvider>
  );
}

export default App;
