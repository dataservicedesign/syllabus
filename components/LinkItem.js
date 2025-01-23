import styles from "./LinkItem.module.css";
import Link from "next/link";

function LinkItem( {name, url} ) {
  return (
    <div className={styles.button}>
     <Link href={url}>{name}</Link>
    </div>
  );
}

export default LinkItem