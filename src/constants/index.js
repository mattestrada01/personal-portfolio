import {
    sce,
    sjsu,
    hornet,
    game,
    javascript,
    html,
    css,
    reactjs,
    discord,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    bot,
    swanky,
    atcg,
    haunted,
    matt,
    transit,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Video Game Programmer",
      icon: game,
    },
    {
      title: "Bot/Website Designer",
      icon: discord,
    },
    {
      title: "React Native Developer",
      icon: reactjs,
    },
  ];
  
  const technologies = [
   
  ];
  
  const experiences = [
    {
      title: "Development Team Officer",
      company_name: "SJSU Software & Computer Engineering Society",
      icon: sce,
      iconBg: "#383E56",
      date: "March 2024 - Present",
      points: [
        "Collaborating with fellow development team members to build diverse full-stack projects.",
        "Refining team communication and leadership skills by working in scrum-style management.",
        "Developing file-sharing functionality on the SCE website and improving an SJSU parking website using Python.",
      ],
    },
    {
      title: "Software Engineering Intern	",
      company_name: "San Jose State University",
      icon: sjsu,
      iconBg: "#383E56",
      date: "June 2024 - August 2024",
      points: [
        "Forged a data pipeline containerized in Docker utilizing Python’s FastAPI for requests to the 511 SF Bay’s Portal.",
        "Enabled mobile users to call the 511 phone number with a preconfigured extension for transit predictions.",
        "Built a discord bot managing SJSU Discord server's study groups with Discord.js and the ytdl-core Node.js library.",
      ],
    },
    {
      title: "Calculus/Python Tutor	",
      company_name: "Fullerton College Hornet’s Tutoring",
      icon: hornet,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Facilitated student support in the classroom and organized effective study sessions.",
        "Assisted students in comprehending complex concepts and algorithms within Java and Python college courses.",
        "Collaborated with fellow tutors to develop supplementary materials for enhanced learning experiences/sessions.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Haunted Heights",
      description:
        "2-Dimensional Platformer Game designed with RGB pixel manipulation.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "oop",
          color: "green-text-gradient",
        },
      ],
      image: haunted,
      source_code_link: "https://github.com/mattestrada01/Haunted-Heights",
    },
    {
      name: "Swanky Home Services",
      description:
        "Fully responsive business website (desktop/mobile) that utilizes 3rd party APIs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: swanky,
      source_code_link: "https://swankyhomeservices.com/",
    },
    {
      name: "Apostleland TCG",
      description:
        "Full-stack database website that allows users to view, search, and filter trading cards.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: atcg,
      source_code_link: "https://github.com/EthanWen11/ATCG-Database-Project",
    },
    {
      name: "SCE Discord Bot",
      description:
        "Discord bot managing SJSU server's automatically and offers many commands.",
      tags: [
        {
          name: "discordjs",
          color: "blue-text-gradient",
        },
        {
          name: "docker",
          color: "green-text-gradient",
        },
        {
          name: "discordAPI",
          color: "pink-text-gradient",
        },
      ],
      image: bot,
      source_code_link: "https://github.com/SCE-Development/SCE-discord-bot",
    },
    {
      name: "SCE Transit",
      description:
        "Public transit website that delivers accurate and prompt stop times.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "fastAPI",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: transit,
      source_code_link: "https://sce.sjsu.edu/transit/#10th-and-taylor",
    },
    {
      name: "Personal Portfolio",
      description:
        "Personal portfolio website showcasing my projects and skills with a user-friendly design.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: matt,
      source_code_link: "https://github.com/mattestrada01/personal-portfolio",
    },
  ];
  
  export { services, technologies, experiences, projects };
  