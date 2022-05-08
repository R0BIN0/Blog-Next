import styles from "../../styles/Blog.module.css";
import Card from "../../components/Card/Card";

const Blog = () => {
  return (
    <section className={styles.section__container}>
      <h1 className={styles.title}>Bienvenue sur le Blog.</h1>
      <p className={styles.subtitle}>Voici les articles</p>
      <div className={styles.card__container}>
        <Card
          title="fake title"
          description="lorem ipsum dolor sit amet"
          link="Lire cet article"
          href="/blog/article1"
        />
        <Card
          title="fake title"
          description="lorem ipsum dolor sit amet"
          link="Lire cet article"
          href="/blog/article1"
        />
        <Card
          title="fake title"
          description="lorem ipsum dolor sit amet"
          link="Lire cet article"
          href="/blog/article1"
        />
      </div>
    </section>
  );
};

export default Blog;
