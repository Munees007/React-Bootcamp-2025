export default function PokemonDetails({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div style={{
      marginTop: "20px",
      padding: "20px",
      borderRadius: "15px",
      background: "#f6bd60",
      color: "#333",
      width: "250px",
      textAlign: "center",
      boxShadow: "0px 4px 15px rgba(0,0,0,0.2)"
    }}>
      <h3>{pokemon.name.toUpperCase()}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{width: "120px"}} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Types: {pokemon.types.map(t => t.type.name).join(", ")}</p>
    </div>
  );
}
