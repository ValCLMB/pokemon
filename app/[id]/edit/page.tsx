"use client";
import { Pokemon } from "@/app/page";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type EditPokemonProps = {
  params: {
    id: number;
  };
};

const pokemonSchema = z.object({
  name: z.string().optional(),
  image: z.string().optional(),
  type: z.string().optional(),
});

export default function EditPokemon({ params }: EditPokemonProps) {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const router = useRouter();
  const form = useForm<Pokemon>({
    resolver: zodResolver(pokemonSchema),
    defaultValues: {
      name: pokemon?.name,
      image: pokemon?.image,
      type: pokemon?.type,
    },
  });

  useEffect(() => {
    fetch(`/api/pokemon/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        setPokemon(res);

        form.setValue("name", res.name);
        form.setValue("image", res.image);
        form.setValue("type", res.type);
      });
  }, []);

  const onSubmit = (values: Pokemon) => {
    fetch(`/api/pokemon/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          toast({
            title: "Pokémon modifié avec succès !",
          });
          router.push(`/${params.id}`);
          router.refresh();
        }
      });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-center">
          Modifier un pokémon
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input
                      defaultValue={pokemon?.name}
                      placeholder="Pikachu..."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <FormControl>
                    <Input
                      defaultValue={pokemon?.type}
                      placeholder="Feu, Eau, Plante..."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input defaultValue={pokemon?.image} {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-center gap-2 mt-3">
              <Link
                href={`/${params.id}`}
                className={buttonVariants({ variant: "secondary" })}
              >
                Annuler
              </Link>
              <Button>Modifier</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
