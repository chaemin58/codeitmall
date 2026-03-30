import Link from 'next/link';
import styles from './Header.module.css';

export default function Header(){
  return(
    <header className={styles.header}>
      <Link href="/">홈</Link>
      <a href="/settings">설정</a>
    </header>
  )
}