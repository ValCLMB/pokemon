import Link from "next/link";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex flex-col items-center  gap-10 min-h-screen p-12 ">
      <Link href="../">{"<--"} Retour à la liste des Pokémon</Link>
      {children}
    </main>
  );
}
