import Link from "next/link";
import { getPokemons, pool } from "./lib/data";

export type Pokemon = {
  id: number;
  name: string;
  type: string;
  image: string;
};

type IconType = {
  [key: string]: string; // Définissez les clés possibles et leur type de valeur
};

export const ICONTYPE: IconType = {
  "Plante/Poison": "🌱",
  Feu: "🔥",
  "Feu/Vol": "🔥🪽",
  Eau: "💦",
  Insecte: "🪲",
  psy: "🔮",
};

async function getData() {
  const res = await fetch(`${process.env.URL}/api/pokemon`);
  return res.json();
}

export default async function Home() {
  const pokemons = await getPokemons();

  return (
    <main className="flex flex-col items-center gap-10 min-h-screen p-12">
      <h1 className="font-bold text-3xl">Pokémon</h1>
      <section className="w-4/6 text-center  flex flex-wrap justify-center gap-2">
        {pokemons?.map((pokemon) => (
          <Link
            href={`${pokemon.id}`}
            className="flex flex-col  items-center cursor-pointer w-[30%] border px-5 pt-8 rounded-md bg-white/60 backdrop-blur-md  transition-all duration-300 hover:bg-white/90"
            key={pokemon.id}
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="w-[100px] h-[100px] text-center object-contain"
            />
            <h2 className="text-xl font-bold">{pokemon.name}</h2>

            <p>{pokemon.type}</p>
            <p className="py-2">{ICONTYPE[pokemon.type]}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
