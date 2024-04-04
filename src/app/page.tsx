import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-[150dvh] flex-col items-center justify-between p-24">
        <h1 className="text-txt font-heading font-bold text-xl">My Vet App</h1>
        <p className="text-txt font-body font-normal text-base">
          El inicio de una full stack app
        </p>
      </main>
    </>
  );
}
