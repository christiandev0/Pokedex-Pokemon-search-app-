/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function PokemonCard({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="pokemon-card">
      <div>
        <h2>{pokemon.name.toUpperCase()}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Tipo: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
      </div>
    </Link>
  );
}

export default PokemonCard;
