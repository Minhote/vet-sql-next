import { Badge } from "@/app/components/ui/badge";

export default function PricingPage() {
  return (
    <main className="container">
      <h2 className="title">Pricing</h2>
      {/* <div className="grid  grid-flow-dense auto-rows-[100px] grid-cols-[repeat(auto-fill,minmax(min(100px,100%),1fr))] place-content-center gap-5 self-stretch">
        <div className="col-span-2 flex flex-col items-center justify-center rounded-md bg-secondary-500 text-txt lg:col-span-3 dark:bg-secondary">
          <h3 className="text-2xl font-bold">Consult</h3>
          <span className="text-xl font-bold text-background">$ 10</span>
        </div>
        <div className="col-span-2  col-start-2 flex flex-col items-center justify-center rounded-md bg-secondary-500 text-txt sm:col-start-auto lg:col-span-3 dark:bg-secondary">
          <h3 className="text-2xl font-bold">Deworming</h3>
          <span className="text-xl font-bold text-background">$ 20</span>
        </div>
        <div className="col-span-2  flex flex-col items-center justify-center rounded-md bg-secondary-500 text-txt lg:col-span-3 dark:bg-secondary">
          <h3 className="text-2xl font-bold">Styling</h3>
          <span className="text-xl font-bold text-background">$ 20</span>
        </div>
        <div className="col-span-3 row-span-2 flex flex-col items-center  justify-center rounded-md bg-secondary-500 text-txt max-sm:col-span-full md:col-span-2 lg:col-span-5 dark:bg-secondary">
          <h3 className="text-2xl font-bold">Training</h3>
          <ul className="flex flex-wrap items-center justify-around self-stretch">
            <li className="text-center">
              <p className="text-xl font-bold">Dog</p>
              <span className="text-xl font-bold text-background">$ 20</span>
            </li>
            <li className="text-center">
              <p className="text-xl font-bold">Cat</p>
              <span className="text-xl font-bold text-background">$ 40</span>
            </li>
            <li className="text-center">
              <p className="text-xl font-bold">Equine</p>
              <span className="text-xl font-bold text-background">$ 100</span>
            </li>
          </ul>
        </div>
        <div className="col-span-3 row-span-3 flex items-center justify-between gap-2 rounded-md bg-secondary-500 p-2 text-txt max-sm:col-span-full sm:col-span-full sm:row-span-2 md:col-span-4 lg:col-span-6 lg:col-start-2 xl:col-span-5 xl:col-start-6 dark:bg-secondary">
          <h3 className="text-2xl font-bold">Surgery</h3>
          <ul className="flex flex-wrap items-center justify-evenly gap-2 self-stretch">
            <li className="text-center">
              <p className="text-xl font-bold">General</p>
              <span className="text-xl font-bold text-background">$ 30</span>
            </li>
            <li className="text-center">
              <p className="text-xl font-bold">Ortopedic</p>
              <span className="text-xl font-bold text-background">$ 50</span>
            </li>
            <li className="text-center">
              <p className="text-xl font-bold">Soft-Tissue</p>
              <span className="text-xl font-bold text-background">$ 80</span>
            </li>
            <li className="text-center">
              <p className="text-xl font-bold">Dental</p>
              <span className="text-xl font-bold text-background">$ 30</span>
            </li>
            <li className="text-center">
              <p className="text-xl font-bold">Emergency</p>
              <span className="text-xl font-bold text-background">$ 60</span>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="lg:w-3/4">
        <div className="my-6 flex flex-col gap-4">
          <h3 className="text-3xl font-bold text-primary">Consult</h3>
          <Badge
            variant="secondary"
            className="self-start font-bold text-primary-500 dark:text-primary-500"
          >
            $ 10
          </Badge>
          <p className="text-xl font-normal text-txt">
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
        <div className="my-6 flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-primary ">Deworming</h3>
          <Badge
            variant="secondary"
            className="self-start font-bold text-primary-500 dark:text-primary-500"
          >
            $ 20
          </Badge>
          <p className="text-xl font-normal text-txt">
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
        <div className="my-6 flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-primary ">Styling</h3>
          <Badge
            variant="secondary"
            className="self-start font-bold text-primary-500 dark:text-primary-500"
          >
            $ 20
          </Badge>
          <p className="text-xl font-normal text-txt">
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
        <div className="my-6 flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-primary ">Training</h3>
          <Badge
            variant="secondary"
            className="self-start font-bold text-primary-500 dark:text-primary-500"
          >
            $ 20 - $ 100
          </Badge>
          <p className="text-xl font-normal text-txt">
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
        <div className="my-6 flex flex-col gap-4">
          <h3 className="text-2xl font-bold text-primary">Surgery</h3>
          <p className="text-xl font-normal text-txt">
            Our veterinary center specializes in a variety of veterinary
            surgeries to address the specific medical needs of your pets:
          </p>
          <ul className="flex flex-col gap-4">
            <li className="item-services flex-wrap ">
              <span className="inline-block text-xl font-bold text-primary">
                General Surgery:
              </span>
              <Badge
                variant="secondary"
                className="self-start font-bold text-primary-500 dark:text-primary-500"
              >
                $ 30
              </Badge>
              <p className="text-xl font-normal text-txt">
                We perform routine surgical procedures, such as spaying and
                neutering, removal of benign tumors, correction of hernias, and
                repair of lacerations.
              </p>
            </li>
            <li className="item-services flex-wrap">
              <span className="inline-block text-xl font-bold text-primary">
                Orthopedic Surgery:
              </span>
              <Badge
                variant="secondary"
                className="self-start font-bold text-primary-500 dark:text-primary-500"
              >
                $ 50
              </Badge>
              <p className="text-xl font-normal text-txt">
                Our orthopedic veterinarians are trained to treat
                musculoskeletal injuries and conditions, such as bone fractures,
                joint luxations, hip dysplasia and cruciate ligament injuries.
              </p>
            </li>
            <li className="item-services flex-wrap">
              <span className="inline-block text-xl font-bold text-primary">
                Soft Tissue Surgery:
              </span>
              <Badge
                variant="secondary"
                className="self-start font-bold text-primary-500 dark:text-primary-500"
              >
                $ 80
              </Badge>
              <p className="text-xl font-normal text-txt">
                This specialty focuses on surgical interventions on internal
                organs and non-bony structures. We perform abdominal, thoracic
                and urogenital surgeries, such as removal of masses, correction
                of bowel obstructions and repair of complex wounds.
              </p>
            </li>
            <li className="item-services flex-wrap">
              <span className="inline-block text-xl font-bold text-primary">
                Dental Surgery:
              </span>
              <Badge
                variant="secondary"
                className="self-start font-bold text-primary-500 dark:text-primary-500"
              >
                $ 30
              </Badge>
              <p className="text-xl font-normal text-txt">
                Our dental procedures include dental cleanings, extractions of
                damaged or infected teeth, treatment of periodontal disease and
                correction of malocclusions.
              </p>
            </li>
            <li className="item-services flex-wrap">
              <span className="inline-block text-xl font-bold text-primary">
                Emergency Surgery:
              </span>
              <Badge
                variant="secondary"
                className="self-start font-bold text-primary-500 dark:text-primary-500"
              >
                $ 60
              </Badge>
              <p className="text-xl font-normal text-txt">
                We are available 24 hours a day to provide emergency surgical
                care in cases of severe trauma, intestinal obstructions, gastric
                torsion, among others.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
