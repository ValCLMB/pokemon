import { PlusIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

export default function Nav() {
  return (
    <nav className="w-4/6 flex justify-between border-b border-background  space-y-2 p-2 text-center  sticky top-0 bg-background/50 backdrop-blur-md">
      <h1 className="font-bold text-3xl flex items-center gap-1">
        <Image src="/pokemon.png" alt="pokemon logo" width={40} height={40} />
        Pokémon
      </h1>
      <Link href="/add" className={buttonVariants({ className: "flex gap-2" })}>
        <PlusIcon /> Ajouter
      </Link>
    </nav>
  );
}
