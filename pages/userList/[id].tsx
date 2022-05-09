import styles from "../../styles/User.module.css";
import { User, getUser } from "../../config/types";
import { GetStaticPaths } from "next";

const UserInfo = ({ data }: getUser) => {
  return (
    <section>
      <div className={styles.section__container}>
        <div className={styles.user__card}>
          <div className={styles.user__card__top}>
            <p className={styles.user__name}>{data.name}</p>
            <p className={styles.user__username}>Username : {data.username}</p>
          </div>
          <div className={styles.user__card__bottom}>
            <div className={styles.user__info__box}>
              <p>Username : {data.username}</p>
            </div>
            <div className={styles.user__info__box}>
              <p>Email : {data.email}</p>
            </div>
            <div className={styles.user__info__box}>
              <p>Site Web : {data.website}</p>
            </div>
            <div className={styles.user__info__box}>
              <p>Téléphone : {data.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await res.json();

  const paths = data.map((item) => ({
    params: { id: String(item.id) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data: User = await res.json();

  return {
    props: { data },
  };
}

export default UserInfo;
