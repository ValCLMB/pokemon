"use client";
import { Pokemon } from "@/app/page";
import { Button } from "@/components/ui/button";
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
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const pokemonSchema = z.object({
  name: z.string(),
  image: z.string().url(),
  type: z.string(),
});

export default function EditPokemon() {
  const router = useRouter();
  const form = useForm<Pokemon>({
    resolver: zodResolver(pokemonSchema),
  });

  const onSubmit = (values: Pokemon) => {
    console.log(values);
    fetch("/api/pokemon", { method: "POST", body: JSON.stringify(values) })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          toast({
            title: "Pokémon ajouté avec succès !",
          });
          router.push("/");
          router.refresh();
        }
      });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-center">
          Ajouter un pokémon
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
                    <Input placeholder="Pikachu..." {...field} />
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
                    <Input placeholder="Feu, Eau, Plante..." {...field} />
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
                    <Input {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-center mt-3">
              <Button>Ajouter</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
