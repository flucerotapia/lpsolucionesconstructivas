export default function Nosotros() {
  return (
    <div className="bg-cream">
      {/* HERO */}
      <section className="py-32 border-b border-stone/10">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-editorial text-7xl font-light text-charcoal mb-8">Nosotros</h1>
          <p className="text-xl text-stone font-light max-w-2xl">
            Más de una década entregando soluciones constructivas de calidad
          </p>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="py-32 bg-warm">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-5xl font-light text-charcoal mb-12">Quiénes somos</h2>
          <div className="space-y-8 text-lg text-stone leading-8">
            <p>
              LP Soluciones Constructivas es una empresa constructora fundada por emprendedores con pasión por la calidad y la cercanía con sus clientes. Con más de 10 años de experiencia en Santiago, nos hemos especializado en reparaciones, remodelaciones y mantención para hogares, departamentos y comunidades.
            </p>
            <p>
              Cada proyecto es tratado como único. Nuestro equipo de técnicos especializados trabaja con herramientas de primer nivel, supervisión permanente y garantía formal. No buscamos ser los más grandes, buscamos ser los mejores para nuestros clientes.
            </p>
            <p>
              La confianza es nuestro principal activo. Por eso somos empresa formal, emitimos facturas, cumplimos plazos y respaldamos nuestras obras. La cercanía humana y la atención al detalle son lo que nos diferencia.
            </p>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-charcoal mb-20">Nuestros valores</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Confianza', desc: 'Relaciones duraderas basadas en transparencia y profesionalismo' },
              { title: 'Calidad', desc: 'Materiales de primer nivel y técnicas constructivas de excelencia' },
              { title: 'Compromiso', desc: 'Cumplimiento de plazos y garantía documentada en todas nuestras obras' },
              { title: 'Cercanía', desc: 'Trato humano y comunicación directa durante todo el proceso' },
              { title: 'Formalidad', desc: 'Empresa formal que cumple con regulaciones e impuestos' },
              { title: 'Sostenibilidad', desc: 'Prácticas constructivas responsables con el medio ambiente' },
            ].map((valor, idx) => (
              <div key={idx} className="border-t border-stone/20 pt-8">
                <h3 className="text-2xl font-light text-charcoal mb-3">{valor.title}</h3>
                <p className="text-stone leading-relaxed">{valor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="py-32 bg-warm">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-charcoal mb-12">Nuestro equipo</h2>
          <div className="max-w-3xl">
            <p className="text-lg text-stone leading-8 mb-8">
              Contamos con técnicos especializados en múltiples áreas: carpintería, electricidad, pintura, cerámicas, tabiquería y acabados. Todos con experiencia comprobada y compromiso con la calidad.
            </p>
            <p className="text-lg text-stone leading-8">
              Nuestros colaboradores son seleccionados no solo por su experiencia técnica, sino por su profesionalismo, responsabilidad y actitud de servicio hacia nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-cream text-center">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-light text-charcoal mb-8">Conoce nuestro trabajo</h2>
          <p className="text-stone mb-12 text-lg">Visita nuestra galería de proyectos completados</p>
          <a
            href="/proyectos"
            className="text-xs uppercase tracking-widest text-charcoal border border-charcoal px-8 py-4 inline-block hover:bg-charcoal hover:text-cream transition-all duration-300"
          >
            Ver Proyectos
          </a>
        </div>
      </section>
    </div>
  );
}
