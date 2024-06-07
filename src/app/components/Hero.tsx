import { Ilu } from "../assets/Ilu";

export default function Hero() {
  return (
    <>
      <h1 className="text-txt font-heading font-bold text-2xl tracking-wider sm:text-5xl">
        MY VET APP
      </h1>
      <div className="flex justify-center items-center gap-5 p-7 self-stretch flex-wrap px-10 md:px-20">
        <p className="text-txt font-body font-normal text-xl flex-auto w-48 sm:text-3xl">
          Welcome to this place where we will take care of your pet as if he/she
          were at home.
        </p>
        <div className="flex justify-center flex-1 w-52">
          <Ilu height={200} width={200} />
        </div>
      </div>
    </>
  );
}
