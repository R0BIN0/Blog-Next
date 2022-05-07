import React from "react";
import Link from "next/link";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Lisez L'article</h2>
      <h3 className={styles.subtitle}>Maximiser votre culture web</h3>
      <p className={styles.description}>
        Chaque auteur tente de vous apporter le plus de valeur poisslbe par
        article
      </p>
      <Link href={"/blog"}>
        <a className={styles.link}>Visiter le blog</a>
      </Link>
    </div>
  );
};

export default Card;
