import { Users, Heart, Sparkles } from 'lucide-react';

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-purple-500 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{"Sobre Nosotros"}</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            {"Somos una empresa familiar apasionada por la impresión 3D"}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{"Quiénes Somos"}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {"Somos una empresa familiar que busca resolver e innovar en adornos tanto para eventos como para la decoración del hogar."}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {"Cada producto que creamos es pensado con dedicación, combinando creatividad y tecnología 3D para ofrecer piezas únicas que hagan especiales tus momentos y espacios."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{"Lo que nos define"}</h2>
            <p className="text-gray-600">{"Los valores que nos impulsan cada día"}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-pink-100 p-4 rounded-full inline-block mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{"Innovación"}</h3>
              <p className="text-gray-600 text-sm">
                {"Buscamos constantemente nuevas formas de crear productos únicos y creativos."}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-pink-100 p-4 rounded-full inline-block mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{"Pasión"}</h3>
              <p className="text-gray-600 text-sm">
                {"Amamos lo que hacemos y eso se refleja en cada pieza con dedicación."}
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-pink-100 p-4 rounded-full inline-block mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{"Familia"}</h3>
              <p className="text-gray-600 text-sm">
                {"Somos una empresa familiar que trabaja con compromiso y cercanía."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/img_productos/tabla didactica.png"
                alt="Nuestro trabajo"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{"¿Qué Hacemos?"}</h2>
              <p className="text-gray-600 mb-4">
                {"Creamos adornos personalizados para todo tipo de eventos: bodas, cumpleaños, bautismos y más. También diseñamos piezas decorativas para el hogar que le dan un toque único a tus espacios."}
              </p>
              <p className="text-gray-600">
                {"Si tenés una idea en mente, contactanos y la hacemos realidad."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-primary to-purple-500 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">{"¿Tenés un diseño especial en mente?"}</h2>
          <p className="text-xl mb-8 opacity-90">
            {"Contactanos y lo hacemos realidad"}
          </p>
          <a
            href="https://wa.me/543834814217"
            target="_blank"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {"Contactar por WhatsApp"}
          </a>
        </div>
      </section>
    </div>
  );
}
