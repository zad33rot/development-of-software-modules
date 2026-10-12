import styles from './Footer.module.css';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.col}>
          <h4>REEL TO REAL</h4>
        </div>
        <div className={styles.col}>
          <h4>КАТАЛОГ</h4>
          <a href="#">Винил</a>
          <a href="#">Кассеты</a>
          <a href="#">Аппаратура</a>
        </div>
        <div className={styles.col}>
          <h4>КЛИЕНТАМ</h4>
          <a href="#">Доставка</a>
          <a href="#">Возврат</a>
          <a href="#">FAQ</a>
        </div>
        <div className={styles.col}>
          <h4>КОНТАКТЫ</h4>
          <a href="mailto:hi@reeltoreal.ru">Email: hi@reeltoreal.ru</a>
          <a href="tel:+71234567890">Телефон: +7 123 456-78-90</a>
          <a href="#">Адрес: СПб, Невский пр-т, 59</a>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© 2024 Reel to Real. Все права защищены.</span>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Условия использования</a>
        </div>
      </div>
    </footer>
  );
}