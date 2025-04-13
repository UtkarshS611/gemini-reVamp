import Image from "next/image";

interface MenuItem {
    title: string;
    links: {
      text: string;
      url: string;
    }[];
  }
  
  interface FooterProps {
    logo?: {
      url: string;
      src: string;
      alt: string;
      title: string;
    };
    tagline?: string;
    menuItems?: MenuItem[];
    copyright?: string;
    bottomLinks?: {
      text: string;
      url: string;
    }[];
  }
  
  const Footer = ({
    logo = {
      src: "#",
      alt: "blocks for shadcn/ui",
      title: "Shadcnblocks.com",
      url: "#",
    },
    menuItems = [
      {
        title: "Product",
        links: [
          { text: "Overview", url: "#" },
          { text: "Pricing", url: "#" },
          { text: "Marketplace", url: "#" },
          { text: "Features", url: "#" },
          { text: "Integrations", url: "#" },
          { text: "Pricing", url: "#" },
        ],
      },
      {
        title: "Company",
        links: [
          { text: "About", url: "#" },
          { text: "Team", url: "#" },
          { text: "Blog", url: "#" },
          { text: "Careers", url: "#" },
          { text: "Contact", url: "#" },
          { text: "Privacy", url: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { text: "Help", url: "#" },
          { text: "Sales", url: "#" },
          { text: "Advertise", url: "#" },
        ],
      },
      {
        title: "Social",
        links: [
          { text: "Twitter", url: "#" },
          { text: "Instagram", url: "#" },
          { text: "LinkedIn", url: "#" },
        ],
      },
    ],
    copyright = "©2025 Devcation. All rights reserved.",
    bottomLinks = [
      { text: "Terms and Conditions", url: "#" },
      { text: "Privacy Policy", url: "#" },
    ],
  }: FooterProps) => {
    return (
      <section className="py-32 border-t xl:px-14 lg:px-10 md:px-8 px-4 flex justify-center">
        <div className="w-full">
          <footer>
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
              <div className="col-span-2 ">
                  <a href="#">
                    <Image
                    width={350}
                    height={100}
                      src={"/logo.png"}
                      alt={logo.alt}
                      title={logo.title}
                    />
                  </a>
              </div>
              {menuItems.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.url}>{link.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
              <p>{copyright}</p>
              <ul className="flex gap-4">
                {bottomLinks.map((link, linkIdx) => (
                  <li key={linkIdx} className="underline hover:text-primary">
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </footer>
        </div>
      </section>
    );
  };
  
  export default Footer;
  