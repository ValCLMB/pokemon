import PokemonCard from "@/components/PokemonCard";
import { buttonVariants } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";
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

  return (
    <>
      <nav className="w-full border-b border-background  space-y-2 p-2 text-center  sticky top-0 bg-background/50 backdrop-blur-md">
        <h1 className="font-bold text-3xl">Pokémon</h1>
        <Link
          href="/add"
          className={buttonVariants({ className: "flex gap-2" })}
        >
          <PlusIcon /> Ajouter
        </Link>
      </nav>
      <section className="w-4/6 text-center flex flex-wrap justify-center gap-2">
        {pokemons?.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    </>
  );
}
