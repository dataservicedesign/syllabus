import styles from "./footer.module.css";
import { Instagram, Twitter, Github } from "react-bootstrap-icons";
import Image from "next/image";

function Footer() {
  return (
    <div className={"container"}>
      <div className={styles.footer}>
        <p><Image src="/syllabus/polimi-logo.webp" alt="Politecnico di Milano" width={160} height={58}/>
        </p>
        <p>Master of Product Service System Design</p>
        <p>Academic Year 2024-2025, 2nd semester</p>
      </div>
    </div>
  );
}

export default Footer;
