import styles from "./Button.module.css";
import Link from "next/link";

function Button( {name, url} ) {
  return (
    <div className={styles.button}>
     <Link href={url}>{name}</Link>
    </div>
  );
}

export default Button