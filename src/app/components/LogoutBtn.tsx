import { ExitIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { logout } from "@/lib/user_utils";
import { redirect } from "next/navigation";

export default function LogoutBtn() {
  return (
    <form
      action={async () => {
        "use server";
        await logout();
        redirect("/");
      }}
    >
      <Button variant="outline" type="submit" size="icon">
        <ExitIcon className="h-4 w-4" />
      </Button>
    </form>
  );
}
