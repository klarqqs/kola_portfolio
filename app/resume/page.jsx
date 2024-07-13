"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "Experienced Software Developer with 6 years of expertise, possessing strong soft skills such as positive and well-organized attributes along with excellent written and verbal communication capabilities. I have demonstrated the ability to work autonomously, showing initiative in problem-solving, issue identification, and proposing effective solutions or consulting relevant resources.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Kola Olufemi",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 813 120 8415",
    },
    {
      fieldName: "Experience",
      fieldValue: "6+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "kolaolufemi9",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigeria",
    },
    {
      fieldName: "Email",
      fieldValue: "kolaolufemi9@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish",
    },
  ],
};

const experience = {
  icon: "",
  title: "My experience",
  description:
    "Lists previous job positions, the companies I have worked for, the duration of each role, and my key responsibilities.",
  items: [
    {
      company: "ARM HoldCo",
      position: "Frontend (Web) Developer",
      duration: "Jul 2024 - Present",
    },
    {
      company: "Sterling Bank Plc",
      position: "Frontend (Mobile) Developer",
      duration: "Dec 2021 - Present",
    },
    {
      company: "Andela",
      position: "Software Developer (Talent Network)",
      duration: "Jan 2024 - Present",
    },
    {
      company: "Enki Connect",
      position: "Frontend (Mobile) Developer",
      duration: "Jul 2023 - Oct 2023",
    },
    {
      company: "Lekota Labs",
      position: "Frontend (Mobile) Developer",
      duration: "Mar 2023 - Jun 2023",
    },
    {
      company: "Semicolon",
      position: "Software Developer",
      duration: "Jan 2020 - Mar 2022",
    },
  ],
};

const education = {
  icon: "",
  title: "My education",
  description:
    "Lists the academic institutions I have attended, the degrees or certifications earned, the duration of each program",
  items: [
    {
      institution: "University of the People",
      degree: "B.S. Computer Science",
      duration: "2021 - 2025",
    },
    {
      institution: "Henley Business School",
      degree: "Business Administration",
      duration: "Jan 2020 - Jan 2021",
    },
    {
      institution: "LinkedIn",
      degree: "Microservices: Design Patterns",
      duration: "Issued Feb 2024",
    },
    {
      institution: "LinkedIn",
      degree: "SQL: Data Reporting and Analysis",
      duration: "Issued Feb 2024",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Lists the abilities and expertise I have acquired. This section highlights my strengths and the value I can bring to potential employers.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 5",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiDart />,
      name: "dart",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiFlutter />,
      name: "flutter",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiFirebase />,
      name: "firebase",
    },
    {
      icon: <SiSupabase />,
      name: "supabase",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto pt-12">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about"> About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left pt-2">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-full">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left pt-2">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-full">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left pt-2">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left pt-2">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
