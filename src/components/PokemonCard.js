import React from "react";
import "../styles/PokemonCard.css";
import PokemonStatsBar from "./PokemonStatsBar";

const COLORS = {
  grass: "#d2f2c2",
  poison: "#f7cdf7",
  fire: "#ffd1b5",
  flying: "#eae3ff",
  water: "#c2f3ff",
  bug: "#e0e8a2",
  normal: "#e6e6c3",
  electric: "#fff1ba",
  ground: "#e0ccb1",
  fighting: "#fcada9",
  psychic: "#ffc9da",
  rock: "#f0e09c",
  fairy: "#ffdee5",
  steel: "#e6eaf0",
  ice: "#e8feff",
  ghost: "#dbbaff",
  dragon: "#c4bdff",
  dark: "#a9abb0",
};

const PokemonCard = ({ name, id, types, stats, imgUrl }) => {
  let style;
  if (types.length > 1) {
    style = {
      background: `linear-gradient(150deg, ${COLORS[types[0]]} 50%, ${
        COLORS[types[1]]
      } 50%)`,
    };
  } else {
    style = { background: COLORS[types[0]] };
  }
  return (
    <div className="pc-container">
      <div className="pokemon-card">
        <div className="card_front" style={style}>
          <img src={imgUrl} alt={name} className="pokemon-card-img"></img>
          <div className="circle"></div>
          <p className="poke-id"> #{id} </p>
          <p className="poke-name"> {name} </p>
          <p className="poke-types">
            {types.join(" / ").replace(/\b\w/g, (ch) => ch.toUpperCase())}
          </p>
        </div>
        <div className="card_back">
          {stats.map((s) => (
            <PokemonStatsBar
              key={s.stat.name}
              name={s.stat.name}
              val={s.base_stat}
              color={COLORS[types[0]]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
