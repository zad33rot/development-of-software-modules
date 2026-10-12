import Image from 'next/image';
import styles from './TopBar.module.css';

export default function TopBar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.leftGroup}>
        <div className={styles.logo}>REEL TO REAL</div>
        <nav className={styles.nav}>
          <a href="#">МАГАЗИНЫ</a>
          <a href="#">КОНТАКТЫ</a>
        </nav>
      </div>
      
      <div className={styles.rightGroup}>
        <a href="#" aria-label="Избранное">
          <Image src="/heart.svg" alt="Избранное" width={22} height={22} />
        </a>
        <a href="#" aria-label="Корзина">
          <Image src="/cart.svg" alt="Корзина" width={22} height={22} />
        </a>
        <a href="#" className={styles.login}>ВОЙТИ</a>
      </div>
    </div>
  );
}