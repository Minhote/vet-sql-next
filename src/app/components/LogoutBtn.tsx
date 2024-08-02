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
} from "./ui/alert-dialog";

export default function LogoutBtn() {
  const router = useRouter();
  const [isDisabled, setIsDisabled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeSession = async () => {
    setIsDisabled(true);
    try {
      const response = await fetch("/api/user/logout", {
        method: "POST",
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(`${data.message}`);
      } else {
        const data = await response.json();
        toast.error(`${data.message}`);
        console.error("Error cerrando session:", data.message);
      }
    } catch (error) {
      console.error("Error cerrando session", error);
    } finally {
      setIsDisabled(false);
      router.replace("/");
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
          <AlertDialogDescription>Deseas cerrar sesión?</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => closeSession()}
            disabled={isDisabled}
          >
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
