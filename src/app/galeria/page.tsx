import Image from 'next/image';

export default function Galeria() {
  const proyectos = [
    { img: '/works/work-01.png', title: 'Estructura en Proceso', cat: 'Construcción' },
    { img: '/works/work-02.png', title: 'Tablero Eléctrico Profesional', cat: 'Electricidad' },
    { img: '/works/work-03.png', title: 'Detalles de Instalaciones', cat: 'Electricidad' },
    { img: '/works/work-04.png', title: 'Instalación Eléctrica', cat: 'Electricidad' },
    { img: '/works/work-05.png', title: 'Trabajo en Terreno', cat: 'Instalaciones' },
    { img: '/works/work-06.png', title: 'Técnico en Obra', cat: 'Instalaciones' },
    { img: '/works/work-07.png', title: 'Carpintería de Madera', cat: 'Carpintería' },
    { img: '/works/work-08.png', title: 'Interiores en Construcción', cat: 'Acabados' },
  ];

  return (
    <div className="bg-cream">
      {/* HERO */}
      <section className="py-32 border-b border-stone/10">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-editorial text-7xl font-light text-charcoal mb-8">Galería de Proyectos</h1>
          <p className="text-xl text-stone font-light max-w-2xl">
            Galería completa de trabajos realizados con profesionalismo, calidad y garantía
          </p>
        </div>
      </section>

      {/* GALERÍA GRID */}
      <section className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proyectos.map((proyecto, idx) => (
              <div key={idx} className="group relative overflow-hidden aspect-square">
                <Image
                  src={proyecto.img}
                  alt={proyecto.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs uppercase tracking-widest text-white/80 mb-2">{proyecto.cat}</p>
                  <h3 className="text-xl font-light">{proyecto.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-32 bg-warm border-t border-stone/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { number: '50+', label: 'Proyectos completados' },
              { number: '100%', label: 'Clientes satisfechos' },
              { number: '10+', label: 'Años de experiencia' },
              { number: '24h', label: 'Respuesta garantizada' },
            ].map((stat, idx) => (
              <div key={idx}>
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
          <h2 className="text-4xl font-light text-charcoal mb-8">¿Te gustaría un proyecto como estos?</h2>
          <p className="text-stone mb-12 text-lg max-w-2xl mx-auto">
            Contáctanos hoy y transforma tu espacio con profesionalismo y garantía
          </p>
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
