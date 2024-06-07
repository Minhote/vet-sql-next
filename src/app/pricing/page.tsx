import RegisterCard from "../components/RegisterCard";

export default function PricingPage() {
  return (
    <main className="container">
      <h2 className="title">Pricing</h2>
      <div className="self-stretch  grid place-content-center grid-cols-[repeat(auto-fill,minmax(min(100px,100%),1fr))] auto-rows-[100px] gap-5 grid-flow-dense">
        <div className="col-span-2 lg:col-span-3 bg-secondary-500 dark:bg-secondary rounded-md text-txt flex flex-col items-center justify-center">
          <h3 className="font-bold text-2xl">Consult</h3>
          <span className="text-background text-xl font-bold">$ 10</span>
        </div>
        <div className="col-span-2  lg:col-span-3 bg-secondary-500 dark:bg-secondary rounded-md text-txt flex flex-col items-center justify-center col-start-2 sm:col-start-auto">
          <h3 className="font-bold text-2xl">Deworming</h3>
          <span className="text-background text-xl font-bold">$ 20</span>
        </div>
        <div className="col-span-2  lg:col-span-3 bg-secondary-500 dark:bg-secondary rounded-md text-txt flex flex-col items-center justify-center">
          <h3 className="font-bold text-2xl">Styling</h3>
          <span className="text-background text-xl font-bold">$ 20</span>
        </div>
        <div className="col-span-3 max-sm:col-span-full md:col-span-2 lg:col-span-5 row-span-2  bg-secondary-500 dark:bg-secondary rounded-md text-txt flex flex-col justify-center items-center">
          <h3 className="font-bold text-2xl">Training</h3>
          <ul className="flex flex-wrap self-stretch justify-around items-center">
            <li className="text-center">
              <p className="font-bold text-xl">Dog</p>
              <span className="text-background text-xl font-bold">$ 20</span>
            </li>
            <li className="text-center">
              <p className="font-bold text-xl">Cat</p>
              <span className="text-background text-xl font-bold">$ 40</span>
            </li>
            <li className="text-center">
              <p className="font-bold text-xl">Equine</p>
              <span className="text-background text-xl font-bold">$ 100</span>
            </li>
          </ul>
        </div>
        <div className="col-span-3 max-sm:col-span-full sm:col-span-full lg:col-start-2 lg:col-span-6 xl:col-start-6 xl:col-span-5 md:col-span-4 row-span-3 sm:row-span-2 flex items-center justify-between gap-2 bg-secondary-500 dark:bg-secondary rounded-md text-txt p-2">
          <h3 className="font-bold text-2xl">Surgery</h3>
          <ul className="flex self-stretch justify-evenly items-center flex-wrap gap-2">
            <li className="text-center">
              <p className="font-bold text-xl">General</p>
              <span className="text-background text-xl font-bold">$ 30</span>
            </li>
            <li className="text-center">
              <p className="font-bold text-xl">Ortopedic</p>
              <span className="text-background text-xl font-bold">$ 50</span>
            </li>
            <li className="text-center">
              <p className="font-bold text-xl">Soft-Tissue</p>
              <span className="text-background text-xl font-bold">$ 80</span>
            </li>
            <li className="text-center">
              <p className="font-bold text-xl">Dental</p>
              <span className="text-background text-xl font-bold">$ 30</span>
            </li>
            <li className="text-center">
              <p className="font-bold text-xl">Emergency</p>
              <span className="text-background text-xl font-bold">$ 60</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:w-3/4">
        <div className="flex flex-col gap-4 my-6">
          <h3 className="font-bold text-primary text-2xl">Consult</h3>
          <p className="font-normal text-txt text-xl">
            At our veterinary practice, we are committed to providing the best
            medical care for your pet. best medical care for your pet. Our team
            of highly qualified veterinarians veterinarians are dedicated to
            ensuring the health and well-being of your and well-being of your
            furry friend. We perform complete physical examinations, preventive
            health evaluations, accurate diagnostics and effective effective
            treatments for a wide range of medical conditions. At whether your
            pet needs a simple routine checkup or is experiencing more serious
            health experiencing more serious health problems, we're here to
            help. help. In addition, we provide a warm and welcoming environment
            where both you and your pet feel comfortable and and your pet feel
            comfortable and welcome - trust us to care for your four-legged
            companion. to care for your four-legged companion with love and
            dedication!
          </p>
        </div>
        <div className="flex flex-col gap-4 my-6">
          <h3 className="font-bold text-primary text-2xl ">Deworming</h3>
          <p className="font-normal text-txt text-xl">
            Our deworming service is essential to ensure the continued health
            and well-being of your pet. We know how important it is to protect
            your furry friend against internal and external parasites that can
            cause a range of health problems. At our veterinary clinic, we offer
            complete and effective deworming for dogs and cats. Our team of
            expert veterinarians will advise you on the best deworming plan for
            your pet, taking into account their age, lifestyle and risk level.
            We use safe and effective products to eliminate and prevent
            infestations of intestinal worms, fleas, ticks and other common
            parasites. In addition, we provide you with information and
            recommendations on how to prevent future infestations and keep your
            pet healthy and happy. Trust us to protect your furry companion from
            parasites and give him or her a long and healthy life.
          </p>
        </div>
        <div className="flex flex-col gap-4 my-6">
          <h3 className="font-bold text-primary text-2xl ">Styling</h3>
          <p className="font-normal text-txt text-xl">
            Our veterinary stylist service offers much more than just haircuts
            for your pet. Our stylists are trained professionals who understand
            the specific needs of each coat type and breed. We work to make your
            pet look and feel their best. From a simple haircut to a full spa
            treatment, we are here to pamper your furry friend. We use high
            quality products and styling techniques that guarantee an
            exceptional and safe result for your pet. In addition to haircuts,
            we offer bathing, brushing, detangling, ear cleaning and nail
            trimming services. Our stylists can also provide coat care advice
            and recommendations to keep your pet looking his or her best between
            visits. Trust our team to provide your pet with a relaxing,
            high-quality grooming experience.
          </p>
        </div>
        <div className="flex flex-col gap-4 my-6">
          <h3 className="font-bold text-primary text-2xl ">Training</h3>
          <p className="font-normal text-txt text-xl">
            Our pet training service is designed to help you strengthen your
            bond with your furry companion and ensure proper behavior in a
            variety of situations. Our trainers are experts in animal behavior
            and use techniques based on positive reinforcement to teach your pet
            basic skills, obedience and proper manners. We adapt to the specific
            needs of each pet, whether it is a puppy that needs to learn basic
            commands or an older dog with behavioral problems. Our approach
            focuses on effective communication, setting clear boundaries and
            reinforcing desirable behaviors. In addition to training sessions at
            our facility, we offer customized in-home training programs, where
            we work together with you to address your pet's specific challenges.
            Our goal is to provide tools and techniques that will allow you to
            enjoy a harmonious and satisfying coexistence with your pet. Trust
            our team to provide you with the support and guidance you need to
            keep your pet happy, healthy and well-mannered.
          </p>
        </div>
        <div className="flex flex-col gap-4 my-6">
          <h3 className="font-bold text-primary text-2xl">Surgery</h3>
          <p className="font-normal text-txt text-xl">
            Our veterinary center specializes in a variety of veterinary
            surgeries to address the specific medical needs of your pets:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="item-services flex-wrap">
              <span className="text-primary text-2xl font-bold inline-block">
                General Surgery:
              </span>
              <p className="font-normal text-txt text-xl">
                We perform routine surgical procedures, such as spaying and
                neutering, removal of benign tumors, correction of hernias, and
                repair of lacerations.
              </p>
            </li>
            <li className="item-services flex-wrap">
              <span className="text-primary text-2xl font-bold inline-block">
                Orthopedic Surgery:
              </span>
              <p className="font-normal text-txt text-xl">
                Our orthopedic veterinarians are trained to treat
                musculoskeletal injuries and conditions, such as bone fractures,
                joint luxations, hip dysplasia and cruciate ligament injuries.
              </p>
            </li>
            <li className="item-services flex-wrap">
              <span className="text-primary text-2xl font-bold inline-block">
                Soft Tissue Surgery:
              </span>
              <p className="font-normal text-txt text-xl">
                This specialty focuses on surgical interventions on internal
                organs and non-bony structures. We perform abdominal, thoracic
                and urogenital surgeries, such as removal of masses, correction
                of bowel obstructions and repair of complex wounds.
              </p>
            </li>
            <li className="item-services flex-wrap">
              <span className="text-primary text-2xl font-bold inline-block">
                Dental Surgery:
              </span>
              <p className="font-normal text-txt text-xl">
                Our dental procedures include dental cleanings, extractions of
                damaged or infected teeth, treatment of periodontal disease and
                correction of malocclusions.
              </p>
            </li>
            <li className="item-services flex-wrap">
              <span className="text-primary text-2xl font-bold inline-block">
                Emergency Surgery:
              </span>
              <p className="font-normal text-txt text-xl">
                We are available 24 hours a day to provide emergency surgical
                care in cases of severe trauma, intestinal obstructions, gastric
                torsion, among others.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <RegisterCard />
    </main>
  );
}
