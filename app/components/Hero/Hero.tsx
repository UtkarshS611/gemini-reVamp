import React from "react";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-[80vh] relative flex flex-col py-32 gap-3 items-center justify-center">
      <div className="z-[-1] absolute inset-0">
        <Image
        width={1920}
        height={1080}
          src="/backgrounds/bg-1.svg"
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
        <span
          className={cn(
            "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
          )}
          style={{
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "destination-out",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "subtract",
            WebkitClipPath: "padding-box",
          }}
        />
        <AnimatedGradientText className="text-sm font-medium">
          Welcome
        </AnimatedGradientText>
      </div>
      <div className="flex flex-col gap-1 text-6xl font-bold items-center">
        <span className="hero-text uppercase">Devcation</span>
        <span className="hero-text">2025</span>
      </div>
      <div>
        <button className="bg-[#9d4edd] py-2 px-16 font-semibold text-white rounded-md hover:px-18 hover:rounded-xl transition-all duration-200">
          Register
        </button>
      </div>
    </section>
  );
};

export default Hero;
