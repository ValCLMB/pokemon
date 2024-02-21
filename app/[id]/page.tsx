import { getPokemon } from "../lib/data";
import { ICONTYPE } from "../page";

type Props = {
  params: {
    id: number;
  };
};

export default async function Pokemon({ params }: Props) {
  const pokemon = await getPokemon(params.id);

  //simulate loading
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <>
      <img
        src={pokemon?.image}
        alt={pokemon?.name}
        className="w-[200px] h-[200px] text-center object-contain"
      />
      <h1 className="text-7xl">{pokemon?.name}</h1>
      <div className="text-xl text-center">
        <p>{pokemon?.type}</p>
        <p className="text-3xl mt-2">{ICONTYPE[pokemon?.type as string]}</p>
      </div>
    </>
  );
}
