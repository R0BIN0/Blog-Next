import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.link}>Accueil</a>
      </Link>
      <Link href="/blog">
        <a className={styles.link}>Blog</a>
      </Link>
      <Link href="/userList">
        <a className={styles.link}>Liste</a>
      </Link>
    </nav>
  );
};

export default Navbar;
