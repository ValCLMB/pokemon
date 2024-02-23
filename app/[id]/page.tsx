import { DeleteButton } from "@/components/DeleteButton";
import { ICONTYPE } from "@/components/PokemonCard";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type Props = {
  params: {
    id: number;
  };
};

const fetchPokemon = (id: number) => {
  return fetch(`${process.env.HOSTNAME}/api/pokemon/${id}`, {
    next: { revalidate: false },
  }).then((res) => res.json());
};

export default async function Pokemon({ params }: Props) {
  const pokemon = await fetchPokemon(params.id);

  if (!pokemon) throw new Error("Pokemon not found");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <Card className="min-w-96">
      <CardHeader className="flex flex-col items-center pb-0">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-[120px] h-[120px] text-center object-contain"
        />
        <CardTitle className="text-4xl">{pokemon?.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center gap-2">
        <p className="text-xl">{ICONTYPE[pokemon.type as string]}</p>
        <p>{pokemon.type}</p>
      </CardContent>
      <CardFooter className="flex justify-center gap-1">
        <Link href={`${pokemon.id}/edit`} className={buttonVariants()}>
          Modifier
        </Link>
        <DeleteButton id={pokemon.id} />
      </CardFooter>
    </Card>
  );
}
