import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(5).max(50),
  password: z
    .string()
    .min(5, { message: "Must be at least 5 characters" })
    .max(20, { message: "Must not exceed 20 characters" })
    .regex(
      /^(?=.*[!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).+$/,
      {
        message:
          "Must be at least one especial character, one capital letter, one lowercase letter and one number.",
      },
    ),
  id: z
    .string()
    .length(10)
    .regex(/^[0-9]+$/, { message: "Must be 10 numbers" }),
});

export const loginFormSchema = formSchema.omit({ id: true });

export const formPetSchema = z.object({
  pet_name: z
    .string()
    .min(4, { message: "Must be at least 4 characters" })
    .max(10, { message: "Must be at least 10 characters" }),
  pet_type: z.string().regex(/^(Gato|Perro|Equino|Ave|Otro)$/),
  pet_age: z.number().positive().int().gte(1).lte(15),
});

export const formAppointmentSchema = z.object({
  vet_pro: z.string({ required_error: "Selecciona a un Veterinario" }),
  pet_name: z.string({ required_error: "Selecciona a una mascota" }),
  appointment_date: z.date({
    required_error: "Selecciona a una fecha para tu cita",
  }),
  appointment_hour: z.string({
    required_error: "Selecciona a una hora para tu cita",
  }),
});

export type submitSchema = z.infer<typeof formSchema>;
export type loginSchema = z.infer<typeof loginFormSchema>;
export type petSchema = z.infer<typeof formPetSchema>;
export type appointmentSchema = z.infer<typeof formAppointmentSchema>;
