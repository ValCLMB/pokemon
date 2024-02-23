import { Pokemon } from "@/app/page";
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
  psy: "🔮",
  Electrique: "⚡️⚡️",
};

type PokemonCardProps = {
  pokemon: Pokemon;
};

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Link
      href={pokemon.id.toString()}
      className="flex flex-col p-2 items-center cursor-pointer  w-[30%]"
    >
      <Card className="flex flex-col items-center py-2 w-full">
        <CardHeader className="pb-0">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-[100px] h-[100px] text-center object-contain"
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
