'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useContacto } from '@/hooks/useContacto';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const { enviarContacto, loading, error, success } = useContacto();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await enviarContacto({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    });
    if (!error) setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-cream">
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <Image
          src="/hero-construccion.jpg"
          alt="LP Construcción"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/25" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pb-24">
          <div className="max-w-2xl">
            <h1 className="font-editorial text-7xl md:text-8xl text-cream font-light leading-tight mb-6">
              Construcción <br />con garantía
            </h1>
            <p className="text-xl text-cream/90 font-light mb-12 max-w-md">
              Soluciones profesionales para hogares y comunidades en Santiago
            </p>
            <a
              href="#contacto"
              className="inline-block text-xs uppercase tracking-widest text-cream border border-cream px-8 py-4 hover:bg-cream hover:text-charcoal transition-all duration-300"
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-5xl font-light text-charcoal mb-8 leading-tight">
              Emprendedores de confianza
            </h2>
            <p className="text-lg text-stone leading-8 mb-6">
              LP Soluciones Constructivas es una empresa constructora con más de 10 años de experiencia en Santiago. Nos especializamos en reparaciones, remodelaciones y mantención para hogares, departamentos y comunidades.
            </p>
            <p className="text-lg text-stone leading-8">
              Cada proyecto es tratado con la misma profesionalidad, garantía formal y atención al detalle. Nos enorgullece la cercanía con nuestros clientes y la calidad de ejecución de nuestras obras.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-12 pt-16 border-t border-stone/10">
            {[
              { number: '10+', label: 'Años de experiencia' },
              { number: '100%', label: 'Satisfacción de clientes' },
              { number: '50+', label: 'Proyectos completados' },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="text-5xl font-light text-sand mb-4">{item.number}</div>
                <p className="text-sm text-stone uppercase tracking-widest">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-32 bg-warm">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-light text-charcoal mb-20">Servicios</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Hogares */}
            <div>
              <h3 className="text-2xl font-light text-charcoal mb-12 pb-4 border-b border-stone/20">
                Para Hogares
              </h3>
              <ul className="space-y-4 text-stone">
                {['Tabiquería', 'Electricidad', 'Carpintería', 'Pintura', 'Pisos y cerámica', 'Reparaciones'].map((service) => (
                  <li key={service} className="text-base pb-3 border-b border-stone/10 last:border-0">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Condominios */}
            <div>
              <h3 className="text-2xl font-light text-charcoal mb-12 pb-4 border-b border-stone/20">
                Para Condominios
              </h3>
              <ul className="space-y-4 text-stone">
                {['Pintura y revestimientos', 'Sistemas de seguridad', 'Instalaciones eléctricas', 'Mantenimiento general', 'Reparaciones estructurales', 'Mejoras comunes'].map((service) => (
                  <li key={service} className="text-base pb-3 border-b border-stone/10 last:border-0">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center pt-12 border-t border-stone/10">
            <a
              href="/servicios"
              className="text-xs uppercase tracking-widest text-charcoal border border-charcoal px-8 py-4 inline-block hover:bg-charcoal hover:text-cream transition-all duration-300"
            >
              Ver todos los servicios
            </a>
          </div>
        </div>
      </section>

      {/* PROYECTOS DESTACADOS */}
      <section className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-light text-charcoal mb-20">Proyectos destacados</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {[
              { img: '/projects/renovacion-bano-2.jpg', title: 'Remodelación Integral' },
              { img: '/projects/renovacion-cocina.jpg', title: 'Cocina Moderna' },
              { img: '/projects/carpinteria-puerta.jpg', title: 'Carpintería a Medida' },
              { img: '/projects/pintura-detalle.jpg', title: 'Acabados Premium' },
            ].map((project, idx) => (
              <div key={idx} className="group">
                <div className="aspect-video bg-stone/10 overflow-hidden mb-6">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-light text-charcoal">{project.title}</h3>
              </div>
            ))}
          </div>

          <div className="text-center pt-12 border-t border-stone/10">
            <a
              href="/proyectos"
              className="text-xs uppercase tracking-widest text-charcoal border border-charcoal px-8 py-4 inline-block hover:bg-charcoal hover:text-cream transition-all duration-300"
            >
              Ver galería completa
            </a>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-32 bg-warm">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-light text-charcoal mb-20">Proceso de trabajo</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Levantamiento', desc: 'Evaluamos tu espacio en detalle' },
              { number: '02', title: 'Cotización', desc: 'Presupuesto transparente y formal' },
              { number: '03', title: 'Ejecución', desc: 'Trabajos con supervisión constante' },
              { number: '04', title: 'Garantía', desc: 'Respaldo profesional de la obra' },
            ].map((step, idx) => (
              <div key={idx} className="border-b border-stone/20 pb-8">
                <div className="text-4xl font-light text-sand mb-4">{step.number}</div>
                <h3 className="text-lg font-light text-charcoal mb-2">{step.title}</h3>
                <p className="text-sm text-stone">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-light text-charcoal mb-20">Por qué elegirnos</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Empresa formal', desc: 'Emitimos facturas y cumplimos regulaciones tributarias' },
              { title: 'Garantía documentada', desc: 'Todas nuestras obras incluyen garantía formal' },
              { title: 'Herramientas profesionales', desc: 'Utilizamos equipos de primer nivel' },
              { title: 'Presupuestos claros', desc: 'Sin sorpresas ni costos ocultos' },
              { title: 'Supervisión permanente', desc: 'Control de calidad en cada etapa' },
              { title: 'Comunicación directa', desc: 'Contacto cercano durante todo el proyecto' },
            ].map((item, idx) => (
              <div key={idx} className="border-t border-stone/20 pt-8">
                <h3 className="text-lg font-light text-charcoal mb-3">{item.title}</h3>
                <p className="text-sm text-stone leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-32 bg-warm">
        <div className="max-w-2xl mx-auto px-8">
          <h2 className="text-5xl font-light text-charcoal mb-6 text-center">Comienza tu proyecto</h2>
          <p className="text-center text-stone mb-16">Nos contactaremos en las próximas 24 horas</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Tu nombre"
                className="w-full bg-transparent border-0 border-b border-charcoal pb-3 text-charcoal placeholder-stone/50 focus:outline-none focus:border-sand transition-colors"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email"
                className="bg-transparent border-0 border-b border-charcoal pb-3 text-charcoal placeholder-stone/50 focus:outline-none focus:border-sand transition-colors"
              />
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Teléfono"
                className="bg-transparent border-0 border-b border-charcoal pb-3 text-charcoal placeholder-stone/50 focus:outline-none focus:border-sand transition-colors"
              />
            </div>

            <div>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Cuéntanos sobre tu proyecto..."
                rows={4}
                className="w-full bg-transparent border-0 border-b border-charcoal pb-3 text-charcoal placeholder-stone/50 focus:outline-none focus:border-sand transition-colors resize-none"
              />
            </div>

            <div className="pt-8">
              <button
                type="submit"
                disabled={loading}
                className="text-xs uppercase tracking-widest text-charcoal border border-charcoal px-8 py-4 hover:bg-charcoal hover:text-cream disabled:opacity-50 transition-all duration-300"
              >
                {loading ? 'Enviando...' : 'Enviar consulta'}
              </button>
            </div>

            {success && <div className="text-sm text-green-600">✓ Consulta enviada correctamente</div>}
            {error && <div className="text-sm text-red-600">✗ Error: {error}</div>}
          </form>
        </div>
      </section>
    </div>
  );
}
