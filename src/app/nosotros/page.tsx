import { Users, Award, Heart, Sparkles } from 'lucide-react';

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Conoce la historia detrás de 3D ImpresionesRZ y nuestra pasión por la impresión 3D
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/img_productos/tabla didactica.png"
                alt="Nuestro trabajo"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Historia</h2>
              <p className="text-gray-600 mb-4">
                3D ImpresionesRZ nació de la pasión por la tecnología 3D y el deseo de hacer 
                accesible esta increíble herramienta a todos. Comenzamos como un pequeño taller 
                familiar y hoy somos referente en el mercado de impresiones 3D.
              </p>
              <p className="text-gray-600 mb-4">
                Nos especializamos en crear productos personalizados de alta calidad, desde 
                decoraciones para el hogar hasta piezas educativas y utilitarios. Cada proyecto 
                es un desafío que aceptamos con entusiasmo.
              </p>
              <p className="text-gray-600">
                Nuestro compromiso es con la calidad, la innovación y la satisfacción total 
                de cada cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Valores</h2>
            <p className="text-gray-600">Lo que nos define y nos impulsa cada día</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Calidad</h3>
              <p className="text-gray-600 text-sm">
                Utilizamos materiales premium y las mejores tecnologías para garantizar 
                acabados impecables.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Pasión</h3>
              <p className="text-gray-600 text-sm">
                Amamos lo que hacemos y eso se refleja en cada pieza que creamos 
                con dedicación.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-purple-100 p-4 rounded-full inline-block mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Comunidad</h3>
              <p className="text-gray-600 text-sm">
                Creemos en construir relaciones duraderas con nuestros clientes 
                basadas en la confianza.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-amber-100 p-4 rounded-full inline-block mb-4">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Excelencia</h3>
              <p className="text-gray-600 text-sm">
                Buscamos siempre superar las expectativas con innovación 
                y atención al detalle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Por Qué Elegirnos?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">+500</div>
              <p className="text-gray-600">Proyectos realizados</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <p className="text-gray-600">Clientes satisfechos</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">24h</div>
              <p className="text-gray-600">Tiempo de entrega promedio</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contáctanos y hagamos realidad tus ideas
          </p>
          <a
            href="/contacto"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contactar Ahora
          </a>
        </div>
      </section>
    </div>
  );
}
