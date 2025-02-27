import styles from "./nav.module.css";
import Link from "next/link";
import { RiBlueskyFill } from "react-icons/ri";

function Nav() {
  return (
    <div className={styles.nav}>
      <div><Link href="/">Data and Service Design</Link></div>
      <div><Link href="https://bsky.app/profile/dataservicedesign.bsky.social" style={{ fontSize: "1.2rem"}}><RiBlueskyFill /></Link></div>
    </div>
  );
}

export default function Navigation() {
  return <Nav />;
}
