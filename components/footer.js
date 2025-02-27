import styles from "./footer.module.css";
import { Instagram, Twitter, Github } from "react-bootstrap-icons";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className={"container"}>
      <div className={styles.footer}>
        <p><Link href="https://www.polimi.it/"><Image src="/syllabus/polimi-logo.webp" alt="Politecnico di Milano" width={160} height={58}/></Link>
        </p>
        <p><Link href="https://www.pssd.polimi.it/">Master of Product Service System Design</Link></p>
        <p>Academic Year 2024-2025, 2nd semester</p>
      </div>
    </div>
  );
}

export default Footer;
