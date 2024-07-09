import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import AddApointmentForm from "./AddAppointmentForm";
import { vetsResponse } from "../database";

interface appointmentsDetails {
  pet_name: string;
  pet_type: string;
  vet_pro_name: string;
  vet_pro_type: string;
  appointment_date: string;
}

interface petDetails {
  pet_name: string;
  pet_age: string;
  pet_type: string;
}

interface PropsAddAppointmentsInfo {
  appointment_details: appointmentsDetails[] | null;
  pet_details: petDetails[] | null;
  vetsData: vetsResponse[];
}

export default function AddAppointmentBtn({
  appointment_details,
  pet_details,
  vetsData,
}: PropsAddAppointmentsInfo) {
  if (pet_details === null) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="self-end bg-accent font-bold text-accent-800"
        >
          Add a Appointment
          <PlusCircledIcon className="ml-1" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Schedule an appointment</SheetTitle>
          <SheetDescription>Fill all the form and submit</SheetDescription>
        </SheetHeader>
        <AddApointmentForm
          appointment_details={appointment_details}
          pet_details={pet_details}
          vetsData={vetsData}
        >
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </AddApointmentForm>
      </SheetContent>
    </Sheet>
  );
}
