import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    fss,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    unity,
    starbucks,
    tesla,
    firesparx,
    freebalance,
    fc,
    ww,
    solidity,
    mysql,
    ai,
    python,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre Mi",
    },
    {
      id: "work",
      title: "Experiencia",
    },
    {
      id: "contact",
      title: "Contactame",
    },
  ];
  
  const services = [
    {
      title: "Desarrollador Web",
      icon: web,
    },
    {
      title: "Desarrollador React Native",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Creador de Contenido (Figma, Adobe I.)",
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
      name: "TypeScript",
      icon: typescript,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "MYSQL",
      icon: mysql,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Adobe Illustrator",
      icon: ai,
    },
    {
      name: "Solidity",
      icon: solidity,
    },
    {
      name: "Unity",
      icon: unity,
    },
  ];
  
  const experiences = [
    {
      title: "Practicas FreeBalance   ",
      company_name: "FreeBalance ",
      icon: freebalance,
      iconBg: "white",
      date: "Julio 2018 - Agosto 2018",
      points: [
        "Encargado del mantenimiento del sistema de gestión de contenido (drupal)",
        "Encargado del mantenimiento de los servidores de la empresa",
      ],
    },
    {
      title: "Encargado de IT",
      company_name: "FC Ingenieros & Arquitectos",
      icon: fc,
      iconBg: "black",
      date: "Jul 2022-Oct 2022",
      points: [
        "IT general en la empresa.",
        "Manejo de react y querys SQL",
        "Manejo de sistemas ERP",
      ],
    },
    {
      title: "Internship",
      company_name: "WOT Dev",
      icon: ww,
      iconBg: "white",
      date: "Mar 2023-Abr 2023",
      points: [
        "Desarrollo en react native para moviles.",
        "Creación de una app de streaming móvil",
      ],
    },
    {
      title: "Web Developer FreeLancer",
      company_name: "FireSparx",
      icon: firesparx,
      iconBg: "black",
      date: "Abr 2023 - May 2023",
      points: [
        "Diseño de la pagina web , UI / UX",
        "Desarrollo de una pagina web para una empresa de Anti-Incendios",
        "Manejo del Servidor, configuracion del C-Panel, dominio, DNS, etc.",
      ],
    },
  ];
  
  
  
  const projects = [
    {
      name: "FireSparx WebPage",
      description:
        "Pagina web que permite al usuario conocer, navegar y contacar los servicios de FireSparx.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "UI/UX",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: fss,
      source_code_link: "https://github.com/",
      live_link: "https://firesparx.com.au/",
    },
  ];
  
  export { services, technologies, experiences, projects };
  