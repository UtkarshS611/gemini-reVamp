import { Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";

const Mentors = () => {
  const Mentors = [
    {
      imageSrc: "/mentors/radhika.jpeg",
      name: "Radhika Bansal",
      link: "https://www.linkedin.com/in/radhika403/",
    },
    {
      imageSrc: "/mentors/sanidhya.jpeg",
      name: "Sanidhya Goel",
      link: "https://www.linkedin.com/in/sanidhyagoel18/",
    },
    {
      imageSrc: "/mentors/tejaswi.jpg",
      name: "Tejaswi Tyagi",
      link: "https://www.linkedin.com/in/tejaswi-tyagi/",
    },
    {
      imageSrc: "/mentors/akanksha.jpg",
      name: "Akanksha Jha",
      link: "https://www.linkedin.com/in/akanksha-jha-8609a422a/",
    },
    {
      imageSrc: "/mentors/vikranth.jpg",
      name: "Vikranth Udandarao",
      link: "https://www.linkedin.com/in/vikranth-udandarao/",
    },
    {
      imageSrc: "/mentors/rudra.jpg",
      name: "Rudra Pratap Dash",
      link: "https://www.linkedin.com/in/rudra-pratap-dash-b2ab16267/",
    },
    {
      imageSrc: "/mentors/aishvi.png",
      name: "Aishvi Guleria",
      link: "https://www.linkedin.com/in/aishvi-guleria-09a04222b/",
    },
    {
      imageSrc: "/mentors/pratham.jpeg",
      name: "Pratham Batra",
      link: "https://www.linkedin.com/in/pratham1908/",
    },
    {
      imageSrc: "/mentors/teeksha.jpeg",
      name: "Teeksha Harish",
      link: "https://www.linkedin.com/in/teeksha-harish-5895a0234/",
    },
    {
      imageSrc: "/mentors/dhruv.jpg",
      name: "Dhruv Bakshi",
      link: "https://www.linkedin.com/in/dhruvbakshiwork/",
    },
    {
      imageSrc: "/mentors/suhani.jpeg",
      name: "Suhani Nagpal",
      link: "https://www.linkedin.com/in/suhani-nagpal072/",
    },
    {
      imageSrc: "/mentors/tanmay.jpg",
      name: "Tanmay Arora",
      link: "https://www.linkedin.com/in/tanmaycode1/",
    },
    {
      imageSrc: "/mentors/aditya.png",
      name: "Aditya Girdhar",
      link: "https://www.linkedin.com/in/adityagirdhar/",
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
              <a target="_blank" href={items.link} className="bg-blue-500/10 p-2 rounded-md">
                <Linkedin className="text-blue-500" size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mentors;
