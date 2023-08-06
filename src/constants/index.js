import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    task,
    weather,
    invoice,
    css,
    cse,
    cpp,
    python,
    java,
    aws,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solving",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "CPP",
      icon: cpp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
  
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "B.Tech - CSE",
      company_name: "Galgotias University",
      icon: cse,
      iconBg: "#383E56",
      date: "March 2021 - April 2025",
      points: [
        "Participated in various hackathons like hackerfest, Nasa Space apps challenge.",
        "Completed Projects under the guidance of teachers in both software & hardware. ",
        "Ideathon - Secured top 6 position as a team leader.",
        "Training internships, provided by eduskills under AICTE",
      ],
    },
    {
      title: "AWS Cloud Virtual training ",
      company_name: "AWS academy",
      icon: aws,
      iconBg: "#E6DEDD",
      date: "March 2022 - May 2022",
      points: [
        "Intermediate Course - AWS Academy Cloud Architecting",
        "Foundation Course - AWS Academy Cloud Foundations",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Invoice Box",
      description:
        "Invoice Box is a web application that allows users to create, manage, and track invoices, It is build on the Mern stack.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node/express",
          color: "pink-text-gradient",
        },
      ],
      image: invoice,
      source_code_link: "https://invoice-box.vercel.app/",
    },
    {
      name: "Weather Info",
      description:
        "A react based application that displays the weather forcast for different cities across the world using different set of api's",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://agarwalayush9.github.io/WeatherInfo/",
    },
    {
      name: "Task List",
      description:
        "React based web app to make a list of uncompleted tasks with some added functionality",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "style",
          color: "green-text-gradient",
        },
        {
          name: "darkMode",
          color: "pink-text-gradient",
        },
      ],
      image: task,
      source_code_link: "https://agarwalayush9.github.io/TaskList/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };