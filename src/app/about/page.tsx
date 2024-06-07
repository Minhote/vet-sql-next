import Image from "next/image";
import img9 from "../assets/img-9.jpg";
import img10 from "../assets/img-10.jpg";
import RegisterCard from "../components/RegisterCard";

export default function AboutPage() {
  return (
    <main className="container">
      <h2 className="title">About</h2>
      <div className="grid grid-cols-12 auto-rows-max place-items-center gap-3">
        <div className="col-span-8 row-span-4">
          <h3 className="text-primary font-bold text-2xl text-center">
            Our History: Celebrating an Enduring Dedication to Animal Health
          </h3>
          <Image
            src={img9}
            alt="Image of pet taking care"
            width={200}
            height={200}
            priority
            className="mx-auto my-2"
          />
          <p className="text-txt font-normal text-xl columns-2">
            From our humble beginnings to becoming a leading veterinary center
            in the region, our history is marked by an unwavering passion for
            animal care and an unwavering commitment to excellence in veterinary
            medicine.
          </p>
        </div>
        <div className="col-span-4 row-span-5">
          <Image
            src={img10}
            alt="Image of our founder"
            width={200}
            height={200}
            priority
            className="mb-2 mx-auto"
          />
          <h3 className="text-primary font-bold text-2xl text-center">
            Founding and Initial Commitment
          </h3>

          <p className="text-txt font-normal text-xl">
            Our veterinary practice was founded in 2000 by Dr. Khabib Ali , a
            passionate animal lover with a clear vision: to provide
            compassionate, high-quality veterinary care to all pets in our
            community. We started as a modest clinic, but from day one, our
            commitment to animal health and wellness was evident.
          </p>
        </div>
        <div className="col-span-8 row-span-1">
          <h3 className="text-primary text-2xl font-bold">
            Growth and Expansion
          </h3>
          <p className="text-txt text-xl font-normal columns-2 lg:columns-3">
            Over time, our reputation grew and our clientele expanded. Thanks to
            the support of our loyal clients and the hard work of our talented
            team of veterinarians and support staff, we were able to expand our
            services and facilities. As we grew, we steadfastly maintained our
            core values of compassion, integrity and excellence in animal care.
          </p>
        </div>
        <div className="col-span-full">
          <h3 className="text-primary font-bold text-2xl">
            Medical Innovation and Advances
          </h3>
          <p className="text-txt font-normal text-xl sm:max-md:columns-3">
            We are committed to staying at the forefront of veterinary medicine,
            adopting new technologies, techniques and treatments to improve the
            health and well-being of our patients. Our team regularly
            participates in continuing education programs and collaborates with
            specialists in a variety of areas to ensure that our patients
            receive the best possible care.
          </p>
        </div>
        <div className="col-span-full">
          <h3 className="text-primary text-2xl font-bold">
            A Promising Future
          </h3>
          <p className="text-txt font-normal text-xl sm:max-md:columns-2">
            As we look to the future, we are excited to continue to grow and
            evolve to meet the changing needs of our pets and their families. We
            will remain committed to our mission of providing exceptional
            veterinary care and working tirelessly to promote animal health and
            wellness in our community and beyond.
          </p>
        </div>
      </div>
      <p className="text-txt font-normal text-2xl">
        Thank you for being a part of our story and for trusting us to care for
        your four-legged loved ones. We look forward to continuing to serve our
        community with passion, dedication and compassion for years to come.
      </p>
      <RegisterCard />
    </main>
  );
}
