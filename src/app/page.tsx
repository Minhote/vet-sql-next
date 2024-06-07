import Hero from "@/components/Hero";
import Info from "@/components/Info";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import RegisterCard from "@/components/RegisterCard";
import { getSession } from "@/lib/user_utils";

export default async function Home() {
  const session = await getSession();
  return (
    <>
      <main className="container">
        <Hero />
        <Info />
        <About />
        <Pricing />
        <RegisterCard type="submit" />
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </main>
    </>
  );
}
