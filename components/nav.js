import styles from "./nav.module.css";
import Link from "next/link";

function Nav() {
  return (
    <div className={styles.nav}>
      <div><Link href="/">Data and Service Design</Link></div>
      <div><Link href="https://www.pssd.polimi.it/">PSSD Design School</Link></div>
      <div><Link href="https://www.polimi.it/">Politecnico di Milano</Link></div>
    </div>
  );
}

export default function Navigation() {
  return <Nav />;
}
