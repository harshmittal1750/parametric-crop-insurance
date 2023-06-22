import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <header className={styles.header_container}></header>

      <div className={styles.footer}></div>
    </div>
  );
}
