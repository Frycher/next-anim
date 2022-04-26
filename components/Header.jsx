import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </header>
  );
};

export default Header;
