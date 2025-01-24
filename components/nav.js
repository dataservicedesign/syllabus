import styles from "./nav.module.css";
import Link from "next/link";

function Nav() {
  return (
    <div className={styles.nav}>
      <div><Link href="/">Data and Service Design</Link></div>
      <div>PSSD Design School</div>
      <div>Politecnico di Milano</div>
    </div>
  );
}

export default function Navigation() {
  return <Nav />;
}
