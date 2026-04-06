'use client';

import Header from '@/components/Header';
import styles from './layout.module.css';
import './globals.css';
import { ThemeProvider } from './contexts/ThemeContext';
import { Noto_Sans_KR } from 'next/font/google';

//모든 페이지에 적용될 메타데이터
export const metadata = {
  title: {
    default: 'CodeitMall = 새로운 패션, 완벽한 쇼핑',
    template: '%s | CodeitMall',
  },
  description:
  'CodeitMall에서 다양한 옷을 찾아보세요. 사이즈 추천과 리뷰를 통해 완벽한 핏을 찾을 수 있습니다.',
}

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
