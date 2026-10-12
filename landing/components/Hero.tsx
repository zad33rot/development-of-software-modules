import styles from './Hero.module.css';
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>ЗВУК, КОТОРЫЙ<br/>МОЖНО ПОТРОГАТЬ</h1>
        <p className={styles.subtitle}>
          Reel to Real — портал в эпоху аналогового звука. Редкие виниловые пластинки и отреставрированная аппаратура для тех, кто ценит живой звук.
        </p>
        <button className={styles.cta}>ИССЛЕДОВАТЬ КОЛЛЕКЦИЮ</button>
      </div>
    </section>
  );
}