import Image from 'next/image';
import type { Product } from '@/data/products';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex w-full flex-col rounded-3xl bg-white p-4">
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-slate-100">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="h-full w-full object-contain p-6"
        />
      </div>

      <div className="mt-4 flex flex-1 flex-col items-start">
        <h2 className="text-xl font-bold lowercase text-black">
          {product.title}
        </h2>
        <p className="mt-2 text-sm leading-snug text-gray-600">
          {product.description}
        </p>
        <p className="mt-2 text-sm text-gray-800">
          {product.price} ₽
        </p>
        
        <button className="mt-4 rounded-full bg-[#1e3a8a] px-5 py-2 text-xs font-semibold uppercase text-white transition-colors hover:bg-blue-800">
          в корзину
        </button>
      </div>
    </article>
  );
}