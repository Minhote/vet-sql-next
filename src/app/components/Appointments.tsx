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
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import { appointmentDetails, petDetails, vetsResponse } from "../database";
import AddAppointmentBtnForm from "./AddAppointmentBtnForm";
import RemoveAppointment from "./RemoveAppointment";

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

  if (appointment_details === null) return <div>loading...</div>;

  return (
    <div className="flex w-60 flex-1 flex-col gap-4 p-4">
      <AddAppointmentBtnForm pet_details={pet_details} vetsData={vetsData} />
      {appointment_details.map((d) => {
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
            key={d.appointment_id}
            className="flex flex-col overflow-hidden rounded-lg"
          >
            <div className="flex items-center justify-between gap-2 bg-background p-2">
              <div className="flex flex-col items-center gap-1">
                <Avatar>
                  <AvatarImage src={vetImg.src} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="font-bold text-primary-800">{d.vet_pro_name}</p>
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
            <div className="flex items-baseline justify-around bg-primary-300 p-2">
              <p className="font-bold text-primary-700 dark:text-primary-900">
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
