'use client';

import Header from '@/components/Header';
import styles from './layout.module.css';
import './globals.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKR = Noto_Sans_KR({
  preload: false,
  weight: ['400','500','700']
})

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={notoSansKR}>
        <ThemeProvider>
          <Header />
          <div className={styles.container}>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
