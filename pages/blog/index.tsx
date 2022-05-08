import styles from "../../styles/Blog.module.css";
import Card from "../../components/Card/Card";
import { GetStaticProps } from "next";
import { Post, getPostResults } from "../../config/types";

const Blog = ({ data }: getPostResults) => {
  return (
    <section className={styles.section__container}>
      <h1 className={styles.title}>Bienvenue sur le Blog.</h1>
      <p className={styles.subtitle}>Voici les articles</p>
      <div className={styles.card__container}>
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.body}
            link="Lire cet article"
            href={`/blog/${String(item.id)}`}
          />
        ))}
      </div>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data: Post[] = await res.json();

  return {
    props: { data },
  };
};

export default Blog;
