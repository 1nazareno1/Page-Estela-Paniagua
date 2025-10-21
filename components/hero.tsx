export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 px-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl font-bold mb-6 text-balance">Asesoría Legal Profesional</h1>
        <p className="text-xl text-muted-foreground mb-8 text-balance">
          Soluciones legales confiables y personalizadas para tus necesidades
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Consulta Gratis
          </button>
          <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
            Conocer Más
          </button>
        </div>
      </div>
    </section>
  )
}
