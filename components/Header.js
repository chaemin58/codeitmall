'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import logoWhite from '@/assets/logo-white.svg';
import settingWhite from '@/assets/setting-white.svg';
import logoBlack from '@/assets/logo-black.svg'
import settingBlack from '@/assets/setting-black.svg'
import { useTheme } from '@/app/contexts/ThemeContext';

export default function Header(){
  const { theme } = useTheme();

  return(
    <header className={styles.header}>
      <div className={styles.container}>
      <Link href="/">
      <img
        src={theme === 'light' ?  logoBlack.src : logoWhite.src}
        alt='Codeitmall'
        width={155}
        height={29}
        />
        </Link>
      <Link href="/settings">
      <img
        src={settingWhite.src}
        src={theme === 'light' ?  settingBlack.src : settingWhite.src}
        alt='Settings'
        width={155}
        height={29}
        />
      </Link>
      </div>
    </header>
  )
}