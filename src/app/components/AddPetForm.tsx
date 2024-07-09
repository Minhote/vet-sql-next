"use client";

import { formPetSchema, petSchema } from "@/lib/form_utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ReactElement } from "react";
import { toast } from "sonner";

export default function AddPetForm({ children }: { children: ReactElement }) {
  const form = useForm<petSchema>({
    resolver: zodResolver(formPetSchema),
    defaultValues: { pet_name: "", pet_age: 1, pet_type: "" },
  });

  async function onSubmit(values: petSchema) {
    const resp = await fetch("/api/user/pet", {
      method: "POST",
      body: JSON.stringify(values),
    });
    const status = resp.statusText;
    const data = await resp.json();
    if (status === "OK") return toast.success(`${data.message}`);
    return toast.error(`${data.message}`);
  }

  return (
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
              <FormDescription>Insert yout pet's name</FormDescription>
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
                  onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
                />
              </FormControl>
              <FormDescription>Insert your pet's age (min 1).</FormDescription>
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
              <FormDescription>Select your pet's type.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {children}
      </form>
    </Form>
  );
}
