import styles from './page.module.css';

export default function Home() {
  return (
      <div className={styles.mainContent}>
        <h1>欢迎来到我的网站</h1>
        <p>这是一个使用 Next.js 15.2.4 构建的网站。</p>
        <p>请点击导航菜单查看不同页面内容。</p>
      </div>
  );
}
