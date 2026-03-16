import styles from "./TimeMachineToggle.module.css";

interface TimeMachineToggleProps {
  onToggle: () => void;
}

export default function TimeMachineToggle({ onToggle }: TimeMachineToggleProps) {
  return (
    <button 
      className={styles.toggleBtn}
      onClick={onToggle}
      aria-label="View Old Portfolio"
      title="Travel back to the old portfolio"
    >
      <span className={styles.icon}>⏱️</span>
      <span className={styles.text}>Time Machine</span>
    </button>
  );
}
