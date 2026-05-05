'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <img
              src="/Logo3DimpresionesRZ.jpeg"
              alt="3D ImpresionesRZ"
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition">
              Inicio
            </Link>
            <Link href="/#productos" className="text-gray-700 hover:text-primary transition">
              Productos
            </Link>
            <Link href="/#promos" className="text-gray-700 hover:text-primary transition">
              Promociones
            </Link>
            <Link href="/nosotros" className="text-gray-700 hover:text-primary transition">
              Nosotros
            </Link>
            <Link href="/contacto" className="text-gray-700 hover:text-primary transition">
              Contacto
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/carrito" className="relative p-2 text-gray-700 hover:text-primary transition">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>
                Inicio
              </Link>
              <Link href="/#productos" className="text-gray-700 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>
                Productos
              </Link>
              <Link href="/#promos" className="text-gray-700 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>
                Promociones
              </Link>
              <Link href="/nosotros" className="text-gray-700 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>
                Nosotros
              </Link>
              <Link href="/contacto" className="text-gray-700 hover:text-primary transition" onClick={() => setMobileMenuOpen(false)}>
                Contacto
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
