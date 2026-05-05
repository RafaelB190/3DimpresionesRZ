import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/Logo3DimpresionesRZ.jpeg"
              alt="3D ImpresionesRZ"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm">
              Tu mejor opción en impresiones 3D. Calidad, diseño y innovación.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white transition">Inicio</Link></li>
              <li><Link href="/#productos" className="hover:text-white transition">Productos</Link></li>
              <li><Link href="/#promos" className="hover:text-white transition">Promociones</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/nosotros" className="hover:text-white transition">Nosotros</Link></li>
              <li><Link href="/contacto" className="hover:text-white transition">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: info@3dimpresionesrz.com</li>
              <li>WhatsApp: +54 11 1234-5678</li>
              <li>Horarios: Lun-Vie 9:00-18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 3D ImpresionesRZ. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
