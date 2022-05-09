import { GetStaticProps } from "next";
import Link from "next/link";
import styles from "../../styles/UserList.module.css";
import { getUserResults } from "../../config/types";

const UserList = ({ data }: getUserResults) => {
  return (
    <section className={styles.section__container}>
      <h1 className={styles.title}>La liste des utilisateurs</h1>
      <div className={styles.users__container}>
        {data.map((item) => (
          <div className={styles.user__box}>
            <p className={styles.user__title}>{item.name}</p>
            <Link href={`/userList/${item.id}`}>
              <a className={styles.user__link}>Contacter</a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { data },
  };
};

export default UserList;
