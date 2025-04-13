import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  interface FaqItem {
    question: string;
    answer: string;
  }
  
  interface FaqProps {
    heading?: string;
    items?: FaqItem[];
  }
  
  const Faq = ({
    heading = "Frequently asked questions",
    items = [
      {
        question: "Who can contribute?",
        answer:
          "Devcation is open to anyone with an interest in technology, innovation, and problem-solving. Participants can include students, developers, designers, entrepreneurs, and professionals from various backgrounds.",
      },
      {
        question: "Where can we reach out in case of queries?",
        answer:
          "You can reach out to us on our Discord Server with any queries. Kindly use the doubt channel for the same!",
      },
      {
        question: "Do I need to have coding experience to participate?",
        answer:
          "While coding experience is beneficial, it's not always necessary to participate in a hackathon. Many hackathons welcome participants with diverse skill sets, including design, business development, marketing, and project management. If you're a beginner you can also look at our mini events",
      },
      {
        question: "What happens after the hackathon ends?",
        answer:
          "After the hackathon concludes, top 10 teams will be invited to present their projects to judges and fellow participants during the final pitching round at IGDTUW. Winners will be announced, and prizes awarded based on the judging criteria. Date for this is 15th April, 2025.",
      },
      {
        question: "How can I stay updated on hackathon announcements and events?",
        answer:
          "Stay informed about Devcation'25 by joining our Discord Server. Know more about upcoming hackathons and events by GDG IGDTUW by joining our GDG Chapter.",
      },
    ],
  }: FaqProps) => {
    return (
      <section className="py-32 flex justify-center xl:px-14 lg:px-10 md:px-8 px-4">
        <div className="container max-w-5xl">
          <h1 className="mb-4 font-semibold md:mb-11 text-4xl md:text-5xl lg:text-7xl">
            {heading}
          </h1>
          <Accordion type="single" collapsible>
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  };
  
  export default Faq;
  