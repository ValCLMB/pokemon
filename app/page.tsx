import Nav from "@/components/Nav";
import PokemonCard from "@/components/PokemonCard";
import { getPokemons } from "./lib/data";

export type Pokemon = {
  id: number;
  name: string;
  type: string;
  image: string;
};

export default async function Home() {
  const pokemons = await getPokemons();

  if (!pokemons) throw new Error("No pokemons found");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <>
      <Nav />
      <section className="w-4/6 justify-between  flex flex-wrap gap-2 box-border">
        {pokemons?.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    </>
  );
}
