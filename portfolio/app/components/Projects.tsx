"use client";

import { motion } from "framer-motion";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Responsive Portfolio",
    description: "A dynamic portfolio website highlighting key projects and core skills.",
    link: "https://github.com/matt-arofin/portfolio",
    year: "2023"
  },
  {
    title: "Fashion Line Website",
    description: "An elegant e-commerce front-end interface built for a modern clothing brand.",
    link: "https://github.com/Teetwothefirst/Younass",
    year: "2024"
  },
  {
    title: "Founder's Friday",
    description: "A complete responsive clone of the Founder's Friday community platform.",
    link: "https://github.com/Teetwothefirst/foundersFriday",
    year: "2024"
  }
];

export default function Projects() {
  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Selected <span className={styles.accent}>Works</span>
          </h2>
          <p className={styles.subtitle}>
            A curated selection of my recent projects. Demonstrating meticulous architecture, clean code, and solid problem solving.
          </p>
        </motion.div>

        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <motion.a 
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={project.title}
              className={styles.projectItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>
              </div>
              <div className={styles.projectMeta}>
                <span className={styles.projectYear}>{project.year}</span>
                <span className={styles.arrowIcon}>↗</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
