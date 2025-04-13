import { BookOpenCheck, Brain, Earth, Lightbulb } from "lucide-react";
import React from "react";

const Tracks = () => {
  const tracks = [
    {
      icon: <Brain />,
      name: "Healthtech",
    },
    {
      icon: <BookOpenCheck />,
      name: "Edtech",
    },
    {
      icon: <Earth />,
      name: "Sustainable Development (Open Innovation)",
    },
    {
      icon: <Lightbulb />,
      name: "Fintech",
    },
  ];

  return (
    <section className="py-20 xl:px-14 lg:px-10 md:px-8 px-4 flex flex-col items-center justify-center gap-6 md:gap-20">
      <div className="flex flex-col gap-7">
        <h1 className="text-4xl font-semibold lg:text-7xl text-center">
          Our Tracks
        </h1>
      </div>
      <div className="flex justify-center flex-wrap gap-4 w-full max-w-5xl">
        {tracks.map((items, index) => (
          <div
            key={index}
            className="text-center cursor-pointer w-full max-w-sm py-4 bg-[#9d4edd]/10 border border-[#9d4edd] rounded-md flex flex-col items-center justify-center gap-2"
          >
            <span>{items.icon}</span>
            <span>{items.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tracks;
