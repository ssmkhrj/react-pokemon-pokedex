import PokemonCard from "./PokemonCard";
import React, { useState } from "react";

import "../styles/PokemonContainer.css";

const PokemonContainer = ({ pokemons }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchedPokemons = pokemons.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleChange = (e) => setSearchTerm(e.target.value);
  return (
    <>
      <input
        type="text"
        placeholder="Search Pokemons"
        className="search-pokemon"
        value={searchTerm}
        onChange={handleChange}
      />
      {searchedPokemons.length <= 0 ? (
        <div className="no-pokemon-found">No pokemons found</div>
      ) : (
        <div className="pokemon-container">
          {searchedPokemons.map((p) => (
            <PokemonCard
              key={p.id}
              name={p.name}
              id={p.id}
              types={p.types.map((t) => t.type.name)}
              stats={p.stats}
              imgUrl={p.sprites.other["official-artwork"].front_default}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default PokemonContainer;
