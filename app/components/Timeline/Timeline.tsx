import { Button } from "@/components/ui/button";

interface Feature {
  title: string;
  date: string;
  description: string;
}

interface TimelineProps {
  heading?: string;
  description?: string;
  features?: Feature[];
}

const Timeline = ({
  heading = "Timeline",
  description = "Our journey with the event",
  features = [
    {
      title: "Opening Ceremony & Registration 🎉",
      description:
        "Submission for all Mini Events and the Registration for the Hackathon Starts",
      date: "4th April, 2025",
    },
    {
      title: "Hacking Period Starts! 🔒",
      description: "Get ready to code, create, and innovate!",
      date: "8th April, 2025",
    },
    {
      title: " Hacking Period Ends ⏳",
      description:
        "Make sure to wrap up your projects and prepare for submission.",
      date: "12th April, 2025",
    },
    {
      title: "Mentorship Round Starts 👨‍🏫",
      description:
        "Providing mentorship and feedback for every submitted project.",
      date: "13th April, 2025",
    },
    {
      title: "Final pitching and closing ceremony. 🏆",
      description: "Don`t miss out on this memorable event!",
      date: "15th April, 2025",
    },
  ],
}: TimelineProps) => {
  return (
    <section className="py-32 xl:px-14 lg:px-10 md:px-8 px-4 flex justify-center">
      <div className="container max-w-6xl">
        <div className="relative grid gap-16 md:grid-cols-2">
          <div className="top-40 h-fit md:sticky">
            <h2 className="mt-4 mb-6 text-4xl font-semibold md:text-5xl">
              {heading}
            </h2>
            <p className="font-medium text-muted-foreground md:text-xl">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-12 md:gap-20">
            {features.map((feature, index) => (
              <div key={index} className="rounded-xl border border-[#9d4edd] p-2">
                <div className="p-6">
                  <h3 className="mb-1 text-2xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
