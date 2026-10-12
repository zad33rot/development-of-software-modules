import Image from 'next/image';
import styles from './Products.module.css';

const products = [
  { brand: 'AUDIO-TECHNICA', name: 'AT-LPW40WN', price: '110 000 ₽', img: '/product3.png' },
  { brand: 'WIIM', name: 'Amp Pro Space Grey', price: '49 970 ₽', img: '/product2.png' },
  { brand: 'SHURE', name: 'SM7B', price: '46 490 ₽', img: '/product1.png' },
  { brand: 'HEADMADE', name: 'Pro 2RCA – 3.5mm Black 1m', price: '2 630 ₽', img: '/product4.png' },
];

export default function Products() {
  return (
    <section className={styles.products}>
      <div className={styles.tabs}>
        <div className={`${styles.tab} ${styles.active}`}>ХИТЫ ПРОДАЖ 252</div>
        <div className={styles.tab}>НОВИНКИ 252</div>
        <div className={styles.tab}>РАСПРОДАЖА 252</div>
        <div className={`${styles.tab} ${styles.allLink}`}>СМОТРЕТЬ ВСЕ ТОВАРЫ</div>
      </div>

      <div className={styles.grid}>
        {products.map((p) => (
          <div key={p.name} className={styles.card}>
            <div className={styles.badge}>Хит продаж</div>
            <div className={styles.heart}>
              <Image src="/heart.svg" alt="В избранное" width={20} height={20} />
            </div>

            <div className={styles.imageWrapper}>
              <Image src={p.img} alt={p.name} width={200} height={200} className={styles.image} />
            </div>

            <div className={styles.brand}>{p.brand}</div>
            <div className={styles.name}>{p.name}</div>
            <div className={styles.price}>{p.price}</div>
            
            <button className={styles.addBtn}>В КОРЗИНУ</button>
          </div>
        ))}
      </div>
    </section>
  );
}