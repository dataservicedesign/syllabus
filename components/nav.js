import styles from "./nav.module.css";

function Nav() {
  return (
    <div className={styles.nav}>
      <div>Data and Service Design</div>
      <div>PSSD Design School</div>
      <div>Politecnico di Milano</div>
    </div>
  );
}

export default function Navigation() {
  return <Nav />;
}
