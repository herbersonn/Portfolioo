"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Atena Calc ",
    description: "Site de cálculos",
    image: "/images/projects/AtenaCalc.png",
    gitUrl: "https://github.com/herbersonn/AtenaCalc",
    previewUrl: "https://nataxpf.github.io/atena-calc/",
  },
  {
    id: 2,
    title: "Site do Anime Haikyu",
    description: "Informações e habilidades dos personagens",
    image: "/images/projects/SiteHaikyu.png",
    gitUrl: "https://github.com/herbersonn/Trabalho-final-2023",
    previewUrl: "https://pedrolima07.github.io/trabalho-html/",
  },
  {
    id: 3,
    title: "Índice de Massa Corporal",
    description: "Site para Calcular IMC",
    image: "/images/projects/imc.png",
    gitUrl: "https://github.com/herbersonn/Site-responsivo-de-IMC",
    previewUrl: "https://renandev20.github.io/IMC-Enfermagem/",
  },
  {
    id: 4,
    title: "AtenaVest",
    description: "Prototipo de APP Mobile de Estudos para Vestibulares",
    image: "/images/projects/4.png",
    gitUrl: "https://www.figma.com/proto/IFeHFXXGvSoggwIfR6Aku7/trab-final?node-id=18-58&p=f&t=LIUPgT5wiTrKxhA1-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3",
    previewUrl: "https://www.figma.com/proto/IFeHFXXGvSoggwIfR6Aku7/trab-final?node-id=18-58&p=f&t=LIUPgT5wiTrKxhA1-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A3",
  },
  {
    id: 5,
    title: "RESP",
    description: "Robotic Emotional Support Pillow",
    image: "/images/projects/5.png",
    gitUrl: "https://github.com/herbersonn/R.E.S.P",
    previewUrl: "https://github.com/herbersonn/R.E.S.P",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
