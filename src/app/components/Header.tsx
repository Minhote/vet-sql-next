"use client";

import { toggleHamburger } from "@/lib/utils";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-transparent overflow-hidden relative sm:p-4 sm:bg-primary ">
      <button
        className="bg-transparent border-solid border-4 border-primary rounded-lg group peer absolute right-4 top-4 z-10 sm:hidden"
        aria-expanded="false"
        onClick={toggleHamburger}
      >
        <svg viewBox="0 0 100 100" width={60} className="pointer-events-none">
          <rect
            className="transition-all duration-500 animate-hamburger-top-e origin-center group-aria-expanded:animate-hamburger-top-s"
            width="80%"
            height={10}
            x={10}
            y={25}
            rx={5}
          ></rect>
          <rect
            className="transition-all duration-500 transition-rect group-aria-expanded:transition-rect-expanded group-aria-expanded:opacity-0"
            width="80%"
            height={10}
            x={10}
            y={45}
            rx={5}
          ></rect>
          <rect
            className="transition-all  duration-500 animate-hamburger-bottom-e origin-center group-aria-expanded:animate-hamburger-bottom-s"
            width="80%"
            height={10}
            x={10}
            y={65}
            rx={5}
          ></rect>
        </svg>
      </button>
      <ul className="flex flex-col transition-transform duration-500 justify-center items-center gap-10 peer-aria-expanded:translate-x-0 bg-primary p-6 h-dvh sm:flex-row sm:h-auto max-sm:translate-x-[120%]">
        <li className="text-txt relative group">
          <Link
            href="/"
            className="flex flex-col items-center transition-all duration-300 before:transition before:h-12 before:w-14 before:opacity-0 before:absolute before:bg-background before:-top-[20px] before:rounded-b-md before:origin-center before:group-hover:origin-top before:group-hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 fill-txt z-10 transition duration-300 group-hover:-translate-y-2 group-hover:fill-primary"
            >
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
            <span
              className="relative inline-block w-full bg-transparent group-hover:translate-y-4 group-hover:text-primary  shadow-none group-hover:bg-background rounded-b-none  rounded-t px-2 
              group-hover:shadow-header transition-all  duration-300"
            >
              Home
            </span>
          </Link>
        </li>
        <li className="text-txt relative group">
          <Link
            href="/services"
            className="flex flex-col items-center transition-all duration-300 before:transition before:h-12 before:w-14 before:opacity-0 before:absolute before:bg-background before:-top-[20px] before:rounded-b-md before:origin-center before:group-hover:origin-top before:group-hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-txt z-10 transition duration-300 group-hover:-translate-y-2 group-hover:fill-primary"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="relative inline-block w-full bg-transparent group-hover:translate-y-4 group-hover:text-primary  shadow-none group-hover:bg-background rounded-b-none  rounded-t px-2 
              group-hover:shadow-header transition-all  duration-300"
            >
              Services
            </span>
          </Link>
        </li>
        <li className="text-txt relative group">
          <Link
            href="/pricing"
            className="flex flex-col items-center transition-all duration-300 before:transition before:h-12 before:w-14 before:opacity-0 before:absolute before:bg-background before:-top-[20px] before:rounded-b-md before:origin-center before:group-hover:origin-top before:group-hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-txt z-10 transition duration-300 group-hover:-translate-y-2 group-hover:fill-primary"
            >
              <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="relative inline-block w-full bg-transparent group-hover:translate-y-4 group-hover:text-primary  shadow-none group-hover:bg-background rounded-b-none  rounded-t px-2 
              group-hover:shadow-header transition-all  duration-300"
            >
              Pricing
            </span>
          </Link>
        </li>
        <li className="text-txt relative group">
          <Link
            href="/about"
            className="flex flex-col items-center transition-all duration-300 before:transition before:h-12 before:w-14 before:opacity-0 before:absolute before:bg-background before:-top-[20px] before:rounded-b-md before:origin-center before:group-hover:origin-top before:group-hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-txt z-10 transition duration-300 group-hover:-translate-y-2 group-hover:fill-primary"
            >
              <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
            </svg>
            <span
              className="relative inline-block w-full bg-transparent group-hover:translate-y-4 group-hover:text-primary  shadow-none group-hover:bg-background rounded-b-none  rounded-t px-2 
              group-hover:shadow-header transition-all  duration-300"
            >
              About
            </span>
          </Link>
        </li>
        <li className="text-txt relative group">
          <Link
            href="/user"
            className="flex flex-col items-center transition-all duration-300 before:transition before:h-12 before:w-14 before:opacity-0 before:absolute before:bg-background before:-top-[20px] before:rounded-b-md before:origin-center before:group-hover:origin-top before:group-hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 fill-txt z-10 transition duration-300 group-hover:-translate-y-2 group-hover:fill-primary"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="relative inline-block w-full bg-transparent group-hover:translate-y-4 group-hover:text-primary  shadow-none group-hover:bg-background rounded-b-none  rounded-t px-2 
              group-hover:shadow-header transition-all  duration-300"
            >
              User
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
