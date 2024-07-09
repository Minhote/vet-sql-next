import Image from "next/image";
import otro from "@/app/assets/otro.svg";
import ave from "@/app/assets/ave.svg";
import equino from "@/app/assets/equino.svg";
import gato from "@/app/assets/gato.svg";
import perro from "@/app/assets/perro.svg";
import AddPetBtn from "./AddPetBtn";

interface PetDetail {
  pet_name: string;
  pet_type: string;
  pet_age: string;
}

interface PropsPetInfo {
  pet_details: PetDetail[] | null;
}

export default function PetInfo({ pet_details }: PropsPetInfo) {
  const srcs = [gato, perro, equino, ave, otro];
  if (pet_details === null) return <div>loading</div>;
  return (
    <div className="flex flex-col gap-4 rounded-md bg-background p-4">
      <div className="flex flex-col gap-2">
        <AddPetBtn />
        {pet_details.map((pet) => {
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
  );
}
