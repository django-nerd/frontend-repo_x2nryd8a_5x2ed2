export default function Services() {
  const services = [
    {title:'Diseño de Proyectos',desc:'Levantamiento, diseño y planificación de soluciones personalizadas.'},
    {title:'Instalación',desc:'Desde hogares hasta hoteles y edificios comerciales.'},
    {title:'Capacitación',desc:'Sesiones para usuarios clave y administradores.'},
    {title:'Soporte Técnico',desc:'SLA, canales de atención y tiempos de respuesta.'},
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold">Servicios & Soporte</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map(s => (
            <div key={s.title} className="rounded-xl border border-blue-500/20 bg-black/40 p-5">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-blue-200/80 mt-1 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
