import { getInformationById } from "@/lib/user_utils";
import { redirect } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ExitIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import turtle from "@/app/assets/turtle.png";
import bird from "@/app/assets/bird.png";
import horse from "@/app/assets/horse.png";
import cat from "@/app/assets/cat.png";
import dog from "@/app/assets/dog.png";

export default async function IdPage({
  params: { id },
}: {
  params: { id: string };
}) {
  //Obtener Datos del usuario por id
  const info = await getInformationById(id);
  if (!info) redirect("/");
  const { appointment_details, customer_name, pet_details } = info;
  return (
    <>
      <header className="flex items-center justify-around bg-primary py-2">
        <h1 className="text-base font-bold tracking-wider text-primary-800">
          Welcome {customer_name}
        </h1>
        <div className="flex items-center justify-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Button variant="outline" size="icon">
            <ExitIcon className="h-4 w-4" />
          </Button>
        </div>
      </header>
      <main className="mx-auto my-6 flex max-w-3xl gap-2 bg-primary-200">
        <div className="flex flex-col gap-4">
          {/* Cuadro de mascotas */}
          <div className="flex flex-col gap-2">
            <button className="inline-flex items-center gap-1 self-end rounded-sm bg-accent-300 px-1 py-2 text-sm font-bold text-accent-800">
              Add Pet
              <PlusCircledIcon />
            </button>
            {pet_details?.map((pet) => {
              const src =
                pet.pet_type === "Gato"
                  ? cat
                  : pet.pet_type === "Perro"
                    ? dog
                    : pet.pet_type === "Equino"
                      ? horse
                      : pet.pet_type === "Ave"
                        ? bird
                        : turtle;
              return (
                <div
                  key={pet.pet_name}
                  className="flex w-full items-center gap-2 rounded-md bg-primary-500 px-2 py-1"
                >
                  <Image src={src} alt="img" width={26} height={26} />
                  <p className="flex-1 text-base font-bold tracking-wider text-primary-800">
                    {pet.pet_name}
                  </p>
                  <span className="inline-block rounded bg-secondary px-1 py-1 text-sm font-bold text-secondary-700">{`${pet.pet_age} years`}</span>
                </div>
              );
            })}
          </div>
        </div>
        {/* Cuadro de veterinarios */}
        <div className="flex flex-col gap-4"></div>
        <div className="w-60 flex-1"></div>
      </main>
    </>
  );
}
