import { useEffect, useState } from "react";
import "./Component.css";
export const Card = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setError] = useState("");

  const ApiLink = "https://pokeapi.co/api/v2/pokemon/pikachu";

  // const callApi = () => {
  //   fetch(ApiLink)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setpokemon(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setLoading(false);
  //       setError(err);
  //     });
  // };

  const fetchPokemon = async () => {
    try {
      const res = await fetch(ApiLink);
      const data = await res.json();
      setPokemon(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  console.log(pokemon);

  if (loading) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }
  if (errors) {
    return (
      <div>
        <h1>Error: {errors.message}</h1>
      </div>
    );
  }

  return (
    <>
      <section className="container">
        <header>
          <h1>Lets Show Pokemons!</h1>
        </header>
        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                className="pokemon-image"
              ></img>
            </figure>
            <h1>{pokemon.name}</h1>
            <div className="grid-three-cols">
              <p className="pokemon-info">
                Height: <span>{pokemon.height}</span>
              </p>
              <p className="pokemon-info">
                Weight: <span>{pokemon.weight}</span>
              </p>
              <p className="pokemon-info">
                Speed: <span>{pokemon.stats[5].base_stat}</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};
