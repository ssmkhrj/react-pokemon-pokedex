import React from "react";

const PokemonStatsBar = ({ name, val, color }) => {
  return (
    <>
      <div className="poke-stats-name">
        {name}: {val}
      </div>
      <div
        className="poke-stats-bar"
        style={{
          background: `linear-gradient(to right, ${color} ${val}%, ${color}71 ${val}%`,
        }}
      ></div>
    </>
  );
};

export default PokemonStatsBar;
