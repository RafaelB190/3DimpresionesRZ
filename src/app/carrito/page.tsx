'use client';

import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen py-16 px-4">
        <div className="container mx-auto text-center">
          <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-6" />
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{"Tu carrito está vacío"}</h1>
          <p className="text-gray-600 mb-8">{"¡Agrega productos para comenzar!"}</p>
          <Link
            href="/"
            className="inline-block bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {"Ver Productos"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">{"Carrito de Compras"}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center p-4 border-b last:border-b-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-grow ml-4">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-500 text-sm">${item.price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="ml-6 text-right">
                    <p className="font-bold text-lg">
                      ${(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={clearCart}
              className="mt-4 text-red-500 hover:text-red-600 transition-colors"
            >
              {"Vaciar carrito"}
            </button>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{"Resumen del Pedido"}</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>{"Envío"}</span>
                  <span className="text-green-600">Gratis</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${cartTotal.toLocaleString()}</span>
                </div>
              </div>
              <button className="w-full bg-primary hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition-colors">
                {"Proceder al Pago"}
              </button>
              <Link
                href="/"
                className="block text-center mt-4 text-gray-600 hover:text-primary transition-colors"
              >
                {"Continuar Comprando"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
