"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={`container ${styles.heroContainer}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <motion.div 
            className={styles.greeting}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hello, I am
          </motion.div>
          <h1 className={styles.title}>
            Adetomiwa <span className={styles.accent}>Adejumo</span><br/>
            Software Engineer.
          </h1>
          <p className={styles.subtitle}>
            A full-stack software developer who loves building solutions and solving challenges using new technologies. 
            Focused on creating meticulous, scalable, and intuitive digital experiences.
          </p>
          <div className={styles.actions}>
            <Link href="#projects" className={styles.primaryBtn}>
              View My Work
            </Link>
            <Link href="https://github.com/Teetwothefirst" target="_blank" rel="noreferrer" className={styles.secondaryBtn}>
              Github Profile
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
