import Nav from "@/components/Nav";
import PokemonCard from "@/components/PokemonCard";

export type Pokemon = {
  id: number;
  name: string;
  type: string;
  image: string;
};
const fetchPokemons = () => {
  return fetch(`${process.env.HOSTNAME}/api/pokemon`, {
    next: { revalidate: false },
  }).then((res) => res.json());
};

export default async function Home() {
  const pokemons: Pokemon[] = await fetchPokemons();

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
