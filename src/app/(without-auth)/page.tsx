import Hero from "@/components/Hero";
import Info from "@/components/Info";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import RegisterCard from "@/components/RegisterCard";

export default async function Home() {
  return (
    <>
      <main className="container">
        <Hero />
        <Info />
        <About />
        <Pricing />
        <RegisterCard type="submit" />
      </main>
    </>
  );
}
