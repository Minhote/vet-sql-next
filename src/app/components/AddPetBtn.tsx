import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import AddPetForm from "./AddPetForm";

export default function AddPetBtn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="inline-flex items-center gap-1 self-end rounded-sm bg-accent px-1 py-2 text-sm font-bold text-accent-800"
        >
          Add Pet
          <PlusCircledIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a Pet</DialogTitle>
          <DialogDescription>
            You can add a new pet completing form and submit.
          </DialogDescription>
        </DialogHeader>
        <AddPetForm>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </AddPetForm>
      </DialogContent>
    </Dialog>
  );
}
