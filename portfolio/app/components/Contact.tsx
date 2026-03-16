"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "adetomiwa.adejumo@gmail.com";

  const handleCopy = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default if mailclient isn't configured
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    
    // Attempt to open the mail client as a fallback
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className={styles.label}>What&apos;s Next?</p>
          <h2 className={styles.title}>Let&apos;s build something <br/> <span className={styles.accent}>together.</span></h2>
          
          <div className={styles.links}>
            <a 
              href={`mailto:${email}`} 
              onClick={handleCopy}
              className={styles.emailBtn}
            >
              {copied ? "Email Copied!" : "Say Hello"}
            </a>
            <div className={styles.socials}>
              <a href="https://github.com/Teetwothefirst" target="_blank" rel="noreferrer" className={styles.socialLink}>Github</a>
              <a href="https://www.linkedin.com/in/adetomiwa-adejumo" target="_blank" rel="noreferrer" className={styles.socialLink}>LinkedIn</a>
              <a href="https://x.com/Teetwo__?t=VrCmDibmWlMIj8iOC5OxAg&s=09" target="_blank" rel="noreferrer" className={styles.socialLink}>Twitter</a>
            </div>
          </div>
        </motion.div>
      </div>
      <footer className={styles.footer}>
        <div className={`container ${styles.footerContainer}`}>
          <p className={styles.copyright}>© {new Date().getFullYear()} Adetomiwa Adejumo.</p>
          <p className={styles.credit}>Designed with intention.</p>
        </div>
      </footer>
    </section>
  );
}
