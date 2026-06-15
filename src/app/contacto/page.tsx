'use client';

import { useState } from 'react';
import { useContacto } from '@/hooks/useContacto';

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const { enviarContacto, loading, error, success } = useContacto();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await enviarContacto({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      subject: formData.subject,
    });
    if (!error) setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="bg-cream">
      {/* HERO */}
      <section className="py-32 border-b border-stone/10">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-editorial text-7xl font-light text-charcoal mb-8">Contáctanos</h1>
          <p className="text-xl text-stone font-light max-w-2xl">
            Estamos disponibles para responder tus consultas sobre cualquier proyecto
          </p>
        </div>
      </section>

      {/* CONTACTO CHANNELS */}
      <section className="py-32 bg-warm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {[
              { icon: '💬', title: 'WhatsApp', desc: 'Contacto inmediato', link: 'https://wa.me/56995383573' },
              { icon: '✉️', title: 'Email', desc: 'lpsolucionesconstructivas@gmail.com', link: 'mailto:lpsolucionesconstructivas@gmail.com' },
              { icon: '📍', title: 'Ubicación', desc: 'Santiago, Región Metropolitana', link: '#' },
            ].map((channel, idx) => (
              <a key={idx} href={channel.link} target="_blank" rel="noopener noreferrer" className="group">
                <div className="text-5xl mb-6">{channel.icon}</div>
                <h3 className="text-2xl font-light text-charcoal mb-2">{channel.title}</h3>
                <p className="text-stone text-sm group-hover:text-charcoal transition-colors">{channel.desc}</p>
              </a>
            ))}
          </div>

          {/* INFO BOX */}
          <div className="border-t border-stone/20 pt-12">
            <h3 className="text-2xl font-light text-charcoal mb-8">Datos de la empresa</h3>
            <div className="grid md:grid-cols-2 gap-8 text-stone">
              <div>
                <p className="text-sm uppercase tracking-widest mb-2">Nombre Comercial</p>
                <p className="text-lg font-light text-charcoal">LP Construcción</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest mb-2">Nombre Legal</p>
                <p className="text-lg font-light text-charcoal">LP Soluciones Constructivas</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest mb-2">RUT</p>
                <p className="text-lg font-light text-charcoal">78.419.754-9</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest mb-2">Ubicación</p>
                <p className="text-lg font-light text-charcoal">Santiago, Chile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="py-32 bg-cream">
        <div className="max-w-2xl mx-auto px-8">
          <h2 className="text-4xl font-light text-charcoal mb-4 text-center">Envía tu consulta</h2>
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
                placeholder="Tu email"
                className="bg-transparent border-0 border-b border-charcoal pb-3 text-charcoal placeholder-stone/50 focus:outline-none focus:border-sand transition-colors"
              />
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Tu teléfono"
                className="bg-transparent border-0 border-b border-charcoal pb-3 text-charcoal placeholder-stone/50 focus:outline-none focus:border-sand transition-colors"
              />
            </div>

            <div>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Asunto"
                className="w-full bg-transparent border-0 border-b border-charcoal pb-3 text-charcoal placeholder-stone/50 focus:outline-none focus:border-sand transition-colors"
              />
            </div>

            <div>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Cuéntanos sobre tu proyecto..."
                rows={5}
                className="w-full bg-transparent border-0 border-b border-charcoal pb-3 text-charcoal placeholder-stone/50 focus:outline-none focus:border-sand transition-colors resize-none"
              />
            </div>

            <div className="pt-8">
              <button
                type="submit"
                disabled={loading}
                className="text-xs uppercase tracking-widest text-charcoal border border-charcoal px-8 py-4 hover:bg-charcoal hover:text-cream disabled:opacity-50 transition-all duration-300"
              >
                {loading ? 'Enviando...' : 'Enviar Consulta'}
              </button>
            </div>

            {success && <div className="text-sm text-green-700">✓ Consulta enviada. Nos contactaremos pronto.</div>}
            {error && <div className="text-sm text-red-700">✗ Error: {error}</div>}
          </form>
        </div>
      </section>
    </div>
  );
}
