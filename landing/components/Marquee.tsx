import styles from './Marquee.module.css';

const items = [
  'ВИНИЛ',
  'КАССЕТЫ',
  'АППАРАТУРА',
  'РЕСТАВРАЦИЯ',
  'ДОСТАВКА ПО МИРУ',
];

export default function Marquee() {
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {items.map((item) => (
          <span key={item} className={styles.item}>{item}</span>
        ))}
        {/* Дублируем элементы для бесшовной прокрутки */}
        {items.map((item) => (
          <span key={`dup-${item}`} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  );
}