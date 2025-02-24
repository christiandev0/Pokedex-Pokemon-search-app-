import { useState } from "react";
import { usePokemon } from "../context/PokemonContext";
import PokemonCard from "./PokemonCard";

function SearchForm() {
  const [pokemonToSearch, setPokemonToSearch] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const { addPokemon } = usePokemon();

  const searchPK = () => {
    if (!pokemonToSearch.trim()) return;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonToSearch.toLowerCase()}`)
      .then((res) => {
        if (!res.ok) throw new Error("Pokémon non trovato!");
        return res.json();
      })
      .then((data) => {
        setPokemon(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="search-form">
      <input
        type="text"
        placeholder="Cerca un Pokémon"
        value={pokemonToSearch}
        onChange={(e) => setPokemonToSearch(e.target.value)}
      />
      <button onClick={searchPK}>Cerca</button>

      {pokemon && (
        <div>
          <PokemonCard pokemon={pokemon} />
          <button onClick={() => addPokemon(pokemon)}>Aggiungi al Pokédex</button>
        </div>
      )}
    </div>
  );
}

export default SearchForm;
