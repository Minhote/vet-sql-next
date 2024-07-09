import { getInformationById } from "@/lib/user_utils";
import { redirect } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ExitIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import PetInfo from "@/app/components/PetInfo";
import VetsInfo from "@/app/components/VetsInfo";
import AppointmentsInfo from "@/app/components/Appointments";

export default async function IdPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const info = await getInformationById(id);

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
          <PetInfo pet_details={pet_details} />
          <VetsInfo vetsData={vetsData} />
        </div>
        <AppointmentsInfo
          appointment_details={appointment_details}
          pet_details={pet_details}
          vetsData={vetsData}
        />
      </main>
    </>
  );
}
