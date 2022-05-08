import { GetStaticPaths, GetStaticProps } from "next";
import styles from "../../styles/Article.module.css";
import { Post, getPost } from "../../config/types";

const Article = ({ data }: getPost) => {
  return (
    <section className={styles.section__container}>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.subtitle}>{data.body}</p>
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data: Post[] = await res.json();

  return {
    paths: data.map((item) => {
      return { params: { id: String(item.id) } };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const res = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data: Post = await res.json();

  return {
    props: { data },
  };
};

export default Article;
