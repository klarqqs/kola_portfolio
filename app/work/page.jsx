"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "mobile",
    title: "OneBank",
    description:
      "OneBank is a 100% Digital Bank! In here, you can open an instant account, send and receive money, pay bills, buy airtime &amp; data, invest and get a loan all in one place.",
    stack: [
      {
        name: "Flutter",
      },
      {
        name: "Dart",
      },
      {
        name: "Firebase",
      },
    ],
    image: "/assets/a43.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "mobile",
    title: "Switch by Sterling",
    description:
      "Switch is swift and can open accounts in Naira, Dollars, pounds and Euro. You can even request for a virtual card without visiting a banking hall! Cheaper transfers are guaranteed too.",
    stack: [
      {
        name: "Flutter",
      },
      {
        name: "Dart",
      },
    ],
    image: "/assets/a44.png",
    live: "",
    github: "",
  },
  // {
  //   num: "03",
  //   category: "mobile",
  //   title: "Doubble",
  //   description:
  //     "Doubble allows you save and invest at your convenience with return of up to 60% over a period. You can save or invest in Naira and USD.",
  //   stack: [
  //     {
  //       name: "Flutter",
  //     },
  //     {
  //       name: "Dart",
  //     },
  //   ],
  //   image: "/assets/a46.png",
  //   live: "",
  //   github: "",
  // },
  {
    num: "03",
    category: "mobile",
    title: "BitBust",
    description:
      "Bitbust is designed to bridge the gap between cryptocurrency, gift cards, and local fiat currencies. It empowers individuals to exchange, transfer, and manage their funds.",
    stack: [
      {
        name: "Flutter",
      },
      {
        name: "Dart",
      },
    ],
    image: "/assets/a41.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "mobile",
    title: "EasySpend",
    description:
      "EasySpend helps you streamline your online shopping experience by generating virtual cards for secure transactions. Say goodbye to worries about fraudulent activities charges.",
    stack: [
      {
        name: "Flutter",
      },
      {
        name: "Dart",
      },
    ],
    image: "/assets/a42.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "mobile",
    title: "The Alternative Bank",
    description:
      "A whole new experience to the Interest free banking space. AltBank was built with features and benefits that empower users to grow wealth right from their banking app.",
    stack: [
      {
        name: "Flutter",
      },
      {
        name: "Dart",
      },
    ],
    image: "/assets/a45.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* <p className="text-xl"> {project.category} project</p> */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
                {/* - {project.category} project */}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-[14px]">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover rounded-[14px]"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
