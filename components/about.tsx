export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-balance text-primary">Acerca de mí</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="text-foreground">
            Soy <span className="font-semibold text-primary">Estela Paniagua</span>, abogada con más de 10 años de
            experiencia en asesoría legal. Mi pasión es ayudar a mis clientes a resolver sus problemas legales de manera
            eficiente y profesional.
          </p>

          <p>
            Me especializo en <span className="font-semibold text-accent">derecho civil, mercantil y laboral</span>,
            brindando soluciones personalizadas que se adapten a las necesidades específicas de cada cliente. Creo en la
            importancia de la comunicación clara y la transparencia en todas mis gestiones.
          </p>

          <p>
            Mi objetivo es ser tu aliada de confianza en asuntos legales, proporcionando asesoramiento experto y
            representación profesional cuando la necesites.
          </p>
        </div>

        <div className="rounded-xl overflow-hidden h-fit shadow-lg">
          <img src="/professional-lawyer-woman-portrait.jpg" alt="Estela Paniagua" className="w-full h-96 object-cover" />
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 border border-border">
        <h3 className="text-2xl font-semibold mb-6 text-primary">Mis especialidades</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
            <span className="text-foreground">Derecho Civil</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
            <span className="text-foreground">Derecho Mercantil</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
            <span className="text-foreground">Derecho Laboral</span>
          </div>
        </div>
      </div>
    </section>
  )
}
