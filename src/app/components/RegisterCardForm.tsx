"use client";

import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
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
import { toast } from "sonner";
import {
  formSchema,
  loginFormSchema,
  loginSchema,
  submitSchema,
} from "@/lib/form_utils";
import { RegisterCardProps } from "../database";
import { useRouter } from "next/navigation";

const RegisterCardForm = ({ type }: RegisterCardProps) => {
  const router = useRouter();
  if (type === "submit") {
    const submitform = useForm<submitSchema>({
      resolver: zodResolver(formSchema),
      defaultValues: { username: "", password: "", id: "" },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
      const resp = await fetch("/api/user/create", {
        method: "POST",
        body: JSON.stringify(values),
      });
      const status = resp.statusText;
      const data = await resp.json();
      if (status === "Created") {
        toast.info(`${data.message}`);
        submitform.reset();
      } else if (status === "Conflict") {
        toast.error(`${data.message}`);
      }
    }
    return (
      <Form {...submitform}>
        <form
          onSubmit={submitform.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FormField
            control={submitform.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-bold text-txt">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Mark"
                    {...field}
                    className="font-base  bg-background text-txt focus:border-background"
                  />
                </FormControl>
                <FormDescription className="text-primary-900">
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={submitform.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-bold text-txt">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="@Pepito123"
                    {...field}
                    className="font-base bg-background text-txt focus:border-background"
                  />
                </FormControl>
                <FormDescription className="text-primary-900">
                  Enter a valid password.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={submitform.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-bold text-txt">
                  Identification Number
                </FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="0969306089"
                    {...field}
                    className="font-base bg-background text-txt focus:border-background"
                  />
                </FormControl>
                <FormDescription className="text-primary-900">
                  Enter a valid identification number.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-accent text-base font-bold hover:bg-accent-500"
          >
            Registrate
          </Button>
        </form>
      </Form>
    );
  } else if (type === "login") {
    const loginform = useForm<loginSchema>({
      resolver: zodResolver(loginFormSchema),
      defaultValues: {
        password: "",
        username: "",
      },
    });

    async function onLogin(values: z.infer<typeof loginFormSchema>) {
      const resp = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify(values),
      });
      const status = resp.statusText;
      const data = await resp.json();
      if (status === "OK") {
        toast.info(`${data.message}`);
        loginform.reset();
        router.push(`/user/${data.user.id}`);
      } else {
        toast.error(`${data.message}`);
      }
    }

    return (
      <Form {...loginform}>
        <form onSubmit={loginform.handleSubmit(onLogin)} className="space-y-8">
          <FormField
            control={loginform.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-bold text-txt">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Mark"
                    {...field}
                    className="font-base  bg-background text-txt focus:border-background"
                  />
                </FormControl>
                <FormDescription className="text-primary-900">
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={loginform.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl font-bold text-txt">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="@Pepito123"
                    {...field}
                    className="font-base bg-background text-txt focus:border-background"
                  />
                </FormControl>
                <FormDescription className="text-primary-900">
                  Enter a valid password.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-accent text-base font-bold hover:bg-accent-500"
          >
            Login
          </Button>
        </form>
      </Form>
    );
  }
};

export default RegisterCardForm;
