import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import About from "./components/About";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between p-5 gap-10">
        <Hero />
        <Info />
        <About />
        <Pricing />
      </main>
    </>
  );
}
