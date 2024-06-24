import { getInformationById } from "@/lib/user_utils";
import { redirect } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ExitIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import otro from "@/app/assets/otro.svg";
import ave from "@/app/assets/ave.svg";
import equino from "@/app/assets/equino.svg";
import gato from "@/app/assets/gato.svg";
import perro from "@/app/assets/perro.svg";
import carla from "@/app/assets/carla.jpg";
import fabrizio from "@/app/assets/fabrizio.jpg";
import francis from "@/app/assets/francis.jpg";
import franco from "@/app/assets/franco.jpg";
import hector from "@/app/assets/hector.jpg";
import juan from "@/app/assets/juan.jpg";
import raquel from "@/app/assets/raquel.jpg";
import marina from "@/app/assets/marina.jpg";

export default async function IdPage({
  params: { id },
}: {
  params: { id: string };
}) {
  //Obtener Datos del usuario por id
  const info = await getInformationById(id);
  const srcs = [
    carla,
    fabrizio,
    francis,
    franco,
    hector,
    juan,
    raquel,
    marina,
    gato,
    perro,
    equino,
    ave,
    otro,
  ];
  const appointmentDescription: Record<string, string[]> = {
    "Veterinario General": ["Consulta General", "Desparasitación", "Vacunas"],
    Estilista: ["Baño", "Peluquería"],
    Cirujano: ["Procedimiento Quirurgico", "Esterilización"],
    Adiestrador: ["Entramiento", "Capacitación"],
  };
  if (!info) redirect("/");
  const {
    customerData: { appointment_details, customer_name, pet_details },
    vetsData,
  } = info;
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
      <main className="mx-auto my-6 flex max-w-3xl gap-4 rounded-lg bg-primary-100 px-5 py-4">
        <div className="flex flex-col gap-8">
          {/* Cuadro de mascotas */}
          <div className="flex flex-col gap-4 rounded-md bg-background p-4">
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                className="inline-flex items-center gap-1 self-end rounded-sm bg-accent px-1 py-2 text-sm font-bold text-accent-800"
              >
                Add Pet
                <PlusCircledIcon />
              </Button>
              {pet_details?.map((pet) => {
                const ele = srcs.filter((el) => {
                  return el.src.includes(pet.pet_type.toLowerCase());
                });
                return (
                  <div
                    key={pet.pet_name}
                    className="flex w-full items-center gap-2 rounded-md bg-primary-400 px-2 py-1"
                  >
                    <Image src={ele[0]} alt="img" width={26} height={26} />
                    <p className="flex-1 text-base font-bold tracking-wider text-primary-800">
                      {pet.pet_name}
                    </p>
                    <span className="inline-block rounded bg-secondary px-1 py-1 text-sm font-bold text-secondary-700 dark:text-secondary-900">{`${pet.pet_age} years`}</span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Cuadro de veterinarios */}
          <div className="flex flex-col gap-4 rounded-md bg-background p-4">
            {vetsData.map((vet) => {
              const ele = srcs.filter((el) => {
                return el.src.includes(vet.vet_name.toLowerCase());
              });

              return (
                <div
                  key={vet.vet_name}
                  className="flex items-center justify-between gap-2"
                >
                  <Avatar>
                    <AvatarImage src={ele[0].src} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <p className="w-20 flex-1 font-bold text-primary-800">
                    {vet.vet_name}
                  </p>
                  <span className="inline-block max-w-20 rounded bg-secondary px-1 py-1 text-sm font-bold tracking-wider text-secondary-700 dark:text-secondary-900">
                    {vet.vet_pro_type}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex w-60 flex-1 flex-col gap-4 p-4">
          <Button
            variant="outline"
            className="self-end bg-accent font-bold text-accent-800"
          >
            Add a Appointment
            <PlusCircledIcon className="ml-1" />
          </Button>
          {appointment_details?.map((d) => {
            const formatDate = new Intl.DateTimeFormat("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: true,
            }).format(new Date(d.appointment_date));
            const [vetImg, petImg] = srcs.filter((el) => {
              return (
                el.src.includes(d.vet_pro_name.toLowerCase()) ||
                el.src.includes(d.pet_type.toLowerCase())
              );
            });
            return (
              <div
                key={d.pet_name + d.vet_pro_name + d.appointment_date}
                className="flex flex-col overflow-hidden rounded-lg"
              >
                <div className="flex items-center justify-between gap-2 bg-background p-2">
                  <div className="flex flex-col items-center gap-1">
                    <Avatar>
                      <AvatarImage src={vetImg.src} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="font-bold text-primary-800">
                      {d.vet_pro_name}
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-between gap-2">
                    {appointmentDescription[d.vet_pro_type].map((el) => (
                      <span
                        key={el}
                        className="rounded bg-primary px-1 py-2 text-sm font-bold tracking-wide text-primary-800 dark:bg-primary-500 dark:text-primary-950"
                      >
                        {el}
                      </span>
                    ))}
                  </div>
                  <div className="gap 2 flex flex-col items-center justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full dark:bg-primary-400">
                      <Image
                        src={petImg.src}
                        alt={"Imagen de Pet"}
                        width={32}
                        height={32}
                      />
                    </div>

                    <p className="font-bold text-primary-800">{d.pet_name}</p>
                  </div>
                </div>
                <div className="bg-primary-300 p-2">
                  <p className="font-bold text-primary-700 dark:text-primary-900">
                    {formatDate}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
