import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I offer professional web development services, creating responsive and user-friendly websites to meet your business needs.",
    href: "",
  },
  {
    num: "02",
    title: "Mobile Development",
    description:
      "I offer professional web development services, creating responsive and user-friendly websites to meet your business needs.",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX",
    description:
      "I offer professional web development services, creating responsive and user-friendly websites to meet your business needs.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "I offer professional web development services, creating responsive and user-friendly websites to meet your business needs.",
    href: "",
  },
];

const Home = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <p className="text-xl">Software Developer</p>
            <h1 className="h1 pt-2">
              Hello, I'm <br />{" "}
              <span className="text-accent">Kola Olufemi</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 pt-4">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
