export default function PokemonList({ list, onSelect }) {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "15px",
      justifyContent: "center",
    }}>
      {list.map(p => (
        <div 
          key={p.name} 
          onClick={() => onSelect(p.url)}
          style={{
            cursor: "pointer",
            padding: "15px",
            borderRadius: "10px",
            background: "#84a59d",
            color: "#fff",
            minWidth: "100px",
            textAlign: "center",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
            transition: "transform 0.2s"
          }}
          onMouseEnter={e => e.currentTarget.style.transform="scale(1.05)"}
          onMouseLeave={e => e.currentTarget.style.transform="scale(1)"}
        >
          {p.name.toUpperCase()}
        </div>
      ))}
    </div>
  );
}
