import RegisterCardForm from "./RegisterCardForm";
import { RegisterCardProps } from "../database";

export default function RegisterCard({ type }: RegisterCardProps) {
  return (
    <>
      <h2 className="title">Register for reservation</h2>
      <div className="flex items-center self-stretch rounded bg-secondary outline outline-4 outline-secondary md:justify-center ">
        <div className="flex flex-1 basis-1/3 items-center justify-center self-stretch bg-background p-5 md:flex-none  md:rounded-xl md:border-l-4 md:border-secondary ">
          <svg
            width="150px"
            height="150px"
            viewBox="0 0 24 24"
            className="fill-none"
          >
            <circle
              cx="12"
              cy="9"
              r="3"
              className="stroke-accent stroke-[1.5]"
            />
            <path
              d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
              className="stroke-accent stroke-[1.5]"
              strokeLinecap="round"
            />
            <path
              d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
              className="stroke-accent stroke-[1.5]"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex-1 basis-2/3 bg-secondary p-4 md:max-w-56 md:flex-none">
          <RegisterCardForm type={type} />
        </div>
      </div>
    </>
  );
}
