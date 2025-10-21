export default function Services() {
  const services = [
    {
      title: "Derecho Civil",
      description: "Asesoramiento en contratos, herencias, divorcios y otros asuntos civiles.",
      icon: "📋",
    },
    {
      title: "Derecho Mercantil",
      description: "Constitución de empresas, contratos comerciales y asesoría empresarial.",
      icon: "💼",
    },
    {
      title: "Derecho Laboral",
      description: "Defensa de derechos laborales, conflictos con empleadores y negociaciones.",
      icon: "👥",
    },
    {
      title: "Consultoría Legal",
      description: "Asesoramiento preventivo para evitar problemas legales futuros.",
      icon: "🛡️",
    },
    {
      title: "Representación Legal",
      description: "Representación en procesos judiciales y administrativos.",
      icon: "⚖️",
    },
    {
      title: "Mediación",
      description: "Resolución alternativa de conflictos mediante mediación profesional.",
      icon: "🤝",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-balance text-primary">Servicios</h2>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
        Ofrezco una amplia gama de servicios legales adaptados a tus necesidades específicas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-8 bg-card border border-border rounded-xl hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 wood-accent"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-accent transition-colors">
              {service.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
