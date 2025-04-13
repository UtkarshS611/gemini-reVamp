import Image from 'next/image'
import React from 'react'

const Sponsors = () => {

    const Sponsors = [
        {
          imageSrc: "/sponsors/1.jpg",
          name: "RotaRact",
          link: "https://sites.google.com/view/rcigdtuw/home"
        },
        {
          imageSrc: "/sponsors/2.jpg",
          name: "Geek Rooms",
          link: "https://www.geekroom.in/"
        },
        {
          imageSrc: "/sponsors/3.jpg",
          name: "Sprint",
          link: "https://www.sprintindia.work/about-us/"
        },
        {
          imageSrc: "/sponsors/4.png",
          name: "Interview Buddy",
          link: "https://dev.interviewbuddy.in/"
        },
        {
          imageSrc: "/sponsors/5.jpg",
          name: "CodeCrafters",
          link: "https://codecrafters.io/"
        },
        {
          imageSrc: "/sponsors/6.jpg",
          name: "Unstop",
          link: "https://unstop.com/"
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
        {Sponsors.map((items, index) => (
          <a
            href={items.link}
            key={index}
            className="text-center cursor-pointer w-full max-w-sm py-4 bg-[#9d4edd]/10 border border-[#9d4edd] rounded-md flex flex-col items-center justify-center gap-2 px-6"
          >
            <span className='font-semibold text-[#9d4edd]'>{items.name}</span>
            <Image
            src={items.imageSrc}
            width={200}
            height={50}
            alt="prize image"
            />
          </a>
        ))}
      </div>
    </section>
  )
}

export default Sponsors