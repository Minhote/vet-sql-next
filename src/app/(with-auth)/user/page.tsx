import { getSession } from "@/lib/user_utils";
import RegisterCard from "../../components/RegisterCard";

export default async function UserPage() {
  return (
    <main className="container">
      <h2 className="title">Create your account and book an appointment</h2>
      <RegisterCard type="login" />
    </main>
  );
}
