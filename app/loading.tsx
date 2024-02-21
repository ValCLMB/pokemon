import Link from "next/link";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex flex-col items-center  gap-10 min-h-screen p-12 animate-pulse">
      <Link href="../">{"<--"} Retour à la liste des Pokémon</Link>

      <div className="size-48 text-center object-contain bg-white rounded-md"></div>
      <div className=" h-10 w-1/3 text-center object-contain  bg-white  rounded-md"></div>
      <div className=" h-4 w-32 text-center object-contain  bg-white  rounded-md"></div>
    </div>
  );
}
