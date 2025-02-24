import { createContext, useContext, useState, useEffect } from "react";

const PokemonContext = createContext();

// eslint-disable-next-line react/prop-types
export function PokemonProvider({ children }) {
  const [savedPokemons, setSavedPokemons] = useState(JSON.parse(localStorage.getItem("pokedex")) || []);


  // Salviamo i Pokémon nel localStorage ogni volta che lo stato cambia
  useEffect(() => {
    localStorage.setItem("pokedex", JSON.stringify(savedPokemons));
  }, [savedPokemons]);

  const addPokemon = (pokemon) => {
    if (!savedPokemons.some((p) => p.name === pokemon.name)) {
      setSavedPokemons([...savedPokemons, pokemon]);
      alert(`Le informazioni di ${pokemon.name} sono state salvate nel Pokédex`)
    }
    else alert(`Le informazioni di ${pokemon.name} sono già presenti nel Pokédex`)
  };

  return (
    <PokemonContext.Provider value={{ savedPokemons, addPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  return useContext(PokemonContext);
}
