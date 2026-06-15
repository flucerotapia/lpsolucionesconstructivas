'use client';

export default function Servicios() {
  const servicios = {
    hogares: [
      'Tabiquería y muros',
      'Instalaciones eléctricas',
      'Carpintería y closets',
      'Reparaciones generales',
      'Baños completos',
      'Pintura interior y exterior',
      'Pisos industriales y epóxicos',
      'Cerámicas y porcelanato',
      'Soldadura estructural',
      'Acabados decorativos',
    ],
    condominios: [
      'Pintura de áreas comunes',
      'Iluminaria interior y exterior',
      'Sistemas de citafonía',
      'Portones y puertas automatizadas',
      'Mantenimiento preventivo',
      'Reparaciones estructurales',
    ],
  };

  return (
    <div className="bg-cream">
      {/* HERO */}
      <section className="py-32 border-b border-stone/10">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-editorial text-7xl font-light text-charcoal mb-8">Servicios</h1>
          <p className="text-xl text-stone font-light max-w-2xl">
            Ofrecemos soluciones profesionales especializadas para hogares, departamentos y comunidades
          </p>
        </div>
      </section>

      {/* HOGARES */}
      <section className="py-32 bg-warm">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-charcoal mb-16">Para Hogares y Departamentos</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {servicios.hogares.map((service, idx) => (
              <div key={idx} className="border-b border-stone/20 pb-6">
                <p className="text-lg text-charcoal font-light">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONDOMINIOS */}
      <section className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-charcoal mb-16">Para Condominios y Comunidades</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {servicios.condominios.map((service, idx) => (
              <div key={idx} className="border-b border-stone/20 pb-6">
                <p className="text-lg text-charcoal font-light">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-32 bg-warm">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-charcoal mb-20">Nuestro proceso</h2>
          <div className="space-y-12 max-w-3xl">
            {[
              { title: 'Levantamiento', desc: 'Visitamos tu espacio y evaluamos en detalle todos los trabajos necesarios' },
              { title: 'Cotización formal', desc: 'Presupuesto transparente, itemizado y sin sorpresas ocultas' },
              { title: 'Ejecución profesional', desc: 'Trabajos realizados con herramientas de primer nivel y supervisión permanente' },
              { title: 'Garantía documentada', desc: 'Respaldo formal de todas nuestras obras según términos establecidos' },
            ].map((step, idx) => (
              <div key={idx} className="border-b border-stone/20 pb-8">
                <h3 className="text-2xl font-light text-charcoal mb-3">{step.title}</h3>
                <p className="text-stone leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-cream text-center">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-charcoal mb-8">¿No encuentras lo que buscas?</h2>
          <p className="text-stone mb-12 text-lg">Contáctanos para consultar sobre servicios específicos</p>
          <a
            href="https://wa.me/56995383573"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-charcoal border border-charcoal px-8 py-4 inline-block hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            Consultar
          </a>
        </div>
      </section>
    </div>
  );
}
