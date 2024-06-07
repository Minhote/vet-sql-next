import Image from "next/image";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import img4 from "../assets/img-4.jpg";
import img5 from "../assets/img-5.jpg";
import img6 from "../assets/img-6.jpg";
import img7 from "../assets/img-7.jpg";
import img8 from "../assets/img-8.jpg";

export default function GridGallery() {
  return (
    <div className="grid grid-cols-about-sm sm:grid-cols-about auto-rows-[100px] gap-2 hover-g">
      <Image
        src={img1}
        width={200}
        height={200}
        alt="Imagen 1"
        className="size-full object-fill col-start-1 col-end-3 row-start-1 row-end-3 transition-all duration-500 clip-path-r hover:clip-path-s hover:z-10"
      />
      <Image
        src={img2}
        width={200}
        height={200}
        alt="Imagen 2"
        className="size-full object-fill col-start-3 col-end-5 row-start-1 row-end-3 transition-all duration-500 clip-path-r hover:clip-path-s hover:z-10 "
      />
      <Image
        src={img3}
        width={200}
        height={200}
        alt="Imagen 3"
        className="size-full object-fill col-start-2 sm:col-start-5 col-end-4 sm:col-end-7 row-start-2 sm:row-start-1 row-end-4 sm:row-end-3 transition-all duration-500 clip-path-r hover:clip-path-s hover:z-10 "
      />
      <Image
        src={img4}
        width={200}
        height={200}
        alt="Imagen 4"
        className="size-full object-fill col-start-1 sm:col-start-2 col-end-3 sm:col-end-4 row-start-3 sm:row-start-2 row-end-5 sm:row-end-4 transition-all duration-500 clip-path-r hover:clip-path-s hover:z-10 "
      />
      <Image
        src={img5}
        width={200}
        height={200}
        alt="Imagen 5"
        className="size-full object-fill col-start-3 sm:col-start-4 col-end-5 sm:col-end-6 row-start-3 sm:row-start-2 row-end-5 sm:row-end-4 transition-all duration-500 clip-path-r hover:clip-path-s hover:z-10 "
      />
      <Image
        src={img6}
        width={200}
        height={200}
        alt="Imagen 6"
        className="size-full object-fill col-start-2 sm:col-start-1 col-end-5 sm:col-end-3 row-start-4 sm:row-start-3 row-end-6 sm:row-end-5 transition-all duration-500 clip-path-r hover:clip-path-s hover:z-10 "
      />
      <Image
        src={img7}
        width={200}
        height={200}
        alt="Imagen 7"
        className="size-full object-fill col-start-1 sm:col-start-3 col-end-3 sm:col-end-5 row-start-5 sm:row-start-3 row-end-7 sm:row-end-5 transition-all duration-500 h-full clip-path-r hover:clip-path-s hover:z-10 "
      />
      <Image
        src={img8}
        width={200}
        height={200}
        alt="Imagen 8"
        priority
        className="size-full object-fill col-start-3 sm:col-start-5 col-end-5 sm:col-end-7 row-start-5 sm:row-start-3 row-end-7 sm:row-end-5 transition-all duration-500 clip-path-r hover:clip-path-s hover:z-10 "
      />
    </div>
  );
}
