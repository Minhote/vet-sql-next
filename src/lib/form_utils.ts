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

export type submitSchema = z.infer<typeof formSchema>;
export type loginSchema = z.infer<typeof loginFormSchema>;
