import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Categories from '@/components/Categories';
import Products from '@/components/Products';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <TopBar />
      <Header />
      <Hero />
      <Marquee />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </main>
  );
}