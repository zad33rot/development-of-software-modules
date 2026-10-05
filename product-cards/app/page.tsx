import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdf5f5] px-4 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button className="rounded-full bg-[#1e3a8a] px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-blue-800">
            смотреть всю коллекцию
          </button>
        </div>
      </div>
    </main>
  );
}