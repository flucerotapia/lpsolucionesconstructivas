export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-warm border-t border-stone border-opacity-10 mt-24">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 py-20">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div>
            <div className="mb-8">
              <span className="text-2xl font-light text-charcoal">LP</span>
            </div>
            <p className="text-sm text-stone leading-relaxed">
              Construcción con garantía y atención al detalle.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="text-xs uppercase tracking-widest text-charcoal font-medium mb-8">Explorar</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="/" className="text-stone hover:text-charcoal transition-colors duration-300">Inicio</a></li>
              <li><a href="/servicios" className="text-stone hover:text-charcoal transition-colors duration-300">Servicios</a></li>
              <li><a href="/proyectos" className="text-stone hover:text-charcoal transition-colors duration-300">Proyectos</a></li>
              <li><a href="/nosotros" className="text-stone hover:text-charcoal transition-colors duration-300">Nosotros</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-xs uppercase tracking-widest text-charcoal font-medium mb-8">Contacto</h5>
            <ul className="space-y-4 text-sm text-stone">
              <li>RUT: 78.419.754-9</li>
              <li>Santiago, Chile</li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h5 className="text-xs uppercase tracking-widest text-charcoal font-medium mb-8">Comunicarse</h5>
            <a
              href="https://wa.me/56995383573"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs uppercase tracking-widest text-charcoal border border-charcoal px-6 py-3 hover:bg-charcoal hover:text-cream transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone border-opacity-10 pt-12">
          <p className="text-xs text-stone text-center">
            &copy; {currentYear} LP Construcción. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
