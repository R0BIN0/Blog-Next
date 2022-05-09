import Link from "next/link";
import styles from "../../styles/UserList.module.css";

const UserList = () => {
  return (
    <section className={styles.section__container}>
      <h1 className={styles.title}>La liste des utilisateurs</h1>
      <div className={styles.users__container}>
        <div className={styles.user__box}>
          <p className={styles.user__title}>Bret</p>
          <Link href={`/userList/1`}>
            <a className={styles.user__link}>Contacter</a>
          </Link>
        </div>
        <div className={styles.user__box}>
          <p>Bret</p>
          <Link href={`/userList/1`}>
            <a className={styles.user__link}>Contacter</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UserList;
