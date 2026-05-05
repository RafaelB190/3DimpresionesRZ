'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '@/lib/products';

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const featuredProducts = products.slice(0, 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredProducts.length]);

  const next = () => setCurrent((prev) => (prev + 1) % featuredProducts.length);
  const prev = () => setCurrent((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);

  return (
    <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl overflow-hidden">
      {featuredProducts.map((product, index) => (
        <div
          key={product.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex h-full">
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 text-white">
              <span className="text-sm uppercase tracking-wider mb-2 opacity-80">Producto Destacado</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{product.name}</h2>
              <p className="text-lg mb-6 opacity-90">{product.description}</p>
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold">${product.price.toLocaleString()}</span>
                <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Ver Producto
                </button>
              </div>
            </div>
            <div className="hidden md:flex w-1/2 items-center justify-center p-8">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {featuredProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
