import { Ilu } from "@/assets/Ilu";

export default function Hero() {
  return (
    <>
      <h1 className="font-heading text-2xl font-bold tracking-wider text-txt sm:text-5xl">
        MY VET APP
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-5 self-stretch p-7 px-10 md:px-20">
        <p className="w-48 flex-auto font-body text-xl font-normal text-txt sm:text-3xl">
          Welcome to this place where we will take care of your pet as if he/she
          were at home.
        </p>
        <div className="flex w-52 flex-1 justify-center">
          <Ilu height={200} width={200} />
        </div>
      </div>
    </>
  );
}
