import Link from "next/link";
import styles from "./Navbar.module.css";
import TimeMachineToggle from "./TimeMachineToggle";

interface NavbarProps {
  onTimeMachineClick: () => void;
}

export default function Navbar({ onTimeMachineClick }: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          ADETOMIWA.
        </Link>
        <div className={styles.navRight}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="#about" className={styles.link}>
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className={styles.link}>
                Works
              </Link>
            </li>
            <li>
              <Link href="#experience" className={styles.link}>
                Experience
              </Link>
            </li>
          </ul>
          <TimeMachineToggle onToggle={onTimeMachineClick} />
          <Link href="#contact" className={styles.contactBtn}>
            Say Hi
          </Link>
        </div>
      </div>
    </nav>
  );
}
