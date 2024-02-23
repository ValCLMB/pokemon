import { Pokemon } from "@/app/page";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type IconType = {
  [key: string]: string; // Définissez les clés possibles et leur type de valeur
};

export const ICONTYPE: IconType = {
  "Plante/Poison": "🌱",
  Feu: "🔥",
  "Feu/Vol": "🔥🪽",
  Eau: "💦",
  Insecte: "🪲",
  "Insecte/Vol": "🪲🪽",
  psy: "🔮",
  Electrique: "⚡️⚡️",
  Vol: "🪽",
};

type PokemonCardProps = {
  pokemon: Pokemon;
};

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Link
      href={pokemon.id.toString()}
      className="flex flex-col p-2 items-center cursor-pointer w-full lg:w-[32%] md:w-[44%]"
    >
      <Card className="flex flex-col items-center text-center py-2 w-full">
        <CardHeader className="pb-0">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            width={100}
            height={100}
            className="size-[100px]"
          />
          <CardTitle>{pokemon.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex items-center justify-center gap-1">
            <p className="py-2">{ICONTYPE[pokemon.type]}</p>
            <p>{pokemon.type}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
