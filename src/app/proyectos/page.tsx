import Image from 'next/image';

export default function Proyectos() {
  const proyectos = [
    { img: '/projects/renovacion-cocina.jpg', title: 'Remodelación Cocina', cat: 'Hogares' },
    { img: '/projects/renovacion-bano-2.jpg', title: 'Baño Renovado', cat: 'Hogares' },
    { img: '/projects/pintura-detalle.jpg', title: 'Pintura Interior', cat: 'Acabados' },
    { img: '/projects/tabiqueria-interior.jpg', title: 'Tabiquería', cat: 'Construcción' },
    { img: '/projects/ceramica-pared.jpg', title: 'Cerámicas', cat: 'Acabados' },
    { img: '/projects/carpinteria-puerta.jpg', title: 'Carpintería', cat: 'Acabados' },
    { img: '/projects/piso-nuevo.jpg', title: 'Pisos', cat: 'Acabados' },
    { img: '/projects/closet-madera.jpg', title: 'Closet Madera', cat: 'Mueblería' },
  ];

  return (
    <div className="bg-cream">
      {/* HERO */}
      <section className="py-32 border-b border-stone/10">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-editorial text-7xl font-light text-charcoal mb-8">Proyectos</h1>
          <p className="text-xl text-stone font-light max-w-2xl">
            Galería de trabajos ejecutados con profesionalismo y atención al detalle
          </p>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {proyectos.map((proyecto, idx) => (
              <div key={idx} className="group">
                <div className="aspect-square bg-stone/5 overflow-hidden mb-6">
                  <Image
                    src={proyecto.img}
                    alt={proyecto.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-stone">{proyecto.cat}</p>
                  <h3 className="text-2xl font-light text-charcoal">{proyecto.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-32 bg-warm border-t border-stone/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { number: '50+', label: 'Proyectos completados' },
              { number: '100%', label: 'Clientes satisfechos' },
              { number: '10+', label: 'Años de experiencia' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                <div className="text-5xl font-light text-sand mb-4">{stat.number}</div>
                <p className="text-sm text-stone uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-cream text-center">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-charcoal mb-8">¿Tienes un proyecto en mente?</h2>
          <p className="text-stone mb-12 text-lg">Contáctanos y conviértelo en realidad</p>
          <a
            href="https://wa.me/56995383573"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-charcoal border border-charcoal px-8 py-4 inline-block hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            Solicitar Cotización
          </a>
        </div>
      </section>
    </div>
  );
}
