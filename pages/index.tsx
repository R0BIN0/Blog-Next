import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Card from "../components/Card/Card";

const Home: NextPage = () => {
  return (
    <section className={styles.section__container}>
      <h1 className={styles.title}>Bienvenue Sur Code.io</h1>
      <p className={styles.subtitle}>
        Le blog communaitre des afficionados de développement web
      </p>
      <div className={styles.card__container}>
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Home;
