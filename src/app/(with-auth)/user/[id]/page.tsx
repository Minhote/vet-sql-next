import { getInformationById } from "@/lib/user_utils";
import { redirect } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/ui/avatar";
import PetInfo from "@/components/PetInfo";
import VetsInfo from "@/components/VetsInfo";
import AppointmentsInfo from "@/components/Appointments";
import LogoutBtn from "@/components/LogoutBtn";

export default async function IdPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const info = await getInformationById(id);
  console.log(`Log de user id page: ${info}`);

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
          <LogoutBtn />
        </div>
      </header>
      <div className="mx-auto my-6 flex max-w-3xl gap-4 rounded-lg bg-primary-100 px-5 py-4">
        <div className="flex flex-col gap-8">
          <PetInfo pet_details={pet_details} />
          <VetsInfo vetsData={vetsData} />
        </div>
        <AppointmentsInfo
          appointment_details={appointment_details}
          pet_details={pet_details}
          vetsData={vetsData}
        />
      </div>
    </>
  );
}
