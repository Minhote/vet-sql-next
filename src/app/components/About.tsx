import GridGallery from "./GridGallery";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function About() {
  return (
    <>
      <h2 className="title">About</h2>
      <GridGallery />
      <Accordion type="single" collapsible className="min-w-96">
        <AccordionItem value="item-1">
          <AccordionTrigger>Years of Experience</AccordionTrigger>
          <AccordionContent>
            More than 20 years guarantee our work
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>All sanitary registrations</AccordionTrigger>
          <AccordionContent>
            We comply with national and international standards for the
            confidence of our patients and their owners.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Awardees and certificates</AccordionTrigger>
          <AccordionContent>
            We were able to achieve the achievement of &quot;better animal
            treatment&quot; registered under a major international regulator.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Mastering a wide range of species and breeds
          </AccordionTrigger>
          <AccordionContent>
            Over the years we have perfected the proper care and treatment for
            the care of:
            <ul>
              <li>Equines</li>
              <li>Birds</li>
              <li>Dogs</li>
              <li>Felines</li>
              <li>Rodents</li>
              <li>Livestock</li>
              <li>Even reptiles</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
