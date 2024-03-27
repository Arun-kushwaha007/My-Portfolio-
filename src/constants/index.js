import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    blender,
    bootstrap,
    c,
    cpp,
    unity,
    aj,
    
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
      id: "contact",
      title: "Contact Me",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "AR/VR Developer",
      icon: mobile,
    },
    {
      title: "Game Developer",
      icon: backend,
    },
    {
      title: "Video Editer",
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
      name: "React JS",
      icon: reactjs,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
    {
      name: "blender",
      icon: blender,
    },
    {
      name: "c",
      icon: c,
    },
    {
      name: "cpp",
      icon: cpp,
    },
    {
      name: "unity",
      icon: unity,
    },
    
  ];
  

  
  const projects = [
    {
      name: "Dog Holiday Run",
      description:
        "Introducing Dog Holiday Run | JavaScript Adventure Game [Game Highlights]: Play as a lively dog on a holiday escapade! [Explore various actions]: run, jump, roll, dive, and more!      Encounter a festive mix of enemies, each with its unique challenge.  Race against time to achieve the winning score. Dive into stunning graphics, vibrant particle effects, and joyful collision animations. [Tech Stack]: HTML, CSS, JavaScript Canvas for rendering Object-oriented design for game elements Enjoy a festive UI with real-time scoring, a cheerful timer, and holiday-themed lives indicator",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JAVASCRIPT",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Arun-kushwaha007/Dog-Hoiday-Run",
    },
    {
      name: "Aj's Endless Run",
      description:
        "AJ's Endless Run: is an endless runner game developed in Unity and C#, offering players an immersive cosmic experience. The project emphasizes intuitive controls, dynamic obstacles, and captivating visuals. With a focus on performance optimization and social integration, it stands as a testament to collaborative game development expertise.",
      tags: [
        {
          name: "UNITY",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
      ],
      image: aj,
      source_code_link: "https://github.com/Arun-kushwaha007/Endless-Runner-Game-Unity",
    },
    {
      name: "Snake Game",
      description:
        "Step back in time and experience the nostalgia of arcade gaming with this classic Snake Game built using HTML, CSS, and JavaScript. Dive into pixelated landscapes and maneuver your snake through a grid-based environment, devouring food and avoiding obstacles along the way. Whether you're a gaming enthusiast, developer, or casual player, this template offers a thrilling gaming experience that harkens back to the golden age of gaming.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JAVASCRIPT",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Arun-kushwaha007/SnakeGame",
    },
  ];
  
  export { services, technologies,  projects };