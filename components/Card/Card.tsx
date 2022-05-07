import { FC } from "react";
import Link from "next/link";
import styles from "./Card.module.css";

type Props = {
  title: string;
  subtitle?: string;
  description: string;
  link: string;
  href: string;
};

const Card: FC<Props> = ({ title, subtitle, description, link, href }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
      <p className={styles.description}>{description}</p>
      <Link href={href}>
        <a className={styles.link}>{link}</a>
      </Link>
    </div>
  );
};

export default Card;
