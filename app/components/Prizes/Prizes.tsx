import Image from "next/image";
import React from "react";

const Prizes = () => {
  const prizes = [
    {
      name: "Hack & Solve Winners",
      description: "Cash Prize with swag kits, medals, certificates, social media shoutouts, Interview Buddy Mock Interviews, Codecrafter Membership, Unstop Coupons."
    },
    {
      name: "Mini Event Winners",
      description: "Goodies, certificates, social media shoutouts, unstop coupons."
    },
    {
      name: "All Finalists",
      description: "Exciting goodies, certificates, unstop coupons"
    },
    {
      name: "All Participants",
      description: "Certificates and 50% unstop coupons and exclusive discount vouchers from IB for all."
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
        {prizes.map((items, index) => (
          <div
            key={index}
            className="text-center cursor-pointer w-full max-w-sm py-4 bg-[#9d4edd]/10 border border-[#9d4edd] rounded-md flex flex-col items-center justify-center gap-2 px-6"
          >
            <Image
            src={"/prize.png"}
            width={50}
            height={50}
            alt="prize image"
            />
            <span className="text-[#9d4edd] font-semibold">{items.name}</span>
            <span>{items.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Prizes;
