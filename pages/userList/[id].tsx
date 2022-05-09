import styles from "../../styles/User.module.css";

const User = () => {
  return (
    <section>
      <div className={styles.section__container}>
        <div className={styles.user__card}>
          <div className={styles.user__card__top}>
            <p className={styles.user__name}>Clémentine Bauch</p>
            <p className={styles.user__username}>Username : Samantha</p>
          </div>
          <div className={styles.user__card__bottom}>
            <div className={styles.user__info__box}>
              <p>Username : Samantha</p>
            </div>
            <div className={styles.user__info__box}>
              <p>Email : samantha@laposte.net</p>
            </div>
            <div className={styles.user__info__box}>
              <p>Site Web : samantha.com</p>
            </div>
            <div className={styles.user__info__box}>
              <p>Téléphone : 1-463-123-4447</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
