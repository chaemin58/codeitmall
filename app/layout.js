<<<<<<< HEAD
=======
import Header from '@/components/Header';
>>>>>>> 8a3dc5a5dddfab7ec367e5a7bf8925c7e2513dc6
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
<<<<<<< HEAD
        {children}
=======
        <Header />
        <div style={{ padding: '16px' }}>{children}</div>
>>>>>>> 8a3dc5a5dddfab7ec367e5a7bf8925c7e2513dc6
      </body>
    </html>
  );
}
