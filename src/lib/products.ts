import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Florero Moderno',
    price: 2500,
    image: '/img_productos/florero1.jpg',
    description: 'Florero decorativo impreso en 3D con diseño moderno',
    category: 'decoracion',
  },
  {
    id: '2',
    name: 'Florero Geométrico',
    price: 3000,
    image: '/img_productos/florero2.jpeg',
    description: 'Florero con patrón geométrico elegante',
    category: 'decoracion',
  },
  {
    id: '3',
    name: 'Batidores de Tragos',
    price: 1800,
    image: '/img_productos/batidores de tragos.png',
    description: 'Set de batidores para cócteles y tragos',
    category: 'utilitario',
  },
  {
    id: '4',
    name: 'Frase para Eventos',
    price: 1200,
    image: '/img_productos/fraceses para eventos.png',
    description: 'Frases personalizadas para bodas y eventos',
    category: 'eventos',
  },
  {
    id: '5',
    name: 'Números Didácticos',
    price: 3500,
    image: '/img_productos/Numeros didacticos.png',
    description: 'Juego de números para aprender jugando',
    category: 'educativo',
  },
  {
    id: '6',
    name: 'Pines Decorativos',
    price: 800,
    image: '/img_productos/pines.png',
    description: 'Pines personalizados con diseños únicos',
    category: 'accesorios',
  },
  {
    id: '7',
    name: 'Tabla Didáctica',
    price: 4500,
    image: '/img_productos/tabla didactica.png',
    description: 'Tabla educativa con formas y colores',
    category: 'educativo',
  },
  {
    id: '8',
    name: 'Tetris Decorativo',
    price: 2200,
    image: '/img_productos/tetris.png',
    description: 'Piezas de Tetris decorativas para pared',
    category: 'decoracion',
  },
];

export const promos = [
  {
    id: 'p1',
    title: '¡2x1 en Floreros!',
    description: 'Lleva 2 floreros y paga solo 1',
    discount: '50%',
  },
  {
    id: 'p2',
    title: 'Descuento en Frases',
    description: '20% off en frases para eventos',
    discount: '20%',
  },
  {
    id: 'p3',
    title: 'Combo Educativo',
    description: 'Lleva tabla + números didacticos',
    discount: '30%',
  },
];
