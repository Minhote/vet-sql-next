"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";

import { Button } from "@/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { formPetSchema, petSchema } from "@/lib/form_utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Input } from "@/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { useState } from "react";

export default function AddPetBtnForm() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const form = useForm<petSchema>({
    resolver: zodResolver(formPetSchema),
    defaultValues: { pet_name: "", pet_age: 1, pet_type: "" },
  });

  async function onSubmit(values: petSchema) {
    setDisabled(true);
    const resp = await fetch("/api/user/pet", {
      method: "POST",
      body: JSON.stringify(values),
    });
    const status = resp.statusText;
    const data = await resp.json();
    if (status === "OK") {
      toast.success(`${data.message}`);
      form.reset();
      setDisabled(false);
      setOpen(false);
      router.refresh();
    } else {
      toast.error(`${data.message}`);
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="inline-flex items-center gap-1 self-end rounded-sm bg-accent px-1 py-2 text-sm font-bold text-accent-800"
        >
          Add Pet
          <PlusCircledIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a Pet</DialogTitle>
          <DialogDescription>
            You can add a new pet completing form and submit.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="pet_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pet Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Rocky" {...field} />
                  </FormControl>
                  <FormDescription>Insert your pet&apos;s name</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pet_age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pet Age</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) =>
                        field.onChange(parseInt(e.target.value, 10))
                      }
                    />
                  </FormControl>
                  <FormDescription>
                    Insert your pet&apos;s age (min 1).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pet_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pet Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Gato">Gato</SelectItem>
                      <SelectItem value="Perro">Perro</SelectItem>
                      <SelectItem value="Equino">Equino</SelectItem>
                      <SelectItem value="Ave">Ave</SelectItem>
                      <SelectItem value="Otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Select your pet&apos;s type.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={disabled}>
                {disabled ? "Saving..." : "Save changes"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
