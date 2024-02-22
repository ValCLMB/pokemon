import { DeleteButton } from "@/components/DeleteButton";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { getPokemon } from "../lib/data";
import { ICONTYPE } from "../page";

type Props = {
  params: {
    id: number;
  };
};

export default async function Pokemon({ params }: Props) {
  const pokemon = await getPokemon(params.id);

  if (!pokemon) throw new Error("Pokemon not found");

  return (
    <>
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-[200px] h-[200px] text-center object-contain"
      />
      <h1 className="text-7xl">{pokemon?.name}</h1>
      <div className="text-xl text-center">
        <p>{pokemon.type}</p>
        <p className="text-3xl mt-2">{ICONTYPE[pokemon.type as string]}</p>
      </div>
      <div className="flex gap-2">
        <Link href={`${pokemon.id}/edit`} className={buttonVariants()}>
          Modifier
        </Link>
        <DeleteButton id={pokemon.id} />
      </div>
    </>
  );
}
