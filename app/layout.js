import Header from '@/components/Header';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <div style={{ padding: '16px' }}>{children}</div>
      </body>
    </html>
  );
}
