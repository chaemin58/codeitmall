import Link from 'next/link';
import styles from './Header.module.css';
import logoWhite from '@/assets/logo-white.svg';
import settingWhite from '@/assets/setting-white.svg';

export default function Header(){
  return(
    <header className={styles.header}>
      <div className={styles.container}>
      <Link href="/">
      <img
        src={logoWhite.src}
        alt='Codeitmall'
        width={155}
        height={29}
        />
        </Link>
      <Link href="/settings">
      <img
        src={settingWhite.src}
        alt='Settings'
        width={155}
        height={29}
        />
      </Link>
      </div>
    </header>
  )
}