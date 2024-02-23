import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex flex-col items-center gap-10 p-5 ">
      <h1 className="font-bold text-3xl flex items-center gap-1">
        <Image src="/pokemon.png" alt="pokemon logo" width={40} height={40} />
        Pokémon
      </h1>
      <Link className="flex gap-2 items-center" href="/">
        <ArrowLeftIcon /> Retour à la liste des Pokémon
      </Link>
      {children}
    </main>
  );
}
