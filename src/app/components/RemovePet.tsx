"use client";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/ui/alert-dialog";
import { Button } from "@/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function RemovePet({ petId }: { petId: number }) {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(false);
  const removePet = async () => {
    setIsDisabled(true);
    try {
      const response = await fetch("/api/user/pet", {
        method: "DELETE",
        body: JSON.stringify({ petId }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(`${data.message}`);
        router.refresh();
      } else {
        const data = await response.json();
        toast.error(`${data.message}`);
        console.error("Error eliminando la mascota:", data.message);
      }
    } catch (error) {
      console.error("Error eliminando la mascota:", error);
    } finally {
      setIsDisabled(false);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button disabled={isDisabled} variant={"ghost"} className="px-2 py-1">
          {isDisabled ? "Eliminando" : "Eliminar"}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Estas seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción eliminará a la mascota de nuestra base de datos.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => removePet()}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
