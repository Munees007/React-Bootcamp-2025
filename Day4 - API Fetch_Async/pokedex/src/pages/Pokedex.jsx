import { useState, useEffect } from "react";
import PokemonList from "../components/PokemonList";
import PokemonDetails from "../components/PokemonDetails";

export default function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then(res => res.json())
      .then(data => setPokemonList(data.results));
  }, []);

  const handleSelect = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => setSelectedPokemon(data));
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      fontFamily: "Arial, Helvetica, sans-serif"
    }}>
      <h2>Pokedex</h2>
      <PokemonList list={pokemonList} onSelect={handleSelect} />
      <PokemonDetails pokemon={selectedPokemon} />
    </div>
  );
}
