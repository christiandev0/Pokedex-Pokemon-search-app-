import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then(setPokemon)
      .catch((err) => console.log(err));
  }, [id]);

  if (!pokemon) return <p>Caricamento...</p>;

  return (
    <>
    <Link to="/" className="back-link">⬅ Torna alla ricerca</Link>
    <div className="pokemon-detail">
      <h1>{pokemon.name.toUpperCase()}</h1>
      <img src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
      <p>Tipo: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
      <p>Altezza: {pokemon.height / 10} m</p>
      <p>Peso: {pokemon.weight / 10} kg</p>
      <p>Abilità: {pokemon.abilities.map((a) => a.ability.name).join(", ")}</p>
    </div>
    </>
  );
}

export default PokemonDetail;
