"use client";

import { ExitIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function LogoutBtn() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const logoutBTN = async () => {
    setDisabled(true);
    try {
      const response = await fetch("/api/user/logout", {
        method: "POST",
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(`${data.message}`);
        setOpen(false);
        router.refresh();
      } else {
        const data = await response.json();
        toast.error(`${data.message}`);
        console.error("Error eliminando la cita:", data.message);
      }
    } catch (error) {
      console.error("Error eliminando la cita:", error);
    } finally {
      setDisabled(false);
    }
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline" type="submit" size="icon">
          <ExitIcon className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Estas seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción eliminará a la cita de nuestra base de datos.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={() => logoutBTN()}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
  // return (
  //   <form
  //     action={async () => {
  //       "use server";
  //       await logout();
  //       redirect("/");
  //     }}
  //   >
  //     <Button variant="outline" type="submit" size="icon">
  //       <ExitIcon className="h-4 w-4" />
  //     </Button>
  //   </form>
  // );
}
