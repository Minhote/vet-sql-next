"use client";

import { appointmentSchema, formAppointmentSchema } from "@/lib/form_utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { useForm, useWatch } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { vetsResponse } from "../database";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

interface appointmentsDetails {
  pet_name: string;
  pet_type: string;
  vet_pro_name: string;
  vet_pro_type: string;
  appointment_date: string;
}

interface petDetails {
  pet_name: string;
  pet_age: string;
  pet_type: string;
}

interface PropsAddAppointmentsForm {
  appointment_details: appointmentsDetails[] | null;
  pet_details: petDetails[];
  vetsData: vetsResponse[];
  children: ReactNode;
}

export default function AddApointmentForm({
  pet_details,
  vetsData,
  children,
}: PropsAddAppointmentsForm) {
  const router = useRouter();
  const form = useForm<appointmentSchema>({
    resolver: zodResolver(formAppointmentSchema),
    defaultValues: {
      pet_name: "",
      vet_pro: "",
      appointment_date: undefined,
      appointment_hour: "",
    },
  });

  const selectedVetName = useWatch({ control: form.control, name: "vet_pro" });
  const selectedVetType =
    vetsData.find((vet) => vet.vet_name === selectedVetName)?.vet_pro_type ||
    "";

  const hours = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  async function onSubmit(values: appointmentSchema) {
    const { vet_pro, pet_name, appointment_date, appointment_hour } = values;
    const hour = parseInt(appointment_hour.split(":")[0]);
    appointment_date.setHours(hour);
    const formatedDate =
      appointment_date.toISOString().slice(0, 10) + " " + appointment_hour;
    const obj = {
      vet_pro,
      pet_name,
      appointment_date: formatedDate,
    };
    const resp = await fetch("/api/user/appointment", {
      method: "POST",
      body: JSON.stringify(obj),
    });

    const data = await resp.json();
    if (data) {
      toast.success(`${data.message}`);
      router.refresh();
    }
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Pet" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  {pet_details.map((pet) => (
                    <SelectItem key={pet.pet_name} value={pet.pet_name}>
                      {pet.pet_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="vet_pro"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vet Pro</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Vet" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  {vetsData.map((vet) => (
                    <SelectItem key={vet.vet_name} value={vet.vet_name}>
                      {vet.vet_name}
                    </SelectItem>
                  ))}
                </SelectContent>
                <Input disabled value={selectedVetType} />
              </Select>
              <FormDescription>Select a Especialist</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="appointment_date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Appointment Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto p-0"
                  align="end"
                  side="bottom"
                >
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>Select a day</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="appointment_hour"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Appointment Hour</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Hour" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  {hours.map((hour) => (
                    <SelectItem key={hour} value={`${hour}:00`}>
                      {hour}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {children}
      </form>
    </Form>
  );
}
