"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./TimeMachineOverlay.module.css";

interface TimeMachineOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TimeMachineOverlay({ isOpen, onClose }: TimeMachineOverlayProps) {
  const [isMounted, setIsMounted] = useState(false);
  const oldPortfolioUrl = "https://live-cv-mmmc.vercel.app/"; 

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay}
          initial={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
          animate={{ clipPath: "circle(150% at 50% 50%)", opacity: 1 }}
          exit={{ clipPath: "circle(0% at 50% 50%)", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // fluid custom easing
        >
          <div className={styles.controls}>
            <div className={styles.status}>
              <span className={styles.pulse}></span>
              Viewing Portfoli v1.0
            </div>
            <button onClick={onClose} className={styles.closeBtn}>
              Back to Present ↗
            </button>
          </div>
          
          <iframe 
            src={oldPortfolioUrl} 
            className={styles.iframe}
            title="Archived Portfolio"
            loading="lazy"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
