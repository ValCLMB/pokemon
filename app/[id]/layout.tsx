import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex flex-col items-center gap-10 min-h-screen p-12 ">
      <Link className="flex gap-2 items-center" href="/">
        <ArrowLeftIcon /> Retour à la liste des Pokémon
      </Link>
      {children}
    </main>
  );
}
