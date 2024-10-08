import Image from "next/image";
import otro from "@/assets/otro.svg";
import ave from "@/assets/ave.svg";
import equino from "@/assets/equino.svg";
import gato from "@/assets/gato.svg";
import perro from "@/assets/perro.svg";
import RemovePet from "@/components/RemovePet";
import AddPetBtnForm from "@/components/AddPetBtnForm";
import { petDetails } from "@/app/database";
import addPet from "@/assets/addPet.svg";
import { Badge } from "@/ui/badge";

interface PropsPetInfo {
  pet_details: petDetails[] | null;
}

export default function PetInfo({ pet_details }: PropsPetInfo) {
  const srcs = [gato, perro, equino, ave, otro];
  if (pet_details === null) {
    return (
      <div className="flex max-w-64 flex-col items-center justify-center gap-2 bg-background p-4">
        <AddPetBtnForm />
        <Image
          src={addPet}
          alt="Image of add Pet"
          height={56}
          width={56}
          className="rounded-md bg-primary-400 p-2"
        />
        <p className="text-center text-base font-bold text-primary-800">
          No tienes mascotas, puedes agregar con el boton de arriba
        </p>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4 rounded-md bg-background p-4">
      <div className="flex flex-col gap-2 ">
        <AddPetBtnForm />
        {pet_details.map((pet) => {
          const ele = srcs.filter((el) => {
            return el.src.includes(pet.pet_type.toLowerCase());
          });
          return (
            <div
              key={pet.pet_id.toString()}
              className="grid w-full grid-cols-3 place-items-center gap-4  rounded-md bg-primary-400 p-4 sm:flex sm:items-center sm:gap-2 sm:px-2 sm:py-1"
            >
              <Image src={ele[0]} alt="img" width={26} height={26} />
              <p className="flex-1 text-base font-bold tracking-wider text-primary-800">
                {pet.pet_name}
              </p>
              <RemovePet petId={pet.pet_id} />
              <Badge
                variant="secondary"
                className="text-center text-sm font-bold text-primary-700 dark:text-primary-900"
              >{`${pet.pet_age} years`}</Badge>
            </div>
          );
        })}
      </div>
    </div>
  );
}
