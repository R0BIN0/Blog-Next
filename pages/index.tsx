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
        <Card
          title="Lisez les articles"
          subtitle="Maximisez votre culture web"
          description="Chaque auteur tente de vous apporter de valeur possible par article"
          link="Visite le blog"
          href="/blog"
        />
        <Card
          title="Faites un tour vers la liste de membres"
          subtitle="Faites-vous des amis"
          description="Ajoutez, invitez et discutez avec les différents membres"
          link="Découvre la liste de membres"
          href="/userList"
        />
      </div>
    </section>
  );
};

export default Home;
