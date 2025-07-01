import styles from "./style.module.css";

interface BackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

function Background({ className, children }: BackgroundProps) {
  // Ensure the background doesn't interfere with click

  return (
    <div className={`${styles.container} ${className || ""}`}>
      <div className={styles.subContainer} />
      <div className={styles.contentWrapper}>{children}</div>
    </div>
  );
}

export default Background;
