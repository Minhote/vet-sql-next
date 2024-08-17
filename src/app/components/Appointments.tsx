import carla from "@/app/assets/carla.jpg";
import fabrizio from "@/app/assets/fabrizio.jpg";
import francis from "@/app/assets/francis.jpg";
import franco from "@/app/assets/franco.jpg";
import hector from "@/app/assets/hector.jpg";
import juan from "@/app/assets/juan.jpg";
import raquel from "@/app/assets/raquel.jpg";
import marina from "@/app/assets/marina.jpg";
import otro from "@/app/assets/otro.svg";
import ave from "@/app/assets/ave.svg";
import equino from "@/app/assets/equino.svg";
import gato from "@/app/assets/gato.svg";
import perro from "@/app/assets/perro.svg";
import addApointment from "@/app/assets/addAppointment.svg";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import { appointmentDetails, petDetails, vetsResponse } from "../database";
import AddAppointmentBtnForm from "./AddAppointmentBtnForm";
import RemoveAppointment from "./RemoveAppointment";
import { Badge } from "./ui/badge";

interface PropsAppointmentsInfo {
  appointment_details: appointmentDetails[] | null;
  pet_details: petDetails[] | null;
  vetsData: vetsResponse[];
}

export default function AppointmentsInfo({
  appointment_details,
  pet_details,
  vetsData,
}: PropsAppointmentsInfo) {
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

  const allAppointmentsCaduced = appointment_details?.every((a) => {
    return new Date(a.appointment_date) < new Date();
  });

  if (pet_details == null) {
    return (
      <div className="flex w-60 flex-1 flex-col gap-4 p-4">
        <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-lg bg-background">
          <Image
            src={addApointment}
            alt="Image of add appointment"
            height={140}
            width={140}
            className="rounded-md bg-primary-400 p-1"
          />
          <p className="w-4/5 text-center text-xl font-bold text-primary-800">
            No tienes mascotas para agendar citas.
          </p>
        </div>
      </div>
    );
  }
  if (appointment_details === null || allAppointmentsCaduced) {
    return (
      <div className="flex w-60 flex-1 flex-col gap-4 p-4">
        <AddAppointmentBtnForm pet_details={pet_details} vetsData={vetsData} />
        <div className="flex flex-1 flex-col items-center justify-center gap-2 rounded-lg bg-background">
          <Image
            src={addApointment}
            alt="Image of add appointment"
            height={140}
            width={140}
            className="rounded-md bg-primary-400 p-1"
          />
          <p className="w-4/5 text-center text-xl font-bold text-primary-800">
            No tienes citas agendadas, agrega una con el boton de arriba
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:w-60">
      <AddAppointmentBtnForm pet_details={pet_details} vetsData={vetsData} />
      {appointment_details.map((d) => {
        if (new Date(d.appointment_date) < new Date()) return;
        // Eliminar microsegundos de la fecha si están presentes
        const appointmentDate = d.appointment_date.split(".")[0];
        console.log(appointmentDate);
        // const formatDate = new Intl.DateTimeFormat("es-ES", {
        //   year: "numeric",
        //   month: "long",
        //   day: "numeric",
        //   hour: "numeric",
        //   minute: "numeric",
        //   second: "numeric",
        //   hour12: true,
        // }).format(new Date(appointmentDate));
        const formatDate = new Date(appointmentDate).toLocaleString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hourCycle: "h12",
        });
        const [vetImg, petImg] = srcs.filter((el) => {
          return (
            el.src.includes(d.vet_pro_name.toLowerCase()) ||
            el.src.includes(d.pet_type.toLowerCase())
          );
        });
        return (
          <div
            key={d.appointment_id}
            className="flex flex-col overflow-hidden rounded-lg"
          >
            <div className="grid grid-cols-2 place-content-center items-center justify-between gap-4 bg-background p-2 md:flex md:gap-2">
              <div className="flex flex-col items-center gap-1">
                <Avatar>
                  <AvatarImage src={vetImg.src} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="font-bold text-primary-800">{d.vet_pro_name}</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 max-md:order-3 max-md:col-span-2">
                {appointmentDescription[d.vet_pro_type].map((el) => (
                  <Badge
                    key={el}
                    variant="secondary"
                    className="bg-primary text-sm font-bold tracking-wide text-primary-800 dark:bg-primary-500 dark:text-primary-950"
                  >
                    {el}
                  </Badge>
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
            <div className="flex items-baseline justify-around bg-primary-300 p-2 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:gap-2">
              <p className="font-bold text-primary-700 max-sm:text-center dark:text-primary-900">
                {formatDate}
              </p>
              <RemoveAppointment appointmentId={d.appointment_id} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
