import Image from 'next/image';
import styles from './Categories.module.css';

const items = [
  { icon: '/icon-vinyl.svg', title: 'ПЛАСТИНКИ', count: '132 товара' },
  { icon: '/icon-cassette.svg', title: 'КАССЕТЫ', count: '56 товаров' },
  { icon: '/icon-player.svg', title: 'ПРОИГРЫВАТЕЛИ', count: '11 товаров' },
  { icon: '/icon-headphones.svg', title: 'АКСЕССУАРЫ', count: '235 товаров' },
];

export default function Categories() {
  return (
    <section className={styles.categories}>
      {items.map((item) => (
        <div key={item.title} className={styles.item}>
          <div className={styles.icon}>
            <Image src={item.icon} alt={item.title} width={40} height={40} />
          </div>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.count}>{item.count}</div>
        </div>
      ))}
    </section>
  );
}