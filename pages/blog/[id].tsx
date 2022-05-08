import styles from "../../styles/Article.module.css";
const Article = () => {
  return (
    <section className={styles.section__container}>
      <h1 className={styles.title}>Qui est esse</h1>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        mollitia excepturi et temporibus maiores quos expedita beatae suscipit
        vel ducimus!
      </p>
    </section>
  );
};

export default Article;
