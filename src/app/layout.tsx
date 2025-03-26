import Link from 'next/link';
import './globals.css';
import styles from './layout.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '我的 Next.js 网站',
  description: '使用 Next.js 15.2.4 构建的网站',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <h2>网站导航</h2>
          </div>
          <div className={styles.content}>
            <nav className={styles.navigation}>
              <ul>
                <li>
                  <Link href="/">首页</Link>
                </li>
                <li>
                  <Link href="/blog">博客</Link>
                </li>
                <li>
                  <Link href="/about">关于我们</Link>
                </li>
                <li>
                  <Link href="/contact">联系我们</Link>
                </li>
              </ul>
            </nav>
            <main className={styles.mainContentArea}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}