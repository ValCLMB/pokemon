import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <h1 className="font-bold text-3xl flex items-center gap-1">
        <Image src="/pokemon.png" alt="pokemon logo" width={40} height={40} />
        Pokémon
      </h1>
      <Link className="flex items-center gap-2" href="/">
        <ArrowLeftIcon /> Retour à la liste des Pokémon
      </Link>
      {children}
    </>
  );
}
