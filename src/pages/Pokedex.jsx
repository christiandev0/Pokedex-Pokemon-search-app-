import { usePokemon } from "../context/PokemonContext";
import PokemonCard from "../components/PokemonCard";
import { Link } from "react-router-dom";

function Pokedex() {
  const { savedPokemons } = usePokemon();

  return (
    <div className="pokedex">
      <h1>📖 Il mio Pokédex</h1>
      <Link to="/" className="back-link">⬅ Torna alla ricerca</Link>

      {savedPokemons.length === 0 ? (
        <p className="empty-text">Nessun Pokémon salvato.</p>
      ) : (
        <div className="pokemon-list">
          {savedPokemons.map((poke, index) => (
            <PokemonCard key={index} pokemon={poke} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Pokedex;
