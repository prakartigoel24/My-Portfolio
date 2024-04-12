import {
    microsoft,
    its,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    expressjs,
    mongodb,
    git,
    cpp,
    python,
  } from "./assets";

 const navLinks = [
    {
      id: "home",
      title: "Home",
      path: "/",
    },
    {
      id: "about",
      title: "About",
      path:  "/about",
    },
    {
      id: "portfolio",
      title: "Portfolio",
      path:  "/portfolio",
    },
    {
        id: "contact",
        title: "Contact",
        path:  "/contact",
      },
  ];
  
  const skills = [
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
      name: "TypeScript",
      icon: typescript,
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
      name: "Express JS",
      icon: expressjs,
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
        name: "C++",
        icon: cpp,
    },
    {
        name: "Python",
        icon: python,
    }
  ];
  
  const education_experience = [
    {
      title: "Computer Science Engineering",
      company_name: "I.T.S Engineering College",
      icon: its,
      iconBg: "",
      date: "August 2020 - September 2024",
      points: [
        "Eagerly learning the fundamentals of programming languages, algorithms, and collaboration.",
        "Actively developing my problem-solving, critical thinking, and communication skills through coursework and group projects.",
        "Recently led a team project to develop a web app for social networking and collaboratiob among peers in college."
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Microsoft",
      icon: microsoft,
      iconBg: "",
      date: "April 2023 - June 2023",
      points: [
        "Implemented a highly requested location-based media analytics feature for Microsoft Stream’s analytics plugin, providing content creators with valuable insights about their videos.",
        "Designed and integrated the front end using React.js, Typescript, and the Highcharts library.",
        "Utilized C# and .NET to create a robust tree-based model for storing and managing location-based video viewership data.",
        "Created comprehensive test cases using NUnit and Jest to ensure the feature’s reliability and also tested the APIs using Postman.",
        "Contributed to various components of signal aggregation pipeline and also different phases of signal processing such as deserialization, execution and serialization of data to update country-specific view counts in our model as per media player’s signal.",
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
      name: "Symphony",
      description:
        "Symphony is a versatile platform for music lovers to enjoy their favorite tunes and explore new ones. Users can discover top songs, artists, and delve into music of different genres. Symphony keeps users them up-to-date with the most popular tracks in their community as well.",
      tags: [
        {
          name: "reactjs",
          color: "blue",
        },
        {
          name: "redux",
          color: "purple",
        },
        {
          name: "tailwind",
          color: "pink",
        },
      ],
      image: "/images/cyber-1.jpeg",
      source_code_link: "https://github.com/prakartigoel24/Symphony",
    },
    {
      name: "CryptX",
      description:
        "CryptX is a comprehensive web application designed to provide users with detailed information about various cryptocurrencies and exchanges. It features an intuitive interface that shows a variety of coin details, including current price, historical data, market cap, and more. The app also provides information about various cryptocurrency exchanges, enabling users to compare and evaluate their options.",
      tags: [
        {
          name: "reactjs",
          color: "crimson",
        },
        {
          name: "api",
          color: "royalblue",
        },
        {
          name: "tailwind",
          color: "pink",
        },
      ],
      image: "/images/cyber-2.jpeg",
      source_code_link: "https://github.com/prakartigoel24/CryptX",
    },
    {
      name: "Handwritten digit recognizer",
      description:
        "A handwritten digit recognizer which uses a Convolutional Neural Network model trained on the popular MNIST dataset to recognize and classify the digits being drawn on the game window that opens when you run the project.",
      tags: [
        {
          name: "python",
          color: "yellow",
        },
        {
            name :"opencv",
            color:"red",
        },
        {
            name : "keras",
            color:"purple",
        },
        {
            name : "numpy",
            color: "aqua",
        }
      ],
      image: "/images/cyber-3.jpeg",
      source_code_link: "https://github.com/prakartigoel24/Handwritten-Digit-Recognition-Project",
    },
    {
      name: "Crime Assist - Face Recognition",
      description:
        "A Web based App integrated with the Facial-Recognition Technology. This App focuses on storing, manipulating and searching Convict Records in the Database with the help of Face Recognition to identify and get the details of convicts.",
      tags: [
        {
          name: "python",
          color: "yellow",
        },
        {
            name: "flask",
            color: "lightblue",
        },
        {
            name :"opencv",
            color:"red",
        }
      ],
      image: "/images/cyber-4.jpeg",
      source_code_link: "https://github.com/prakartigoel24/FaceRecognitionProject-CrimeAssist",
    },
    {
      name: "Merlin - Voice Assistant",
      description:
        "A voice assistant for everyday tasks which can be done by using voice commands only . This has a specific set of tasks which the voice assistant can perform , with option of upgradation in future to add more tasks.",
      tags: [
        {
          name: "python",
          color: "yellow",
        },
      ],
      image: "/images/merlin.jpeg",
      source_code_link: "https://github.com/prakartigoel24/Voice-Assistant-Project",
    },
    
  ];
  
  export {navLinks, skills, education_experience, testimonials, projects };