import styles from "./footer.module.css";
import { Instagram, Twitter, Github } from "react-bootstrap-icons";

function Footer() {
  return (
    <div className={"container"}>
      <div className={styles.footer}>
        <p><b>School of Design</b></p>
        <p>Master of Product Service System Design</p>
        <p>Academic Year 2024-2025, 2nd semester</p>
      </div>
    </div>
  );
}

export default Footer;
