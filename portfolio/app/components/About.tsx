"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "HTML/CSS", "Tailwind"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB", "SQL", "Python"] },
  { category: "Tools & Other", items: ["Git", "Docker", "C", "GDScript", "Agile"] }
];

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>About <span className={styles.accent}>Me</span></h2>
          <p className={styles.description}>
            With over 2 years of experience, I bring a meticulous and innovative approach 
            to building responsive, dynamic web applications. I focus on clean code and 
            collaborative agile methodologies to deliver seamless user experiences.
          </p>
        </motion.div>

        <div className={styles.skillsGrid}>
          {skills.map((skillSet, index) => (
            <motion.div 
              key={skillSet.category}
              className={styles.skillColumn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <h3 className={styles.skillCategory}>
                <span className={styles.skillNumber}>0{index + 1}</span>
                {skillSet.category}
              </h3>
              <ul className={styles.skillList}>
                {skillSet.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
