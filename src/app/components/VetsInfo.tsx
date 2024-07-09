import { vetsResponse } from "../database";
import carla from "@/app/assets/carla.jpg";
import fabrizio from "@/app/assets/fabrizio.jpg";
import francis from "@/app/assets/francis.jpg";
import franco from "@/app/assets/franco.jpg";
import hector from "@/app/assets/hector.jpg";
import juan from "@/app/assets/juan.jpg";
import raquel from "@/app/assets/raquel.jpg";
import marina from "@/app/assets/marina.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface PropsVetsInfo {
  vetsData: vetsResponse[];
}

export default function VetsInfo({ vetsData }: PropsVetsInfo) {
  const srcs = [carla, fabrizio, francis, franco, hector, juan, raquel, marina];
  return (
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
  );
}
