import Image from "next/image";

const About = () => {
  return (
    <section className="py-32 flex justify-center xl:px-14 lg:px-10 md:px-8 px-4">
      <div className="container flex flex-col gap-28">
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl font-semibold lg:text-7xl">
            About GDG IGDTUW
          </h1>
        </div>
        <div className="gap-4 flex items-center justify-center md:flex-row flex-col">
          <Image
            width={1920}
            height={1080}
            src="/AboutIGDTUW.svg"
            alt="placeholder"
            className="size-full rounded-2xl object-cover"
          />
          <div className="flex flex-col justify-start py-10 h-fit rounded-2xl bg-muted px-10">
            <p className="text-sm text-muted-foreground"></p>
            <p className="text-lg">
              Here at GDG IGDTUW, we explore technology and use it to build
              products that brings about positive change in society. We conduct
              mentorship sessions, workshops, knowledge transfer sessions,
              hackathons, coding contests, open source programs, etc. where
              students from across the globe get to showcase their knowledge and
              develop their skillset.
              <br />
              We have helped more than 7000+ university students to expand their
              technical knowledge and skills.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl font-semibold lg:text-7xl">
            About DEVCATION &apos;25
          </h1>
        </div>
        <div className="gap-4 flex items-center justify-center md:flex-row flex-col">
          <Image
            width={1920}
            height={1080}
            src="/About.jpeg"
            alt="placeholder"
            className="size-full rounded-2xl object-cover"
          />
          <div className="flex flex-col justify-start py-10 h-fit rounded-2xl bg-muted px-10">
            <p className="text-sm text-muted-foreground"></p>
            <p className="text-lg">
            Devcation is a week-long technical festival organized by Google Developer Groups - Indira Gandhi Delhi Technical University for Women that celebrates diversity in the TechForGood Domain. During the week, we have the Devcation`25 hackathon. These events are designed to spark your creativity, encourage innovative thinking, and help you craft tech solutions that stand out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
