"use client";

import { motion } from "framer-motion";
import styles from "./Experience.module.css";

// Curated list of high-impact engineering roles, rewritten for conciseness and impact.
const experiences = [
  {
    role: "Frontend Developer",
    company: "BRIK AI",
    period: "Aug 2025 – Jan 2026",
    description: "Designed intuitive, AI-driven interfaces for automation tools. Implemented scalable, component-based frontend systems using React and TypeScript, collaborating with AI engineers to translate complex models into interactive dashboards."
  },
  {
    role: "Mobile Software Engineer",
    company: "RescueTap",
    period: "Oct 2024 – May 2025",
    description: "Engineered web and mobile functionalities for an emergency response platform using React and React Native. Enhanced platform scalability through modular architecture and reusable component systems."
  },
  {
    role: "AI Software Engineer",
    company: "AICE",
    period: "Mar 2024 – Aug 2024",
    description: "Built and deployed prompt-based automation tools integrating OpenAI APIs, LangChain, and Python backends. Shipped production-grade AI features for healthcare and workflow optimization within tight collaborative sprints."
  },
  {
    role: "Software Engineer",
    company: "RespectechHR",
    period: "Jan 2024 – Sep 2024",
    description: "Led frontend development of Respectech Academy and AgroSec platforms using React.js and Tailwind CSS. Improved cross-device responsiveness and reduced page load times by 35%."
  }
];

export default function Experience() {
  return (
    <section className={`section ${styles.experience}`} id="experience">
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Professional <span className={styles.accent}>Experience</span></h2>
          <p className={styles.subtitle}>
            A timeline of my impact engineering robust, scalable, and AI-driven applications.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={`${exp.company}-${index}`}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className={styles.timelineMeta}>
                <span className={styles.timelinePeriod}>{exp.period}</span>
              </div>
              <div className={styles.timelineContent}>
                <h3 className={styles.role}>{exp.role}</h3>
                <h4 className={styles.company}>{exp.company}</h4>
                <p className={styles.experienceDesc}>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
