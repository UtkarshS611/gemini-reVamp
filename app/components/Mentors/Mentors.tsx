import { Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";

const Mentors = () => {
  const Mentors = [
    {
      imageSrc: "/judges/Kartik.jpeg",
      name: "Kartik Mathur",
      link: "https://www.linkedin.com/in/kartik-mathur/",
    },
    {
      imageSrc: "/judges/vani.jpeg",
      name: "Vani Chitkara",
      link: "https://www.linkedin.com/in/vani-chitkara/",
    },
    {
      imageSrc: "/judges/aarnav.jpg",
      name: "Aarnav Jindal",
      link: "https://www.linkedin.com/in/aarnavjindal/",
    },
  ];

  return (
    <section className="py-20 xl:px-14 lg:px-10 md:px-8 px-4 flex flex-col items-center justify-center gap-6 md:gap-20">
      <div className="flex flex-col gap-7">
        <h1 className="text-4xl font-semibold lg:text-7xl text-center">
          Our Mentors
        </h1>
      </div>
      <div className="flex justify-center flex-wrap gap-4 w-full max-w-5xl">
        {Mentors.map((items, index) => (
          <div
            key={index}
            className="text-center cursor-pointer w-full max-w-2xs py-4 bg-[#9d4edd]/10 border border-[#9d4edd] rounded-md flex flex-col items-center justify-center gap-2"
          >
            <Image
              src={items.imageSrc}
              alt={items.name}
              width={200}
              height={200}
              className="rounded-full w-20 h-20 object-cover"
            />
            <div className="flex items-center gap-2">
              <span>{items.name}</span>
              <a href={items.link} className="bg-blue-500/10 p-2 rounded-md"><Linkedin className="text-blue-500" size={20} /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mentors;
