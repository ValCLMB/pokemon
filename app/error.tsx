"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Card className="bg-red-500 text-white">
      <CardHeader>
        <CardTitle>Oups ! Une erreur est survenue.</CardTitle>
        <CardDescription className="text-white">
          Aucun pokémon n'a été trouvé
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Réessayer
        </Button>
      </CardContent>
    </Card>
  );
}
