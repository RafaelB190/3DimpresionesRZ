import Carousel from '@/components/Carousel';
import ProductCard from '@/components/ProductCard';
import { products, promos } from '@/lib/products';
import Link from 'next/link';
import { Gift, Percent, Truck, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <Carousel />
        </div>
      </section>

      <section id="promos" className="py-16 px-4 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{"Promociones"}</h2>
            <p className="text-gray-600">{"¡No te pierdas nuestras ofertas exclusivas!"}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promos.map((promo) => (
              <div
                key={promo.id}
                className="bg-white rounded-xl shadow-md p-6 border-2 border-pink-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <Gift className="w-6 h-6 text-primary" />
                  </div>
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                    {promo.discount}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{promo.title}</h3>
                <p className="text-gray-600">{promo.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="productos" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{"Nuestros Productos"}</h2>
            <p className="text-gray-600">{"Explora nuestra amplia gama de productos impresos en 3D"}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Percent className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">{"Mejores Precios"}</h3>
              <p className="text-gray-400 text-sm">{"Calidad al mejor precio del mercado"}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">{"Envío Rápido"}</h3>
              <p className="text-gray-400 text-sm">{"Coordinamos el envío para tu comodidad"}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">{"Garantía"}</h3>
              <p className="text-gray-400 text-sm">{"Todos nuestros productos garantizados"}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Gift className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">{"Regalos"}</h3>
              <p className="text-gray-400 text-sm">{"Encontrá el regalo perfecto"}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{"¿Tenés un diseño especial?"}</h2>
          <p className="text-xl mb-8 opacity-90">{"Contactanos y lo imprimimos para ti"}</p>
          <Link
            href="/contacto"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {"Solicitar Cotización"}
          </Link>
        </div>
      </section>
    </div>
  );
}
