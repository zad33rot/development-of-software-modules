import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.leftGroup}>
        <div className={styles.dropdown}>
          <span className={styles.burger}>☰</span> {/* Иконка гамбургера */}
          <span>КАТАЛОГ</span>
          <span className={styles.arrow}>▼</span>
        </div>
        <div className={styles.dropdown}>
          <span>КОЛЛЕКЦИИ</span>
          <span className={styles.arrow}>▼</span>
        </div>
      </div>

      <div className={styles.searchWrapper}>
        {/* Иконка лупы внутри поиска */}
        <Image src="/search.svg" alt="Поиск" width={18} height={18} className={styles.searchIcon} />
        <input type="text" placeholder="Найти винил или аппаратуру" />
      </div>

      <div className={styles.phone}>8-800-456-78-90</div>
    </header>
  );
}