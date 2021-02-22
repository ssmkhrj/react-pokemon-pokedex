import { useState, useEffect } from "react";
import axios from "axios";
import PokemonContainer from "./PokemonContainer";
import Pagination from "./Pagination";
import Loader from "./Loader";
import "../styles/PokemonApp.css";

const GENERATIONS = [
  ["Kanto", 1, 151],
  ["Johto", 152, 251],
  ["Hoenn", 252, 386],
  ["Sinnoh", 387, 483],
  ["Unova", 494, 649],
];

const PokemonApp = () => {
  const [gen, setGen] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const updateGen = (newGen) => {
    setIsLoading(true);
    setGen(newGen);
  };
  document.title = `Pokedex | ${GENERATIONS[gen][0]}`;
  useEffect(() => {
    (async function () {
      const responses = [];
      try {
        for (let id = GENERATIONS[gen][1]; id <= GENERATIONS[gen][2]; id++) {
          const res = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
          responses.push(res);
        }
        const results = await Promise.all(responses);
        setPokemons(results.map((res) => res.data));
        setIsLoading(false);
      } catch (err) {
        setPokemons([]);
        setIsLoading(false);
      }
    })();
  }, [gen]);
  return (
    <>
      <nav className="nav">{GENERATIONS[gen][0]} Pokedex</nav>
      {/* {!isLoading && ( */}
      <Pagination
        currPage={gen}
        updateGen={updateGen}
        setIsLoading={setIsLoading}
        totalPages={GENERATIONS.length}
        isLoading={isLoading}
      />
      {/* )} */}
      {isLoading ? <Loader /> : <PokemonContainer pokemons={pokemons} />}
      <footer className="footer">
        <a href="https://github.com/">
          <i className="fab fa-github"></i>
        </a>
      </footer>
    </>
  );
};

export default PokemonApp;
