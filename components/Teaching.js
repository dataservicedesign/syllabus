import styles from "./Teaching.module.css";
import teachingList from "../content/teachingList";

function Teaching() {
  return (
    <div className={styles.teaching}>
      {teachingList.map((t) => (
        <p key={t.guest}><b>{t.guest}</b>, {t.affiliation}<br /> {t.when}</p>
      ))}
    </div>
  );
}

export default Teaching;
