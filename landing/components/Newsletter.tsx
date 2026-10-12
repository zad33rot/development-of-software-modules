import styles from './Newsletter.module.css';
export default function Newsletter() {
  return (
    <section className={styles.newsletter}>
      <h2 className={styles.title}>ПОДПИСКА НА РАССЫЛКУ</h2>
      <p className={styles.subtitle}>Мы будем присылать вам обзоры аппаратуры, промокоды и интересные новости</p>
      <form className={styles.form}>
        <input type="email" placeholder="Ваш E-mail" className={styles.input} />
        <button type="submit" className={styles.btn}>ПОДПИСАТЬСЯ</button>
      </form>
    </section>
  );
}